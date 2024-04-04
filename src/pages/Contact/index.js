import style from "../Reservation/index.module.scss";
import PageBanner from "../../components/PageBanner";
import FormInput from "../../components/FormInput/form-input";

export function Contact() {
    const bannerData = {
        titles: ["お問い合わせ"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/11/pixta_54160663_M-e1604559634704.jpg",
    }
    return (
        <div className={style.contact}>
            <PageBanner  {...bannerData}/>
            <div className={style.title}>
                <h3>「弊社サービスへのお問い合わせはこちら </h3>
                <p>
                    「M beauty academyについて」「プロデュース商品について」「セミナー・講演のご依頼」「取材のご依頼」など
                    <br/>
                    弊社への各種お問い合わせはこちらのフォームよりご連絡ください。
                </p>
            </div>
            <form className={style.form}>
                <FormInput title={"会社名・団体名 "} subTitle={"(必須)"} type={"text"} value={""}/>
                <FormInput title={"所属先"} type={"text"} value={""}/>
                <FormInput title={"担当者様氏名"} subTitle={"(必須)"} type={"text"} value={""}/>
                <FormInput title={"※担当者様フリガナ"} subTitle={"(必須)"} type={"text"} value={""}/>
                <FormInput title={"電話番号"} subTitle={"(必須)"} type={"text"} value={""}/>
                <FormInput title={"メールアドレス"} subTitle={"(必須)"} type={"text"} value={""}/>
                <div className={style.control}>
                    お問い合わせ項目※複数選択可
                    <span>(必須)</span>
                    <FormInput title={"プロデュース商品について"} type={"checkbox"} value={0}/>
                    <FormInput title={"セミナー・講演依頼"} type={"checkbox"} value={0}/>
                    <FormInput title={"取材依頼"} type={"checkbox"} value={0}/>
                    <FormInput title={"その他お問い合わせ"} type={"checkbox"} value={0}/>
                </div>
                <FormInput title={"お問い合わせ内容"} subTitle={"(必須)"} type={"textarea"}/>
                <p>
                    ※個人情報のお取り扱いについて
                    <br/>
                    ご提出いただいた個人情報はお問合せ・ご質問への回答、情報提供のために使用させていただきます。<br/>
                    ご入力いただいたご本人の個人情報について、開示、訂正、削除をご請求いただけます。<br/>
                    その際は当お問い合わせフォームからご連絡ください。
                </p>
                <div className={style.btns}>
                    <input className={style.submit} type="submit" value="送信"/>
                </div>
            </form>
            <p>※ご紹介の場合、ご紹介者様のお名前を記載いただくとご連絡がスムーズになります。<br/>
                ※店舗休業日は翌営業日以降の対応となりますのでご了承ください。<br/>
                ※出来る限り迅速にご対応いたしますが、3営業日を過ぎても何かしらの返信がない場合大変申し訳ございませんが<br/>
                TEL：03-6416-3451(MAREVE恵比寿本店）へご連絡いただきますようお願いいたします。<br/>
                ※MAREVE恵比寿本店へのご予約は下記「仮予約専用フォーム」からご連絡いただくようお願い申し上げます。<br/>
            </p>
            <div className={style.btns}>
                <button><a href={"/reservation"}>MAREVE恵比寿本店 仮予約はこちらへ</a></button>
            </div>
        </div>
    )
}