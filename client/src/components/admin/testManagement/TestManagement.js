import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import AppNavbar from '../../common/navbar/AppNavbar';

class TestManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <AppNavbar/>
                <Header title='Quản lý câu hỏi đề thi' />

                <section>
                    <div className="container-fluid">
                        <div className="filter mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-main-color">
                                        <i className="fas fa-filter"></i> Lọc theo đề thi qua các năm
                                        </h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                            <div className="col-sm-4">
                                                <strong>theo năm</strong>
                                                <select name="" className="form-control">
                                                    <option value="">2009</option>
                                                    <option value="">2010</option>
                                                    <option value="">2011</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <strong>theo đề</strong>
                                                <select name="" className="form-control">
                                                    <option value="">De A</option>
                                                    <option value="">De B</option>
                                                    <option value="">De C</option>
                                                </select>
                                            </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                                <button className="btn btn-custom float-right">Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive my-5">
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
                                        <tr>
                                            <td>1</td>
                                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti?</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>Lorem ipsum dolor.</td>
                                            <td>Lorem ipsum sit.</td>
                                            <td>Lorem dolor sit.</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger">xóa</button>
                                                <a className="btn btn-sm btn-info" href="./edit_question.html">cập nhật</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti?</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>Lorem ipsum dolor.</td>
                                            <td>Lorem ipsum sit.</td>
                                            <td>Lorem dolor sit.</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger">xóa</button>
                                                <a className="btn btn-sm btn-info" href="./edit_question.html">cập nhật</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, corrupti?</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>Lorem ipsum dolor.</td>
                                            <td>Lorem ipsum sit.</td>
                                            <td>Lorem dolor sit.</td>
                                            <td>Ipsum dolor sit.</td>
                                            <td>
                                                    <button className="btn btn-sm btn-danger">xóa</button>
                                                    <a className="btn btn-sm btn-info" href="./edit_question.html">cập nhật</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className="mt-3">
                                <div className="row" >
                                    <div className="col-md-4 offset-md-8">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </section>
                        
            </React.Fragment>
        );
    }
}

TestManagement.propTypes = {};

export default TestManagement;
