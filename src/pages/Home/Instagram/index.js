import { getDict } from '../../../services/dict';
import style from './index.module.scss'
import React from 'react';
function Instagram() {
    return (
        <div className={style.container}>

            <div className={style.instagram}>
                <p>{getDict("home_instagram_title")}</p>
            </div>

            <div className={style.text}>
                <p>
                    {getDict("home_instagram_text_row1")?.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>

                <p className={style.textRow2}>{getDict("home_instagram_text_row2")}</p>
            </div>

            <div className={style.button}>
                <button>{getDict("home_instagram_button")}</button>
            </div>

        </div>
    );
}

export default Instagram;