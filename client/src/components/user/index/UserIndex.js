import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import GoldenBoard from './GoldenBoard';
import About from './About';
import ContestInfo from './ContestInfo';
import TestOnlineNow from './TestOnlineNow';
import AppNavbar from '../../common/navbar/AppNavbar';
import styled from 'styled-components';

const Wrapper = styled.div`
    body{
        background-color: rgba(0, 0, 0, 0.1);
    }
    header {
        height: 500px;
        background-image: url('/assets/images/crossword-eyeglasses-eyewear-53209.jpg');
        background-size: 100% 100%;
        background-attachment: fixed;
        text-align: center;
        color: #fff !important;
        position: relative;
        margin-top: 60px;
    }

    header>div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    header .overlay {
        background-color: rgba(0, 0, 0, 0.3);
    }

    header .trust-quality {
        border: 5px solid var(--main-color);
        padding: 20px;
        font-size: 2em;
        display: inline-block;
        margin-top: 2em;
    }

    header h2 {
        color: #fff;
        margin-top: 1.5em;
    }

    header p {
        color: #fff !important;
        margin-top: 2em;
    }

    header a {
        color: #fff;
        font-size: 1.2em;
        background-color: var(--main-color);
        display: inline-block;
        padding: 10px 30px;
        border-radius: 20px;
        text-decoration: none;
    }

    header a:hover {
        text-decoration: none;
        color: #fff;
    }

    .golden-board .card-candidate {
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;
    }

    .card-candidate .card-header {
        padding: 0;
        max-height: 400px;
        background-color: orange;
        overflow: hidden;
    }

    .golden-board .card-candidate img {
        transition: all 0.3s ease-in-out;
    }

    .golden-board .card-candidate:hover img {
        transform: scale(1.2);
    }

    .golden-board .card-candidate .card-body {
        padding-top: 10px;
    }
`;

class UserIndex extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const $ = window.$;
        $('.navbar a, header a').click(function(){
            let hash = $(this).attr('href');
            if(hash[0] === '#'){
                let pos = $(hash).offset().top;
                $('body, html').animate({ scrollTop: pos })
                window.location.hash = hash;
            }
        })

        $('body').css({
            'background-color': 'rgba(0, 0, 0, 0.1)'
        })
    }

    render() {
        return (
            <Wrapper>
                <AppNavbar/>
                <Header/>
                <About/>
                <GoldenBoard/>
                <ContestInfo/>
                <TestOnlineNow/>
            </Wrapper>
        );
    }
}

export default UserIndex;
