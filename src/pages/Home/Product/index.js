import style from './index.module.scss'

import HomeItem from '../../../components/HomeItem';
import { useState, useEffect } from 'react';
import { getDict } from '../../../services/dict';
function Product({ windowWidth }) {
    const services = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2021/01/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_0.jpg",
            upperLeftCornerMainText: getDict("home_product_mainText_item1"),
            upperLeftCornerSubText:  getDict("home_product_subText_item1"),
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/1101417345-scaled.jpg",
            upperLeftCornerMainText: getDict("home_product_mainText_item2"),
            upperLeftCornerSubText:  getDict("home_product_subText_item2"),
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
                    return <div key={index} className={style.item}>
                        <HomeItem upperLeftCornerTextFS={fontSizeMainText} infor={item} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default Product;