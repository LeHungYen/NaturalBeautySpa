import style from './index.module.scss'
import NavItem from "./NavItem/nav-item";
import clsx from "clsx";
import {getDict} from "../../../services/dict";
import {useState} from "react";
import NavigationBarDrawerMode from "./drawe/drawer";
import store from "../../../store/store";
import {getAboutData} from "../../../pages/About";
import AboutItem from "../../../components/AboutItem";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../../store/action";
export default function Header(props) {
    let {navigations} = props
    const [showPopup, setShowPopup] = useState("none");
    const items = getAboutData();
    const dispatch = useDispatch();
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
                name: getDict("nav-about-company"),
                url: "/about",
                items: [
                    {
                        caption: getDict("about-item-1-title"),
                        url: "#",
                    },
                    {
                        caption: getDict("about-item-2-title"),
                        url: "#",
                    },
                    {
                        caption: getDict("about-item-3-title"),
                        url: "#",
                    },
                    {
                        caption: getDict("about-item-4-title"),
                        url: "#",
                    },
                    {
                        caption: getDict("about-item-5-title"),
                        url: "#",
                    },
                    {
                        caption: getDict("about-item-6-title"),
                        url: "#",
                    },
                ]
            },
            {
                name: getDict("nav-hair-remover"),
                url: "/",
                items: [
                    {
                        caption: getDict("nav-drawer-sub-2-1"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-2"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-3"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-4"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-5"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-6"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-2-7"),
                        url: "#",
                    },
                ]
            },
            {
                name: getDict("nav-product"),
                url: "/"
            },
            {
                name: getDict("nav-customer-feedback"),
                url: "/"
            },
            {
                name: getDict("nav-company-profile"),
                url: "/company",
                items: [
                    {
                        caption: getDict("nav-drawer-sub-3-1"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-2"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-3"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-4"),
                        url: "#",
                    },
                    {
                        caption: getDict("nav-drawer-sub-3-5"),
                        url: "#",
                    },
                ]
            },
            {
                name: getDict("nav-reservation"),
                url: "/reservation"
            }
        ]
    }
    return (
        <div className={style.header} >
            <div className={style.top}>
                <div className={style.items}>
                    <a href="/">
                        <img className={style.logo} src={require('../../../assets/logo.png')} alt="logo"/>
                    </a>
                    <div className={style.messenger}>
                        <span>{getDict("messenger-reservation")}</span>
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
                            <p>{getDict("about-popup-sub-title")}</p>
                        </div>
                        <div className={style.detail}>
                            {getDict("about-popup-description")}
                        </div>
                        <button>{getDict("about-popup-btn")}</button>
                    </div>
                    <div className="about-item-popup">
                        {items.map((item, idx)=>
                            <AboutItem {...item}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
