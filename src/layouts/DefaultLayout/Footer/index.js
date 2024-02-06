import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function Footer() {
    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.displayFlex}>
                    <div className={style.col1}>
                        <div className={style.logo}>
                            <img src="https://mareve.co.jp/wp-content/uploads/2020/10/mareve_logo03_140-1.png?1707220383"></img>
                        </div>

                        <ul>
                            <li><span>株式会社マリーブ</span></li>
                            <li><span>〒150-0021</span></li>
                            <li><span>東京都渋谷区恵比寿西1-3-10</span></li>
                            <li><span>EBISU. TANAKA. BLDG. 4F</span></li>
                            <li><span>MAREVE 恵比寿本店</span></li>
                            <li><span>営業時間/11:00〜21:00</span></li>
                            <li><span>定休日/年末年始</span></li>
                            <li><span>予約専用フリーダイヤル：0120-262-633</span></li>
                            <li><span>TEL：03-6416-3451　FAX：03-6416-3455</span></li>
                        </ul>

                    </div>

                    <div className={style.col2}>
                        <p className={style.title}>ご予約専用LINE</p>

                        <ul>
                            <li><span>「MAREVE恵比寿本店」へのご予約（仮予約）はこちらのLINEからお友達追加をお願いします。完全プライベートサロンのため、ご希望の日時をいただいた後に調整を行います。</span></li>
                            <li><span>まずはお気軽にこちらよりご連絡ください。</span></li>
                        </ul>

                        <div className={style.button}>
                            <button><a>LINEから予約する</a></button>
                        </div>
                    </div>

                    <div className={style.col3}>
                        <p className={style.title}>
                            アカデミー専用
                            <br />
                            お問い合わせLINE
                        </p>

                        <ul>
                            <li><span>「M beauty academy」「プロデュース商品」「セミナー、講演、取材のご依頼」等、アカデミー関連へのお問い合わせはこちらのLINEからお友達追加し、ご連絡ください。</span></li>
                        </ul>

                        <div className={style.button}>
                            <button><a>アカデミー問い合わせLINE</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.row2}>
                <div className={style.displayFlex}>
                    <div className={style.col1}>
                        <div className={style.home}>
                            <ImHome className={style.icon} />
                        </div>

                        <ul>
                            <li><a>ABOUT MAREVE</a></li>
                            <li><a>脱毛メニュー</a></li>
                            <li><a>M beauty academy</a></li>
                            <li><a>プロデュース商品</a></li>
                            <li><a>お客様の声</a></li>
                            <li><a>会社概要</a></li>
                            <li><a>お知らせ</a></li>
                            <li><a>個人情報保護方針</a></li>
                            <li><a>MAREVE恵比寿本店アクセス</a></li>
                        </ul>
                    </div>

                    <div className={style.col2}>
                        <div className={style.title}>
                            <p>脱毛メニュー</p>
                        </div>

                        <ul>
                            <li><a>全身脱毛</a></li>
                            <li><a>顔</a></li>
                            <li><a>上半身</a></li>
                            <li><a>下半身</a></li>
                            <li><a>デリケートゾーン</a></li>
                            <li><a>メンズ脱毛</a></li>
                            <li><a>キッズ脱毛</a></li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className={style.row3}>
                <div className={style.displayFlex}>
                    <div className={style.social}>
                        <ul>
                            <li><FaInstagram className={style.instagramIcon} /></li>
                            <li><FaWifi className={style.wifiIcon} /></li>
                        </ul>
                    </div>

                    <div className={style.copyright}>
                        <p>Copyright © 株式会社マリーブ 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;