import style from './index.module.scss';

function HomeItem({ infor, upperLeftCornerTextFS, textCenterFS, textCenterW, textCenterH, textBelowFS, textBelowH, textBelowC }) {

    return (
        <div className={style.container}>
            <div className={style.background}>
                <img src={infor.img}></img>

                {infor.upperLeftCornerMainText && <div className={style.upperLeftCornerText}>
                    <p style={{ fontSize: upperLeftCornerTextFS }}>{infor.upperLeftCornerMainText} <span>{infor.upperLeftCornerSubText}</span></p>
                </div>}

                {infor.textCenter && <div className={style.textCenter}>
                    <p style={{ fontSize: textCenterFS, width: textCenterW, height: textCenterH }}>{infor.textCenter}</p>
                </div>}

                {infor.textBelow && <div style={{ height: textBelowH }} className={style.textBelow}>
                    <p style={{ fontSize: textBelowFS, color: textBelowC }}>{infor.textBelow}</p>
                </div>}
            </div>
        </div>
    );
}

export default HomeItem;
