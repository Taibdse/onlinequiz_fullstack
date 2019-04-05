import React from 'react';
import PropTypes from 'prop-types';

class ContestInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="contestInfo" className="quiz-online-format pt-5">
                <h2 className="text-center text-main-color bg-white">
                    <i className="fas fa-graduation-cap"></i> Thông tin cuộc thi
                </h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-body">
                                <p>
                                    Hình thức thi trắc nghiệm
                                    với 4 đá pán A,B,C,D. Người dân muốn dự thi sẽ đăng kí tài khoản, sau đó đăng nhập
                                    vào trang web cuộc thi.Sẽ có nhiều đề thi, thí sinh chỉ được chọn một đề để tiến hành
                                    phần thi của mình. Dạng câu hỏi và câu trả lời trong đề thi có thể ở dạng chữ, âm
                                    thanh, phim, hình ảnh. Sau phần làm bài thi, thí sinh có thể xem lại kết quả thi các
                                    mình, các câu đúng, các câu sai và đáp án đúng, tổng thời gian làm bài. Bảng vàng sẽ
                                    được hiển thị công khai, minh bạch trên trang nhất của cuộc thi, chứa danh sách các
                                    thí sinh điểm cao nhất đã được triều đình công nhận và chuẩn bị nhận chức.
                                </p>
                            </div>

                            <div className="card card-body mt-3">
                                <div>
                                    <strong>Thời gian dự thi: </strong> <span>09h30p 20/10/2019</span>
                                </div>
                                <div>
                                    <strong>Thời gian làm bài: </strong> <span>90p</span>
                                </div>
                                <div>
                                    <strong>Lĩnh vực kiến thức: </strong> <span>KHTN (Toán, lí, hóa, sinh, thiên văn học), KHXH (Văn, Sử, Địa), Lập trình (Java, .NET, Nodejs, PHP)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

ContestInfo.propTypes = {};

export default ContestInfo;
