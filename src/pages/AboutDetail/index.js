import style from './index.module.scss'
import {useState} from "react";
import {getDict} from "../../services/dict";
import ContentBanner from "./ContentBanner";
import { IoMdHome } from "react-icons/io";
import React from "react";

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
                content: [
                    {
                        title: [getDict("about_item_1_sub_title_1st"), getDict("about_item_1_sub_title_2nd")],
                        imgs: [],
                        txt: []
                    },
                    {
                        title: [],
                        imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/11101417246.jpg"],
                        txt:
                            [
                                {
                                    text: getDict("about-message-txt-1")
                                },
                                {
                                    text:getDict("about-message-txt-2"),
                                },
                                {
                                    text: getDict("about-message-txt-3"),
                                },
                                {
                                    text: getDict("about-message-txt-4")
                                },
                                {
                                    text: getDict("about-message-txt-5")
                                },
                            ]
                    },
                    {
                        title: [getDict("about-message-content-title-1"),],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_59340502_M.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_57114938_M.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about-message-txt-6")
                            },
                            {
                                text:getDict("about-message-txt-7"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-8"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-9")
                            },
                            {
                                text: getDict("about-message-txt-10"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-11")
                            },
                            {
                                text: getDict("about-message-txt-12")
                            },
                        ],
                    },
                    {
                        title: [getDict("about-message-content-title-2")],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/101417195-1024x681.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/101417285-1024x681.jpg"
                        ],
                        txt:[
                            {
                                text: getDict("about-message-txt-13")
                            },
                            {
                                text: getDict("about-message-txt-14"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-15"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-16"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-17")
                            },
                            {
                                text: getDict("about-message-txt-18"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-19"),
                                gap: true
                            },
                            {
                                text: getDict("about-message-txt-20")
                            },
                            {
                                text: getDict("about-message-txt-21")
                            },
                        ]
                    }
                ],
                profile: {
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/1101417246.jpg",
                    name: getDict("about-message-profile-name"),
                    role: getDict("about-message-profile-role"),
                }
            },
            feature : {
                banner: {
                    title: getDict("about-sub-item-2"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/101417297-830x300.jpg",
                },
                content: [
                    {
                        title: [getDict("about_item_2_sub_title_1st"), getDict("about_item_2_sub_title_2nd")],
                        imgs: [],
                        txt: [
                            {
                                text: getDict("about_feature_txt_1")
                            }
                        ]
                    },
                    {
                        title: [getDict("about_feature_title_1")],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_42519521_M.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_53648411_M.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_feature_txt_2")
                            }
                        ]
                    },
                    {
                        title: [getDict("about_feature_title_2")],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_58305025_M-1024x682.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_58564256_M-1024x682.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_feature_txt_3")
                            }
                        ]
                    },
                    {
                        title: [getDict("about_feature_title_3")],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/10143684-1024x683.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-1024x681.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_feature_txt_4")
                            }
                        ]
                    }
                ],
                cards: [
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_49252487_M.jpg",
                        text: getDict("about_feature_txt_5"),
                        background: "#f7f7f8"
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_47347395_M.jpg",
                        text: getDict("about_feature_txt_5"),
                        background: "#f7f7f8"
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_48802303_M.jpg",
                        text: getDict("about_feature_txt_5"),
                        background: "#f7f7f8"
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_61830324_M.jpg",
                        text: getDict("about_feature_txt_5"),
                        background: "#f7f7f8"
                    }
                ]
            },
            important : {
                banner: {
                    title: getDict("about-sub-item-3"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_69294110_M-830x300.jpg",
                },
                content: [
                    {
                        title: [getDict("about_item_3_sub_title_1st"), getDict("about_item_3_sub_title_2nd")],
                        imgs: [],
                        txt: [
                            {
                                text: getDict("about_important_txt_1")
                            },
                            {
                                text: getDict("about_important_txt_2")
                            }
                        ],
                    },
                    {
                        title: [getDict("about_important_title_1"),],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_64954225_M.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40055705_M.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_important_txt_3")
                            },
                            {
                                text: getDict("about_important_txt_4"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_5"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_6")
                            }
                        ],
                    },
                    {
                        title: [getDict("about_important_title_2"),],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_53943270_M-1024x682.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_39545620_M-1024x682.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_important_txt_7"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_8"),
                            },
                            {
                                text: getDict("about_important_txt_9"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_10"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_11")
                            }
                        ],
                    },
                    {
                        title: [getDict("about_important_title_3"),],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_61908675_M-1024x682.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_69893975_M-1024x682.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_important_txt_12"),
                            },
                            {
                                text: getDict("about_important_txt_13"),
                            },
                            {
                                text: getDict("about_important_txt_14"),
                            },
                            {
                                text: getDict("about_important_txt_15"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_16"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_17"),
                                gap: true
                            }

                        ],
                    },
                    {
                        title: [getDict("about_important_title_4"),],
                        imgs: [
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_51318486_M-1024x682.jpg",
                            "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_36180170_M-1024x682.jpg"
                        ],
                        txt: [
                            {
                                text: getDict("about_important_txt_18"),
                            },
                            {
                                text: getDict("about_important_txt_19"),
                            },
                            {
                                text: getDict("about_important_txt_20"),
                            },
                            {
                                text: getDict("about_important_txt_21"),
                                gap: true
                            },
                            {
                                text: getDict("about_important_txt_22"),
                                gap: true
                            },
                        ],
                    },
                ]
            },
            academy : {
                banner: {
                    title: getDict("about-sub-item-4"),
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_27-830x300.jpg",
                },
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
        setUrl(url)
        window.location.href = url;
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
                <div className={style.diviner}></div>
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
                    {detail.content.map((con, i)=>
                        <React.Fragment>
                            <div key={"img" + i} className={style.imgs} style={{gridTemplateColumns: `repeat(${con.imgs.length}, 1fr`, display: `${con.imgs.length > 0 ?'grid':'none'}`}}>
                                {con.imgs.map((img, i)=>
                                    <img key={i} src={img} alt=""/>
                                )}
                            </div>
                            <div key={"title" +i} className={style.title} style={{display: `${con.title.length > 0 ?'flex':'none'}`}}>
                                {con.title.map((t, i)=>(
                                    <React.Fragment>
                                        <h3 key={i}>{t}</h3>
                                    </React.Fragment>
                                ))}
                            </div>
                            <div key={"txt" +i} className={style.text} style={{display: `${con.txt.length > 0 ?'unset':'none'}`}}>
                                {con.txt.map((t, i)=>(
                                    <React.Fragment>
                                        <p key={i}>
                                            {t.text}
                                        </p>
                                        {t.gap? <br/>: <></>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </React.Fragment>
                    )}
                    {
                        detail.profile ?
                            <div className={style.profile}>
                                <img src={detail.profile.img}  alt=""/>
                                <p>{detail.profile.role}</p>
                                <p>{detail.profile.name}</p>
                            </div>:
                            <></>
                    }
                    {
                        detail.cards ?
                            detail.cards.map((c, i)=>(
                                <div className={style.cards} style={{background: `${c.background ? c.background : 'none'}`}}>
                                    <div>
                                        <img src={c.img} alt="" />
                                    </div>
                                    <span>
                                        {c.text}
                                    </span>
                                </div>
                            ))
                            :
                            <></>
                    }
                    <div className={style.diviner} />
                </div>
            </div>
        </div>
    )
}