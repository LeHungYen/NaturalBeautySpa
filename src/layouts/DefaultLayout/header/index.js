import style from './index.module.scss'
import NavItem from "./NavItem/nav-item";
import clsx from "clsx";
import {getDict} from "../../../services/dict";
export default function Header(props) {
    let {navigations} = props
    if(!navigations) {
        navigations = [
            {
                name: getDict("nav-company"),
                url: "/"
            },
            {
                name: getDict("nav-customer-feedback"),
                url: "/"
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
            <div className={style.items}>
                <img className={style.logo} src={require('../../../assets/logo.png')} alt="logo"/>
                <div className={style.messenger}>
                    <span>Messenger</span>
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.container}>
                    {navigations.map((nav, idx) =>
                        <NavItem {...nav} index={idx}/>
                    )}
                </div>
            </div>
        </div>
    )
}