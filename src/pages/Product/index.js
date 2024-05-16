import style from './index.module.scss'
import React from "react";
import PageBanner from "../../components/PageBanner";
import { getDict } from "../../services/dict";

export function Product() {
    const detail = {
        content: [
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-1024x681.jpg"],
                title: [getDict("product_page_title_1"), getDict("product_page_title_2")],
                txt: [
                    {
                        text: getDict("product_page_txt_3"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_4"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_5"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_6"),
                        center: true
                    },
                ],
            },
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/10143642-scaled-e1604306364727-1536x922.jpg"],
                title: [getDict("product_page_title_3")],
                txt: [
                    {
                        text: getDict("product_page_txt_0"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_1"),
                        center: true,
                        gap: true
                    },
                    {
                        text: getDict("product_page_txt_2"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_7"),
                        center: true
                    },
                ],
            },
            {
                imgs: [
                    "https://mareve.co.jp/wp-content/uploads/2020/10/110143659-768x1151.jpg",
                    "https://mareve.co.jp/wp-content/uploads/2020/10/10143656-768x1151.jpg"
                ],
                title: [getDict("product_page_title_4")],
                txt: [
                    {
                        text: getDict("product_page_txt_8"),
                        center: true,
                    },
                    {
                        text: getDict("product_page_txt_9"),
                        center: true,
                        gap: true
                    },
                    {
                        text: getDict("product_page_txt_10"),
                        center: true,
                    },
                    {
                        text: getDict("product_page_txt_11"),
                        center: true,
                        gap: true

                    },
                    {
                        text: getDict("product_page_txt_12"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_13"),
                        center: true
                    },
                ],
            },
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/110143683-1536x1025.jpg"],
                title: [getDict("product_page_title_5")],
                txt: [
                    {
                        text: getDict("product_page_txt_14"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_15"),
                        center: true,
                        gap: true
                    },
                ],
                buttons: [
                    {
                        txt: getDict("product_btn_txt_1"),
                        url: "/contact",
                    },
                ],
                blockImage: "https://mareve.co.jp/wp-content/uploads/2020/11/%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88-4@4x.png"
            },
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/pixta_63285179_M-1536x1024.jpg"],
                title: [getDict("product_page_title_6"), getDict("product_page_title_7")],
                txt: [
                    {
                        text: getDict("product_page_txt_16"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_17"),
                        center: true,
                        gap: true
                    },
                    {
                        text: getDict("product_page_txt_18"),
                        center: true,
                        gap: true
                    },
                    {
                        text: getDict("product_page_txt_19"),
                        center: true,
                    },
                    {
                        text: getDict("product_page_txt_20"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_21"),
                        center: true,
                        gap: true
                    },
                    {
                        text: getDict("product_page_txt_22"),
                        center: true
                    },
                    {
                        text: getDict("product_page_txt_23"),
                        center: true,
                    },
                ],
            },
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/10143684-1024x683.jpg"],
                title: [],
                txt: [],
            },
            {
                imgs: [],
                title: [],
                txt: [],
                cards: [
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/11/pixta_54128602_M-1536x1024.jpg",
                        text: getDict("product_page_txt_24"),
                        title: getDict("product_page_title_8"),
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_55105556_M-1536x1024.jpg",
                        text: getDict("product_page_txt_25"),
                        title: getDict("product_page_title_9"),
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_61783866_M-1536x1024.jpg",
                        text: getDict("product_page_txt_26"),
                        title: getDict("product_page_title_10"),
                    },
                    {
                        img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_53648155_M-1536x1024.jpg",
                        text: getDict("product_page_txt_27"),
                        title: getDict("product_page_title_11"),
                    },
                ]
            },
            {
                imgs: [],
                title: [],
                txt: [
                    {
                        text: "",
                        gap: true
                    },
                    {
                        text: "",
                        gap: true
                    },
                ],
                buttons: [
                    {
                        txt: getDict("product_btn_txt_1"),
                        url: "/contact",
                    },
                ],
            },
        ],

    }

    return (
        <div className={style.container}>
            <PageBanner image="https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-scaled.jpg" titles={["プロデュース商品"]} subTitles={[]} />
            <div className={style.main}>
           
                <div className={style.content}>
                    {detail.content.map((con, i) =>
                        <React.Fragment>
                            <div key={"img" + i} className={style.imgs} style={{ gridTemplateColumns: `repeat(${con.imgs.length}, 1fr`, display: `${con.imgs.length > 0 ? 'grid' : 'none'}` }}>
                                {con.imgs.map((img, i) =>
                                    <img key={i} src={img} alt="" />
                                )}
                            </div>
                            <div key={"title" + i} className={style.title} style={{ display: `${con.title.length > 0 ? 'flex' : 'none'}` }}>
                                {con.title.map((t, i) => (
                                    <React.Fragment>
                                        <h3 key={i}>{t}</h3>
                                    </React.Fragment>
                                ))}
                            </div>
                            <div key={"txt" + i} className={style.text} style={{ display: `${con.txt.length > 0 ? 'unset' : 'none'}` }}>
                                {con.txt.map((t, i) => (
                                    <React.Fragment>
                                        <p key={i} style={{ textAlign: t.center ? "center" : "left" }}>
                                            {t.text}
                                        </p>
                                        {t.gap ? <br /> : <></>}
                                    </React.Fragment>
                                ))}
                            </div>
                            {
                                con.buttons ?
                                    <div className={style.buttons}>
                                        {con.buttons.map((b, i) =>
                                            <a href={b.url} key={"button" + i}>
                                                <button className={style.button}>{b.txt}</button>
                                            </a>
                                        )}
                                    </div>
                                    : <></>
                            }
                            {
                                con.blockImage ?
                                    <div className={style.bimg}>
                                        <img src={con.blockImage} alt="" />
                                    </div> :
                                    <></>
                            }
                            {
                                con.cards ?
                                    con.cards.map((c, i) => (
                                        <React.Fragment>
                                            <div key={"card" + i} className={style.cards} style={{ background: `${c.background ? c.background : 'none'}` }}>
                                                <div>
                                                    <img src={c.img} alt="" />
                                                </div>
                                                <div>
                                                    {c.title ?
                                                        <h3>{c.title}</h3> :
                                                        <></>
                                                    }
                                                    <span>
                                                        {c.text}
                                                    </span>
                                                </div>
                                            </div>
                                            <div key={"diviver" + i} className={style.diviner} style={{ display: `${i === con.cards.length - 1 ? 'none' : 'unset'}` }} />
                                        </React.Fragment>
                                    ))
                                    :
                                    <></>
                            }
                        </React.Fragment>

                    )}
                    {
                        detail.cards ?
                            detail.cards.map((c, i) => (
                                <React.Fragment>
                                    <div key={"card" + i} className={style.cards} style={{ background: `${c.background ? c.background : 'none'}` }}>
                                        <div>
                                            <img src={c.img} alt="" />
                                        </div>
                                        <div>
                                            {c.title ?
                                                <h3>{c.title}</h3> :
                                                <></>
                                            }
                                            <span>
                                                {c.text}
                                            </span>
                                        </div>
                                    </div>
                                    <div key={"diviver" + i} className={style.diviner} />
                                </React.Fragment>
                            ))
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    )
}