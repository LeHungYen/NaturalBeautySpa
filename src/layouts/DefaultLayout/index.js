import style from './index.module.scss'
import Footer from './Footer';
import Header from "./header";
import SettingIcon from "./FloatingIcon";
function DefaultLayout({ children }) {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.body}>
                {children}
            </div>
            <Footer />
            <div className="disable-background-overlay"/>
            <SettingIcon/>
        </div>
    );
}

export default DefaultLayout;