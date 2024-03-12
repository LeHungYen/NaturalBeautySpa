import store from "../store/store";


export function getDict(key) {
    key = key.replace(/-/g, "_");
    try {
        const state = store.getState();
        const rs = dictLibrary[key][state.lang]
        return rs;
    } catch (e) {
        return "DICT_ERROR";
    }
}

const dictLibrary = {
    about_banner_description1: {
        "vi": null,
        "en": null,
        "jp": "マリーブは決して一朝一夕では身に付かない、お客様の肌へ寄り添った本物の技術をお届けしています。",
        "kr": null,
        "mergeFlag": false
    },
    about_banner_description2: {
        "vi": null,
        "en": null,
        "jp": "\n私たちになくせないムダ毛はありません。",
        "kr": null,
        "mergeFlag": false
    },
    about_banner_subtitle1: {
        "vi": null,
        "en": null,
        "jp": "マリーブは決して一朝一夕では身に付かない、お客様の肌へ寄り添った本物の技術をお届けしています。",
        "kr": null,
        "mergeFlag": false
    },
    about_banner_subtitle2: {
        "vi": null,
        "en": null,
        "jp": "\n私たちになくせないムダ毛はありません。",
        "kr": null,
        "mergeFlag": false
    },
    about_banner_title1: {
        "vi": null,
        "en": null,
        "jp": "「クオリティ」を極める。",
        "kr": null,
        "mergeFlag": false
    },
    about_banner_title2: {
        "vi": null,
        "en": null,
        "jp": "日本の脱毛のレベルを変える。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_1_button_caption: {
        "vi": null,
        "en": null,
        "jp": "ごあいさつ",
        "kr": null,
        "mergeFlag": false
    },
    about_item_1_description: {
        "vi": null,
        "en": null,
        "jp": "常に進化する脱毛技術と共に、15年間脱毛一筋でやってきたからこそできるマリーブの脱毛。毛質も肌質も違うお客様ひとりひとりに合わせた、最適な施術で必ず結果を出します。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_1_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "15年間、脱毛一筋。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_1_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\nマジメに毛と向き合ってきました",
        "kr": null,
        "mergeFlag": false
    },
    about_item_1_title: {
        "vi": null,
        "en": null,
        "jp": "ごあいさつ",
        "kr": null,
        "mergeFlag": false
    },
    about_item_2_button_caption: {
        "vi": null,
        "en": null,
        "jp": "マリーブの脱毛",
        "kr": null,
        "mergeFlag": false
    },
    about_item_2_description: {
        "vi": null,
        "en": null,
        "jp": "マリーブは「毛とマジメに向き合う」ということをモットーにしており、これまで東京六本木で10万人の施術を担当した脱毛のプロが、お客様ひとりひとりの毛とマジメに向き合い丁寧に施術を行わせていただきます。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_2_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "マジメに脱毛",
        "kr": null,
        "mergeFlag": false
    },
    about_item_2_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\nマジメに毛と向き合う",
        "kr": null,
        "mergeFlag": false
    },
    about_item_2_title: {
        "vi": null,
        "en": null,
        "jp": "マリーブの脱毛",
        "kr": null,
        "mergeFlag": false
    },
    about_item_3_button_caption: {
        "vi": null,
        "en": null,
        "jp": "マリーブが大切にしていること",
        "kr": null,
        "mergeFlag": false
    },
    about_item_3_description: {
        "vi": null,
        "en": null,
        "jp": "マリーブの脱毛は毛と真摯に向き合っているからこそ、お客様ひとりひとりのご要望を実現することができ、初めての方でも安心して通っていただけるサロン作りを目指しています。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_3_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "安心して通えるサロン作りと",
        "kr": null,
        "mergeFlag": false
    },
    about_item_3_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\nマリーブだからできる脱毛を",
        "kr": null,
        "mergeFlag": false
    },
    about_item_3_title: {
        "vi": null,
        "en": null,
        "jp": "マリーブが大切にしていること",
        "kr": null,
        "mergeFlag": false
    },
    about_item_4_button_caption: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyについて",
        "kr": null,
        "mergeFlag": false
    },
    about_item_4_description: {
        "vi": null,
        "en": null,
        "jp": "当スクールでは、東京六本木で10万人の施術を担当した脱毛のプロ 福田 麻理 から脱毛に関する技術テクニックや知識、カウンセリングや衛生管理など開業する上でのポイントについて学べます。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_4_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "脱毛のプロに学ぶ",
        "kr": null,
        "mergeFlag": false
    },
    about_item_4_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\n最新の脱毛技術スクール",
        "kr": null,
        "mergeFlag": false
    },
    about_item_4_title: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyについて",
        "kr": null,
        "mergeFlag": false
    },
    about_item_5_button_caption: {
        "vi": null,
        "en": null,
        "jp": "プロデュース商品について",
        "kr": null,
        "mergeFlag": false
    },
    about_item_5_description: {
        "vi": null,
        "en": null,
        "jp": "プロ用ワックス、アフターケア専用アイテムなど、プロフェッショナルを養成するスクールでも採用している最高品質のアイテムを現場目線で企画、開発しております。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_5_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "その品質にプロが感動する。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_5_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\n福田麻理プロデュースアイテム",
        "kr": null,
        "mergeFlag": false
    },
    about_item_5_title: {
        "vi": null,
        "en": null,
        "jp": "プロデュース商品について",
        "kr": null,
        "mergeFlag": false
    },
    about_item_6_button_caption: {
        "vi": null,
        "en": null,
        "jp": "アクセス",
        "kr": null,
        "mergeFlag": false
    },
    about_item_6_description: {
        "vi": null,
        "en": null,
        "jp": "お客様のご要望をお伺いし、最適な施術方針を設定するためにカウンセリングをさせていただきます。平日は夜の遅い時間までカウンセリングの予約が可能です。来店が難しい方にはメールや電話でもサポートさせていただきます。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_6_sub_title_1st: {
        "vi": null,
        "en": null,
        "jp": "脱毛によってお肌の美しさを引き出す。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_6_sub_title_2nd: {
        "vi": null,
        "en": null,
        "jp": "\n私たちは最高の技術でお応えします。",
        "kr": null,
        "mergeFlag": false
    },
    about_item_6_title: {
        "vi": null,
        "en": null,
        "jp": "MAREVE恵比寿本店アクセス",
        "kr": null,
        "mergeFlag": false
    },
    about_popup_btn: {
        "vi": null,
        "en": null,
        "jp": "詳しく見る",
        "kr": null,
        "mergeFlag": false
    },
    about_popup_description: {
        "vi": null,
        "en": null,
        "jp": "株式会社マリーブは、代表がもつ10万人の施術経験を元にしたハイクオリティな脱毛サロンを運営し、トップレベルの脱毛技術が学べるスクール、プロデュース商品など、老若男女問わず「素肌の美しさ」を求める方へのサービスをご提供しております。",
        "kr": null,
        "mergeFlag": false
    },
    about_popup_sub_title: {
        "vi": null,
        "en": null,
        "jp": "株式会社マリーブについて",
        "kr": null,
        "mergeFlag": false
    },
    banner_sub_title: {
        "vi": null,
        "en": null,
        "jp": "10万人の施術実績。私たちになくせない「ムダ毛」はありません。",
        "kr": null,
        "mergeFlag": false
    },
    banner_title: {
        "vi": null,
        "en": null,
        "jp": "プロが通うプライベートサロン「マリーブ」へようこそ。",
        "kr": null,
        "mergeFlag": false
    },
    messenger_reservation: {
        "vi": null,
        "en": null,
        "jp": "ご予約専用MESSENGER",
        "kr": null,
        "mergeFlag": false
    },
    nav_about_company: {
        "vi": null,
        "en": null,
        "jp": "ABOUT MAREVE",
        "kr": null,
        "mergeFlag": false
    },
    nav_company_profile: {
        "vi": null,
        "en": null,
        "jp": "会社概要",
        "kr": null,
        "mergeFlag": false
    },
    nav_customer_feedback: {
        "vi": null,
        "en": null,
        "jp": "お客様の声",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_1: {
        "vi": null,
        "en": null,
        "jp": "全身脱毛",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_2: {
        "vi": null,
        "en": null,
        "jp": "顔",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_3: {
        "vi": null,
        "en": null,
        "jp": "上半身",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_4: {
        "vi": null,
        "en": null,
        "jp": "下半身",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_5: {
        "vi": null,
        "en": null,
        "jp": "デリケートゾーン",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_6: {
        "vi": null,
        "en": null,
        "jp": "メンズ脱毛",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_2_7: {
        "vi": null,
        "en": null,
        "jp": "キッズ脱毛",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_3_1: {
        "vi": null,
        "en": null,
        "jp": "お知らせ",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_3_2: {
        "vi": null,
        "en": null,
        "jp": "お問い合わせ",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_3_3: {
        "vi": null,
        "en": null,
        "jp": "個人情報保護方針",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_3_4: {
        "vi": null,
        "en": null,
        "jp": "M beauty academy 公式サイト",
        "kr": null,
        "mergeFlag": false
    },
    nav_drawer_sub_3_5: {
        "vi": null,
        "en": null,
        "jp": "オンラインショップ",
        "kr": null,
        "mergeFlag": false
    },
    nav_hair_remover: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    nav_product: {
        "vi": null,
        "en": "Product Detail",
        "jp": "プロデュース商品",
        "kr": null,
        "mergeFlag": false
    },
    nav_reservation: {
        "vi": null,
        "en": null,
        "jp": "予約専用フォーム",
        "kr": null,
        "mergeFlag": false
    }
}
