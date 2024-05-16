
import style from './index.module.scss'
import { useState, useRef, useEffect } from 'react';

export function ModalDrop({ children, modal, setModal, index = 9999 }) {
    const ModalRef = useRef();
    const exit = () => {
        ModalRef.current.style.display = "none";
    }
    const open = () => {
        ModalRef.current.style.display = "block";
    }

    useEffect(() => {
        modal ? open() : exit();
    }, [modal])


    return (
        <div className={style.container} ref={ModalRef} style={{ zIndex: index }}>
            <div className={style.overlay} onClick={() => setModal(false)}>
                <div className={style.popup} onClick={(e) => e.stopPropagation()} >
                    {children}
                </div>
            </div>
        </div >
    );
}