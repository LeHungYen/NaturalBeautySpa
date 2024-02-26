import React, {useState} from 'react'
import style from './index.module.scss'
import {getDict} from "../../../../services/dict";
export default function NavItem(props) {
    const {name, url, items, index, callBack} = props;
    const [isShowPopup, showPopup] = useState(false);
    const popupMenu = function (){
        if(!items){
            return <></>
        }
        return (
            <div className={style.popup}>
                {items.map((item, idx) => {
                        return (
                            <div className={style.item} key={idx}>
                                <span className={style.caption}>{item.caption}</span>
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
                     (e)=> {
                         if(callBack) {
                             callBack(true, e);
                         }
                         showPopup(true)
                     }}
                 onMouseLeave={
                     (e)=> {
                         if(callBack) {
                             callBack(false, e);
                         }
                         showPopup(false)
                     }}
            >
                <div className={style.in}></div>
                <a className={style.path} href={url}>
                    <span className={style.caption}>{name}</span>
                </a>
                {popupMenu()}
            </div>
        </React.Fragment>
    )
}