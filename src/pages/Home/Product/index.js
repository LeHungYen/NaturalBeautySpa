import style from './index.module.scss'

import ProdcutAndServiceItem from '../../../components/ProductAndServiceItem';
import { useState, useEffect } from 'react';
function Service({ windowWidth }) {
    const services = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2021/01/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_0.jpg",
            mainText: "学ぶ",
            subText: "M beauty academy 公式サイト"
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-scaled.jpg",
            mainText: "買う",
            subText: "オンラインショップ"
        }
    ]

    // Update font size based on window width
    const [fontSizeMainText, setFontSizeMainText] = useState(36)
    useEffect(() => {
        if (windowWidth < 750) {
            setFontSizeMainText(28);
        } else {
            setFontSizeMainText(26);
        }
    }, [windowWidth]);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {services.map((item, index) => {
                    return <div className={style.item}>
                        <ProdcutAndServiceItem fontSize={fontSizeMainText} infor={item} index={index} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default Service;