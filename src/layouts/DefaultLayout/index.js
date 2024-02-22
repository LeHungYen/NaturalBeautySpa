import style from './index.module.scss'
import Footer from './Footer';
import Header from "./header";
import store from "../../store/store";
function DefaultLayout({ children }) {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.body}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;