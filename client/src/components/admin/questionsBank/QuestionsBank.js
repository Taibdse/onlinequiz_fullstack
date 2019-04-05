import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import AppNavbar from '../../common/navbar/AppNavbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class QuestionsBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        };
    }

    componentDidMount = () => {
        this.getQuestions();
    }

    getQuestions = async () => {
        const res = await axios.post('/api/questions')
        this.setState({ questions: res.data.data })
    }

    delete = (id) => {
        let sure = window.confirm('Ban co chac khong?');
        if(sure){
            axios.post('/api/delete_question', { questionId: id })
            .then(res => {
                let { success } = res.data;
                if(success){
                    alert('Xoa thanh cong');
                    this.getQuestions();
                }
            })
        }
    }

    renderTableQuestions = (questions) => {
        return (
            <table className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Câu hỏi</th>
                        <th>Đáp án đúng</th>
                        <th>Đáp án A</th>
                        <th>Đáp án B</th>
                        <th>Đáp án C</th>
                        <th>Đáp án D</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map((q, index) => (
                            <tr key={q.id}>
                                <td>{ index + 1 }</td>
                                <td>{ q.questionContent }</td>
                                <td>{ q.correctAnswer }</td>
                                <td>{ q.a }</td>
                                <td>{ q.b }</td>
                                <td>{ q.c }</td>
                                <td>{ q.d }</td>
                                <td>
                                    <button className="btn btn-sm btn-danger">xóa</button>
                                    <Link className="btn btn-sm btn-info" to={`/admin/questions_bank/edit/${q.id}`}>cập nhật</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                        
        )
    }

    render() {
        const { questions } = this.state;
        return (
            <React.Fragment>
                <AppNavbar/>
                <Header title='Ngân hàng câu hỏi' />

                <section>
                    <div className="container">
                        <div className="filter mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-8">
                                            <h4 className="text-main-color">
                                                <i className="fas fa-filter"></i> Tìm kiếm theo từ khóa
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <a className="btn btn-custom float-right" href="./create_question.html">Tao câu hỏi mới</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6 mx-auto">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Nhập thông tin câu hỏi... "/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-success">Tìm kiếm</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive my-5">
                            { this.renderTableQuestions(questions) }
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        );
    }
}

QuestionsBank.propTypes = {};

export default QuestionsBank;
