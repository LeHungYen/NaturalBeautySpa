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
    about_important_txt_1: {
        "vi": null,
        "en": null,
        "jp": "老若男女全ての「美しい素肌」を求める方にお応えしたい。\n",
        "kr": null,
    },
    about_important_txt_2: {
        "vi": null,
        "en": null,
        "jp": "私たちは、誰でも安心して通えるサロン作りはもちろん技術を学びたい方へのセミナーや、プロユース商品の開発など、日本に「脱毛にマジメなサロン」を広めて参ります。",
        "kr": null,
    },
    about_important_txt_3: {
        "vi": null,
        "en": null,
        "jp": "「脱毛サロン」は機械さえあれば誰でも開業しやすい、という理由で経験のない人でも入りやすい業界です。",
        "kr": null,
    },
    about_important_txt_4: {
        "vi": null,
        "en": null,
        "jp": "しかし「脱毛」の技術は簡単にみえてとても奥が深く、たとえ高価な機械を導入しても、経験を元にお客様の肌状態を見極めた最適な施術をできる人は少ないでしょう。",
        "kr": null,
    },
    about_important_txt_5: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは機械の選定は代表自らが徹底的に調べて試し、効果や痛みなどを比べてこだわり抜いたものを導入しています。これは大手サロンや他サロンでは絶対にやっていないこと。痛みの少ないワックス脱毛については、施術に適した「ワックス」の開発も行いました。",
        "kr": null,
    },
    about_important_txt_6: {
        "vi": null,
        "en": null,
        "jp": "マリーブの脱毛は毛と真摯に向き合っているからこそ、お客様ひとりひとりのご要望を実現することができるのです。",
        "kr": null,
    },
    about_important_txt_7: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛への悩みは千差万別、100人100通り。性別の違いはもちろん、毛質や肌質、ホルモンのバランスによって毛の生え方は人それぞれ違います。",
        "kr": null,
    },
    about_important_txt_8: {
        "vi": null,
        "en": null,
        "jp": "マリーブには脱毛のプロフェッショナルがいます。",
        "kr": null,
    },
    about_important_txt_9: {
        "vi": null,
        "en": null,
        "jp": "他サロンの業務的な施術とは違い、お客様それぞれの毛質や肌質に合わせた施術を行わせていただきます。マジメに毛と向き合っているため、脱毛効果の実感が早いのがマリーブの強みです。もちろん自宅での処理・ケア方法、脱毛施術後のアフターフォローも全て真摯に対応致します。",
        "kr": null,
    },
    about_important_txt_10: {
        "vi": null,
        "en": null,
        "jp": "これまで10万人の施術を担当した脱毛のプロが、知識やテクニック技術をすべてのスタッフに徹底して育成をし、お客様が抱える不安や疑問を解消しながら施術していくので、初めての方でも安心して通っていただけるよう常に努力は怠りません。",
        "kr": null,
    },
    about_important_txt_11: {
        "vi": null,
        "en": null,
        "jp": "脱毛へのどんな小さな不安も、私たちへお聞かせください。",
        "kr": null,
    },about_important_txt_12: {
        "vi": null,
        "en": null,
        "jp": "「痛くて通えなかった」",
        "kr": null,
    },
    about_important_txt_13: {
        "vi": null,
        "en": null,
        "jp": "「肌トラブルがおきた」",
        "kr": null,
    },
    about_important_txt_14: {
        "vi": null,
        "en": null,
        "jp": "「通い続けても毛が抜けなかった」",
        "kr": null,
    },
    about_important_txt_15: {
        "vi": null,
        "en": null,
        "jp": "他サロンに通っていたお客様でこのような悩みは大変多いです。",
        "kr": null,
    },
    about_important_txt_16: {
        "vi": null,
        "en": null,
        "jp": "２～３年通わなければいけない大手サロンとは違い、マリーブは1年ほどで脱毛が完了します。お客様の毛と真摯に向き合いお客様ひとりひとりに合わせて丁寧に施術しているからこそ実感力が違います。",
        "kr": null,
    },
    about_important_txt_17: {
        "vi": null,
        "en": null,
        "jp": "さらにマリーブの脱毛は、痛みが最小限であることが人気の一つ。特にワックス脱毛は小さなお子様でも使える安心・安全な仕様になっていますので、ほとんど痛みを感じず、眠ってしまうお客様もいらっしゃいます。",
        "kr": null,
    },
    about_important_txt_18: {
        "vi": null,
        "en": null,
        "jp": "脱毛にマジメ、とはお客様ひとりひとりの肌にあった施術をご提供でき、妥協のなく技術を追い求め結果を出すこと。",
        "kr": null,
    },
    about_important_txt_19: {
        "vi": null,
        "en": null,
        "jp": "このマインドを持った技術者を増やすべく「M beauty academy（エム ビューティー アカデミー）」を設立し、技術者の育成を行っております。",
        "kr": null,
    },
    about_important_txt_20: {
        "vi": null,
        "en": null,
        "jp": "女性の独立を応援したいという思いの元に、トータルプロデュースコースや、オンライン講習など「人」と「時代」にあった様々なプログラムをご用意しております。",
        "kr": null,
    },
    about_important_txt_21: {
        "vi": null,
        "en": null,
        "jp": "代表・福田麻理が開発するプロユースのサロンアイテム「mà remove（マ・リムーブ）」は、商品化まで１年半の歳月をかけた最高の国産ワックスをはじめ、アフターケアローションなどプロフェッショナルの方が理想とする状態をかなえるアイテムが揃っております。",
        "kr": null,
    },
    about_important_txt_22: {
        "vi": null,
        "en": null,
        "jp": "是非一度、あなたのお肌で試してみてください。「mà remove」は、今後も全ての「美肌」の土台づくりのため、様々なアイテムをリリースして参ります。",
        "kr": null,
    },
    about_feature_txt_1: {
        "vi": null,
        "en": null,
        "jp": "マリーブは「毛とマジメに向き合う」ということをモットーにしており、これまで東京六本木で10万人の施術を担当した脱毛のプロが、お客様ひとりひとりの毛とマジメに向き合い、一番最適な施術を行わせていただきます。",
        "kr": null,
    },
    about_feature_txt_2: {
        "vi": null,
        "en": null,
        "jp": "カウンセリングは実際に施術を担当するスタッフが丁寧に行います。お客様ひとりひとりのご要望を実現するためには、終始一貫した施術方針が必要と考えており、方向性に食い違いがおきないようにするためにも、丁寧なカウンセリングを徹底しすべてのスタッフが同じ理念のもとで施術を行うことを心がけています。",
        "kr": null,
    },
    about_feature_txt_3: {
        "vi": null,
        "en": null,
        "jp": "男性の方も今は脱毛する時代。毛質やホルモンのバランスによって毛の生え方は人それぞれ違ってきます。特にヒゲ脱毛はワックスと機械のコラボ脱毛をオススメしており、効果の実感しやすさ・完了までのスピード・次回脱毛までの不快な期間が少なくなるので、みなさま必ず感動されます。",
        "kr": null,
    },
    about_feature_txt_4: {
        "vi": null,
        "en": null,
        "jp": "男性の方も今は脱毛する時代。毛質やホルモンのバランスによって毛の生え方は人それぞれ違ってきます。特にヒゲ脱毛はワックスと機械のコラボ脱毛をオススメしており、効果の実感しやすさ・完了までのスピード・次回脱毛までの不快な期間が少なくなるので、みなさま必ず感動されます。",
        "kr": null,
    },
    about_feature_txt_5: {
        "vi": null,
        "en": null,
        "jp": "【機械とワックスのコラボ脱毛】\n" +
            "従来のワックス脱毛は痛みや荒れなどの皮膚トラブルがつきもので、機械脱毛とのコラボが難しいものでした。ですがマリーブのワックス脱毛は機械脱毛とのコラボが可能。\n" +
            "小さいお子様の肌でも使える仕様になっています。",
        "kr": null,
    },
    about_feature_title_1: {
        "vi": null,
        "en": null,
        "jp": "カウンセリングから施術まで一貫した施術方針",
        "kr": null,
    },
    about_important_title_1: {
        "vi": null,
        "en": null,
        "jp": "お客様ひとりひとりのご要望を実現すること",
        "kr": null,
    },
    about_important_title_2: {
        "vi": null,
        "en": null,
        "jp": "お客様が抱く不安や疑問を全て解決します",
        "kr": null,
    },
    about_important_title_3: {
        "vi": null,
        "en": null,
        "jp": "痛みの少ないリラックスした施術",
        "kr": null,
    },
    about_important_title_4: {
        "vi": null,
        "en": null,
        "jp": "日本中に「脱毛にマジメ」なサロンを",
        "kr": null,
    },
    about_feature_title_2: {
        "vi": null,
        "en": null,
        "jp": "女性専門サロンではない理由",
        "kr": null,
    },
    about_feature_title_3: {
        "vi": null,
        "en": null,
        "jp": "マリーブにしかできない脱毛",
        "kr": null,
    },
    about_message_profile_role :{
        "vi": null,
        "en": null,
        "jp": "株式会社マリーブ　代表取締役",
        "kr": null,
    },
    about_message_profile_name :{
        "vi": null,
        "en": null,
        "jp": "福田 麻理",
        "kr": null,
    },
    about_message_content_title_1 :{
        "vi": null,
        "en": null,
        "jp": "広がる脱毛への意識",
        "kr": null,
    },
    about_message_content_title_2 :{
        "vi": null,
        "en": null,
        "jp": "脱毛にマジメに、真摯に向き合うこと",
        "kr": null,
    },
    about_message_txt_6: {
        "vi": null,
        "en": null,
        "jp": "小学５年生くらいからホルモンバランスの影響で体毛に変化が現れます。",
        "kr": null,
    },
    about_message_txt_7: {
        "vi": null,
        "en": null,
        "jp": "特に女の子は体育の時間や水泳など肌を露出する場面で、他の子と比べて気にしている子も多く、身体に関するデリケートな悩みの深さは大人も子供も関係ないと感じています。",
        "kr": null,
    },
    about_message_txt_8: {
        "vi": null,
        "en": null,
        "jp": "そして女性の脱毛が当たり前になる一方で、体毛を気にしつつも、どこに行けば良いのか、誰に相談したら良いのか分からない、といった悩める男性も少なくありません。",
        "kr": null,
    },
    about_message_txt_9: {
        "vi": null,
        "en": null,
        "jp": "男女問わないのはもちろん、小さな子供の肌でも安心して受けられるワックス脱毛や脱毛マシーンを弊社では取り入れてます。",
        "kr": null,
    },
    about_message_txt_10: {
        "vi": null,
        "en": null,
        "jp": "それも全て、私自身の肌で試して本当に納得できる物しか導入しておりません。",
        "kr": null,
    },
    about_message_txt_11: {
        "vi": null,
        "en": null,
        "jp": "体毛でコンプレックスを抱えている状態よりも、しっかりケアして自分の肌に自信を持てるほうが断然いいはず。",
        "kr": null,
    },
    about_message_txt_12: {
        "vi": null,
        "en": null,
        "jp": "女性はもちろん、男性でも美容を楽しめる環境をつくっていきたいです。",
        "kr": null,
    },
    about_message_txt_13: {
        "vi": null,
        "en": null,
        "jp": "脱毛サロンに行こう！と思ってもTVのCMや電車の中吊りを見て、パッと行ける人は実際とても少ないはず。",
        "kr": null,
    },
    about_message_txt_14: {
        "vi": null,
        "en": null,
        "jp": "私がサロンでお会いするお客様のほとんどは、『どこに行っていいかわからなかった』とおっしゃいます。",
        "kr": null,
    },
    about_message_txt_15: {
        "vi": null,
        "en": null,
        "jp": "脱毛サロンがはじめての方はもちろんですが、どこに行っても今まで満足できなかったという方にこそ、ぜひ弊社のサロンに来ていただきたいです。",
        "kr": null,
    },
    about_message_txt_16: {
        "vi": null,
        "en": null,
        "jp": "知識、テクニック・技術、経験は、誰にも負けません。",
        "kr": null,
    },
    about_message_txt_17: {
        "vi": null,
        "en": null,
        "jp": "15年間脱毛一筋で、ただただマジメに取り組んできたので「脱毛」の事なら私が一番良く知っていると自負しています。",
        "kr": null,
    },
    about_message_txt_18: {
        "vi": null,
        "en": null,
        "jp": "他で抜けなかった毛も、弊社のサロンで責任を持ってしっかりとケアさせていただきます。",
        "kr": null,
    },
    about_message_txt_19: {
        "vi": null,
        "en": null,
        "jp": "過去10万人以上の施術経験をもとに、毛質も肌質も違うお客様ひとりひとりに合わせた最適な施術をしておりますので業界関係者の方はもちろん、プロスポーツ選手やモデル業の方など、男女問わず仕事上「しっかりとケアされた肌」を求められるプロフェッショナルの方もどうぞ私にご相談ください。",
        "kr": null,
    },
    about_message_txt_20: {
        "vi": null,
        "en": null,
        "jp": "時代に合う、そして進化する最新の脱毛技術をこれからも追い求め",
        "kr": null,
    },
    about_message_txt_21: {
        "vi": null,
        "en": null,
        "jp": "老若男女全ての方の「美しい素肌」のために、今後共邁進して参ります。",
        "kr": null,
    },
    about_message_txt_1: {
        "vi": null,
        "en": null,
        "jp": "はじめまして。株式会社マリーブの福田麻理と申します。",
        "kr": null,
    },
    about_message_txt_2: {
        "vi": null,
        "en": null,
        "jp": "15年前に脱毛業界に転身してから、今までずっと脱毛一筋にやって参りました。",
        "kr": null,
    },
    about_message_txt_3: {
        "vi": null,
        "en": null,
        "jp": "当時は「脱毛ブーム」真っ只中で1日200人近くお客様が来られることもしばしば。",
        "kr": null,
    },
    about_message_txt_4: {
        "vi": null,
        "en": null,
        "jp": "私自身がこれまで10万人以上施術を担当してきており、大々的なPRはしていませんが、",
        "kr": null,
    },
    about_message_txt_5: {
        "vi": null,
        "en": null,
        "jp": "ありがたいことに現在も口コミや紹介で来てくださるお客様が数多くいらっしゃいます。",
        "kr": null,
    },
    about_sub_item_1: {
        "vi": null,
        "en": null,
        "jp": "ごあいさつ",
        "kr": null,
    },
    about_sub_item_2: {
        "vi": null,
        "en": null,
        "jp": "マリーブの脱毛",
        "kr": null,
    },
    about_sub_item_3: {
        "vi": null,
        "en": null,
        "jp": "マリーブが大切にしていること",
        "kr": null,
    },
    about_sub_item_4: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyについて",
        "kr": null,
    },
    about_sub_item_5: {
        "vi": null,
        "en": null,
        "jp": "プロデュース商品について",
        "kr": null,
    },
    about_sub_item_6: {
        "vi": null,
        "en": null,
        "jp": "MAREVE恵比寿本店アクセス",
        "kr": null,
    },
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
        "jp": "最新の脱毛技術スクール",
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
        "jp": "福田麻理プロデュースアイテム",
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
        "jp": "ABOUT US",
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
