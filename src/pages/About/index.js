import style from "./index.module.scss"
import PageBanner from "../../components/PageBanner";
import {getDict} from "../../services/dict";
export function About() {
    const bannerData = {
        titles: [getDict("about-banner-title1"), getDict("about-banner-title2")],
        subTitles: [getDict("about-banner-description1"), getDict("about-banner-description2")],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23234665_M-1.jpg",
    }
    return (
        <div className={style.about}>
            <PageBanner  {...bannerData}/>
        </div>
    )
}