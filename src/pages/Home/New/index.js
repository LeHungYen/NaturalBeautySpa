import style from './index.module.scss'
import { routes } from '../../../config/routes';
function New() {
    return (
        <div className={style.container}>
            <div className={style.row1}>
                <div className={style.logo}>
                    <img src='https://mareve.co.jp/wp-content/uploads/2020/10/mareve_logo01-e1602492129503.png'></img>
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