import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowNavbar: true,
            isRouteAdmin: true
        };
        this.props.history.listen(({pathname}) => {
            let isRouteAdmin = pathname.indexOf('/admin') > -1;
            this.setState({ isRouteAdmin })
        });
    }

    componentDidMount = () => {
        let isRouteAdmin = this.isRouteAdmin();
        this.setState({ isRouteAdmin })
    }

    isRouteAdmin = () => this.props.location.pathname.indexOf('/admin') > -1;

    renderUserNavbar = () => {
        return (
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home" className="text-main-color">ONLINEQUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Trang chủ</Nav.Link>
                        <Nav.Link href="#about">Về cuộc thi</Nav.Link>
                        <Nav.Link href="#contestInfo">Thông tin cuộc thi</Nav.Link>
                        <Nav.Link href="#goldenBoard">Bảng vàng</Nav.Link>
                        <Nav.Link href="#testOnlineNow">Thi ngay</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className="btn-custom" href="./login.html">Đăng nhập</Nav.Link>
                        <Nav.Link className="btn-custom" href="./register.html">Đăng kí</Nav.Link>
                        <Nav.Link className="btn-custom" href="./test_result.html">Xem kết quả bài làm</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    renderAdminNavbar = () => {
        return (
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home" className="text-main-color">ONLINEQUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/candidate_manage">Quản lý thí sinh</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/exam_manage">Quản lý kì thi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/test_manage">Quản lý đề thi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/questions_bank">Ngân hàng câu hỏi</Link>
                        </li>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className="btn-custom" href="/admin/login">Đăng xuất</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    render() {
        let { isRouteAdmin } = this.state;
        return (
            <React.Fragment>
                { isRouteAdmin ? this.renderAdminNavbar() : this.renderUserNavbar() }
            </React.Fragment>
        );
    }
}

AppNavbar.propTypes = {};

export default withRouter(AppNavbar);
