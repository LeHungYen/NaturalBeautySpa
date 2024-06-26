import style from './index.module.scss'
import { routes } from '../../../config/routes';
import { getDict } from '../../../services/dict';
import { news as data } from "../../../data/index.js"
import { useState } from 'react';
import logo from '../../../assets/logo.png'
function New() {
    const news = data();

    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.logo}>
                    <img src={require('../../../assets/logoWhite.jpg')}></img>
                </div>

                <div className={style.title}>
                    <p>{getDict("home_new_title")}</p>
                </div>
            </div>

            <div className={style.items}>
                {news.map((item, index) => {
                    return (
                        <div className={style.item} key={index}>
                            <p className={style.date}>{item.date}</p>
                            <p className={style.title}>{item.title}</p>
                        </div>
                    )
                })}
            </div>


            <div className={style.button}>
                <button><a href={routes.news_articles}>{getDict("home_new_textButton")}</a></button>
            </div>

        </div>
    );
}

export default New;