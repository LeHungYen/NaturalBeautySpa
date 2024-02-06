import style from './index.module.scss';

function ProdcutAndServiceItem({ infor, fontSize }) {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <img src={infor.img}></img>
                <div className={style.text}>
                    <p style={{ fontSize: --fontSize }}>{infor.mainText} <span>{infor.subText}</span></p>

                </div>
            </div>
        </div>
    );
}

export default ProdcutAndServiceItem;
