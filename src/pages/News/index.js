import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiHatenabookmark } from "react-icons/si";
import { FaGetPocket } from "react-icons/fa6";
import { IoLogoRss } from "react-icons/io5";
import { SiFeedly } from "react-icons/si";
import { IoLogoPinterest } from "react-icons/io5";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../config/routes.js'
function News() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const news = [
        {
            title: "オフィシャルサロン一覧を公開しました",
            date: "2024.03.9",
            img: "https://mareve.co.jp/wp-content/uploads/2020/11/mareve_news-1.png",
            content: "オフィシャルサロンは、こちらからお探しください."
        },
        {
            title: "コーポレートサイトをオープン致しました",
            date: "2020.11.24",
            img: "https://mareve.co.jp/wp-content/uploads/2020/11/mareve_news-1.png",
            content: `平素は格別のお引き立てを賜り誠にありがとうございます。
      
          この度、弊社「株式会社マリーブ」のコーポレートサイトを公開いたしました。
          今後とも皆様へのサービス向上のため、サイト内のコンテンツ充実に努め、様々な情報を皆様に発信して参ります。
      
          なにとぞ、ご活用いただけますよう宜しくお願い申し上げます。
      
          株式会社マリーブ
          福田 麻理`
        }
    ];

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/110143683-scaled.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>お知らせ</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <ul>
                    <div className={style.menuPosition}>
                        <li><a href={routes.home}><ImHome className={style.homeIcon} /></a></li>
                        {!key &&
                            <a href={routes.news}><li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>脱毛メニュー</p></li></a>}
                        {key &&
                            <a href={routes.news}><li><MdKeyboardArrowRight className={style.icon} /> <p>脱毛メニュー</p></li></a>}
                        {key && <li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: !key ? "black" : "#2dccd3" }}>{news[key].title}</p></li>}
                    </div>
                </ul>
            </div>

            <div className={style.body}>
                <div className={style.bodyMenu}>
                    <ul>
                        <li>キャンペーン記事一覧</li>
                        <li>公式Instagram</li>
                    </ul>
                </div>

                {!key && <div className={style.bodyNews}>
                    {news.map((item, index) => {
                        return (
                            <a href={`${routes.news}?key=${index}`}>
                                <div className={style.item} key={index}>
                                    <div className={style.img}>
                                        <img src={item.img}></img>
                                    </div>
                                    <div className={style.infor}>
                                        <p className={style.date}>{item.date}</p>
                                        <p className={style.title}>{item.title}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>}


                {key && <div className={style.newDetail}>
                    <div className={style.title}>
                        <p className={style.main}>{news[key].title}</p>
                        <p className={style.sub}>{news[key].date}</p>
                    </div>

                    <div className={style.img}>
                        <img src={news[key].img} alt="news image" />
                    </div>

                    <div className={style.content}>
                        <p>
                            {news[key].content.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
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
                            <p className={style.main}>お知らせ</p>
                            <a href={routes.news}>
                                <p className={style.noticeList}>お知らせ一覧</p>
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
        </div >

    );
}

export default News
