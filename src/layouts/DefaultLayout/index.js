import style from './index.module.scss'
import Footer from './Footer';
import Header from "./header";
import SettingIcon from "./FloatingIcon";
import { TiArrowUpThick } from "react-icons/ti";
import React, { useRef, useEffect } from 'react';
import {getStoredData} from "../../store/store";
function DefaultLayout({ children }) {

    const scrollToTopRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > window.innerHeight) {
                scrollToTopRef.current.style.display = 'block';
            } else {
                scrollToTopRef.current.style.display = 'none';
            }
        };

        document.documentElement.setAttribute("lang", getStoredData("lang"));

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={style.container}>

            <Header />

            <div className={style.body}>
                {children}
            </div>

            <Footer />
            <div className="disable-background-overlay" />
            <SettingIcon />

            <div
                className={style.goToTop}
                ref={scrollToTopRef}
                onClick={handleScrollToTop}
            >
                <TiArrowUpThick className={style.icon} />
            </div>


        </div>
    );
}

export default DefaultLayout;