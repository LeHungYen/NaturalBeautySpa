import style from './index.module.scss'
import NavItem from "./NavItem/nav-item";
import { getDict } from "../../../services/dict";
import { useState, useRef } from "react";
import NavigationBarDrawerMode from "./drawe/drawer";
import { getAboutData } from "../../../pages/About";
import AboutItem from "../../../components/AboutItem";
import { useDispatch } from "react-redux";
import { routes } from "../../../config/routes.js"
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../../components/Login/index.js';
import hasAccessCookie from "../../../services/common";
export default function Header(props) {
    const navigate = useNavigate();
    let { navigations } = props
    const [showPopup, setShowPopup] = useState("none");
    const items = getAboutData();
    const dispatch = useDispatch();
    const togglePopup = function (show, e) {
        if (show) {
            setShowPopup("block");
        } else {
            setShowPopup("none");
        }
    }
    if (!navigations) {
        navigations = [
            {
                name: getDict("nav-about-company"),
                url: "/about",
                items: [
                    {
                        caption: getDict("about-item-1-title"),
                        url: "/about/message",
                    },
                    {
                        caption: getDict("about-item-2-title"),
                        url: "/about/feature",
                    },
                    {
                        caption: getDict("about-item-3-title"),
                        url: "/about/important",
                    },
                    {
                        caption: getDict("about-item-4-title"),
                        url: "/about/academy",
                    },
                    {
                        caption: getDict("about-item-5-title"),
                        url: "/about/product",
                    },
                    {
                        caption: getDict("about-item-6-title"),
                        url: "/about/access",
                    },
                ]
            },
            {
                name: getDict("nav-hair-remover"),
                url: routes.mainMenu,
                items: [
                    {
                        caption: getDict("nav_drawer_sub_2_1"),
                        url: `${routes.menu}?key=0`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-2"),
                        url: `${routes.menu}?key=1`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-3"),
                        url: `${routes.menu}?key=2`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-4"),
                        url: `${routes.menu}?key=3`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-5"),
                        url: `${routes.menu}?key=4`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-6"),
                        url: `${routes.menu}?key=5`,
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-7"),
                        url: `${routes.menu}?key=6`,
                    },
                ]
            },
            {
                name: getDict("nav-product"),
                url: "/product"
            },
            // {
            //     name: getDict("nav-customer-feedback"),
            //     url: "/"
            // },
            {
                name: getDict("nav-company-profile"),
                url: "/company",
                items: [
                    {
                        caption: "プロダクト",
                        url: routes.storeProduct
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-1"),
                        url: routes.news,
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-2"),
                        url: "/contact",
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-3"),
                        url: routes.privacyPolicy,
                    },

                ]
            },
            {
                name: getDict("nav-reservation"),
                url: "/reservation"
            },
            {
                name: "ご記入募集フォーム",
                url: routes.news_jobs
            },


        ]
    }

    const loginRef = useRef(null);
    const exitLogin = () => {
        loginRef.current.style.display = "none";
    }
    const openLogin = () => {
        loginRef.current.style.display = "block";
    }
    const getLabel = () => {
        if (hasAccessCookie() && window.localStorage.getItem("user")) {
            return window.localStorage.getItem("user");
        }
        return "Login";
    }
    return (
        <div className={style.header} >
            <div className={style.top}>
                <div className={style.items}>
                    <a href={routes.home}>
                        <div className={style.logo}>
                            <img src={require('../../../assets/logoWhite.jpg')} alt="logo" />
                            <p className={style.logoText}>Natural Beauty</p>
                        </div>
                    </a>
                    {/*<div className={style.messenger}>*/}
                    {/*    <span>{getDict("messenger-reservation")}</span>*/}
                    {/*</div>*/}
                    <NavigationBarDrawerMode navigations={navigations} />
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.container}>
                    {navigations.map((nav, idx) => {
                        if (idx === 0) return <NavItem {...nav} callBack={togglePopup} index={idx} />
                        return <NavItem {...nav} index={idx} />
                    }
                    )}

                    {/* <NavItem index={100}    name= "Login" /> */}
                </div>
            </div>
            <div className={style.intro} id="about" style={{ display: showPopup }}
                onMouseEnter={(e) => togglePopup(true, e)}
                onMouseLeave={(e) => togglePopup(false, e)}
            >
                <div className={style.container}>
                    <div className={style.about}>
                        <div className={style.title}>
                            <h3 style={{ textDecoration: 'underline' }}>About <br /> Natural Beauty</h3>
                        </div>
                        <div className={style.detail}>
                            {getDict("about-popup-description")}
                        </div>
                        <div className={style.detail}>
                            {getDict("about-popup-description1")}
                        </div>
                        <div className={style.detail}>
                            {getDict("about-popup-description2")}
                        </div>
                        <a href={routes.about}><button onClick={() => setShowPopup("none")}>{getDict("about-popup-btn")}</button></a>
                    </div>
                    <div className="about-item-popup">
                        {items.map((item, idx) =>
                            <div key={idx} onClick={() => { window.location.href = item.url }}>
                                <AboutItem {...item} popup={true} zoomEffect={true} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/*<div className={style.login}>*/}
            {/*    <button onClick={openLogin}>{getLabel()}</button>*/}
            {/*</div>*/}
            <Login exitLogin={exitLogin} loginRef={loginRef} />
        </div>
    )
}
