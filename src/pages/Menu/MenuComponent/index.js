import { useEffect, useState } from 'react';
import style from './index.module.scss'
import { routes } from '../../../config/routes';

// libary
import { PiCheckSquareLight } from "react-icons/pi";
function MenuComponent({ setCurrentMenu, menuItem, currentMenuItemIndex, setCurrentMenuItemIndex }) {
    // const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(key);
    return (
        <div className={style.container}>

            <div className={style.containerCol1}>
                <div className={style.title}>
                    <p>脱毛</p>
                </div>

                <ul>
                    {menuItem.map((item, index) => {
                        return (
                            <a href={`${routes.menu}?key=${index}`}>
                                <li
                                    key={index}
                                    // onClick={() => setCurrentMenuItemIndex(index)}
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


                    {/* <div className={style.item}>
                        <div className={style.title}>
                            <p>Leave all the unwanted hair to me</p>
                        </div>

                        <div className={style.itemDFlex}>
                            <div className={style.itemImg}>
                                <img src='https://mareve.co.jp/wp-content/uploads/2020/10/pixta_58605939_M-e1603855032637-1024x735.jpg'></img>
                            </div>

                            <div className={style.itemSubText}>
                                <p>Please leave all your unwanted hair matters to us, including things that you can't discuss at major salons and the skin condition you want to achieve. Since we are a private salon, we have reliable techniques that we can provide.</p>
                            </div>
                        </div>
                    </div> */}

                    <div className={style.button}>
                        <button><a href={routes.reservation}>予約専用フォームへ</a></button>
                    </div>
                </div>}



                <div className={style.priceList}>
                    <div className={style.title}>
                        <p>MENU</p>
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
                        <p>脱毛</p>
                    </div>

                    <ul>
                        <a href={`${routes.menu}?key=0`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>全身脱毛</p>
                                    <p className={style.relatedPostItemSub}>マリーブの確かな技術で、全身のムダ毛をなくします。 他社で満足でき…</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=1`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_45689954_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>顔</p>
                                    <p className={style.relatedPostItemSub}>施術後のお肌に感動してください。 すべての美肌の基礎となるお手入れ…</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=2`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_55082057_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>上半身</p>
                                    <p className={style.relatedPostItemSub}>ワキ、首、腕、指などの細かなパーツと、他人から一番見られる上半身。 …</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=3`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_62874708_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>下半身</p>
                                    <p className={style.relatedPostItemSub}>脚（太もも、ひざ、すね）、腰回り、ヒップ（VIOを除く）、足の甲や指…</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=4`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_65800245_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>デリケートゾーン</p>
                                    <p className={style.relatedPostItemSub}>デリケートな部位こそ、お客様の肌、毛の状態を見極めて施術させていただ….</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=5`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2021/02/1pixta_54718016_M-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>メンズ脱毛</p>
                                    <p className={style.relatedPostItemSub}>全身はもちろん、ヒゲやワキなどの細かい部位や、デリケートゾーンの脱毛…</p>
                                </div>
                            </li>
                        </a>

                        <a href={`${routes.menu}?key=6`}>
                            <li className={style.relatedPostItem}>
                                <div className={style.img}>
                                    <img src="https://mareve.co.jp/wp-content/uploads/2021/06/kids_L-830x300.jpg"></img>
                                </div>

                                <div className={style.text}>
                                    <p className={style.relatedPostItemTitle}>キッズ脱毛</p>
                                    <p className={style.relatedPostItemSub}>お子様も脱毛する方が増えております。 「毛深い」「ムダ毛が気になる…</p>
                                </div>
                            </li>
                        </a>









                    </ul>
                </div>


            </div>

        </div>
    );
}

export default MenuComponent;