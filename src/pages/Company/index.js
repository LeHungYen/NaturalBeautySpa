import style from "./index.module.scss";
import PageBanner from "../../components/PageBanner";

export function Company() {
    const bannerData = {
        titles: ["お問い合わせ"],
        subTitles: [],
        image: "https://mareve.co.jp/wp-content/uploads/2020/10/pixta_21787413_M.jpg",
    }
    return (
        <div className={style.contact}>
            <PageBanner  {...bannerData}/>
            <div className={style.title}>
                <h3>すべてのムダ毛に、まじめに </h3>
                <p>
                    株式会社マリーブは、恵比寿に本店を構える脱毛サロン「MAREVE（マリーブ）」の経営をはじめ、<br/>
                    これまで10万人以上のお客様に施術を行ってきた日本有数のワクサーである代表・福田麻理が<br/>
                    その技術をお教えし女性の独立を支援する「M beauty academy（エム ビューティー アカデミー）」の運営、<br/>
                    サロンアイテム「mà remove（マリムーブ）」のプロデュース（商品開発、販売）等、<br/>
                    年齢性別を問わず「美しい素肌」を求める方のための事業を行っております。
                </p>
            </div>
            <div className={style.imgs}>
                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/10143620-1536x1025.jpg"/>
                <img src="https://mareve.co.jp/wp-content/uploads/2020/10/110143683-1536x1025.jpg"/>
            </div>
            <div className={style.profile}>
                <h3>代表紹介</h3>
                <p>
                    株式会社マリーブ<br/>
                    代表取締役<br/>
                    福田 麻理　Mari Fukuda<br/>
                </p>
            </div>
            <p>10万人の施術実績を持ち、その経験と最新の脱毛技術を取り入れた本物の脱毛技術を持った施術者の育成、そして女性の<br/>
                独立支援を目的として立ち上げた脱毛スクール<br/>
                「M beauty academy（エムビューティーアカデミー）」の代表も務める。<br/>
                自身の経験から開発を行ったワックスブランド「mà remove（マリムーブ）」プロデューサー。<br/>
            </p>
            <table>
                <tr>
                    <td>会社名</td>
                    <td>株式会社マリーブ</td>
                </tr>
                <tr>
                    <td>代表者名</td>
                    <td>福田 麻理</td>
                </tr>
                <tr>
                    <td>設立</td>
                    <td>令和2年9月</td>
                </tr>
                <tr>
                    <td>事業内容</td>
                    <td>・エステティックサロン及びビューティーサロンの経営<br/>
                        ・美容、健康に関するスクールの運営<br/>
                        ・美容商品、美容機器の企画、開発、製造、販売、輸出入<br/>
                    </td>
                </tr>
                <tr>
                    <td>所在地</td>
                    <td>〒150-0021　東京都渋谷区恵比寿西1-3-10 EBISU. TANAKA. BLDG. 4F</td>
                </tr>
                <tr>
                    <td>電話番号</td>
                    <td>03-6416-3451</td>
                </tr>
                <tr>
                    <td>FAX</td>
                    <td>03-6416-3455</td>
                </tr>
                <tr>
                    <td>予約専用</td>
                    <td>0120-262-633</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>info@mareve.co.jp</td>
                </tr>
                <tr>
                    <td>URL</td>
                    <td><a>	株式会社 マリーブ</a></td>
                </tr>
                <tr>
                    <td className={style.tiltless}></td>
                    <td><a>オフィシャルサロン一覧</a></td>
                </tr>
                <tr>
                    <td className={style.tiltless}></td>
                    <td><a>オンラインショップ</a></td>
                </tr>
                <tr>
                    <td className={style.tiltless}></td>
                    <td><a>福田麻理 Instagram</a></td>
                </tr>
                <tr>
                    <td className={style.tiltless}></td>
                    <td><a>サロン公式Instagram</a></td>
                </tr>
                <tr>
                    <td className={style.tiltless}></td>
                    <td><a>M beauty academy Instagram</a></td>
                </tr>
            </table>
            <p>弊社事業について（脱毛サロン「MAREVE」、M beauty academy、プロデュース商品等）、セミナー、講演、取材のご依頼等のお問。<br/>
                い合わせについては、下記「お問い合わせ」からご連絡いただくようお願い申し上げます。<br/>
            </p>
            <div className={style.btns}>
                <button><a href={"/contact"}>お問い合わせはこちらへ</a></button>
            </div>
        </div>
    )
}