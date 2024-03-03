import React from "react"
import {HiOutlineBars3} from "react-icons/hi2";
import {useEffect, useRef, useState} from "react";
import style from './index.module.scss'
import NavItem from "../NavItem/nav-item";
import {getDict} from "../../../../services/dict";

var insideDrawer = false;
export default function NavigationBarDrawerMode(props) {
    let {navigations} = props;
    if(!navigations) {
        navigations = defaultNavigations();
    }
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstOpen, setFirstOpen] = useState(true);

    useEffect(() => {
        const closeDrawer = function(e) {
            if(!insideDrawer) {
                setIsOpen(false);
                document.getElementById("root").classList.remove("disable");
            }
        }
        if(isOpen) {
            window.document.documentElement.addEventListener('click', closeDrawer);
        } else {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        }
        return () => {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        };
    }, [isOpen]);

    const openDrawer = function(e) {
        e.stopPropagation();
        document.getElementById("root").classList.toggle("disable");
        setFirstOpen(false);
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className={style.icon}>
                <HiOutlineBars3 onClick={openDrawer}/>
            </div>
            <div className={`drawer ${isOpen ? 'out' : 'in'} ${isFirstOpen ? '' : 'clicked'}`} id="drawer-popup"
                 style={{transform: `scaleX(${isOpen ? 1: 0})`}}
                 onMouseEnter={()=> insideDrawer = true}
                 onMouseLeave={()=> insideDrawer = false}
            >
                {navigations.map((item, index) =>
                    <NavItem {...item} drawerMode={true} key={index} />
                )}
            </div>
        </React.Fragment>
    )
}

class NavigationItem {
    constructor(name, url, items) {
        this.name = name;
        this.url = url;
        this.items = items;
    }
}

const defaultNavigations = function () {
    return [
        new NavigationItem(getDict("nav_home"), "/"),
        new NavigationItem(getDict("nav_introduce"), "/"),
        new NavigationItem(getDict("nav_doctor"), "/doctor"),
        new NavigationItem(getDict("nav_service_1"), "/service-group/1"),
        new NavigationItem(getDict("nav_service_2"), "/service-group/1"),
        new NavigationItem(getDict("nav_product"), "/product"),
        new NavigationItem(getDict("nav_news"), "/news"),
        new NavigationItem(getDict("nav_contact"), "/contact")
    ]
}