import React from 'react';
import PropTypes from 'prop-types';
import moduleName from '../../../stylesheets/questions_answers.css';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
    header{
        height: 60vh;
        text-align: center;
        padding-top: 20vh;
        background-image: url('../../images/book-books-bookshelf-159621.jpg');
        background-size: 100% 100%;
        color: #fff;
    }

    header a{
        padding: 10px 20px;
        background-color: lightseagreen;
        color: #fff;
        margin-top: 20px;
        display: inline-block;
        border-radius: 20px;
        text-decoration: none;
    }

    header a:hover{
        color: #fff;
        text-decoration: none;
    }

    .correct-answer-index, .correct-answer, .correct-answer-badge{
        background-color: lightseagreen!important;
        color: #fff;
    }

    .incorrect-answer-index, .selected-incorrect-answer, .incorrect-answer-badge{
        background-color: lightcoral!important;
        color: #fff;
    }
`

class CandidateTestResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getCandidate = () => {
        axios.post('/api/')
    }

    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <header>
                        <h2 class="text-center text-white">Kết quả thi và đáp án đúng</h2>
                        <a href="./dashboard.html">Quay lại trang chủ</a>
                    </header>
                    <div class="container-fluid">
                        <div class="scrollTop">
                            <i class="fas fa-chevron-up"></i>
                        </div> 
                    </div>
                </Wrapper>
            </React.Fragment>
        );
    }
}

CandidateTestResult.propTypes = {};

export default CandidateTestResult;
