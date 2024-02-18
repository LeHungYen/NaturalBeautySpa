import style from './index.module.scss'

function HomePharagraphItem({ infor, flexDirection }) {


    return (
        <div className={style.homePharagraphItem}>
            {infor.reverse && flexDirection == "column" && < div style={{ flexDirection: flexDirection + "-reverse" }} className={style.container}>
                <div style={{ height: "50%" }} className={style.img}>
                    <img src={infor.img}></img>
                </div>

                <div style={{ height: "50%" }} className={style.pharagraph}>
                    <div className={style.text}>
                        <p className={style.title}>{infor.title}</p>
                        <p className={style.subTitle}>{infor.subTitle}</p>
                    </div>
                </div>
            </div>}

            {!infor.reverse && flexDirection == "column" && < div style={{ flexDirection: flexDirection }} className={style.container}>
                <div style={{ height: "50%" }} className={style.img}>
                    <img src={infor.img}></img>
                </div>

                <div style={{ height: "50%" }} className={style.pharagraph}>
                    <div className={style.text}>
                        <p className={style.title}>{infor.title}</p>
                        <p className={style.subTitle}>{infor.subTitle}</p>
                    </div>
                </div>
            </div>}

            {infor.reverse && flexDirection == "row" && < div style={{ flexDirection: flexDirection + "-reverse" }} className={style.container}>
                <div style={{ height: "100%" }} className={style.img}>
                    <img src={infor.img}></img>
                </div>

                <div style={{ height: "100%" }} className={style.pharagraph}>
                    <div className={style.text}>
                        <p className={style.title}>{infor.title}</p>
                        <p className={style.subTitle}>{infor.subTitle}</p>
                    </div>
                </div>
            </div>}

            {!infor.reverse && flexDirection == "row" && < div style={{ flexDirection: flexDirection }} className={style.container}>
                <div style={{ height: "100%" }} className={style.img}>
                    <img src={infor.img}></img>
                </div>

                <div style={{ height: "100%" }} className={style.pharagraph}>
                    <div className={style.text}>
                        <p className={style.title}>{infor.title}</p>
                        <p className={style.subTitle}>{infor.subTitle}</p>
                    </div>
                </div>
            </div>}
        </div >
    );
}

export default HomePharagraphItem;