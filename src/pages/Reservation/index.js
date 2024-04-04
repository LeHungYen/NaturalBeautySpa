import style from "./index.module.scss"
import FormInput from "../../components/FormInput/form-input";
import {useEffect} from "react";
import {setShowLoading, updatePageData} from "../../store/action";
import post from "../../services/api-call";
import {useDispatch} from "react-redux";
import PageBanner from "../../components/PageBanner";
import {getDict} from "../../services/dict";
import getAccessCookie from "../../services/common";

export function Reservation() {
    const bannerData = {
        titles: ["ご予約専用フォーム"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68232960_M.jpg",
    }
    const isHidden = getAccessCookie();
    const submit = function (e) {
        e.preventDefault();
        const data = getDataFormat();
        const textInputs = document.querySelectorAll("form input.text");
        for(let i = 0;i< 5; i++) {
            data[Object.keys(data)[i]] = textInputs[i].value
        }
        const serviceCaptions = document.querySelectorAll("form div:has(input.checkbox) label");
        const checkboxs = document.querySelectorAll("form input.checkbox");
        for(let i = 0;i< serviceCaptions.length; i++) {
            if(checkboxs[i].checked) {
                data.serviceNames.push(serviceCaptions[i].textContent);
            }
        }
        const availableTime = document.querySelectorAll("form input.date");
        const availableTimeRange = document.querySelectorAll("form div:has(input.date) select");
        for(let i = 0;i< availableTime.length; i++) {
            const time = {
                date : availableTime[i].value,
                timeRange : availableTimeRange[i].value
            }
            data.availableTimes.push(time);
        }
        console.log(data)
        post(data,"/reserve");
    }
    return (
        <div className={style.contact}>
            <PageBanner  {...bannerData}/>
            <div className={style.title}>
                <h3>「MAREVE恵比寿本店」ご予約（仮予約）</h3>
                <p>
                    下記フォームよりご希望の日時、お名前など必要事項を入力し送信くださいませ。
                    <br/>
                    店舗の空き状況を確認後、担当者よりご連絡致します。
                </p>
                <p>※ご予約はお電話、公式LINEアカウント、各種SNSでも承っております。</p>
            </div>
            <form className={style.form} onSubmit={(e)=>{submit(e)}}>
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"/>
                <FormInput title={"お名前"} subTitle={"(必須)"} type={"text"} value={""} hidden={isHidden}/>
                <FormInput title={"フリガナ"} subTitle={"(必須)"} type={"text"} value={""} hidden={isHidden}/>
                <FormInput title={"電話番号"} subTitle={"(必須)"} type={"text"} value={""} hidden={isHidden}/>
                <FormInput title={"※折り返しのご連絡に都合の良いお時間があればご記入ください。（例：午前中、○時以降など）"} type={"text"} value={""} />
                <FormInput title={"メールアドレス"} subTitle={"(必須)"} type={"text"} value={""} hidden={isHidden}/>
                <div className={style.control}>
                    ご希望のメニュー※複数選択可
                    <span>(必須)</span>
                    <FormInput name={""} title={"カウンセリング"} type={"checkbox"} value={0}/>
                    <FormInput title={"フェイシャルワックス"} type={"checkbox"} value={0}/>
                    <FormInput title={"顔脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"全身脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"パーツ脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"VIO脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"メンズ脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"キッズ脱毛"} type={"checkbox"} value={0}/>
                    <FormInput title={"その他"} type={"checkbox"} value={0}/>
                </div>
                <FormInput title={"第一希望日時"} subTitle={"(必須)"} type={"date"} value={""}/>
                <FormInput title={"第二希望日時"} subTitle={"(必須)"} type={"date"} value={""}/>
                <FormInput title={"第三希望日時"} subTitle={"(必須)"} type={"date"} value={""}/>
                <FormInput title={"その他ご要望、ご紹介者様のお名前など"} type={"textarea"}/>
                <p>
                    ※個人情報のお取り扱いについて
                    <br/>
                    弊社のご提出いただいた個人情報はお問合せ・ご質問への回答、情報提供のために使用させていただきます。<br/>
                    ご入力いただいたご本人の個人情報について、開示、訂正、削除をご請求いただけます。<br/>
                    その際は
                    <a href="#">お問い合わせフォーム</a>
                    からご連絡ください。
                </p>
                <div className={style.btns}>
                    <input className={style.submit} type="submit" value="送信"/>
                </div>
            </form>
            <p>※このお申し込みは「仮予約」となります。<br/>
                担当者から折り返しさせていただき、詳しいご希望、内容の確認・調整ができ次第「予約確定」となります。<br/>
                ※ご紹介の場合、ご紹介者様のお名前を記載いただくとご案内がスムーズになります。<br/>
                ※店舗休業日は翌営業日以降の対応となりますのでご了承ください。<br/>
                ※出来る限り迅速にご対応いたしますが、3営業日を過ぎても何かしらの返信がない場合大変申し訳ございませんが<br/>
                MAREVE恵比寿本店（フリーダイヤル：0120-262-633、もしくはTEL：03-6416-3451）へご連絡いただきますようお願いいたします。<br/>
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
        note :"",
        email: "",
        username: "",
        serviceNames: [],
        availableTimes: []
    }
}
