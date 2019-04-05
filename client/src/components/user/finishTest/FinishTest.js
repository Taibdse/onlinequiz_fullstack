import React from 'react';
import PropTypes from 'prop-types';
// import './finishTest.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    header {
        height: 100vh;
        background-image: url('/assets/images/book-books-bookshelf-159621.jpg');
        background-size: 100% 100%;
        padding-top: 35vh;
        text-align: center;
    }

    header a {
        padding: 10px 20px;
        background-color: lightseagreen;
        color: #fff;
        margin-top: 20px;
        display: inline-block;
        border-radius: 20px;
        text-decoration: none;
    }

    header a:hover {
        color: #fff;
        text-decoration: none;
    }
`;


class FinishTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Wrapper>
                <header>
                    <h2 class="text-center text-white">Chúc mừng bạn đã hoàn thành bài thi</h2>
                    <a href="/user">Quay lại trang chủ</a>
                </header>
            </Wrapper>
        );
    }
}

FinishTest.propTypes = {};

export default FinishTest;
