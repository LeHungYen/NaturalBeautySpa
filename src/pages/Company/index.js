import style from "./index.module.scss";
import PageBanner from "../../components/PageBanner";
import React from "react";
import {getDict} from "../../services/dict";

export function Company() {
    const bannerData = {
        titles: ["お問い合わせ"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_21787413_M.jpg",
    }
    return (
        <React.Fragment>
            <PageBanner  {...bannerData}/>
            <div className={style.contact}>
                <div className={style.title}>
                    <h3>{getDict("company_content_title_1")}</h3>
                    <p>
                        {getDict("company_content_txt_1")}<br/>
                        {getDict("company_content_txt_2")}<br/>
                        {getDict("company_content_txt_3")}<br/>
                        {getDict("company_content_txt_4")}<br/>
                        {getDict("company_content_txt_5")}
                    </p>
                </div>
                <div className={style.imgs}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/10143620-1536x1025.jpg"/>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/110143683-1536x1025.jpg"/>
                </div>
                <div className={style.profile}>
                    <h3>{getDict("company_content_title_2")}</h3>
                    <p>
                        {getDict("company_content_txt_6")}<br/>
                        {getDict("company_content_txt_7")}<br/>
                        {getDict("company_content_txt_8")}<br/>
                    </p>
                </div>
                <p>{getDict("company_content_txt_9")}<br/>
                    {getDict("company_content_txt_10")}<br/>
                    {getDict("company_content_txt_11")}<br/>
                    {getDict("company_content_txt_12")}<br/>
                </p>
                <table>
                    <tr>
                        <td>{getDict("company_content_txt_13")}</td>
                        <td>{getDict("company_content_txt_14")}</td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_15")}</td>
                        <td>{getDict("company_content_txt_16")}</td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_17")}</td>
                        <td>{getDict("company_content_txt_18")}</td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_19")}</td>
                        <td>{getDict("company_content_txt_20")}<br/>
                            {getDict("company_content_txt_21")}<br/>
                            {getDict("company_content_txt_22")}<br/>
                        </td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_23")}</td>
                        <td>{getDict("company_content_txt_24")}</td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_25")}</td>
                        <td>0246-6899-303</td>
                    </tr>
                    <tr>
                        <td>FAX</td>
                        <td>0246-6899-303</td>
                    </tr>
                    <tr>
                        <td>{getDict("company_content_txt_26")}</td>
                        <td>0246-6899-303</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>naturalbeautyjapan24@gmail.com</td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td><a>	{getDict("company_content_txt_27")}</a></td>
                    </tr>
                    <tr>
                        <td className={style.tiltless}></td>
                        <td><a>{getDict("company_content_txt_28")}</a></td>
                    </tr>
                    <tr>
                        <td className={style.tiltless}></td>
                        <td><a>{getDict("company_content_txt_29")}</a></td>
                    </tr>
                    <tr>
                        <td className={style.tiltless}></td>
                        <td><a>{getDict("company_content_txt_30")}</a></td>
                    </tr>
                    <tr>
                        <td className={style.tiltless}></td>
                        <td><a>{getDict("company_content_txt_31")}</a></td>
                    </tr>
                    <tr>
                        <td className={style.tiltless}></td>
                        <td><a>M beauty academy Instagram</a></td>
                    </tr>
                </table>
                <p>{getDict("company_content_txt_32")}<br/>
                    {getDict("company_content_txt_33")}<br/>
                </p>
                <div className={style.btns}>
                    <button><a href={"/contact"}>{getDict("company_content_txt_34")}</a></button>
                </div>
            </div>
        </React.Fragment>

    )
}