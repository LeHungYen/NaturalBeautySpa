import React, {useState} from 'react'
import style from './index.module.scss'
import {FaChevronDown} from "react-icons/fa";
import styled, {css, keyframes} from "styled-components";

export default function NavItem(props) {
    let {name, url, items, drawerMode, callBack, index} = props;
    const [firstOpen, setFirstOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const getCss = function () {
        if (!drawerMode || firstOpen || !items) {
            return '';
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
          }`;

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
          }`;
        if (openSubMenu) {
            return css`
                display: flex !important;
                animation: ${inAnimation} ${0.5}s ease forwards;
            `;
        }
        return css`
            display: flex !important;
            animation: ${outAnimation} ${0.5}s ease forwards;
            height: 0;
        `;
    }

    const AnimatedDiv = styled.div `
        ${getCss()}
    `
    const popupMenu = function () {
        if (!items || (!drawerMode && index === 0)) {
            return <></>
        }
        return (
            <AnimatedDiv className={`${style.popup} ${firstOpen ? '' : 'interacted'} ${openSubMenu ? 'open' : 'close'}`}>
                {items.map((item, idx) => {
                    return (
                        <div className={style.item} key={idx}>
                            <a className={style.path}>
                                <span className={style.caption}>{item.caption}</span>
                            </a>
                        </div>
                    )
                })}
            </AnimatedDiv>
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