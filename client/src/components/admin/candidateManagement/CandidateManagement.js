import React from 'react';
import PropTypes from 'prop-types';
import '../../../stylesheets/admin_main.css';
import AppNavbar from '../../common/navbar/AppNavbar';
import Header from '../header/Header';
import axios from 'axios';
import Pagination from "react-js-pagination";

class CandidateManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            activePage: 0
        };
    }

    componentDidMount = () => {
        this.getCandidates();
    }

    getCandidates = async () => {
        const res = await axios.post('/api/get_candidates')
        const { candidates } = res.data;
        this.setState({ candidates });
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    delete = (id) => {
        axios.post('/api/delete_candidate', { candidateId: id })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    render() {
        const { candidates } = this.state;

        return (
            <React.Fragment>
                <AppNavbar/>
                <Header title='Quản lý thí sinh' />
                <section>
                    <div className="container-fluid">
                        <div className="filter mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-main-color">
                                        <i className="fas fa-filter"></i> Lọc thí sinh
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
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong>theo tên</strong>
                                            <input type="text" className="form-control" placeholder="Nhap ten can tim"/>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>theo mã đề</strong>
                                            <select name="" className="form-control">
                                                <option value="">Tất cả</option>
                                                <option value="">Đề 1</option>
                                                <option value="">Đề 2</option>
                                                <option value="">Đề 3</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4"></div>
                                        
                                    </div>
                                    <div className="row mt-3">
                                            <div className="col-sm-6">
                                                <strong>theo khoảng điểm</strong>
                                                <div className="row">
                                                    <div className="col-6 pr-1">
                                                        <input type="text" className="form-control" placeholder="Diem thap"/>
                                                    </div>
                                                    <div className="col-6 pl-1">
                                                        <input type="text" className="form-control" placeholder="Diem cao"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <strong>theo khoảng thời gian làm bài</strong>
                                                <div className="row">
                                                    <div className="col-6 pr-1">
                                                        <input type="text" className="form-control" placeholder="HH:mm"/>
                                                    </div>
                                                    <div className="col-6 pl-1">
                                                        <input type="datetime" className="form-control" placeholder="HH:mm"/>
                                                    </div>
                                                </div>
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
                        <div className="table-responsive mt-5">
                                <table className="table table-striped table-hover table-condensed">
                                    <thead>
                                        <tr>
                                            <th>*</th>
                                            <th>
                                                Thí sinh
                                                <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>Địa chỉ</th>
                                            <th>Email</th>
                                            <th>SDT</th>
                                            {/* <th>
                                                Diểm thi
                                                <i className="fas fa-arrow-down"></i>
                                            </th>
                                            <th>
                                                Thời gian thi
                                                <i className="fas fa-arrow-up"></i>
                                            </th>
                                            <th>Má đề</th> */}
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            candidates.map((can, index) => (
                                                <tr key={can.id}>
                                                    <td>{ index + 1 }</td>
                                                    <td>{ can.username }</td>
                                                    <td>{ can.address }</td>
                                                    <td>{ can.email }</td>
                                                    <td>{ can.phone }</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-danger" onClick={() => this.delete(can.id)}>xóa</button>
                                                        <button className="btn btn-sm btn-info">cập nhật</button>
                                                        <a className="btn btn-sm btn-warning" href="/admin/candidate_manage">xem kết bài thi</a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                        </div>
                        <div className="mt-4">
                            {/* <nav aria-label="Page navigation example">
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
                            </nav> */}
                           <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={candidates.length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

CandidateManagement.propTypes = {};

export default CandidateManagement;
