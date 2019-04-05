import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header id="home" className="home">
                <div className="overlay"></div>
                <div className="content">
                    <div className="trust-quality">
                        CUỘC THI HƯƠNG ONLINE
                    </div>
                    <h2 className="">Hiền tài là nguyên khí quốc gia</h2>
                    <p className="">Cuộc thi nhằm tìm kiếm những con người vừa có đức có tài để phụng sự cho quốc gia</p>
                    <a href="#contestInfo" >Xem thông tin kì thi</a>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
