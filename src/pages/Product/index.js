import style from './index.module.scss'
import ContentBanner from "./ContentBanner";
import React from "react";
import PageBanner from "../../components/PageBanner";
import {getDict} from "../../services/dict";

export function AboutDetail() {
    const detail = {
        content: [
            {
                imgs: ["https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-1024x681.jpg"],
                titles: [getDict("product_page_title_1"), getDict("product_page_title_2")],
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
            }
        ]
    }

    return (
        <div className={style.container}>
            <PageBanner image="https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-scaled.jpg" titles={["プロデュース商品"]} subTitles={[]}/>
            <div className={style.main}>
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
                                        <p key={i} style={{textAlign: t.center ?"center":"left"}}>
                                            {t.text}
                                        </p>
                                        {t.gap? <br/>: <></>}
                                    </React.Fragment>
                                ))}
                            </div>
                            {
                                con.buttons?
                                    <div className={style.buttons}>
                                        {con.buttons.map((b, i)=>
                                            <a href={b.url} key={"button" + i}>
                                                <button className={style.button}>{b.txt}</button>
                                            </a>
                                        )}
                                    </div>
                                    :<></>
                            }
                        </React.Fragment>
                    )}
                    {
                        detail.cards ?
                            detail.cards.map((c, i)=>(
                                <div className={style.cards} style={{background: `${c.background ? c.background : 'none'}`}}>
                                    <div>
                                        <img src={c.img} alt="" />
                                    </div>
                                    <div>
                                        {c.title?
                                            <h3>{c.title}</h3>:
                                            <></>
                                        }
                                        <span>
                                        {c.text}
                                    </span>
                                    </div>
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