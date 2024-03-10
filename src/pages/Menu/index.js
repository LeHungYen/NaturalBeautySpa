import { useState } from 'react';
import style from './index.module.scss'
import MenuComponent from './MenuComponent';
//libary
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
function Menu() {
    const [currentMenu, setCurrentMenu] = useState("")


    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_23376677_M-1.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p>脱毛メニュー</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <ul>
                    <div className={style.menuPosition}>
                        <li><ImHome className={style.homeIcon} /></li>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p>脱毛メニュー</p></li>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p>脱毛</p></li>
                        <li><MdKeyboardArrowRight className={style.icon} /> <p style={{ color: "#2dccd3" }}>{currentMenu}</p></li>
                    </div>
                </ul>
            </div>

            <div className={style.content}>
                <MenuComponent setCurrentMenu={setCurrentMenu}/>
            </div>
        </div>
    );
}

export default Menu;