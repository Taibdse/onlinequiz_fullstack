import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import AppNavbar from '../../common/navbar/AppNavbar';

class ExamManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <React.Fragment>
                <AppNavbar/>
                <Header title='Quản lý đề thi' />

                <section>
                <div className="container">
                    <div className="filter mt-5">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-8">
                                            <h4 className="text-main-color">
                                                <i className="fas fa-filter"></i> Lọc đề thi
                                            </h4>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-custom float-right">Tạo đề thi mới</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                        <div className="col-sm-4 mx-auto">
                                            <strong>theo năm</strong>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-search"></i>
                                                    </span>
                                                </div>
                                                <select name="" className="form-control">
                                                    <option value="">2009</option>
                                                    <option value="">2010</option>
                                                    <option value="">2011</option>
                                                </select>
                                            </div>
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
                                        <th>Đề</th>
                                        <th>Tổng diểm</th>
                                        <th>Thời gian làm</th>
                                        <th>Số câu hỏi</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>100</td>
                                        <td>90p</td>
                                        <td>30</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger">xóa</button>
                                            <button className="btn btn-sm btn-info">cập nhật</button>
                                            <a href="./test_manage.html" className="btn btn-sm btn-warning">Câu hỏi</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>B</td>
                                        <td>200</td>
                                        <td>60p</td>
                                        <td>60</td>
                                        <td>
                                                <button className="btn btn-sm btn-danger">xóa</button>
                                                <button className="btn btn-sm btn-info">cập nhật</button>
                                                <a href="./test_manage.html" className="btn btn-sm btn-warning">Câu hỏi</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    
                </div>
                </section>
                    
           </React.Fragment>
        );
    }
}

ExamManagement.propTypes = {};

export default ExamManagement;
