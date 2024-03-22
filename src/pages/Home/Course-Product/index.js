import style from './index.module.scss'


import HomeItem from '../../../components/HomeItem';
import { useState, useEffect } from 'react';
import { routes } from '../../../config/routes';
import { courseProduct } from '../../../data';
function CourseProduct({ windowWidth }) {


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
                {courseProduct.map((item, index) => {
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