import style from './index.module.scss'
import { news } from '../../../data/index.js';
import { routes } from '../../../config/routes.js';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiHatenabookmark } from "react-icons/si";
import { FaGetPocket } from "react-icons/fa6";
import { IoLogoRss } from "react-icons/io5";
import { SiFeedly } from "react-icons/si";
import { IoLogoPinterest } from "react-icons/io5";
import { getDict } from '../../../services/dict.js';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { BsHourglassSplit } from "react-icons/bs";
function Jobs() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Quản Lý Spa - Giao Tiếp Tiếng Anh Tốt",
            description: `Tổ chức và giám sát các dịch vụ spa, bao gồm chăm sóc da, mát-xa, làm đẹp, vv
            Đảm bảo rằng mọi hoạt động diễn ra theo chuẩn mực chất lượng và dịch vụ
            Quản lý đội ngũ nhân viên spa, tạo môi trường làm việc tích cực và động viên đội ngũ nhân viên
            Theo dõi và quản lý ngân sách của Spa, phân tích và báo cáo về hiệu suất tài chính
            Đảm bảo mọi khách hàng được phục vụ tốt nhất và có trải nghiệm thoải mái và thư giãn.
            Xử lý mọi phản hồi và khiếu nại của khách hàng một cách chuyên nghiệp và kịp thời.
            Xây dựng và duy trì mối quan hệ với khách hàng tiềm năng thông qua các hoạt động quảng bá.
            Đảm bảo rằng các thiết bị và cơ sở vật chất của Spa được bảo trì và vận hành đúng cách.
            Xác định và giải quyết các vấn đề kỹ thuật một cách nhanh chóng và hiệu quả.
            Đảm bảo rằng mọi hoạt động của Spa tuân thủ các quy định pháp luật liên quan đến ngành Spa và sức khỏe cộng đồng.`,
            requirement: `Kinh nghiệm từ 3 năm trong quản lý hoạt động của spa hoặc trong ngành làm đẹp. Ưu tiên ứng viên đã quản lý spa trong khách sạn từ 4 sao hoặc resort
            Kiến thức vững vàng về các dịch vụ spa và sản phẩm làm đẹp.
            Kỹ năng lãnh đạo và quản lý nhóm tốt.
            Sự linh hoạt và khả năng làm việc hiệu quả dưới áp lực.
            Sẵn lòng làm việc vào cuối tuần và các ngày lễ khi cần thiết.
            Trình độ tiếng Anh lưu loát`,
            benefits: `Làm việc trong môi trường khách sạn 4 sao thuộc TOP 1 khu vực Phố Cổ - Hà Nội với nguồn vốn ổn định, tầm nhìn mở rộng chuỗi khách sạn trên khắp cả nước và khu vực Châu Á
            Mức lương thương lượng + Thưởng service charge hàng tháng cùng kỳ lương
            Cơ hội chia sẻ lợi nhuận từ các khách sạn trong chuỗi cùng ban lãnh đạo công ty
            Hỗ trợ ăn trưa tại khách sạn
            X4 lần lương các ngày lễ (trong trường hợp cần tăng ca)
            Thưởng sinh nhật, Thưởng doanh thu theo Quý, Thưởng các ngày Lễ Tết, lương tháng 13
            Gói khám sức khỏe miễn phí định kỳ 1 lần/năm
            Hưởng 12 ngày nghỉ phép có hưởng lương/năm
            Tham gia BHXH, BHYT, BHTN theo quy định
            Team building, du lịch miễn phí 1 lần/năm
            Cơ hội thăng tiến trong sự nghiệp phát triển chung của tập đoàn`,
            workLocation: `Hà Nội: 27 Hàng Bài, Hoàn Kiếm`,
            workTime: `Thứ 2 - Thứ 7 (từ 08:00 đến 17:30)
            Nghỉ full thứ 7 cuối cùng của tháng và 1 ngày phép trong tháng có lương `,
            pay: `7 - 10 triệu`,
            experience: `1 năm`,
            create_at: `2024-04-08`,
        },
        {
            id: 2,
            title: "Nhân Viên Telesales/ Kinh Doanh/ Chăm Sóc Khách Hàng - Thu Nhập Từ 15 Đến 30 Triệu - Mảng Spa Tại Hà Nội",
            description: `
            Tổ chức và giám sát các dịch vụ spa, bao gồm chăm sóc da, mát-xa, làm đẹp, vv
            Đảm bảo rằng mọi hoạt động diễn ra theo chuẩn mực chất lượng và dịch vụ
            Quản lý đội ngũ nhân viên spa, tạo môi trường làm việc tích cực và động viên đội ngũ nhân viên
            Theo dõi và quản lý ngân sách của Spa, phân tích và báo cáo về hiệu suất tài chính
            Đảm bảo mọi khách hàng được phục vụ tốt nhất và có trải nghiệm thoải mái và thư giãn.
            Xử lý mọi phản hồi và khiếu nại của khách hàng một cách chuyên nghiệp và kịp thời.
            Xây dựng và duy trì mối quan hệ với khách hàng tiềm năng thông qua các hoạt động quảng bá.
            Đảm bảo rằng các thiết bị và cơ sở vật chất của Spa được bảo trì và vận hành đúng cách.
            Xác định và giải quyết các vấn đề kỹ thuật một cách nhanh chóng và hiệu quả.
            Đảm bảo rằng mọi hoạt động của Spa tuân thủ các quy định pháp luật liên quan đến ngành Spa và sức khỏe cộng đồng.
            `,
            requirement: `Kinh nghiệm từ 3 năm trong quản lý hoạt động của spa hoặc trong ngành làm đẹp. Ưu tiên ứng viên đã quản lý spa trong khách sạn từ 4 sao hoặc resort
            Kiến thức vững vàng về các dịch vụ spa và sản phẩm làm đẹp.
            Kỹ năng lãnh đạo và quản lý nhóm tốt.
            Sự linh hoạt và khả năng làm việc hiệu quả dưới áp lực.
            Sẵn lòng làm việc vào cuối tuần và các ngày lễ khi cần thiết.
            Trình độ tiếng Anh lưu loát
            `,
            benefits: `
            Làm việc trong môi trường khách sạn 4 sao thuộc TOP 1 khu vực Phố Cổ - Hà Nội với nguồn vốn ổn định, tầm nhìn mở rộng chuỗi khách sạn trên khắp cả nước và khu vực Châu Á
            Mức lương thương lượng + Thưởng service charge hàng tháng cùng kỳ lương
            Cơ hội chia sẻ lợi nhuận từ các khách sạn trong chuỗi cùng ban lãnh đạo công ty
            Hỗ trợ ăn trưa tại khách sạn
            X4 lần lương các ngày lễ (trong trường hợp cần tăng ca)
            Thưởng sinh nhật, Thưởng doanh thu theo Quý, Thưởng các ngày Lễ Tết, lương tháng 13
            Gói khám sức khỏe miễn phí định kỳ 1 lần/năm
            Hưởng 12 ngày nghỉ phép có hưởng lương/năm
            Tham gia BHXH, BHYT, BHTN theo quy định
            Team building, du lịch miễn phí 1 lần/năm
            Cơ hội thăng tiến trong sự nghiệp phát triển chung của tập đoàn
            `,
            workLocation: "Hà Nội: 27 Hàng Bài, Hoàn Kiếm",
            workTime: `
            Thứ 2 - Thứ 7 (từ 08:00 đến 17:30)
            Nghỉ full thứ 7 cuối cùng của tháng và 1 ngày phép trong tháng có lương 
            `,
            pay: "7 - 10 triệu",
            experience: "1 năm",
            create_at: "2024-04-08",
        }
    ])

    return (
        <div className={style.container}>
            {!key && <div className={style.bodyNews}>
                {jobs.map((item, index) => {
                    return (
                        <a href={`${routes.news_jobs}?key=${index}`}>
                            <div className={style.item} key={index}>
                                <div className={style.img}>
                                    <img src={logo}></img>
                                </div>
                                <div className={style.infor}>
                                    <div className={style.inforCol1}>
                                        {/* <p className={style.date}>{item.create_at}</p> */}
                                        <p className={style.title}>{item.title}</p>
                                        <p className={style.company}>Natural Beauty</p>
                                    </div>
                                    <div className={style.inforCol2}>
                                        <p className={style.pay}>{item.pay}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>}

            {key && <div className={style.newDetail}>
                <div className={style.titleInfor}>
                    <div className={style.title}>
                        <p className={style.main}>{jobs[key].title}</p>
                    </div>

                    <div className={style.sub}>
                        <ul>
                            <li>
                                <div className={style.subIcon}>
                                    <PiCurrencyDollarFill className={style.icon} />
                                </div>
                                <div className={style.subInfor}>
                                    <p className={style.contentTitle}>Mức lương</p>
                                    <p className={style.contentValue}>15-25 triệu</p>
                                </div>
                            </li>

                            <li>
                                <div className={style.subIcon}>
                                    <FaLocationDot className={style.icon} />
                                </div>
                                <div className={style.subInfor}>
                                    <p className={style.contentTitle}>Địa điểm</p>
                                    <p className={style.contentValue}>Hà Nội</p>
                                </div>
                            </li>

                            <li>
                                <div className={style.subIcon}>
                                    <BsHourglassSplit className={style.icon} />
                                </div>
                                <div className={style.subInfor}>
                                    <p className={style.contentTitle}>Kinh nghiệm</p>
                                    <p className={style.contentValue}>1 năm</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={style.apply}>
                        <button>Ứng tuyển ngay</button>
                    </div>

                </div>



                {/* <div className={style.img}>
                    <img src={news[key].img} alt="news image" />
                </div> */}

                <div className={style.content}>
                    <div className={style.jobDescripton}>
                        <p className={style.title}>Mô tả công việc</p>
                        <div className={style.text}>
                            {jobs[key].description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <ul>
                                        <li>{line}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={style.jobRequirement}>
                        <p className={style.title}>Yêu cầu ứng viên</p>
                        <div className={style.text}>
                            {jobs[key].requirement.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <ul>
                                        <li>{line}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={style.jobBenefits}>
                        <p className={style.title}>Quyền lợi</p>
                        <div className={style.text}>
                            {jobs[key].benefits.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <ul>
                                        <li>{line}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={style.jobLocation}>
                        <p className={style.title}>Địa điểm làm việc</p>
                        <div className={style.text}>
                            {jobs[key].workLocation.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <ul>
                                        <li>{line}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={style.jobTime}>
                        <p className={style.title}>Thời gian làm việc</p>
                        <div className={style.text}>
                            {jobs[key].workTime.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    <ul>
                                        <li>{line}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={style.jobApply}>
                        <p className={style.title}>Cách thức ứng tuyển</p>

                        <div className={style.text}>
                            <React.Fragment>
                                <ul>
                                    <li>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <strong>Ứng tuyển</strong> ngay dưới đây.</li>
                                </ul>
                            </React.Fragment>
                        </div>
                    </div>

                    <div className={style.buttonApply}>
                        <button>Ứng tuyển ngay</button>
                    </div>

                </div>


                <div className={style.social}>
                    <ul>
                        <li><FaTwitter className={style.icon} /> <span>Twitter</span></li>
                        <li><FaFacebookF className={style.icon} /> <span>Share</span></li>
                        <li><SiHatenabookmark className={style.icon} /> <span>Hatena</span></li>
                        <li><FaGetPocket className={style.icon} /> <span>Pocket</span></li>
                        <li><IoLogoRss className={style.icon} /> <span>RSS</span></li>
                        <li><SiFeedly className={style.icon} /> <span>feedly</span></li>
                        <li><IoLogoPinterest className={style.icon} /> <span>Pin it</span></li>
                    </ul>
                </div>

                <div className={style.notice}>
                    <div className={style.noticeTitle}>
                        <p className={style.main}>{getDict("news_menu_body_newDetail_notice_noticeTitle_main")}</p>
                        <a href={routes.news}>
                            <p className={style.noticeList}>{getDict("news_menu_body_newDetail_notice_noticeTitle_news")}</p>
                        </a>
                    </div>

                    <div className={style.news}>
                        <ul>
                            {news.map((item, index) => (
                                <a href={`${routes.news}?key=${index}`}>
                                    <li key={index}>
                                        <p className={style.date}>{item.date}</p>
                                        <p className={style.newsTitle}>{item.title}</p>
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>}
        </div>
    );
}

export default Jobs;