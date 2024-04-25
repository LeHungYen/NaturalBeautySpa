import style from './index.module.scss'
import { ImHome } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import HomeItem from '../../../components/HomeItem';
import { useState, useEffect } from 'react';
import store from "../../../store/store";
import Loading from "../../../components/Loading/loading";
import { routes } from '../../../config/routes';
import { useNavigate, Link } from 'react-router-dom';
import { getDict } from '../../../services/dict';
function Footer() {
    const navigate = useNavigate();
    const row1Item = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_69294004_M.jpg",
            textBelow: getDict("defaultLayout_row1_item1"),
            url: routes.about_access
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23376677_M-e1603864881118.jpg",
            textBelow: getDict("defaultLayout_row1_item2"),
            url: routes.mainMenu
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_21787413_M.jpg",
            textBelow: getDict("defaultLayout_row1_item3"),
            url: routes.company
        }
    ]

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


    // Update font size based on window width
    const [row1FS, setRow1FS] = useState(20)
    const [textBelowH, setTextBelowH] = useState(60)
    useEffect(() => {
        if (windowWidth < 750) {
            setRow1FS(16);
        } else {
            setRow1FS(20);
        }

        if (windowWidth < 550) {
            setTextBelowH(50);
        } else {
            setTextBelowH(60)
        }
    }, [windowWidth]);
    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.items}>
                    {row1Item.map((item, index) => {
                        return (
                            <div key={index} className={style.item}>
                                <a href={item.url}>
                                    <HomeItem infor={item} textBelowH={textBelowH} textBelowFS={row1FS} textBelowC="#2bb8d1" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={style.row2}>
                <div className={style.displayFlex}>
                    <div className={style.col1}>
                        <a href={routes.home}>
                            <div className={style.logo}>
                                <img src={require('../../../assets/logoWhite.jpg')} alt="logo" />
                                <p className={style.logoText}>Natural Beauty</p>
                            </div>
                        </a>

                        <ul>
                            <li><span>{getDict("defaultLayout_row2_col1_item2")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item5")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item6")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item7")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item8")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item9")}</span></li>
                            <li><span>{getDict("defaultLayout_row2_col1_item10")}</span></li>
                        </ul>

                    </div>

                    <div className={style.col2}>
                        <p className={style.title}>{getDict("defaultLayout_row2_col2_item1")}</p>

                        <ul>
                            <li><span>{getDict("defaultLayout_row2_col2_item2")}</span></li>
                        </ul>

                        <div className={style.button}>
                            <button onClick={() => window.open("https://www.facebook.com/naturalbeauty.625/")}><a >{getDict("defaultLayout_row2_col2_item4")}</a></button>
                        </div>
                    </div>

                    <div className={style.col3}>
                        <p className={style.title}>
                            {getDict("defaultLayout_row2_col3_item1")}
                        </p>

                        <ul>
                            <li><span>{getDict("defaultLayout_row2_col3_item3")}</span></li>
                        </ul>

                        <div className={style.button}>
                            <button onClick={() => window.open("https://www.instagram.com/natural.beauty_japan?igsh=NWYzc2QzZjBmcDVk&utm_source=qr")}><a>{getDict("defaultLayout_row2_col3_item4")}</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.row3}>
                <div className={style.displayFlex}>
                    <div className={style.col1}>
                        <div className={style.home}>
                            <ImHome className={style.icon} onClick={() => navigate(routes.home)} />
                        </div>

                        <ul>
                            <li><a href={routes.about}>{getDict("defaultLayout_row3_col1_item1")}</a></li>
                            <li><a href={routes.mainMenu}>{getDict("defaultLayout_row3_col1_item2")}</a></li>
                            <li><a>{getDict("defaultLayout_row3_col1_item3")}</a></li>
                            <li><a href={routes.product}>{getDict("defaultLayout_row3_col1_item4")}</a></li>
                            <li><a>{getDict("defaultLayout_row3_col1_item5")}</a></li>
                            <li><a href={routes.company}>{getDict("defaultLayout_row3_col1_item6")}</a></li>
                            <li><a href={routes.news}>{getDict("defaultLayout_row3_col1_item7")}</a></li>
                            <li><a href={routes.privacyPolicy}>{getDict("defaultLayout_row3_col1_item8")}</a></li>
                            <li><a href={routes.about_access}>{getDict("defaultLayout_row3_col1_item9")}</a></li>
                        </ul>
                    </div>

                    <div className={style.col2}>
                        <div className={style.title} >
                            <a href={routes.mainMenu}><p>{getDict("defaultLayout_row3_col2_item1")}</p></a>
                        </div>

                        <ul>
                            <li><a href={`${routes.menu}?key=0`}>{getDict("defaultLayout_row3_col2_item2")}</a></li>
                            <li><a href={`${routes.menu}?key=1`}>{getDict("defaultLayout_row3_col2_item3")}</a></li>
                            <li><a href={`${routes.menu}?key=2`}>{getDict("defaultLayout_row3_col2_item4")}</a></li>
                            <li><a href={`${routes.menu}?key=3`}>{getDict("defaultLayout_row3_col2_item5")}</a></li>
                            <li><a href={`${routes.menu}?key=4`}>{getDict("defaultLayout_row3_col2_item6")}</a></li>
                            <li><a href={`${routes.menu}?key=5`}>{getDict("defaultLayout_row3_col2_item7")}</a></li>
                            <li><a href={`${routes.menu}?key=6`}>{getDict("defaultLayout_row3_col2_item8")}</a></li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className={style.row4}>
                <div className={style.displayFlex}>
                    <div className={style.social}>
                        <ul>
                            <li><FaInstagram className={style.instagramIcon} /></li>
                            <li><FaWifi className={style.wifiIcon} /></li>
                        </ul>
                    </div>

                    <div className={style.copyright}>
                        <p>{getDict("defaultLayout_row4_col2_item1")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;