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
import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { BsHourglassSplit } from "react-icons/bs";
import { ApiService } from '../../../services/ApiService.js';
import { baseUrl, recruitmentServiceUrl } from '../../../config/link.js';
// import { ModalDrop } from '../../../components/ModalDrop/index.js';
import ModalCV from './ModalCV/index.js';
function Jobs() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');
    const apiService = new ApiService(baseUrl);

    const [jobs, setJobs] = useState([])

    // api
    const getData = async () => {
        try {
            const response = await apiService.fetchData(recruitmentServiceUrl.get, {}, {}, true);
            setJobs(response);
        } catch (error) {
            // setMessage(error.response.data.error)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    // modal send CV
    const [modalCV, setModalCV] = useState(false);

    const openModal = () => {
        setModalCV(true)
    }
    //
    const [job, setJob] = useState({});
    useEffect(() => {
        setJob(jobs[key])
    }, [key, jobs])
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

            {key && jobs[key] && <div className={style.newDetail}>
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
                                    <p className={style.contentValue}>{jobs[key].pay}</p>
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
                                    <p className={style.contentValue}>{jobs[key].experience}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={style.apply}>
                        <button onClick={openModal}>Ứng tuyển ngay</button>
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
                        <button onClick={openModal}>Ứng tuyển ngay</button>
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


            <ModalCV modal={modalCV} setModal={setModalCV} job={job}>

            </ModalCV>
        </div>
    );
}

export default Jobs;