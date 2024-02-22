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
import {updateDict, updatePageData} from "../../store/action";
import {getLayoutDict} from "../../services/request-body-for-api";

const apiData = {
    dictKeys: [
        "home",
        "nav-company",
        "nav-customer-feedback",
        "nav-intro",
        "nav-product",
        "nav-reservation",
        "nav-service"
    ]
}
export function Home(props) {
    const {layout} = props;
    // check window width
    const [windowWidth, setWindowWidth] = useState(null);
    const [apiSucceed, setApiSucceed] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=> {
        const callApi = async function () {
            const data = await post(apiData, "/home/get-page-data");
            updatePageData(dispatch, data);
            setApiSucceed(true);
        }
        callApi();
    },[])

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

    if(!apiSucceed) {
        return <></>
    }
    return (
        <div className={style.container}>
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