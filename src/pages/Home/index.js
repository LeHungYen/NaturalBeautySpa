import style from './index.module.scss'

import Service from './Service'
import Product from './Product'
import New from './New';
import Instagram from './Instagram';
import Pharagraph from './Pharagraph';
import CourseProduct from './Course-Product';
import { useState, useEffect } from 'react';
import post from "../../services/api-call";
import {useDispatch} from "react-redux";
import {updatePageData} from "../../store/action";
import {getLayoutDict} from "../../services/request-body-for-api";
import Banner from "./Banner";
import Loading from "../../components/Loading/loading";
import store from "../../store/store";

const apiData = {
    dictKeys: [
        "nav-about-company",
        "nav-company-profile",
        "nav-customer-feedback",
        "nav-product",
        "nav-reservation",
        "nav-hair-remover",
        "banner-title",
        "banner-sub-title",
        "messenger-reservation",
        "about-item-1-title",
        "about-item-1-sub-title-1st",
        "about-item-1-sub-title-2nd",
        "about-item-2-title",
        "about-item-2-sub-title-1st",
        "about-item-2-sub-title-2nd",
        "about-item-3-title",
        "about-item-3-sub-title-1st",
        "about-item-3-sub-title-2nd",
        "about-item-4-title",
        "about-item-4-sub-title-1st",
        "about-item-4-sub-title-2nd",
        "about-item-5-title",
        "about-item-5-sub-title-1st",
        "about-item-5-sub-title-2nd",
        "about-item-6-title",
        "about-item-6-sub-title-1st",
        "about-item-6-sub-title-2nd",
        "about-popup-sub-title",
        "about-popup-description",
        "about-popup-btn",
        "nav-drawer-sub-3-1",
        "nav-drawer-sub-3-2",
        "nav-drawer-sub-3-3",
        "nav-drawer-sub-3-4",
        "nav-drawer-sub-3-5",
        "nav-drawer-sub-2-1",
        "nav-drawer-sub-2-2",
        "nav-drawer-sub-2-3",
        "nav-drawer-sub-2-4",
        "nav-drawer-sub-2-5",
        "nav-drawer-sub-2-6",
        "nav-drawer-sub-2-7",
    ]
}
export function Home(props) {
    const {layout} = props;
    // check window width
    const [windowWidth, setWindowWidth] = useState(null);
    const dispatch = useDispatch();

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
            <div>
                {store.getState().dictLibrary}
                <Banner/>
            </div>
            <div className={style.service}>
                <Service windowWidth={windowWidth} />
            </div>

            <div className={style.product}>
                <Product windowWidth={windowWidth} />
            </div>

            <div className={style.new}>
                <New windowWidth={windowWidth} />
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
        </div>
    )
}