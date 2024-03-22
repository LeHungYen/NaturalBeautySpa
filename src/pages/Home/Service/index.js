import style from './index.module.scss'
import HomeItem from '../../../components/HomeItem';
import { useState, useEffect } from 'react';
import { routes } from '../../../config/routes';
import { getDict } from '../../../services/dict';
function Service({ windowWidth }) {

    const services = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_18087353_M-e1602471243188.jpg",
            upperLeftCornerMainText: getDict("home_service_mainText_item1"),
            upperLeftCornerSubText: getDict("home_service_subText_item1"),
            url: `${routes.menu}?key=1`
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_18087337_M-e1602471279127.jpg",
            upperLeftCornerMainText: getDict("home_service_mainText_item2"),
            upperLeftCornerSubText: getDict("home_service_subText_item2"),
            url: `${routes.menu}?key=0`
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_66741724_M.jpg",
            upperLeftCornerMainText: getDict("home_service_mainText_item3"),
            upperLeftCornerSubText: getDict("home_service_subText_item3"),
            url: `${routes.menu}?key=4`
        }
    ]

    // Update font size based on window width
    const [fontSizeMainText, setFontSizeMainText] = useState(36)
    useEffect(() => {
        if (windowWidth < 750) {
            setFontSizeMainText(28);
        } else {
            setFontSizeMainText(36);
        }
    }, [windowWidth]);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {services.map((item, index) => {
                    return <div key={index} className={style.item}>
                        <a href={item.url}>
                            <HomeItem upperLeftCornerTextFS={fontSizeMainText} infor={item} />
                        </a>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Service;