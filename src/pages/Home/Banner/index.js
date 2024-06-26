import style from './index.module.scss'
import { useEffect, useRef } from "react";
import { getDict } from "../../../services/dict";
export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.container}>
                <div>
                    <img className={style.image1} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_46293967_M-1.jpg" />
                </div>
                <div>
                    <img className={style.image2} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_62538886_M.jpg" />
                </div>
                <div>
                    <img className={style.image3} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_54128417_M.jpg" />
                </div>
                <div>
                    <img className={style.image4} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_48651100_M.jpg" />
                </div>
                <div>
                    <img className={style.image5} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_46293967_M-1.jpg" />
                </div>
                <div>
                    <img className={style.image6} src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_62538886_M.jpg" />
                </div>
            </div>

            <div className={style.overlay}>

            </div>

            <div className={style.title}>
                <div className={style.main}>
                    {getDict("banner-title")}
                </div>
                <div className={style.sub}>
                    {getDict("banner-sub-title")}
                </div>
            </div>
        </div>
    )
}