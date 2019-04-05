const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const uuid = require('uuid');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

function createFakeQuestionsBank(){
    const questions = [];
    const abcd = ['a', 'b', 'c', 'd'];

    function randomABCD(){
        const index = Math.floor(Math.random() * 4);
        return abcd[index];
    }

    for(let i = 0; i < 100; i++){
        const question = { 
            id: uuid.v4(),
            questionContent: faker.lorem.sentences(),
            a: faker.lorem.words(), 
            b: faker.lorem.words(), 
            c: faker.lorem.words(), 
            d: faker.lorem.words(), 
            correctAnswer: randomABCD(),
            image: '',
            video: '',
            audio: '',
        }
        questions.push(question);
    }
    return questions;
}

function createFakeCandidates(){
    let usernames = ['ductai', 'dinhphu', 'ducthanh', 'quangcuong'];
    const users = [];
    for(let i = 0; i < 4; i++){
        const user = {
            id: uuid.v4(),
            username: usernames[i],
            password: '123456',
            phone: faker.phone.phoneNumber(),
            email: usernames[i] + '@gmail.com',
            address: faker.address.country(),
            results: []
        }
        console.log('User id: ' + user.id);
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(user.password, salt, (err, hash) => {
        //         if (err) throw err;
        //         user.password = hash;
        //         users.push(user);
        //     });
        // });
        users.push(user);
    }
    return users;
}

function createFakeTestForExam(){
    const questions = [];
    const indeces = [];
    const l = questionsBank.length;

    function isExisted(arr, ele){
        return arr.some(item => item === ele);
    }

    for(let i = 0; i < 30; i++){
        let index;
        do{
            index = Math.floor(Math.random() * l);
        }while(isExisted(indeces, index));
        const question = Object.assign({}, questionsBank[index]);
        delete question.correctAnswer;
        questions.push(question);
        indeces.push(index);
    }
    return questions;
}

function isCorrectAnswer(questionId, selectedAnswer){
    let ques = questionsBank.find(q => q.id === questionId);
    return ques.correctAnswer === selectedAnswer;
}

function isEmpty(val){
    if(val === null || val === undefined || val === false) return true;
    if(typeof val === 'string' && val.trim() === '') return true;
    if(typeof val === 'object' && Object.keys(val).length === 0) return true;
    return false;
}

function isTimeOver(startTime, endTime){
    return Math.floor((endTime - startTime)/1000) > 90*60;
}

const questionsBank = createFakeQuestionsBank();
const candidates = createFakeCandidates();
const test = createFakeTestForExam();

// questionsBank.forEach(ques => console.log(ques.a + '\n'));

app.post('/api/get_test', (req, res) => {
    const { userId } = req.body;
    const candidate = candidates.find(u => u.id === userId);
    candidate.startTime = Date.now();
    res.status(200).json({ data: test, success: true });
})

app.post('/api/questions', (req, res) => {
    res.json({ success: true, data: questionsBank });
})

app.post('/api/get_question', (req, res) => {
    let { questionId } = req.body;
    let question = questionsBank.find(q => q.id === questionId);
    res.json({ success: true, question });
})

app.post('/api/update_question', (req, res) => {
    console.log(req.body);
})

app.post('/api/add_question', (req, res) => {
    console.log(req.body);
})

app.post('/api/get_candidates', (req, res) => {
    res.json({ success: true, candidates: candidates });
})

app.get('/api/userId', (req, res) => {
    return res.json({ userId: candidates[0].id });
})

app.post('/api/submit_questions', (req, res) => {
    const { candidateTest, userId } = req.body;
    const user = candidates.find(u => u.id === userId);
    user.endTime = Date.now();
    let timeout = isTimeOver(user.startTime, user.endTime);
    if(!timeout){
        res.json({ success: true });
        candidateTest.forEach(ques => {
            const { id, selectedAnswer } = ques;
            user.results.push({ 
                questionId: id, 
                selectedAnswer, 
                isCorrect: isCorrectAnswer(id, selectedAnswer) 
            })    
        })
    } else {
        res.json({ success: false });
    }
})

app.post('/api/get_test_result', (req, res) => {
    const { userId } = req.body;
    const user = candidates.find(u => u.id === userId);
    const results = user.results.map(result => {
        result.question = questionsBank.find(q => q.id === result.questionId);
        return result;
    })
    return res.status(200).json({ success: true, data: results });
})

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));