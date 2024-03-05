import React, {useState} from 'react'
import style from './index.module.scss'
import {FaChevronDown} from "react-icons/fa";
import {css, keyframes} from "styled-components";

export default function NavItem(props) {
    let {name, url, items, drawerMode, callBack} = props;
    const [firstOpen, setFirstOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const getAnimation = function () {
        if (firstOpen || !items) {
            return {}
        }
        const inAnimation = keyframes`
          0% {
            transform: scaleY(0);
            height: 0;
            transform-origin: top;
          }
          100% {
            transform: scaleY(100%);
            transform-origin: top;
            height: ${items.length * 60}px;
          }`

        const outAnimation = keyframes`
          0% {
            transform: scaleY(100%);
            transform-origin: top;
            height: ${items.length * 60}px;
          }
          100% {
            transform: scaleY(0);
            transform-origin: top;
            height: 0;
          }`
        if (openSubMenu) {
            return {
                display: "flex",
                animation: css`${inAnimation} ${0.5}s ease forwards`,
            }
        }
        return {
            display: "flex",
            animation: css`${outAnimation} ${0.5}s ease forwards`,
            height: 0,
        }
    }
    const popupMenu = function () {
        if (!items) {
            return <></>
        }
        return (
            <div className={`${style.popup} ${firstOpen ? '' : 'interacted'} ${openSubMenu ? 'open' : 'close'}`}
                 style={getAnimation()}
            >
                {items.map((item, idx) => {
                    return (
                        <div className={style.item} key={idx}>
                            <a className={style.path}>
                                <span className={style.caption}>{item.caption}</span>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={style.container}
                 onMouseEnter={
                     (e) => {
                         if (!drawerMode) {
                             if (callBack) {
                                 callBack(true, e);
                             }
                             if (firstOpen) {
                                 setFirstOpen(false);
                             }
                         }
                     }}
                 onMouseLeave={
                     (e) => {
                         if (!drawerMode) {
                             if (callBack) {
                                 callBack(false, e);
                             }
                         }
                     }}
            >
                <div className={style.in}></div>
                <a className={style.path} href={url}>
                    <span className={style.caption}>{name}</span>
                </a>
                <div className={style.show} onClick={(e) => {
                    e.stopPropagation()
                    if (drawerMode) {
                        setOpenSubMenu(!openSubMenu)
                        if (firstOpen) {
                            setFirstOpen(false);
                        }
                    }
                }}
                     style={{display: `${(items && drawerMode) ? 'flex' : 'none'}`}}
                >
                    <FaChevronDown/>
                </div>
                {drawerMode ? <></> : popupMenu()}
            </div>
            {drawerMode ? popupMenu() : <></>}
        </React.Fragment>
    )
}