import {useState} from "react";
import style from './index.module.scss'
import {getDict} from "../../../services/dict";
export default function NewBanner () {
    return (
        <div className={style.container}>
            <div className={style.animated}>
                <div>
                    <p className={style.title}>
                        <span style={{color:"#EC66B4"}}>Boost your life with</span>
                        <span style={{color:"#7267CC"}}> Beauty and Confidence</span></p>
                    <span className={style.content}>{getDict("new_banner_animated_text")}</span>
                </div>
            </div>
            <img className={style.img} src={require("../../../assets/banner-01.png")}/>
            <div className={style.subtitle}>{getDict("new_banner_subtitle")}</div>
        </div>
    )
}