import style from "./index.module.scss"
import FormInput from "../../components/FormInput/form-input";
import { useEffect } from "react";
import { setShowLoading, updatePageData } from "../../store/action";
import post from "../../services/api-call";
import { useDispatch } from "react-redux";
import PageBanner from "../../components/PageBanner";
import { getDict } from "../../services/dict";

export function CvForm() {
    const bannerData = {
        titles: ["ご記入募集フォーム"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_68232960_M.jpg",
    }
    return (
        <div className={style.contact}>
            <PageBanner  {...bannerData} />
            <div className={style.title}>
                <h3>「Natural Beauty」ご記入</h3>
                <p>
                    名前と希望など、申請をご記入の上、履歴書を付けてください。
                    <br />
                    履歴書を確認後、担当者よりご連絡させていただきます
                </p>
            </div>
            <form className={style.form}>
                <FormInput title={"お名前"} subTitle={"(必須)"} type={"text"} value={""} />
                <FormInput title={"フリガナ"} subTitle={"(必須)"} type={"text"} value={""} />
                <FormInput title={"電話番号"} subTitle={"(必須)"} type={"text"} value={""} />
                <div className={style.control}>
                    位置希望
                    <span>(必須)</span>
                    <FormInput title={"管理"} type={"checkbox"} value={0} />
                    <FormInput title={"福管理"} type={"checkbox"} value={0} />
                    <FormInput title={"スタッフ"} type={"checkbox"} value={0} />
                    <FormInput title={"その他"} type={"checkbox"} value={0} />

                </div>
                <FormInput title={"その他ご要望"} type={"textarea"} />
                <FormInput title={"資料付き"} subTitle={"(必須)"} type={"file"} value={""} />
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
            <p>※ご紹介の場合、 NATURE BEAUTIFUL 02466899303,
                ご連絡ありがとうございます。<br />
            </p>

        </div>
    )
}
