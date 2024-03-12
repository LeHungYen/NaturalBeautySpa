import style from './index.module.scss'
import {useEffect, useState} from "react";
import {getDict} from "../../services/dict";
import ContentBanner from "./ContentBanner";
import { IoMdHome } from "react-icons/io";

export function AboutDetail(props) {
    const [url, setUrl] = useState(window.location.href);
    let {details} = props;
    if(!details) {
        details = {
            message : {
                banner: {
                    title: getDict("about-sub-item-1"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [getDict("about_item_1_sub_title_1st"), getDict("about_item_1_sub_title_2nd")],
                    sub_title: [],
                }
            },
            feature : {
                banner: {
                    title: getDict("about-sub-item-2"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [],
                    sub_title: [],
                }
            },
            important : {
                banner: {
                    title: getDict("about-sub-item-3"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [],
                    sub_title: [],
                }
            },
            academy : {
                banner: {
                    title: getDict("about-sub-item-4"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [],
                    sub_title: [],
                }
            },
            product : {
                banner: {
                    title: getDict("about-sub-item-5"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [],
                    sub_title: [],
                }
            },
            access : {
                banner: {
                    title: getDict("about-sub-item-6"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
                },
                summary: {
                    title: [],
                    sub_title: [],
                }
            },
        }
    }
    const getDetail = function () {
        for(let key of Object.keys(details)) {
            if(url.includes(key)) {
                return details[key]
            }
        }
    }
    const detail = getDetail();

    const changeItem = function (url) {
        window.location.href = url;
        setUrl(url)
    }

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23234665_M-1.jpg" />
                <span>{getDict("nav_about_company")}</span>
            </div>
            <div className={style.path}>
                <div>
                    <IoMdHome fontSize={14}/>
                    &nbsp;
                    >
                    &nbsp;
                    <a href="/about">{getDict("nav_about_company")}</a>
                    &nbsp;
                    >
                    &nbsp;
                    <span>{detail.banner.title}</span>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.menu}>
                    <div className={style.title}>
                        {getDict("nav_about_company")}
                    </div>
                    <div className={style.item} style={{background: "#f7f7f8"}} onClick={()=> changeItem("/about/message")}>
                        {getDict("about-sub-item-1")}
                    </div>
                    <div className={style.item} style={{background: "#f1f1f1"}} onClick={()=> changeItem("/about/feature")}>
                        {getDict("about-sub-item-2")}
                    </div>
                    <div className={style.item} style={{background: "#f7f7f8"}} onClick={()=> changeItem("/about/important")}>
                        {getDict("about-sub-item-3")}
                    </div>
                    <div className={style.item} style={{background: "#f1f1f1"}} onClick={()=> changeItem("/about/academy")}>
                        {getDict("about-sub-item-4")}
                    </div>
                    <div className={style.item} style={{background: "#f7f7f8"}} onClick={()=> changeItem("/about/product")}>
                        {getDict("about-sub-item-5")}
                    </div>
                    <div className={style.item} style={{background: "#f1f1f1"}} onClick={()=> changeItem("/about/access")}>
                        {getDict("about-sub-item-6")}
                    </div>
                </div>
                <div className={style.content}>
                    <ContentBanner {...detail.banner}/>
                    <div className={style.summary}>
                        {detail.summary.title.map((t, i)=>
                            <h3>{t}</h3>
                        )}
                        {detail.summary.sub_title.map((t, i)=>
                            <p>{t}</p>
                        )}
                    </div>
                    <div className={style.imgs}>

                    </div>
                </div>
            </div>
        </div>
    )
}