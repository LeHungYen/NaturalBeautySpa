import style from './index.module.scss'
import clsx from 'clsx'
import HomePharagraphItem from '../../../components/HomePharagraphItem';
import { routes } from '../../../config/routes';
import { useState, useEffect } from 'react';
import { getDict } from '../../../services/dict';
import React from 'react';
import { pharagraphs } from '../../../data';
function Pharagraph({ windowWidth }) {

    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.logo}>
                    <img src={require('../../../assets/logoWhite.jpg')} alt="logo" />
                </div>

                <div className={style.title}>
                    <p>{getDict("home_pharagraph_title")}</p>
                </div>

                <div className={style.titleMobile}>
                    <p>
                        {getDict("home_pharagraph_titleMobile")?.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>


                <div className={style.sub}>
                    <p>
                        {getDict("home_pharagraph_sub")?.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className={style.subMobile}>
                    <p>
                        {getDict("home_pharagraph_subMobile")?.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

            </div>

            <div className={style.row2}>
                <div className={style.items}>
                    {pharagraphs.map((item, index) => {
                        return (
                            <div key={index} className={style.item}>
                                <a href={item.url}>
                                    <div className={clsx(item.reverse ? style.flexReverse : style.dFlex)}>
                                        <div className={style.img}>
                                            <img src={item.img}></img>
                                        </div>

                                        <div className={style.pharagraph}>
                                            <div className={style.text}>
                                                <p className={style.title}>{item.title}</p>
                                                <p className={style.subTitle}>{item.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Pharagraph;