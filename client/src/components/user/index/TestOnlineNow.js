import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

class TestOnlineNow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="testOnlineNow" className="test-online-now pt-5">
                <h2 className="text-center text-main-color bg-white">
                    <i className="fas fa-graduation-cap"></i> Đăng kí thi ngay
                </h2>
                <div className="container my-5">
                    <div className="card card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Nếu bạn không có tài khoản, vui lòng <Link to="/user/register">tạo tài khoản</Link> trước khi thi
                            </li>
                            <li className="list-group-item">
                                Nếu bạn đã có tài khoản thì xin vui lòng <Link to="/user/login">đăng nhập</Link> trước khi thi
                            </li>
                            <li className="list-group-item">
                                Nếu bạn đã thực hiện các bước trên, vui lòng vào <Link to="/user/test_online">trang web thi</Link> trước khi thòi gian làm bài bắt đầu
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

TestOnlineNow.propTypes = {};

export default TestOnlineNow;
