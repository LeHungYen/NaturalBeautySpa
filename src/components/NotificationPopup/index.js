import style from './index.module.scss'
import {Popup} from "../Popup";
import React, {useEffect, useState} from "react";
import {getDict} from "../../services/dict";

export default function(props) {
    const {show, setShow, confirmEvent, cancelEvent, message, singleOption} = props;

    return (
        <Popup setPopup={setShow} popup={show}>
            <div className={style.container}>
                <div className={style.title}>
                    {getDict("notification")}
                </div>
                <div className={style.content}>
                    {message}
                </div>
                <div className={style.btns}>
                    <button
                        style={{display:`${singleOption?'none':'block'}`}}
                        className={style.cancel} onClick={(e)=>{if(cancelEvent){cancelEvent()};setShow(false)}}
                    >
                        {getDict("cancel")}
                    </button>
                    <button
                        className={style.confirm}
                        onClick={(e)=>{e.preventDefault();confirmEvent(e)}}
                    >
                        {getDict("confirm")}
                    </button>
                </div>
            </div>
        </Popup>
    )
}