import style from './index.module.scss'

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
                        <li>全身脱毛</li>
                        <li>上半身</li>
                        <li>デリケートゾーン</li>
                        <li>キッズ脱毛</li>
                        <li>顔</li>
                        <li>下半身</li>
                        <li>メンズ脱毛</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;