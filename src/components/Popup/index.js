
import style from './index.module.scss'
import { useState, useRef, useEffect } from 'react';

export function Popup({ children, popup, setPopup }) {
    const popupRef = useRef();
    const exit = () => {
        popupRef.current.style.display = "none";
    }
    const open = () => {
        popupRef.current.style.display = "block";
    }

    useEffect(() => {
        popup ? open() : exit();
    }, [popup])


    return (
        <div className={style.container} ref={popupRef}>
            <div className={style.overlay} onClick={() => setPopup(false)}>
                <div className={style.popup} onClick={(e) => e.stopPropagation()} >
                    {children}
                </div>
            </div>
        </div >
    );
}