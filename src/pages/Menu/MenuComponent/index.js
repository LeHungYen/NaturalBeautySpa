import { useEffect, useState } from 'react';
import style from './index.module.scss'


// libary
import { PiCheckSquareLight } from "react-icons/pi";
function MenuComponent({ setCurrentMenu }) {
    const [menuItem, setMenuItem] = useState([
        {
            titleArea: {
                title: "全身脱毛",
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg",
                sub: {
                    subTitle: "一人ひとりの肌に合った、クオリティ第一の「脱毛」",
                    description: [
                        "マリーブの確かな技術で、全身のムダ毛をなくします。",
                        "他社で満足できなかった方も、本当の「つるすべ肌」へ。"
                    ]
                }
            },
            dataList: {
                title: "こんな方に",
                item: [
                    "全身丸ごと任せたい",
                    "自分の肌に合わせて丁寧な施術をして欲しい",
                    "全身トータルでつるすべ肌を目指したい",
                    "クオリティを第一に求めている",
                    "ムダ毛の処理から解放されたい",
                    "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい"
                ]
            },

            contentList: [
                {
                    title: "あなたにあったベストな脱毛を",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_49944902_M-1024x682.jpg",
                    subText: "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。"
                },

                {
                    title: "ムダ毛のことは全てお任せ下さい",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_58605939_M-e1603855032637-1024x735.jpg",
                    subText: "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。"
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "全身脱毛（１回）",
                        sub: "通常￥55,000　→お得なキャンペーン中！詳しくはお問い合わせ下さい"
                    },
                    {
                        title: "全身脱毛（６回）",
                        sub: "¥253,000"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },

        {
            titleArea: {
                title: "顔",
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_45689954_M-830x300.jpg",
                sub: {
                    subTitle: "美肌の道は顔脱毛から",
                    description: [
                        "施術後のお肌に感動してください。",
                        "すべての美肌の基礎となるお手入れは、顔の脱毛です。"
                    ]
                }
            },
            dataList: {
                title: "こんな方に",
                item: [
                    "本当の美肌を目指している",
                    "化粧ノリをアップさせたい",
                    "明るく透明感のある肌になりたい",
                    "毛穴やくすみ、肌荒れに悩んでいる",
                    "肌の状態を見極められるプロのいるサロンで施術したい",
                    "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい"
                ]
            },

            contentList: [
                {
                    title: "スキンケアアイテムの使用感が変わる",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_36915997_M-e1603261001757-1024x775.jpg",
                    subText: "施術後、普段お使いの化粧水や美容液で比べてください。どんなに良いものを使っても、顔の脱毛をしてスキンケアの土台となる「肌」の準備ができている状態と、顔のうぶ毛やムダ毛がそのままの状態とでは、スキンケアの実感が違います"
                },
                {
                    title: "美を追求する人が選ぶマリーブの脱毛",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_67645853_M-1024x682.jpg",
                    subText: "プロの現場で本物の「美しさ」を求められる方がマリーブの脱毛を選んでいます。脱毛のプロフェッショナルがお一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。"
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "顔脱毛",
                        sub: "￥6,600"
                    },
                    {
                        title: "フェイシャルワックス",
                        sub: "￥12,000"
                    }
                ],
                description: [
                    "※顔脱毛（光脱毛）、フェイシャルワックスのご希望をご予約時に選択して下さい。不明点はお気軽にご相談ください。",
                    "※全て消費税込み。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },

        {
            titleArea: {
                title: "上半身",
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_55082057_M-830x300.jpg",
                sub: {
                    subTitle: "気になるワキ、腕、胸、お腹、背中など上半身の脱毛",
                    description: [
                        "ワキ、首、腕、指などの細かなパーツと、他人から一番見られる上半身。",
                        "スポーツなどの日焼けしたお肌もマリーブにお任せください。"
                    ]
                }
            },
            dataList: {
                title: "こんな方に",
                item: [
                    "細かなパーツを脱毛したい",
                    "クオリティを第一に求めている",
                    "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
                    "ムダ毛の処理から解放されたい",
                    "自分の肌に合わせて丁寧な施術をして欲しい",
                    "お子様の肌に優しい脱毛サロンや技術者を探している"
                ]
            },

            contentList: [
                {
                    title: "気になるパーツのケアが可能",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_23234665_M-e1603262909278-1024x794.jpg",
                    subText: "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。お子様の脱毛についても、お気軽にご相談ください。"
                },
                {
                    title: "あなたにあったベストな脱毛を",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68668743_M-1024x682.jpg",
                    subText: "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。"
                }
            ],

            priceList: {
                title: "",
                item: [
                    {
                        title: "両ワキ（１回）",
                        sub: "￥1,100"
                    },
                    {
                        title: "両ワキ（１年）",
                        sub: "￥11,000"
                    },
                    {
                        title: "背中上（１回）",
                        sub: "￥4,400"
                    },
                    {
                        title: "胸（１回）",
                        sub: "￥3,300"
                    },
                    {
                        title: "乳りん周り（１回）",
                        sub: "￥1,100"
                    },
                    {
                        title: "両ヒジ上（１回）",
                        sub: "￥2,200"
                    },
                    {
                        title: "両手指甲（１回）",
                        sub: "￥550"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },
        {
            titleArea: {
                title: "下半身",
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_62874708_M-830x300.jpg",
                sub: {
                    subTitle: "肌質に合った施術で究極の美肌に仕上げます",
                    description: [
                        "脚（太もも、ひざ、すね）、腰回り、ヒップ（VIOを除く）、足の甲や指などの細かいパーツまで。",
                        "お客様の求めるムダ毛のない美肌に仕上げます。"
                    ]
                }
            },
            dataList: {
                title: "こんな方に",
                item: [
                    "他社の仕上がりに満足できなかった",
                    "ムダ毛の処理から解放されたい",
                    "自分の肌に合わせて丁寧な施術をして欲しい",
                    "お子様の肌に優しい脱毛サロンや技術者を探している",
                    "細かなパーツを脱毛したい",
                    "クオリティを第一に求めている",
                    "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい"
                ]
            },

            contentList: [
                {
                    title: "気になるパーツのケアが可能",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68105924_M-1024x682.jpg",
                    subText: "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。お子様の脱毛についても、お気軽にご相談ください。"
                },
                {
                    title: "あなたにあったベストな脱毛を",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_55580351_M-1024x682.jpg",
                    subText: "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。"
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "腰（１回）",
                        sub: "￥3,300"
                    },
                    {
                        title: "ヒップ（１回）",
                        sub: "￥4,400"
                    },
                    {
                        title: "お腹（１回）",
                        sub: "￥3,300"
                    },
                    {
                        title: "両ヒザ上（１回）",
                        sub: "￥5,500"
                    },
                    {
                        title: "両ヒザ下（１回）",
                        sub: "￥4,400"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },
        {
            titleArea: {
                title: "デリケートゾーン",
                img: "https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_65800245_M-830x300.jpg",
                sub: {
                    subTitle: "他社の仕上がりに満足できなかった方こそ、マリーブへ",
                    description: [
                        "デリケートな部位こそ、お客様の肌、毛の状態を見極めて施術させていただきます。",
                        "10万人以上の施術を行ってきた私たちに、「ムダ毛」ことでお答えできない事はありません。"
                    ]
                }
            },
            dataList: {
                title: "こんな方に",
                item: [
                    "他社の仕上がりに満足できなかった",
                    "はじめての脱毛で不安がある",
                    "クオリティを第一に求めている",
                    "自分の肌に合わせて丁寧な施術をして欲しい",
                    "ムダ毛の処理から解放されたい",
                    "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい"
                ]
            },

            contentList: [
                {
                    title: "デリケートな部分こそ技術が問われます",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_62120472_M-1024x682.jpg",
                    subText: "他社の仕上がりに満足いかなかった方こそ、マリーブへ。デリケートなVIOこそ、お客様の肌の状態、毛の状態を見極めることのできる経験と知識が豊富なプロにご相談ください。"
                },
                {
                    title: "あなたにあったベストな脱毛を",
                    img: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_59619485_M-1024x683.jpg",
                    subText: "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。"
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "Vライン（１回）",
                        sub: "￥3,300"
                    },
                    {
                        title: "Iライン（１回）",
                        sub: "￥2,200"
                    },
                    {
                        title: "Oライン（１回）",
                        sub: "￥2,200"
                    },
                    {
                        title: "VIOセット（１回）",
                        sub: "￥6,600"
                    },
                    {
                        title: "VIOセット（６回）",
                        sub: "￥33,000"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },
        {
            titleArea: {
                title: "メンズ脱毛",
                img: "https://mareve.co.jp/wp-content/uploads/2021/02/1pixta_54718016_M-830x300.jpg",
                sub: {
                    subTitle: "男性の脱毛のお悩み、全てお任せください。",
                    description: [
                        "全身はもちろん、ヒゲやワキなどの細かい部位や、デリケートゾーンの脱毛までご相談ください。",
                        "脱毛のプロフェッショナルがあなたのお肌の状態に合わせて、効果を実感できる適切な施術をご提案致します。",
                        "完全予約制なのでプライバシー対策もご安心ください。"
                    ]
                }
            },
            dataList: {
                title: "",
                item: [

                ]
            },

            contentList: [
                {
                    title: "",
                    img: "",
                    subText: ""
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "メンズ全身脱毛（１回）",
                        sub: "￥44,000"
                    },
                    {
                        title: "メンズ全身脱毛（６回）",
                        sub: "￥242,000"
                    },
                    {
                        title: "ヒゲ（１回）",
                        sub: "￥6,600"
                    },
                    {
                        title: "ヒゲ（６回）",
                        sub: "￥33,000"
                    },
                    {
                        title: "メンズVIO玉さお（セット１回）",
                        sub: "￥16,500"
                    },
                    {
                        title: "メンズVIO玉さお（セット６回）",
                        sub: "￥99,000"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        },
        {
            titleArea: {
                title: "キッズ脱毛",
                img: "https://mareve.co.jp/wp-content/uploads/2021/06/kids_L-830x300.jpg",
                sub: {
                    subTitle: "お子様と一緒に施術可能です。",
                    description: [
                        "お子様も脱毛する方が増えております。",
                        "「毛深い」「ムダ毛が気になる」など、お子様の様々な毛の悩みをご相談ください。",
                        "親御様のお隣でご一緒に施術出来ますので、ご安心ください。"
                    ]
                }
            },
            dataList: {
                title: "",
                item: [

                ]
            },

            contentList: [
                {
                    title: "",
                    img: "",
                    subText: ""
                }
            ],

            priceList: {
                title: "MENU",
                item: [
                    {
                        title: "１部位",
                        sub: "￥1,100"
                    }
                ],
                description: [
                    "※全て消費税込み。",
                    "※お子様のみのご予約はご遠慮させていただきます。",
                    "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
                    "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。"
                ]
            },
        }
    ])

    const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);
    const [currentMenuItem, setCurrentMenuItem] = useState(menuItem[0])
    useEffect(() => {
        setCurrentMenuItem(menuItem[currentMenuItemIndex]);
        setCurrentMenu(menuItem[currentMenuItemIndex].titleArea.title)
    }, [currentMenuItemIndex, menuItem]);

    return (
        <div className={style.container}>

            <div className={style.containerCol1}>
                <div className={style.title}>
                    <p>脱毛</p>
                </div>

                <ul>
                    {menuItem.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setCurrentMenuItemIndex(index)}
                                style={{ color: currentMenuItemIndex === index ? '#2dccd3' : "" }}>
                                {item.titleArea.title}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={style.col2}>
                <div className={style.titleArea}>
                    <div className={style.title}>

                        {/* <p>Full body hair removal</p> */}
                        <p>{currentMenuItem.titleArea.title}</p>
                    </div>

                    <div className={style.img}>
                        <img src={currentMenuItem.titleArea.img}></img>
                    </div>

                    <div className={style.sub}>
                        <p className={style.subTitle}>{currentMenuItem.titleArea.sub.subTitle}</p>
                        {currentMenuItem.titleArea.sub.description.map((item, index) => {
                            return (
                                <p key={index} className={style.description}>{item}</p>
                            )
                        })}
                    </div>
                </div>

                {currentMenuItem.dataList.title && <div className={style.dataList}>
                    <div className={style.title}>
                        <p>{currentMenuItem.dataList.title}</p>
                    </div>

                    <ul>
                        {currentMenuItem.dataList.item.map((item, index) => {
                            return (
                                <li><div key={index} className={style.liItem}><PiCheckSquareLight className={style.icon} />{item}</div></li>
                            )
                        })}
                    </ul>
                </div>}

                {currentMenuItem.contentList[0].title && <div className={style.contentList}>
                    {currentMenuItem.contentList.map((item, index) => {
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
                        <button>予約専用フォームへ</button>
                    </div>
                </div>}



                <div className={style.priceList}>
                    <div className={style.title}>
                        <p>MENU</p>
                    </div>



                    <table>
                        <tbody>
                            {currentMenuItem.priceList.item.map((item, index) => {
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
                        {currentMenuItem.priceList.description.map((item, index) => {
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
                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_10477565_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>全身脱毛</p>
                                <p className={style.relatedPostItemSub}>マリーブの確かな技術で、全身のムダ毛をなくします。 他社で満足でき…</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_45689954_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>顔</p>
                                <p className={style.relatedPostItemSub}>施術後のお肌に感動してください。 すべての美肌の基礎となるお手入れ…</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_55082057_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>上半身</p>
                                <p className={style.relatedPostItemSub}>ワキ、首、腕、指などの細かなパーツと、他人から一番見られる上半身。 …</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_62874708_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>下半身</p>
                                <p className={style.relatedPostItemSub}>脚（太もも、ひざ、すね）、腰回り、ヒップ（VIOを除く）、足の甲や指…</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_65800245_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>デリケートゾーン</p>
                                <p className={style.relatedPostItemSub}>デリケートな部位こそ、お客様の肌、毛の状態を見極めて施術させていただ….</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2021/02/1pixta_54718016_M-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>メンズ脱毛</p>
                                <p className={style.relatedPostItemSub}>全身はもちろん、ヒゲやワキなどの細かい部位や、デリケートゾーンの脱毛…</p>
                            </div>
                        </li>

                        <li className={style.relatedPostItem}>
                            <div className={style.img}>
                                <img src="https://mareve.co.jp/wp-content/uploads/2021/06/kids_L-830x300.jpg"></img>
                            </div>

                            <div className={style.text}>
                                <p className={style.relatedPostItemTitle}>キッズ脱毛</p>
                                <p className={style.relatedPostItemSub}>お子様も脱毛する方が増えております。 「毛深い」「ムダ毛が気になる…</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default MenuComponent;