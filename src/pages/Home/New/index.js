import style from './index.module.scss'
import { routes } from '../../../config/routes';
function New() {
    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.logo}>
                    <img src={require('../../../assets/logoWhite.jpg')}></img>
                </div>

                <div className={style.title}>
                    <p>NEWS</p>
                </div>
            </div>

            <div className={style.items}>
                <div className={style.item}>
                    <p className={style.date}>2020.11.24</p>
                    <p className={style.title}>コーポレートサイトをオープン致しました</p>
                </div>

                <div className={style.item}>
                    <p className={style.date}>2020.11.24</p>
                    <p className={style.title}>コーポレートサイトをオープン致しました</p>
                </div>
            </div>


            <div className={style.button}>
                <button><a href={routes.news}>お知らせ一覧へ</a></button>
            </div>

        </div>
    );
}

export default New;