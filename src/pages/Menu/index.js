import style from './index.module.scss'
import MenuComponent from './MenuComponent';

//libary
import { ImHome } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
function Menu() {



    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/1pixta_23376677_M-1.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <p>hair removal menu</p>
                </div>
            </div>

            <div className={style.menu}>
                <ul>
                    <li><ImHome className={style.homeIcon} /></li>
                    <li><MdKeyboardArrowRight className={style.icon} /> hair removal menu</li>
                    <li><MdKeyboardArrowRight className={style.icon} /> hair removal</li>
                    <li><MdKeyboardArrowRight className={style.icon} /> mens hair removal</li>
                </ul>
            </div>

            <div className={style.content}>
                <MenuComponent />
            </div>
        </div>
    );
}

export default Menu;