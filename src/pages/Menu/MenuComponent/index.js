import style from './index.module.scss'


// libary
import { PiCheckSquareLight } from "react-icons/pi";
function MenuComponent() {
    return (
        <div className={style.container}>

            <div className={style.col1}>
                <div className={style.title}>
                    <p>hair removal</p>
                </div>

                <ul>
                    <li>Full body hair removal</li>
                    <li>face</li>
                    <li>upper body</li>
                    <li>lower body</li>
                    <li>delicate zone</li>
                    <li>mens hair removal</li>
                    <li>kids hair removal</li>
                </ul>
            </div>

            <div className={style.col2}>
                <div className={style.titleArea}>
                    <div className={style.title}>
                        <p>Full body hair removal</p>
                    </div>

                    <div className={style.img}>
                        <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg"></img>
                    </div>

                    <div className={style.sub}>
                        <p className={style.subTitle}>Quality-first “hair removal” that suits each individual’s skin</p>
                        <p className={style.description}>Marieve's proven technology will eliminate unwanted hair from all over your body.</p>
                        <p className={style.description}>Even those who were not satisfied with other companies can achieve true smooth skin.</p>
                    </div>
                </div>

                <div className={style.dataList}>
                    <div className={style.title}>
                        <p>For people like this</p>
                    </div>

                    <ul>
                        <li><div className={style.liItem}><PiCheckSquareLight className={style.icon} /> I want to leave my whole body to you.</div></li>
                        <li><div className={style.liItem}><PiCheckSquareLight className={style.icon} /> I want the treatment to be carefully tailored to my skin.</div></li>
                        <li><div className={style.liItem}><PiCheckSquareLight className={style.icon} /> I want to aim for smooth skin all over my body.</div></li>
                        <li><div className={style.liItem}><PiCheckSquareLight className={style.icon} /> Seeking quality first</div></li>
                        <li><div className={style.liItem}><PiCheckSquareLight className={style.icon} /> I want to be freed from dealing with unwanted hair.</div></li>
                        <li>
                            <div className={style.liItem}> <PiCheckSquareLight className={style.icon} /> I want to choose a salon where I can discuss my work situation (professional sports, model photography, etc.)</div>
                        </li>
                    </ul>
                </div>

                <div className={style.contentList}>
                    <div className={style.item}>
                        <div className={style.title}>
                            <p>The best hair removal for you</p>
                        </div>

                        <div className={style.itemDFlex}>
                            <div className={style.itemImg}>
                                <img src='https://mareve.co.jp/wp-content/uploads/2020/10/pixta_49944902_M-1024x682.jpg'></img>
                            </div>

                            <div className={style.itemSubText}>
                                <p>At Mareeve, we provide treatments that suit all customers, young and old, men and women, so we perform treatments that suit each person's skin type, hair condition, and work situation (professional sports, model photography, etc.). There is no problem even if your skin is tanned. Our hair removal professionals will be happy to assist you, so please feel free to contact us.</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.item}>
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
                    </div>

                    <div className={style.button}>
                        <button>Go to the reservation form</button>
                    </div>
                </div>

                <div className={style.priceList}>
                    <div className={style.title}>
                        <p>MENU</p>
                    </div>

                    <ul>
                        <li>
                            <div className={style.col1}>
                                <p>Full body hair removal (1 time)</p>
                            </div>
                            <div className={style.col2}>
                                <p>Normally ¥55,000 → Now offering a great deal! Please contact us for details</p>
                            </div>
                        </li>

                        <li>
                            <div className={style.col1}>
                                <p>Full body hair removal (6 times)</p>
                            </div>
                            <div className={style.col2}>
                                <p>¥253,000</p>
                            </div>
                        </li>
                    </ul>

                    <div className={style.description}>
                        <p>*All prices include consumption tax.</p>
                        <p>*Prices may change due to campaigns, introductions, etc. Please contact us for more information.</p>
                    </div>
                </div>

                <div className={style.relatedPost}>
                    <div className={style.title}>
                        <p>hair removal </p>
                    </div>

                    <ul>
                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>Full body hair removal</p>
                                <p className={style.subtitle}>Marieve's proven technology will eliminate unwanted hair from all over your body. I was satisfied with another company...</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_45689954_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>face</p>
                                <p className={style.subtitle}>Please be impressed with your skin after the treatment. Care is the basis of all beautiful skin...</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_55082057_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>upper body</p>
                                <p className={style.subtitle}>Small parts such as the armpits, neck, arms, and fingers, and the upper body that is most visible to others. …</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_62874708_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>lower body</p>
                                <p className={style.subtitle}>Legs (thighs, knees, shins), waist, hips (excluding VIO), insteps and fingers...</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_65800245_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>delicate zone</p>
                                <p className={style.subtitle}>We carefully assess the condition of your skin and hair and perform the treatment on sensitive areas.</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2021/02/1pixta_54718016_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>mens hair removal</p>
                                <p className={style.subtitle}>Hair removal not only on the whole body, but also on small areas such as beard and armpits, and delicate zones...</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2021/06/kids_L-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.title}>kids hair removal</p>
                                <p className={style.subtitle}>More and more children are also losing their hair. “Hairy” “I’m concerned about unwanted hair…”</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default MenuComponent;