import style from './index.module.scss'
import ProdcutAndServiceItem from '../../../components/ProductAndServiceItem';
import { useState, useEffect } from 'react';
function Service({ windowWidth }) {
    const services = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_18087353_M-e1602471243188.jpg",
            mainText: "顔",
            subText: "FACE"
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_18087337_M-e1602471279127.jpg",
            mainText: "全身",
            subText: "BODY"
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_66741724_M.jpg",
            mainText: "VIO",
            subText: "VIO"
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
                    return <div className={style.item}>
                        <ProdcutAndServiceItem fontSize={fontSizeMainText} infor={item} index={index} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default Service;