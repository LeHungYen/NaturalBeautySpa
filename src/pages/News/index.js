import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
function News() {
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
                        <li><ImHome className={style.homeIcon} /></li>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p>脱毛メニュー</p></li>
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

                <div className={style.bodyNews}>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src="https://mareve.co.jp/wp-content/uploads/2020/11/mareve_news-1-730x500.png"></img>
                        </div>
                        <div className={style.infor}>
                            <p className={style.date}>2024.03.9</p>
                            <p className={style.title}>オフィシャルサロン一覧を公開しました</p>
                        </div>
                    </div>

                    <div className={style.item}>
                        <div className={style.img}>
                            <img src="https://mareve.co.jp/wp-content/uploads/2020/11/mareve_news-1-730x500.png"></img>
                        </div>
                        <div className={style.infor}>
                            <p className={style.date}>2024.03.9</p>
                            <p className={style.title}>オフィシャルサロン一覧を公開しました</p>
                        </div>
                    </div>

                    <div className={style.item}>
                        <div className={style.img}>
                            <img src="https://mareve.co.jp/wp-content/uploads/2020/11/mareve_news-1-730x500.png"></img>
                        </div>
                        <div className={style.infor}>
                            <p className={style.date}>2024.03.9</p>
                            <p className={style.title}>オフィシャルサロン一覧を公開しました</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News
