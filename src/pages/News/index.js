import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../config/routes.js'
import { news } from '../../data/index.js';
import { getDict } from '../../services/dict.js';
import Article from './Articles/index.js';
import Jobs from './Jobs/index.js';

function News() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const currentPath = location.pathname;

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
                        {!key &&
                            <a href={routes.news}><li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>{getDict("news_menu_menuPosition_news")}</p></li></a>}
                        {key &&
                            <a href={routes.news}><li><MdKeyboardArrowRight className={style.icon} /> <p>{getDict("news_menu_menuPosition_news")}</p></li></a>}
                        {key && <li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: !key ? "black" : "#2dccd3" }}>{news[key].title}</p></li>}
                    </div>
                </ul>
            </div>

            <div className={style.body}>
                <div className={style.bodyMenu}>
                    <ul>
                        <li>{getDict("news_menu_body_bodyMenu_item1")}</li>
                        <li><a href={routes.news_articles}> News (test)</a></li>
                        <li><a href={routes.news_jobs}> Jobs (test)</a></li>
                        <li>{getDict("news_menu_body_bodyMenu_item2")}</li>
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
