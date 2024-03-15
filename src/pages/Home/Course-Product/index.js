import style from './index.module.scss'


import HomeItem from '../../../components/HomeItem';
import { useState, useEffect } from 'react';
import { routes } from '../../../config/routes';
function CourseProduct({ windowWidth }) {
    const items = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2021/01/c58d3ef034ba53863327adf4365297563_4620693218548729117_210113_20.jpg",
            textCenter: "技術を学ぶ",
            textBelow: "M beauty academyについて",
            url: ""
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/110143683-scaled.jpg",
            textCenter: "商品を見る",
            textBelow: "福田麻理プロデュースアイテムについて",
            url: routes.product
        },
    ]

    // Update font size based on window width
    const [textCenterFS, setTextCenterFS] = useState(24);
    const [textCenterW, setTextCenterW] = useState(150);
    const [textCenterH, setTextCenterH] = useState(150);
    const [textBelowH, setTextBelowH] = useState(60)

    useEffect(() => {
        if (windowWidth < 950) {
            setTextCenterFS(18);
        } else {
            setTextCenterFS(24);
        }

        if (windowWidth < 550) {
            setTextCenterW(100);
            setTextCenterH(100);
            setTextBelowH(50);
        } else {
            setTextCenterW(150);
            setTextCenterH(150);
            setTextBelowH(60)
        }

    }, [windowWidth]);

    return (
        <div className={style.container}>
            <div className={style.items}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className={style.item}>
                            <a href={item.url}>
                                <HomeItem textCenterW={textCenterW} textCenterH={textCenterH} textCenterFS={textCenterFS} textBelowH={textBelowH} textBelowFS={"16"} infor={item} />
                            </a>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default CourseProduct;