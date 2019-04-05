import React from 'react';
import PropTypes from 'prop-types';

class GoldenBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="goldenBoard" className="golden-board pt-5">
                <h2 className="text-center text-main-color bg-white">
                    <i className="fas fa-graduation-cap"></i> Bảng vàng qua từng năm
                </h2>
                <div className="container mt-5">
                        <div className="row mb-3">
                            <div className="col-sm-6 mx-auto">
                                <div className="card card-body">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-user-graduate"></i>
                                            </span>
                                        </div>
                                        <select id="" className="form-control">
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                        </select>
                                        <div className="input-group-append">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-danger card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/img_avatar.png" className="card-img-top" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Bui Duc Tai</h5>
                                        <p className="card-text text-white">
                                            <span>Thu khoa ki thi Huong nam 2019</span><br/>
                                            <span>Diem thi: 9</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-warning card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar2.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Nguyen Dinh Trong</h5>
                                        <p className="card-text text-white">
                                            <span>A khoa ki thi Huong nam 2019</span><br/>
                                            <span>Diem thi: 10</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-warning card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar3.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Luong Xuan Truong</h5>
                                        <p className="card-text text-white">
                                            <span>Top 4 ki thi Huong nam 2019</span> <br/>
                                            <span>Diem thi: 9.5</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-primary card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar3.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Ha Duc Chinh</h5>
                                        <p className="card-text text-white">
                                            <span>Top 4 ki thi Huong nam 2019</span> <br/>
                                            <span>Diem thi: 9.5</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-primary card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar3.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Nguyen Quang Hai</h5>
                                        <p className="card-text text-white">
                                            <span>Top 4 ki thi Huong nam 2019</span> <br/>
                                            <span>Diem thi: 9.5</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-primary card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar3.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Nguyen Cong Phuong</h5>
                                        <p className="card-text text-white">
                                            <span>Top 4 ki thi Huong nam 2019</span> <br/>
                                            <span>Diem thi: 9.5</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="card text-white bg-primary card-candidate">
                                    <div className="card-header">
                                        <img src="/assets/images/avatar3.png" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Dang Van Lam</h5>
                                        <p className="card-text text-white">
                                            <span>Top 4 ki thi Huong nam 2019</span> <br/>
                                            <span>Diem thi: 9.5</span><br/>
                                            <span>Thoi gian lam: 30p 30ps</span>
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}

GoldenBoard.propTypes = {};

export default GoldenBoard;
