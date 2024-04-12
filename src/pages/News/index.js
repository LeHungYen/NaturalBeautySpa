import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../config/routes.js'
import { news as data } from '../../data/index.js';
import { getDict } from '../../services/dict.js';
import Article from './Articles/index.js';
import Jobs from './Jobs/index.js';
import { ApiService } from '../../services/ApiService.js';
import { baseUrl, recruitmentServiceUrl } from '../../config/link.js';
import { useState, useEffect } from 'react';
function News() {
    const news = data();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const currentPath = location.pathname;


    ///
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

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/110143683-scaled.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>{getDict("news_banner_bannerText_text_title")}</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <ul>
                    <div className={style.menuPosition}>
                        <li><a href={routes.home}><ImHome className={style.homeIcon} /></a></li>
                        {!key && currentPath == routes.news_articles &&
                            <a href={routes.news_articles}><li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>{getDict("news_menu_body_bodyMenu_item1")}</p></li></a>
                        }
                        {key && currentPath == routes.news_articles &&
                            <a href={routes.news_articles}><li><MdKeyboardArrowRight className={style.icon} /> <p>{getDict("news_menu_body_bodyMenu_item1")}</p></li></a>
                        }
                        {key && currentPath == routes.news_articles &&
                            <li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: !key ? "black" : "#2dccd3" }}>
                                {news[key].title.length > 10 ? `${news[key].title.substring(0, 20)}...` : news[key].title}
                            </p></li>
                        }

                        {!key && currentPath == routes.news_jobs &&
                            <a href={routes.news_jobs}><li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>{getDict("news_menu_body_bodyMenu_item2")}</p></li></a>
                        }
                        {key && currentPath == routes.news_jobs &&
                            <a href={routes.news_jobs}><li><MdKeyboardArrowRight className={style.icon} /> <p>{getDict("news_menu_body_bodyMenu_item2")}</p></li></a>
                        }
                        {key && currentPath == routes.news_jobs && jobs[key] &&
                            <li><MdKeyboardArrowRight className={style.icon} />
                                <p style={{ color: !key ? "black" : "#2dccd3" }}>
                                    {jobs[key].title.length > 10 ? `${jobs[key].title.substring(0, 20)}...` : jobs[key].title}
                                </p>
                            </li>
                        }
                    </div>
                </ul>
            </div>

            <div className={style.body}>
                <div className={style.bodyMenu}>
                    <ul>
                        <a href={routes.news_articles}><li>{getDict("news_menu_body_bodyMenu_item1")}</li></a>
                        <a href={routes.news_jobs}><li>{getDict("news_menu_body_bodyMenu_item2")}</li></a>
                        <a><li>{getDict("news_menu_body_bodyMenu_item3")}</li></a>
                    </ul>
                </div>

                <div className={style.bodyNews}>
                    {currentPath == routes.news_articles && < Article />}
                    {currentPath == routes.news_jobs && < Jobs />}
                </div>
            </div>
        </div >

    );
}

export default News
