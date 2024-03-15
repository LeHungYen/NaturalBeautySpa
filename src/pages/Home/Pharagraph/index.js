import style from './index.module.scss'
import clsx from 'clsx'
import HomePharagraphItem from '../../../components/HomePharagraphItem';
import { routes } from '../../../config/routes';
import { useState, useEffect } from 'react';
function Pharagraph({ windowWidth }) {
    const items = [
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/10143620-500x500.jpg",
            title: "M beauty academy",
            subTitle: "東京、愛知、福岡。現在３校ある「M beauty academy（エム ビューティー アカデミー）」では、10万人の施術実績をもつ脱毛のスペシャリスト福田麻理が技術のすべてをお教えしています。",
            reverse: false,
            url: routes.about_academy
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/10143659.jpg",
            title: "日本初。肌への優しさ、仕上がりの質、全てにこだわった国産ワックス。",
            subTitle: "ワックスは施術者の経験・技術が問われる施術。日本でも屈指のワクサーである福田麻理が、「施術者」の扱いやすさと「お客様」の安心と満足を考え、全てにこだわりプロデュースしました。日本のワックス脱毛のレベルを変えます。",
            reverse: true,
            url: routes.about_product
        },
        {
            img: "https://mareve.co.jp/wp-content/uploads/2020/10/aiko様-500x500.jpg",
            title: "マリーブを選んだ「お客様の声」",
            subTitle: "心を込めた施術で、たくさんのお客様にリピートいただいております。モデル、タレント、プロスポーツ選手など美しさや仕上がりにこだわる「プロフェッショナル」のお客様にもマリーブは選ばれています。",
            reverse: false,
            url: ""
        }
    ]

    // Update font size based on window width
    // const [flexDirection, setFlexDirection] = useState("column");


    // useEffect(() => {
    //     if (windowWidth < 1250) {
    //         setFlexDirection("row")
    //     } else {
    //         setFlexDirection("column")
    //     }

    // }, [windowWidth]);

    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.logo}>
                    <img src={require('../../../assets/logoWhite.jpg')} alt="logo" />
                </div>

                <div className={style.title}>
                    <p>マリーブは日本の「脱毛」のレベルを変えます。</p>
                </div>

                <div className={style.titleMobile}>
                    <p>マリーブは日本の</p>
                    <p>「脱毛」のレベルを変えます。</p>
                </div>

                <div className={style.sub}>
                    <p>10万人の施術実績。女性の独立支援。</p>
                    <p>マリーブはプロフェッショナルの育成に力を入れています。</p>
                </div>

                <div className={style.subMobile}>
                    <p>10万人の施術実績。女性の独立支援。</p>
                    <p>マリーブはプロフェッショナルの育成に</p>
                    <p>力を入れています。</p>
                </div>

            </div>

            <div className={style.row2}>
                <div className={style.items}>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className={style.item}>
                                <a href={item.url}>
                                    <div className={clsx(item.reverse ? style.flexReverse : style.dFlex)}>
                                        <div className={style.img}>
                                            <img src={item.img}></img>
                                        </div>

                                        <div className={style.pharagraph}>
                                            <div className={style.text}>
                                                <p className={style.title}>{item.title}</p>
                                                <p className={style.subTitle}>{item.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Pharagraph;