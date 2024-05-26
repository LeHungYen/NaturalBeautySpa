import style from './index.module.scss'
import Service from './Service'
import Product from './Product'
import New from './New';
import Instagram from './Instagram';
import Pharagraph from './Pharagraph';
import CourseProduct from './Course-Product';
import { useState, useEffect } from 'react';
import post from "../../services/api-call";
import { useDispatch } from "react-redux";
import { updatePageData } from "../../store/action";
import { getLayoutDict } from "../../services/request-body-for-api";
import Banner from "./Banner";
import Loading from "../../components/Loading/loading";
import store from "../../store/store";
import NewBanner from "./NewBanner/NewBanner";

export function Home(props) {
    const { layout } = props;
    // check window width
    const [windowWidth, setWindowWidth] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //end

    return (
        <div className={style.container}>
            {/*<div>*/}
            {/*    {store.getState().dictLibrary}*/}
            {/*    <Banner />*/}
            {/*</div>*/}
            <div>
                <NewBanner/>
            </div>
            <div className={style.service}>
                <Service windowWidth={windowWidth} />
            </div>

            <div className={style.product}>
                <Product windowWidth={windowWidth} />
            </div>

            <div className={style.new}>
                <New />
            </div>

            <div className={style.instagram}>
                <Instagram windowWidth={windowWidth} />
            </div>

            <div className={style.pharagraph}>
                <Pharagraph windowWidth={windowWidth} />
            </div>

            <div className={style.courseProduct}>
                <CourseProduct windowWidth={windowWidth} />
            </div>
            <a href="/menu">
                <div className={style.floating}>
                    脱毛メニュー
                </div>
            </a>
        </div>
    )
}