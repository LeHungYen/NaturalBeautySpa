import { useState } from 'react';
import style from './index.module.scss'
import MenuComponent from './MenuComponent';
//libary
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { routes } from '../../config/routes.js'
import { menu } from '../../data/index.js';
import { getDict } from '../../services/dict.js';
function Menu() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');

    const [currentMenu, setCurrentMenu] = useState("")
    const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(key);

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_23376677_M-1.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p>{getDict("menu_banner_bannerText_text_p")}</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <ul>
                    <div className={style.menuPosition}>
                        <a href={routes.home}> <li><ImHome className={style.homeIcon} /></li></a>
                        <a href={routes.mainMenu}><li><MdKeyboardArrowRight className={style.icon} /> <p>{getDict("menu_menu_menuPosition_item2")}</p> </li></a>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p>{getDict("menu_menu_menuPosition_item3")}</p></li>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>{menu[currentMenuItemIndex].titleArea.title}</p></li>
                    </div>
                </ul>
            </div >

            <div className={style.content}>
                <MenuComponent setCurrentMenu={setCurrentMenu} menuItem={menu} currentMenuItemIndex={currentMenuItemIndex} setCurrentMenuItemIndex={setCurrentMenuItemIndex} />
            </div>
        </div >
    );
}

export default Menu;