import style from "./index.module.scss"
import FormInput from "../../components/FormInput/form-input";
import { useEffect, useRef, useState } from "react";
import { setShowLoading, updatePageData } from "../../store/action";
import post, {doGet} from "../../services/api-call";
import { useDispatch } from "react-redux";
import PageBanner from "../../components/PageBanner";
import { getDict } from "../../services/dict";
import hasAccessCookie from "../../services/common";
import {
    useNavigate
} from "react-router-dom";
import { routes } from "../../config/routes";
// import NotificationPopup from "../../components/NotificationPopup";
import { SuccessOrErrorPopup } from "../../components/SuccessOrErrorPopup";
import store from "../../store/store";
import {get} from "axios";
export function Reservation() {
    const [service, setService] = useState([]);

    const getData = async ()=>{
        const res = await doGet("service");
        setService(res.data);
    }
    useEffect(()=>{
        getData();
    },[])

    const bannerData = {
        titles: ["ご予約専用フォーム"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68232960_M.jpg",
    }
    const [validError, setValidError] = useState({});
    // const [showPopup, setShowPopup] = useState(false);
    // const message = useRef("");
    const isHidden = hasAccessCookie();
    const state = store.getState();
    const submit = function (e) {
        e.preventDefault();
        const data = getDataFormat();
        const textInputs = document.querySelectorAll("form input.text");
        const err = {};
        for (let i = 0; i < 5; i++) {
            if (!isHidden) {
                if (i == 3 || i == 1) {
                    continue;
                }
                if (textInputs[i].value.trim() == "") {
                    err[Object.keys(data)[i]] = "error";
                }
                if (i === 2 && !/^0\d{9,10}$/.test(textInputs[i].value)) {
                    err[Object.keys(data)[i]] = "error";
                }
                if (i === 4 && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(textInputs[i].value)) {
                    err[Object.keys(data)[i]] = "error";
                }
            }
            data[Object.keys(data)[i]] = textInputs[i].value
        }
        const serviceCaptions = document.querySelectorAll("form div:has(input.checkbox) label");
        const checkboxs = document.querySelectorAll("form input.checkbox");
        let showServiceError = true;
        for (let i = 0; i < serviceCaptions.length; i++) {
            if (checkboxs[i].checked) {
                data.serviceNames +=  (checkboxs[i].getAttribute("id") + ",");
                showServiceError = false;
            }
        }
        if (showServiceError) {
            err['service'] = "error";
        }
        const availableTime = document.querySelectorAll("form input.date");
        const availableTimeRange = document.querySelectorAll("form div:has(input.date) select");
        for (let i = 0; i < availableTime.length; i++) {
            const time = {
                date: availableTime[i].value,
                timeRange: availableTimeRange[i].value
            }
            data.availableTimes.push(time);
        }
        data.note = document.querySelector("textarea").value;
        if (Object.keys(err).length > 0) {
            setValidError(err);
            // message.current = getDict("reservation_fail_notification");
            // setShowPopup(true);
            // setMessage(prev => ({ ...prev, subText: getDict("reservation_fail_notification") }));
            setMessage(prev => ({
                ...prev, subText: getDict("reservation_fail_notification"),
                buttons: [
                    { text: "Try Again", action: tryAgainAction, className: "btn-danger" },
                ]
            }));
            setPopup(true)
            return;
        }
        post(data, "/reserve").then((r) => {
            if (r.status == 400) {
                // message.current = getDict(r.data.error);
                setMessage(prev => ({
                    ...prev, subText: getDict(r.data.error),
                    buttons: [
                        { text: "Try Again", action: tryAgainAction, className: "btn-danger" },
                    ]
                }));
                setPopup(true)
            } else {
                // message.current = getDict("reservation_success_notification");
                // navigate(routes.thankYou)
                window.location.href = routes.thankYou
            }
            // setShowPopup(true);
        });
    }

    // message
    const [popup, setPopup] = useState(false)

    const tryAgainAction = () => {
        setPopup(false);
        handleScrollToTop();
    }

    const [message, setMessage] = useState({
        type: "error",
        // mainText: "Something went wrong.",
        subText: "",
        buttons: [
            { text: "Try Again", action: tryAgainAction, className: "btn-danger" },
        ]
    });

    //
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    };

    return (
        <div className={style.contact}>
            <SuccessOrErrorPopup messagePopup={popup} setMessagePopup={setPopup} message={message} />
            {/* <NotificationPopup
                show={showPopup}
                setShow={setShowPopup}
                confirmEvent={()=>{setShowPopup(false)}}
                message={message.current}
                singleOption={true}
            /> */}
            <PageBanner  {...bannerData} />
            <div className={style.title}>
                <h3>「NATURAL BEAUTY恵比寿本店」ご予約（仮予約）</h3>
                <p>
                    下記フォームよりご希望の日時、お名前など必要事項を入力し送信くださいませ。
                    <br />
                    店舗の空き状況を確認後、担当者よりご連絡致します。
                </p>
                <p>※ご予約はお電話、公式LINEアカウント、各種SNSでも承っております。</p>
            </div>
            <form className={style.form} onSubmit={(e) => { submit(e) }}>
                <FormInput title={"お名前"} subTitle={"(必須)"} type={"text"} value={""} isHidden={isHidden} error={validError.firstName ? getDict("reserve_error_firstname") : ""} />
                <FormInput title={"フリガナ"} type={"text"} value={""} isHidden={(isHidden || (state.lang !== "jp"))}/>
                <FormInput title={"電話番号"} subTitle={"(必須)"} type={"text"} value={""} isHidden={isHidden} error={validError.phone ? getDict("reserve_error_phone") : ""} />
                <FormInput title={"※折り返しのご連絡に都合の良いお時間があればご記入ください。（例：午前中、○時以降など）"} type={"text"} value={""} />
                <FormInput title={"メールアドレス"} subTitle={"(必須)"} type={"text"} value={""} isHidden={isHidden} error={validError.email ? getDict("reserve_error_email") : ""} />
                <div className={style.control}>
                    ご希望のメニュー※複数選択可
                    <span>(必須)</span>
                    {service.map((s)=>
                        <FormInput title={s[state.lang]} type={"checkbox"} value={0} id={s.id}/>
                    )}
                </div>
                <p style={{ display: `${validError.service ? "block" : "none"}` }} className={style.error}>{getDict("reserve_error_service")}</p>
                <FormInput title={"第一希望日時"} subTitle={"(必須)"} type={"date"} value={""} />
                <FormInput title={"第二希望日時"} subTitle={"(必須)"} type={"date"} value={""} />
                <FormInput title={"第三希望日時"} subTitle={"(必須)"} type={"date"} value={""} />
                <FormInput title={"その他ご要望、ご紹介者様のお名前など"} type={"textarea"} />
                <p>
                    ※個人情報のお取り扱いについて
                    <br />
                    弊社のご提出いただいた個人情報はお問合せ・ご質問への回答、情報提供のために使用させていただきます。<br />
                    ご入力いただいたご本人の個人情報について、開示、訂正、削除をご請求いただけます。<br />
                    その際は
                    <a href="#">お問い合わせフォーム</a>
                    からご連絡ください。
                </p>
                <div className={style.btns}>
                    <input className={style.submit} type="submit" value="送信" />
                </div>
            </form>
            <p>※このお申し込みは「仮予約」となります。<br />
                担当者から折り返しさせていただき、詳しいご希望、内容の確認・調整ができ次第「予約確定」となります。<br />
                ※ご紹介の場合、ご紹介者様のお名前を記載いただくとご案内がスムーズになります。<br />
                ※店舗休業日は翌営業日以降の対応となりますのでご了承ください。<br />
                ※出来る限り迅速にご対応いたしますが、3営業日を過ぎても何かしらの返信がない場合大変申し訳ございませんが<br />
                NATURAL BEAUTY恵比寿本店（フリーダイヤル：0120-262-633、もしくはTEL：03-6416-3451）へご連絡いただきますようお願いいたします。<br />
                ※M beauty academy、プロデュース商品、セミナー、講演、取材のご依頼等のお問い合わせについては、下記「お問い合わせ」からご連絡いただくようお願い申し上げます。
            </p>
            <div className={style.btns}>
                <button><a href={"/contact"}>お問い合わせはこちらへ</a></button>
            </div>
        </div>
    )
}

function getDataFormat() {
    return {
        firstName: "",
        lastName: "",
        phone: "",
        contactTime: "",
        email: "",
        username: "",
        serviceNames: "",
        availableTimes: [],
        note: ""
    }
}
