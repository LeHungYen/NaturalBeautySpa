import style from './index.module.scss'
import NavItem from "./NavItem/nav-item";
import clsx from "clsx";
import {getDict} from "../../../services/dict";
import {useState} from "react";
import NavigationBarDrawerMode from "./drawe/drawer";
export default function Header(props) {
    let {navigations} = props
    const [showPopup, setShowPopup] = useState("none");
    const togglePopup = function(show, e)  {
        if(show) {
            setShowPopup("block");
        } else {
            if(e.clientY > 139) {
                return;
            }
            setShowPopup("none");
        }
    }
    if(!navigations) {
        navigations = [
            {
                name: getDict("nav-company"),
                url: "/"
            },
            {
                name: getDict("nav-customer-feedback"),
                url: "/",
                items: [
                    {
                        caption: getDict("error"),
                        url: "#",
                    },
                    {
                        caption: getDict("error"),
                        url: "#",
                    },
                    {
                        caption: getDict("error"),
                        url: "#",
                    },
                    {
                        caption: getDict("error"),
                        url: "#",
                    }
                ]
            },
            {
                name: getDict("nav-intro"),
                url: "/"
            },
            {
                name: getDict("nav-product"),
                url: "/"
            },
            {
                name: getDict("nav-reservation"),
                url: "/"
            },
            {
                name: getDict("nav-service"),
                url: "/"
            }
        ]
    }
    return (
        <div className={style.header} >
            <div className={style.top}>
                <div className={style.items}>
                    <img className={style.logo} src={require('../../../assets/logo.png')} alt="logo"/>
                    <div className={style.messenger}>
                        <span>Messenger</span>
                    </div>
                    <NavigationBarDrawerMode navigations={navigations}/>
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.container}>
                    {navigations.map((nav, idx) => {
                            if(idx === 0) return <NavItem {...nav} callBack={togglePopup} index={idx}/>
                            return <NavItem {...nav} index={idx}/>
                        }
                    )}
                </div>
            </div>
            <div className={style.intro} id="about" style={{display: showPopup}}
                 onMouseEnter={(e)=>togglePopup(true, e)}
                 onMouseLeave={(e)=>togglePopup(false, e)}
            >
                <div className={style.container}>
                    <div className={style.about}>
                        <div className={style.title}>
                            <h3>About Mareve</h3>
                            <p>{getDict("about-sub-title")}</p>
                        </div>
                        <div className={style.detail}>
                            {getDict("error")}
                        </div>
                        <button>{getDict("error")}</button>
                    </div>
                    <div className={style.table}>
                        <div className={style.row}>
                            <div className={style.col}>
                                <div className={style.title}>
                                    {getDict("error")}
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg"/>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                </div>
                            </div>
                            <div className={style.col}>
                                <div className={style.title}>
                                    {getDict("error")}
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg"/>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.col}>
                                <div className={style.title}>
                                    {getDict("error")}
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg"/>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                </div>
                            </div>
                            <div className={style.col}>
                                <div className={style.title}>
                                    {getDict("error")}
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_40320731_M-830x300.jpg"/>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                    <div className={style.description}>
                                        {getDict("error")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
