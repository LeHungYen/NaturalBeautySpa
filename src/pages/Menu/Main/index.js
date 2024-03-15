import style from './index.module.scss'
import { routes } from '../../../config/routes.js'
function MainMenu() {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_23376677_M-1.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>私たちになくせない「ムダ毛」はありません。</p>
                        <p className={style.sub}>あなたのお悩みをお聞かせください。</p>
                        <p className={style.sub}>肌の状態を確認し、これまでの処理方法など総合的に伺いあなたの肌質にあった施術を行います。</p>
                        <p className={style.sub}>日焼け肌でも問題ありません。</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <div className={style.img}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_36120099_M.jpg"></img>
                    <p>脱毛</p>
                </div>

                <div className={style.linkMenu}>
                    <ul>
                        <li><a href={`${routes.menu}?key=0`}>全身脱毛</a></li>
                        <li><a href={`${routes.menu}?key=1`}>顔</a></li>
                        <li><a href={`${routes.menu}?key=2`}>上半身</a></li>
                        <li><a href={`${routes.menu}?key=3`}>下半身</a></li>
                        <li><a href={`${routes.menu}?key=4`}>デリケートゾーン</a></li>
                        <li><a href={`${routes.menu}?key=5`}>メンズ脱毛</a></li>
                        <li><a href={`${routes.menu}?key=6`}>キッズ脱毛</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;