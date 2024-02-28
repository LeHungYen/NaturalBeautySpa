import React, {useState} from 'react'
import style from './index.module.scss'
import { FaChevronDown } from "react-icons/fa";
export default function NavItem(props) {
    const {name, url, items, drawerMode, callBack} = props;
    const [firstOpen, setFirstOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const popupMenu = function (){
        if(!items){
            return <></>
        }
        return (
            <div className={`${style.popup} ${firstOpen ? '' : 'interacted'} ${openSubMenu ? 'open' : 'close'}`}>
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
                     (e)=> {
                         if(!drawerMode) {
                             if (callBack) {
                                 callBack(true, e);
                             }
                             if (firstOpen) {
                                 setFirstOpen(false);
                             }
                         }
                     }}
                 onMouseLeave={
                     (e)=> {
                         if(!drawerMode) {
                             if(callBack) {
                                 callBack(false, e);
                             }
                         }
                     }}
            >
                <div className={style.in}></div>
                <a className={style.path} href={url}>
                    <span className={style.caption}>{name}</span>
                </a>
                <div className={style.show} onClick={(e)=>{
                    e.stopPropagation()
                    if(drawerMode) {
                        setOpenSubMenu(!openSubMenu)
                        if(firstOpen) {
                            setFirstOpen(false);
                        }
                    }
                }}
                     style={{display: `${(items) ? 'flex' : 'none'}`}}
                >
                    <FaChevronDown/>
                </div>
                {drawerMode ? <></> : popupMenu()}
            </div>
            {drawerMode ? popupMenu() : <></>}
        </React.Fragment>
    )
}