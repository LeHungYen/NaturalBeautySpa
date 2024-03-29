import style from "./index.module.scss"
import React from "react";

export default function FormInput(props) {
    let {title, subTitle, type, value, time, row} = props;
    if(!time) {
        time = [
            "11:00 ~ 13:00",
            "13:00 ~ 15:00",
            "15:00 ~ 17:00",
            "17:00 ~ 19:00",
            "19:00 ~ 21:00",
            "何時でも可能(11:00〜21:00)"
        ]
    }
    const dateCbx = function () {
        if(type === "date") {
            return (
                <div>
                    <select name={"date_" + type}>
                        {time.map((t,i)=>
                            <option value={i}>{t}</option>
                        )}
                    </select>
                </div>
            )
        }
        return <></>
    }
    if(type === "textarea") {

        return (
            <div className={style.container}>
                <label>
                    {title}
                    <span>{subTitle}</span>
                </label>
                <textarea className={"textarea"}></textarea>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={style.container}>
                <label>
                    {title}
                    <span>{subTitle}</span>
                </label>
                <input className={type} type={type} value={value}/>
                {dateCbx()}
            </div>
        </React.Fragment>
    )
}