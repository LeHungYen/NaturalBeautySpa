import {useState} from "react";
import style from './index.module.scss'
import classNames from "classnames";
export default function Header(props) {
    const {data} = props
    return (
        <div className={style.header} >
            <div className={classNames(style.headerItemContainer, style.siteTopBar)}>
                <img className={style.logo} src={require('../../../assets/logo-2.png')} alt="logo"/>
                <div className={style.topBarRightBox}>

                </div>
            </div>
            <div className={style.headerItemContainer}>

            </div>
        </div>
    )
}