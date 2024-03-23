import { useEffect, useState } from 'react';
import style from './index.module.scss'
import { routes } from '../../../config/routes';

// libary
import { PiCheckSquareLight } from "react-icons/pi";
import { getDict } from '../../../services/dict';
function MenuComponent({ setCurrentMenu, menuItem, currentMenuItemIndex, setCurrentMenuItemIndex }) {
    return (
        <div className={style.container}>

            <div className={style.containerCol1}>
                <div className={style.title}>
                    <p>{getDict("menuComponent_containerCol1_title")}</p>
                </div>

                <ul>
                    {menuItem.map((item, index) => {
                        return (
                            <a href={item.url}>
                                <li
                                    key={index}
                                    style={{ color: currentMenuItemIndex == index ? '#2dccd3' : "" }}>
                                    {item.titleArea.title}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </div>

            <div className={style.col2}>
                <div className={style.titleArea}>
                    <div className={style.title}>

                        {/* <p>Full body hair removal</p> */}
                        <p>{menuItem[currentMenuItemIndex].titleArea.title}</p>
                    </div>

                    <div className={style.img}>
                        <img src={menuItem[currentMenuItemIndex].titleArea.img}></img>
                    </div>

                    <div className={style.sub}>
                        <p className={style.subTitle}>{menuItem[currentMenuItemIndex].titleArea.sub.subTitle}</p>
                        {menuItem[currentMenuItemIndex].titleArea.sub.description.map((item, index) => {
                            return (
                                <p key={index} className={style.description}>{item}</p>
                            )
                        })}
                    </div>
                </div>

                {menuItem[currentMenuItemIndex].dataList.title && <div className={style.dataList}>
                    <div className={style.title}>
                        <p>{menuItem[currentMenuItemIndex].dataList.title}</p>
                    </div>

                    <ul>
                        {menuItem[currentMenuItemIndex].dataList.item.map((item, index) => {
                            return (
                                <li><div key={index} className={style.liItem}><PiCheckSquareLight className={style.icon} />{item}</div></li>
                            )
                        })}
                    </ul>
                </div>}

                {menuItem[currentMenuItemIndex].contentList[0].title && <div className={style.contentList}>
                    {menuItem[currentMenuItemIndex].contentList.map((item, index) => {
                        return (
                            <div key={index} className={style.item}>
                                <div className={style.title}>
                                    <p>{item.title}</p>
                                </div>

                                <div className={style.itemDFlex}>
                                    <div className={style.itemImg}>
                                        <img src={item.img}></img>
                                    </div>

                                    <div className={style.itemSubText}>
                                        <p>{item.subText}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    <div className={style.button}>
                        <button><a href={routes.reservation}>{getDict("menuComponent_button_reservation")}</a></button>
                    </div>
                </div>}



                <div className={style.priceList}>
                    <div className={style.title}>
                        <p>{getDict("menuComponent_priceList_title")}</p>
                    </div>



                    <table>
                        <tbody>
                            {menuItem[currentMenuItemIndex].priceList.item.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.sub}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className={style.description}>
                        {menuItem[currentMenuItemIndex].priceList.description.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })}
                    </div>
                </div>

                <div className={style.relatedPost}>
                    <div className={style.title}>
                        <p>{getDict("menuComponent_relatedPost_title")}</p>
                    </div>

                    <ul>
                        {menuItem.map((item, index) => {
                            return (
                                <a key={index} href={item.url}>
                                    <li className={style.relatedPostItem}>
                                        <div className={style.img}>
                                            <img src={item.titleArea.img}></img>
                                        </div>

                                        <div className={style.text}>
                                            <p className={style.relatedPostItemTitle}>{item.titleArea.title}</p>
                                            <p className={style.relatedPostItemSub}>{item.titleArea.sub.description}</p>
                                        </div>
                                    </li>
                                </a>
                            )
                        })}
                    </ul>
                </div>


            </div>

        </div >
    );
}

export default MenuComponent;