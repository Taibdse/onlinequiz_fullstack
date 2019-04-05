import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import AppNavbar from '../../common/navbar/AppNavbar';
import axios from 'axios';

class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: { id: null, questionContent: '', a: '', b: '', c: '', d: '', correctAnswer: 'a' }
        };
    }

    componentDidMount = () => {
        let id = this.props.match.params.questionId;
        let title = 'Them câu hỏi';
        if(id){
            title = 'Cập nhật câu hỏi'
            this.getQuestion(id);
        }
        this.setState({ title })
    }

    getTitle = () => {
        
    }

    getQuestion = async (id) => {
        const res = await axios.post('/api/get_question', { questionId: id });
        const { question } = res.data;
        this.setState({ question });
        console.log(question);
    }

    onChange = (e) => {
        const { name, value } = e.target;
        const question = Object.assign({}, this.state.question);
        question[name] = value;
        this.setState({ question });
    }

    isValidFileExtension = (filename) => {
        let extensions = ['.png', '.jpg', '.jpeg', '.mp3', '.mp4'];
        return extensions.some(ext => {
            return filename.lastIndexOf(ext) === filename.length - ext.length;
        })
    }

    submit = (e) => {
        e.preventDefault();
        let input = document.querySelector('#inputQuestionFileUpload');
        const formData = new FormData();
        let filename = input.value;
        if(this.isValidFileExtension(filename)){
            formData.append('file', input.files[0]);
            const { question } = this.state;
            Object.keys(question).forEach(key => {
                formData.append(key, question[key])
            })
            let url = '/api/add_question';
            if(question.id) url = '/api/update_question';
                
            this.makeRequest(url, formData);
        }
    }

    makeRequest = (url, formData) => {
        axios.post(url, formData, { 
                headers: { 'Content-type': 'multipart/form-data' } 
            }
        )
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    render() {
        let { question, title } = this.state;
        return (
            <React.Fragment>
                <AppNavbar/>
                <Header title={ title }/>
                <section>
                    <div className="container">
                        <div className="filter mt-5">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <form onSubmit={this.submit} encType="multipart/form-data">
                                        <div className="row">
                                            <div className="col-12">
                                                    <div className="form-group">
                                                        <strong>Câu hỏi</strong>
                                                        <textarea 
                                                            className="form-control" 
                                                            rows="4" 
                                                            name="questionContent"
                                                            placeholder="Nhập câu hỏi vào đây..." 
                                                            value={question.questionContent} 
                                                            onChange={this.onChange}>
                                                        </textarea>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <strong>Đáp án A</strong>
                                                        <textarea 
                                                            className="form-control" 
                                                            value={question.a}
                                                            name="a"
                                                            onChange={this.onChange}
                                                            rows="2" 
                                                            placeholder="Nhập đáp án A...">
                                                        </textarea>
                                                    </div>
                                            </div>
                                            <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <strong>Đáp án B</strong>
                                                        <textarea 
                                                            className="form-control" 
                                                            rows="2" 
                                                            value={question.b}
                                                            name="b"
                                                            onChange={this.onChange}
                                                            placeholder="Nhập đáp án B...">
                                                        </textarea>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <strong>Đáp án C</strong>
                                                        <textarea 
                                                            className="form-control" 
                                                            rows="2" 
                                                            value={question.c}
                                                            name="c"
                                                            onChange={this.onChange}
                                                            placeholder="Nhập đáp án C...">
                                                        </textarea>
                                                    </div>
                                            </div>
                                            <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <strong>Đáp án D</strong>
                                                        <textarea 
                                                            className="form-control" 
                                                            rows="2"
                                                            value={question.d}
                                                            name="d"
                                                            onChange={this.onChange} 
                                                            placeholder="Nhập đáp án D...">
                                                        </textarea>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <strong>Chon dap an dung</strong><br/>
                                                A <input type="radio" name="correctAnswer" value="a" onChange={this.onChange} checked={question.correctAnswer === 'a'}/><br/>
                                                B <input type="radio" name="correctAnswer" value="b" onChange={this.onChange} checked={question.correctAnswer === 'b'}/><br/>
                                                C <input type="radio" name="correctAnswer" value="c" onChange={this.onChange} checked={question.correctAnswer === 'c'}/><br/>
                                                D <input type="radio" name="correctAnswer" value="d" onChange={this.onChange} checked={question.correctAnswer === 'd'}/><br/>
                                            </div>
                                            <div className="col-sm-6">
                                                <strong>Chon 1 file dinh kem</strong><br/>
                                                <input type="file" id="inputQuestionFileUpload" /><br/>
                                                <small>Co the là file mp3, mp4, png, jpg, jpeg</small>
                                            </div>
                                        </div>
                                        <button className="btn btn-custom float-right" type="submit">Lưu</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            
            </React.Fragment>
        );
    }
}

EditQuestion.propTypes = {};

export default EditQuestion;
