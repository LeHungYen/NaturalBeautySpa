import style from "./index.module.scss"
import PageBanner from "../../components/PageBanner";
import {getDict} from "../../services/dict";
import AboutItem from "../../components/AboutItem";
import {useDispatch} from "react-redux";

export function getAboutData() {
    return [
        {
            title: getDict("about-item-1-title"),
            subTitles: [getDict("about-item-1-sub-title-1st"), getDict("about-item-1-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
            description : getDict("about-item-1-description"),
            btn: getDict("about-item-1-button-caption")
        },
        {
            title: getDict("about-item-2-title"),
            subTitles: [getDict("about-item-2-sub-title-1st"), getDict("about-item-2-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/101417297-830x300.jpg",
            btn: getDict("about-item-2-button-caption"),
            description : getDict("about-item-2-description"),
        },
        {
            title: getDict("about-item-3-title"),
            subTitles: [getDict("about-item-3-sub-title-1st"), getDict("about-item-3-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_69294110_M-830x300.jpg",
            btn: getDict("about-item-3-button-caption"),
            description : getDict("about-item-3-description"),
        },
        {
            title: getDict("about-item-4-title"),
            subTitles: [getDict("about-item-4-sub-title-1st"), getDict("about-item-4-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_27-830x300.jpg",
            btn: getDict("about-item-4-button-caption"),
            description : getDict("about-item-4-description"),
        },
        {
            title: getDict("about-item-5-title"),
            subTitles: [getDict("about-item-5-sub-title-1st"), getDict("about-item-5-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
            btn: getDict("about-item-5-button-caption"),
            description : getDict("about-item-5-description"),
        },
        {
            title: getDict("about-item-6-title"),
            subTitles: [getDict("about-item-6-sub-title-1st"), getDict("about-item-6-sub-title-2nd")],
            src: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg",
            btn: getDict("about-item-6-button-caption"),
            description : getDict("about-item-6-description"),
        },
    ]
}

export function About() {
    const dispatch = useDispatch()
    const bannerData = {
        titles: [getDict("about-banner-title1"), getDict("about-banner-title2")],
        subTitles: [getDict("about-banner-description1"), getDict("about-banner-description2")],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23234665_M-1.jpg",
    }
    const items = getAboutData();
    return (
        <div className={style.about}>
            <PageBanner  {...bannerData}/>
            <div className={style.items}>
                {items.map((item, idx)=>
                    <AboutItem {...item}/>
                )}
            </div>
        </div>
    )
}