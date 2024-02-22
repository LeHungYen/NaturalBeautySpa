import React, {useState} from 'react'
import style from './index.module.css'
export default function NavItem(props) {
    const {name, url, items} = props;
    const [isShowPopup, showPopup] = useState(false);
    const popupMenu = function (){
        if(!items){
            return <></>
        }
        return (
            <div className={"sub-navigation-menu-item " + (isShowPopup ? "visible" : "hidden")}>
                {items.map((item, index) =>
                    <div className="navigation-group-item" key={index}>
                        <span className="group-header">{item.groupName}</span>
                        {item.items.map((subItem, subIndex) =>
                            <NavItem {...subItem} key={subIndex} />
                        )}
                    </div>
                )}
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={style.container}
                 onMouseEnter={
                     ()=> {
                         showPopup(true)
                     }}
                 onMouseLeave={
                     ()=> {
                         showPopup(false)
                     }}
            >
                <a className={style.path} href={url}>
                    <span className={style.caption}>{name}</span>
                </a>
                {popupMenu()}
            </div>
        </React.Fragment>
    )
}