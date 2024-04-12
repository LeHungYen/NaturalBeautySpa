import style from './index.module.scss'
import { routes } from '../../../config/routes.js'
import { getDict } from '../../../services/dict.js';
import React from 'react';
import { menu as data } from '../../../data/index.js';
function MainMenu() {
    const menu = data();
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_23376677_M-1.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>{getDict("mainMenu_title")}</p>
                        <p className={style.sub}>
                            {getDict("mainMenu_sub")?.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</p>
                    </div>
                </div>
            </div>

            <div className={style.menu}>
                <div className={style.img}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_36120099_M.jpg"></img>
                    <p>{getDict("mainMenu_menu_img_p")}</p>
                </div>

                <div className={style.linkMenu}>
                    <ul>
                        {menu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url}>{item.titleArea.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;