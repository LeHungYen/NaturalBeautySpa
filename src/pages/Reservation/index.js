import style from "./index.module.scss"
import FormInput from "../../components/FormInput/form-input";
import PageBanner from "../../components/PageBanner";
import {getDict} from "../../services/dict";

export function Reservation() {
    const bannerData = {
        titles: [getDict("reservation_banner_title")],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68232960_M.jpg",
    }
    return (
        <div className={style.contact}>
            <PageBanner  {...bannerData}/>
            <div className={style.title}>
                <h3>{getDict("reservation_content_1")}</h3>
                <p>
                    {getDict("reservation_content_2")}
                    <br/>
                    {getDict("reservation_content_3")}
                </p>
                <p>{getDict("reservation_content_4")}</p>
            </div>
            <form className={style.form}>
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"/>
                <FormInput title={getDict("form_label_name")} subTitle={getDict("form_label_required")} type={"text"} value={""}/>
                <FormInput title={getDict("form_label_furigana")} subTitle={getDict("form_label_required")} type={"text"} value={""}/>
                <FormInput title={getDict("form_label_phone")} subTitle={getDict("form_label_required")} type={"text"} value={""}/>
                <FormInput title={getDict("form_label_contact_time")} type={"text"} value={""}/>
                <FormInput title={getDict("form_label_email")} subTitle={getDict("form_label_required")} type={"text"} value={""}/>
                <div className={style.control}>
                    {getDict("form_service_menu_title")}
                    <span>{getDict("form_label_required")}</span>
                    <FormInput title={getDict("form_service_menu_check_1")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_2")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_3")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_4")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_5")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_6")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_7")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_8")} type={"checkbox"} value={0}/>
                    <FormInput title={getDict("form_service_menu_check_9")} type={"checkbox"} value={0}/>
                </div>
                <FormInput title={getDict("form_label_expected_day_1")} subTitle={getDict("form_label_required")} type={"date"} value={""}/>
                <FormInput title={getDict("form_label_expected_day_2")} subTitle={getDict("form_label_required")} type={"date"} value={""}/>
                <FormInput title={getDict("form_label_expected_day_3")} subTitle={getDict("form_label_required")} type={"date"} value={""}/>
                <FormInput title={getDict("form_label_other_requirement")} type={"textarea"}/>
                <p>
                    {getDict("reservation_content_5")}
                    <br/>
                    {getDict("reservation_content_6")}<br/>
                    {getDict("reservation_content_7")}<br/>
                    {getDict("reservation_content_8")}
                    <a href="#">{getDict("reservation_content_9")}</a>
                    {getDict("reservation_content_10")}
                </p>
                <div className={style.btns}>
                    <input className={style.submit} type="submit" value="送信"/>
                </div>
            </form>
            <p>{getDict("reservation_content_11")}<br/>
                {getDict("reservation_content_12")}<br/>
                {getDict("reservation_content_13")}<br/>
                {getDict("reservation_content_14")}<br/>
                {getDict("reservation_content_15")}<br/>
                {getDict("reservation_content_16")}<br/>
                {getDict("reservation_content_17")}
            </p>
            <div className={style.btns}>
                <button><a href={"/contact"}>{getDict("reservation_content_18")}</a></button>
            </div>
        </div>
    )
}
