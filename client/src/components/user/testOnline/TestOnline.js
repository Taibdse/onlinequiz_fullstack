import React from 'react';
import PropTypes from 'prop-types';
import '../../../stylesheets/questions_answers.css';
// import './testOnline.css';
import axios from 'axios';
import classnames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
    body{
        background-color: rgba(0,0,0,0.2);
        font-family: 'Roboto', sans-serif;
    }

    header{
        height: 60vh;
        background-image: url('/assets/images/book-books-bookshelf-159621.jpg');
        background-size: 100% 100% ;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    header .time-remaining{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .next-prev-questions-section .btn{
        border-radius: 20px;
        border: 1px solid lightseagreen;
        color: lightseagreen;
        transition: all 0.3s;
        box-shadow: none;
    }

    .next-prev-questions-section .btn:focus{
        outline: none!important;
    }

    .next-prev-questions-section .btn:hover, .next-prev-questions-section .btn:focus{
        color: #fff;
        background-color: lightseagreen!important;
        box-shadow: none;
        outline: none!important;
    }

    .time-remaining .unit-time{
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 15px;
        cursor: pointer;
        text-align: center;
        background-color: rgba(0,0,0,0.3);
        color: #fff;
        width: 100px;
        margin-right: 15px;
    }

    .time-remaining .unit-time:last-child{
        margin-right: 0;
    }

    .unit-time .hour, .unit-time .minute, .unit-time .second{
        font-size: 1.6em;
    }

`

class TestOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: 0,
            questions: [],
            numOfQuestionsPerPage: 5,
            startIndex: 0,
            userId: null
        };
    }

    componentDidMount = async () => {
        this.setState({ timeRemaining: 90*60 });
        this.bindEventScrollTop();
        await this.getQuestions(() => {
            window.setInterval(this.setTimeRemaining, 1000);
        });
    }

    bindEventScrollTop = () => {
        const $ = window.$;

        $('.scrollTop').fadeOut(0);
        
        $('.scrollTop').click(() => {
            $('html, body').animate({ scrollTop: 0 }, 300);
        })

        $(window).scroll(() => {
            if($(window).scrollTop() > 400) $('.scrollTop').fadeIn();
            else $('.scrollTop').fadeOut();
        })
    }

    componentDidUpdate = () => {
        // console.log('component did update'); 
    }

    getQuestions = async (cb) => {
        const userId = await this.getUserId();
        this.setState({ userId });
        const res = await axios.post('/api/get_test', { userId })
        const questions = res.data.data.map(q => Object.assign({}, q, { selectedAnswer: '' }))
        console.log(questions);
        this.setState({ questions }, cb);
    }

    getUserId = async () => {
        const res = await axios.get('/api/userId')
        return res.data.userId;
    }

    setTimeRemaining = () => {
        const { timeRemaining } = this.state;
        if(timeRemaining - 1 > 0){
            this.setState({ timeRemaining: timeRemaining - 1 });
        } else {
            alert('Time out!!');
        }
    }

    getTimeRemain = (timestamp) => {
        const h = Math.floor(timestamp/3600);
        const m = Math.floor((timestamp - h*3600)/60);
        const s = timestamp - h*3600 - m*60;
        const hour = h > 10 ? h : '0' + h;  
        const min = m > 10 ? m : '0' + m;  
        const sec = s > 10 ? s : '0' + s; 
        return { hour, min, sec };
    }

    renderQuestionContent = (q) => {
        const { image, audio, video, questionContent } = q;

        if(image !== '') return (
            <div className="question">
                <div className="row">
                    <div className="col-md-5 pr-2">
                        <img src={image} alt="Question" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 pl-2">
                        <p>{ questionContent }</p>
                    </div>
                </div>
            </div>
        )

        if(audio !== '') return ( 
            <div className="row">
                <div className="col-md-5">
                        <audio controls style={{ width: '100%' }}>
                            <source src={audio} type="audio/ogg"/>
                            <source src={audio} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>
                </div>
                <div className="col-md-7">
                    <p>{ questionContent }</p>
                </div>
            </div>
        )

        if(video !== '') return (
            <div className="row">
                <div className="col-md-7">
                        <iframe style={{ width: '100%', height: "330px" }}  src={video} frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-5">
                    <p>{ questionContent }</p>
                </div>
            </div>
        )

        return (
            <p>{ questionContent }</p>
        )
    }

    selectAnswer = (questionId, selectedAnswer) => {
        const questions = this.state.questions.map(q => q.id === questionId ? Object.assign({}, q, { selectedAnswer }) : q);
        this.setState({ questions });
    }

    renderAnswerOptions = (q) => {
        const { a, b, c, d, selectedAnswer, id } = q;

        return (
            <div className="row answers">
                <div className="col-md-6 pr-md-2">
                    <div className={classnames('answer', { 'selected-answer': selectedAnswer === 'a' })} onClick={() => this.selectAnswer(id, 'a')}>
                        <strong>A.</strong> { a }
                    </div>
                </div>
                <div className="col-md-6 pl-md-2">
                    <div className={classnames('answer', { 'selected-answer': selectedAnswer === 'b' })} onClick={() => this.selectAnswer(id, 'b')}>
                        <strong>B.</strong> { b }
                    </div>
                </div>
                <div className="col-md-6 pr-md-2">
                    <div className={classnames('answer', { 'selected-answer': selectedAnswer === 'c' })} onClick={() => this.selectAnswer(id, 'c')}>
                        <strong>C.</strong> { c }
                    </div>
                </div>
                <div className="col-md-6 pl-md-2">
                    <div className={classnames('answer', { 'selected-answer': selectedAnswer === 'd' })} onClick={() => this.selectAnswer(id, 'd')}>
                        <strong>D.</strong> { d }
                    </div>
                </div>
            </div>
        )
    }

    renderNextPrevSection = () => {
        const { questions, startIndex, numOfQuestionsPerPage } = this.state;
        if(questions.length > 0) return (
            <section className="next-prev-questions-section" style={{ marginBottom: '150px' }}>
                    { startIndex < (this.state.questions.length - numOfQuestionsPerPage) && (
                        <button className="btn btn-outline-success float-right" onClick={this.nextPage}>
                            Next questions <i className="fas fa-angle-double-right"></i> 
                        </button>) 
                    }
                    { startIndex > 0 && (
                        <button className="btn btn-outline-success float-right mr-sm-3" onClick={this.prevPage}>
                            <i className="fas fa-angle-double-left"></i> Previous questions
                        </button>)
                    }
            </section>
        )
    }

    nextPage = () => {
        let { startIndex, questions, numOfQuestionsPerPage } = this.state;
        if(startIndex < questions.length - numOfQuestionsPerPage) this.setState({ startIndex: startIndex + numOfQuestionsPerPage })
    }

    prevPage = () => {
        let { startIndex, numOfQuestionsPerPage } = this.state;
        if(startIndex > 0) this.setState({ startIndex: startIndex - numOfQuestionsPerPage })
    }

    submit = () => {
        console.log('submitted');
        const { userId, questions } = this.state;
        const candidateTest = questions.map(q => {
            let { selectAnswer, id } = q;
            return { selectAnswer, id };
        })
        axios.post('/api/submit_questions', { userId, candidateTest })
        .then(res => {
            const { success } = res.data;
            if(success) {
                alert('Nop bai thanh cong');
                this.props.history.push('/user/')
            }
        })
        .catch(err => console.log(err));
    }

    moveToSpecificQuestion = (index) => {
        const { numOfQuestionsPerPage } = this.state;
        let startIndex = Math.floor(index/numOfQuestionsPerPage)*numOfQuestionsPerPage;
        this.setState({ startIndex }, () => {
            let $ = window.$;
            let i = index - startIndex;
            let top = $('.card.card-question').eq(i).offset().top - 70;
            $('html, body').animate({ scrollTop: top }, 200);
        });
    }

    render() {

        const { timeRemaining, startIndex, numOfQuestionsPerPage } = this.state;
        const { hour, min, sec } =  this.getTimeRemain(timeRemaining);
        const questions = this.state.questions.filter((q, index) => index >= startIndex && index < startIndex + numOfQuestionsPerPage);
        
        return (
            <Wrapper>
                <header>
                    <div className="row time-remaining">
                        <div className="unit-time">
                            <div className="hour">{ hour }</div>
                            <span className="font-italic">Hours</span>
                        </div>
                        <div className="unit-time">
                            <div className="minute">{ min }</div> 
                            <span className="font-italic">Minutes</span>
                        </div>
                        <div className="unit-time">
                            <div className="second">{ sec }</div> 
                            <span className="font-italic">Seconds</span>
                        </div>
                    </div>
                </header>

                <div className="container-fluid">
                    <section className="online-quiz-area">
                        <div className="row">
                            <div className="col-sm-3 pt-3">
                                <div className="question-indexes">
                                    { this.state.questions.map((q, index) => (
                                        <span key={index} onClick={() => this.moveToSpecificQuestion(index)} className={classnames('question-index', { 'answered-question-index': q.selectedAnswer !== '' })}>{ index + 1 }</span>
                                    )) }
                                </div>
                                <br/>
                                <span className="question-index answered-question-index">...</span> Đã trả lời <br/>
                                <span className="question-index">...</span> Chưa trả lời <br/><br/>
                                <button className="btn btn-success" id="btnSubmit" onClick={this.submit}>Nộp bài</button>
                            </div>
                            <div className="col-sm-9 pt-3 questions-area">
                                {
                                    questions.map((q, index) => (
                                        <div className="card card-question" key={q.id}>
                                            <div className={classnames('card-question-index', 'badge', 'badge-secondary', {'answered-badge': q.selectedAnswer !== ''})}>{ index + 1 + startIndex }</div>
                                            <div className="card-header">
                                                { this.renderQuestionContent(q) }
                                            </div>
                                            <div className="card-body">
                                                { this.renderAnswerOptions(q) }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    { this.renderNextPrevSection() }

                    <div className="scrollTop">
                        <i className="fas fa-chevron-up"></i>
                    </div> 
                </div>
            </Wrapper>
        );
    }
}

TestOnline.propTypes = {};

export default TestOnline;
