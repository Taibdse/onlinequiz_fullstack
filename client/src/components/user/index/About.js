import React from 'react';
import PropTypes from 'prop-types';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="about" className="about pt-5">
                <h2 className="text-center text-main-color bg-white">
                <i className="fas fa-graduation-cap"></i> Về cuộc thi
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-body">
                                <p>
                                    Phần mềm này ra đời nhằm đáp ứng cho nhu cầu thi cử của nhân dan Đại Việt trong việc tiết kiệm thờ giani,
                                    công sức, tiền bạc cho những thí sinh xa nơi dự thi. Phần mềm này là ý tưởng của nhà vua và các quan triều đình
                                    đặc biệt là Lương Thế Vinh. Và kể từ nay người người
                                    có thể tham gia cuộc thi Hương tại bất cứ nơi đâu, đem tài năng của mình ra cống hiến
                                    cho đất nước.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

About.propTypes = {};

export default About;
