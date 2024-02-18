import style from './index.module.scss'

function Instagram() {
    return (
        <div className={style.container}>

            <div className={style.instagram}>
                <p>公式Instagram</p>
            </div>

            <div className={style.text}>
                <p>
                    福田麻理公式Instagram。
                    <br />
                    脱毛サービス、セミナー情報、新商品などを
                </p>

                <p>This template does not exist!</p>
            </div>

            <div className={style.button}>
                <button>続きは公式Instagramへ</button>
            </div>

        </div>
    );
}

export default Instagram;