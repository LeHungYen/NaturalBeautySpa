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
    about_academy_title_1: {
        "vi": null,
        "en": null,
        "jp": "マジメなサロンを日本中に増やしたい",
        "kr": null
    },
    product_page_title_1: {
        "vi": null,
        "en": null,
        "jp": "mà remove（マ・リムーブ）は",
        "kr": null,
    },
    product_page_title_2: {
        "vi": null,
        "en": null,
        "jp": "全ての「美肌」の土台づくりを叶えたい",
        "kr": null,
    },
    product_page_title_3: {
        "vi": null,
        "en": null,
        "jp": "施術者とお客様の不安を取り除くために",
        "kr": null,
    },
    product_page_title_4: {
        "vi": null,
        "en": null,
        "jp": "機械とワックスのコラボ脱毛が可能に",
        "kr": null,
    },
    product_page_title_5: {
        "vi": null,
        "en": null,
        "jp": "これからも、マジメに毛と向き合うこと",
        "kr": null,
    },
    product_page_title_6: {
        "vi": null,
        "en": null,
        "jp": "ワックス脱毛は痛い？",
        "kr": null,
    },
    product_page_title_7: {
        "vi": null,
        "en": null,
        "jp": "これまでの常識が変わる自信作です",
        "kr": null,
    },
    product_page_title_8: {
        "vi": null,
        "en": null,
        "jp": "性別も施術箇所も選ばない万能の「国産ワックス」",
        "kr": null,
    },
    product_page_title_9: {
        "vi": null,
        "en": null,
        "jp": "サロン本来のリラックスした施術をサポート",
        "kr": null,
    },
    product_page_title_10: {
        "vi": null,
        "en": null,
        "jp": "無着色・無香料　アレルギーフリーのロジンを使用",
        "kr": null,
    },
    product_page_title_11: {
        "vi": null,
        "en": null,
        "jp": "今、女性を中心に顔脱毛（フェイシャルワックス）が大人気です",
        "kr": null,
    },
    product_page_txt_8: {
        "vi": null,
        "en": null,
        "jp": "従来のワックス脱毛は痛みや荒れなどの皮膚トラブルがつきもので、",
        "kr": null,
    },
    product_page_txt_9: {
        "vi": null,
        "en": null,
        "jp": "機械脱毛とのコラボが難しいものでした。",
        "kr": null,
    },
    product_page_txt_10: {
        "vi": null,
        "en": null,
        "jp": "ですがマリーブのワックス脱毛は機械脱毛とのコラボが可能、",
        "kr": null,
    },
    product_page_txt_11: {
        "vi": null,
        "en": null,
        "jp": "小さなお子様の肌でも使える仕様になっています。",
        "kr": null,
    },
    product_page_txt_12: {
        "vi": null,
        "en": null,
        "jp": "特に男性のヒゲ脱毛はワックスと機械のコラボ脱毛で施術することで",
        "kr": null,
    },
    product_page_txt_13: {
        "vi": null,
        "en": null,
        "jp": "より早く脱毛効果を実感できるようになります。",
        "kr": null,
    },
    product_page_txt_14: {
        "vi": null,
        "en": null,
        "jp": "ブランドの開発のコンセプトである「ワックス脱毛をもっとシンプルに、もっと簡単に・・・」をモットーとして、",
        "kr": null,
    },
    product_page_txt_15: {
        "vi": null,
        "en": null,
        "jp": "ワックス脱毛を導入したいと思ってもらえるサロンが増えるよう、今後も商品を増やしていく予定です。",
        "kr": null,
    },
    product_page_txt_16: {
        "vi": null,
        "en": null,
        "jp": "ワックス脱毛と聞いて、皆さんはどのようなイメージを持たれますか？",
        "kr": null,
    },
    product_page_txt_17: {
        "vi": null,
        "en": null,
        "jp": "「痛みが強い」「火傷するくらい熱い」「罰ゲーム」など",
        "kr": null,
    },
    product_page_txt_18: {
        "vi": null,
        "en": null,
        "jp": "ワックス脱毛自体がお客様にとってストレスになってしまっているのが私たちの課題の一つでした。",
        "kr": null,
    },
    product_page_txt_19: {
        "vi": null,
        "en": null,
        "jp": "そこでこの悪いイメージを変えるべく、現場のワクサー達の声を最大限に反映し、",
        "kr": null,
    },
    product_page_txt_20: {
        "vi": null,
        "en": null,
        "jp": "どのパーツでも扱いやすく、また毛質・肌質を選ばず",
        "kr": null,
    },
    product_page_txt_21: {
        "vi": null,
        "en": null,
        "jp": "誰が塗ってもきれいに仕上がるシンプルで簡単なワックス脱毛を1年半かけて開発。",
        "kr": null,
    },
    product_page_txt_22: {
        "vi": null,
        "en": null,
        "jp": "国産にこだわり、日本人の肌に合わせた繊細なワックスは痛みも少なく、",
        "kr": null,
    },
    product_page_txt_23: {
        "vi": null,
        "en": null,
        "jp": "お客様にリラックスして施術を受けていただくことができます。",
        "kr": null,
    },
    product_page_txt_24: {
        "vi": null,
        "en": null,
        "jp": "国産にこだわって開発したワックス「màremove(マ・リムーブ)TheOne」は、VIOなどのデリートゾーンはもちろん、男性のヒゲなど性別や毛質を問わず、身体中全ての範囲に使用できます。通常のワックスよりも低温のためアクシデントも起きづらく、お子様から大人の肌まで使える優しいワックスです。",
        "kr": null,
    },
    product_page_txt_25: {
        "vi": null,
        "en": null,
        "jp": "「熱い」「痛い」などのネガティブな印象を覆す、扱いやすいワックス。しっかりとした除毛効果と肌への優しさを兼ね備えているので、施術中に寝てしまうお客様もいらっしゃいます。「màremove(マ・リムーブ)TheOne」で、あなたのサロンでのサービスのクオリティを高めてください。",
        "kr": null,
    },
    product_page_txt_26: {
        "vi": null,
        "en": null,
        "jp": "「màremove(マ・リムーブ)TheOne」は天然ロジンを配合しないアレルギーフリーのロジンを使用し、ペレットの色はややパールがかった白色で、熱を加えると白から透明へと変化します。透明のため毛の状態が確認しやすく施術効率を格段に高めてくれます。",
        "kr": null,
    },
    product_page_txt_27: {
        "vi": null,
        "en": null,
        "jp": "化粧乗りの悪さ、くすみの原因は古い角質じゃなくて、顔を覆っているように生えてる産毛なんだと、気づくお客様がたくさんいます。小さいお子様でも使える安心・安全なワックス「màremove(マ・リムーブ)TheOne」だから叶う施術です。※フェイシャルは繊細な技術が不可欠のため、アカデミーのフェイシャルコースを受講されることをお勧めします。",
        "kr": null,
    },
    product_btn_txt_1: {
        "vi": null,
        "en": null,
        "jp": "商品に関するお問い合わせ",
        "kr": null,
    },
    product_page_txt_0: {
        "vi": null,
        "en": null,
        "jp": "お客様の中には、ワックス脱毛＝テレビでよく見る罰ゲームといったマイナスなイメージを持つ方がいまだにいらっしゃいます。",
        "kr": null,
    },
    product_page_txt_1: {
        "vi": null,
        "en": null,
        "jp": "施術者側でも、痛み・熱さ・肌荒れなど従来のワックス脱毛に抵抗がある人が多い事も一つの課題でした。",
        "kr": null,
    },
    product_page_txt_2: {
        "vi": null,
        "en": null,
        "jp": "そこでこれらの不安要素を取り除くために、オリジナルのワックス、アフターケア専用鎮静クリームなどをプロデュース。",
        "kr": null,
    },
    product_page_txt_7: {
        "vi": null,
        "en": null,
        "jp": "最高のクオリティで全ての不安を解消します。",
        "kr": null,
    },
    product_page_txt_3: {
        "vi": null,
        "en": null,
        "jp": "熟練したワクサーの皆様はもちろん、これからワックス脱毛を導入予定のサロン様や、",
        "kr": null,
    },
    product_page_txt_4: {
        "vi": null,
        "en": null,
        "jp": "フェイシェルケアの新メニューとして導入を考えているフェイシャルサロン様など",
        "kr": null,
    },
    product_page_txt_5: {
        "vi": null,
        "en": null,
        "jp": "一人でも多くの人にワックス脱毛のすばらしさを知ってほしいという思いを込めて、",
        "kr": null,
    },
    product_page_txt_6: {
        "vi": null,
        "en": null,
        "jp": "オリジナルブランド・mà remove（マ・リムーブ）は生まれました。",
        "kr": null,
    },
    about_access_title_1: {
        "vi": null,
        "en": null,
        "jp": "素肌の美しさにこだわる全ての人へ。",
        "kr": null,
    },
    about_access_title_2: {
        "vi": null,
        "en": null,
        "jp": "完全プライベートサロンで、ご要望にお応えいたします。",
        "kr": null,
    },
    about_access_txt_1: {
        "vi": null,
        "en": null,
        "jp": "各線恵比寿駅から徒歩３分。お車でお越しの際はコインパーキングをご利用下さい。。",
        "kr": null,
    },
    about_access_txt_2: {
        "vi": null,
        "en": null,
        "jp": "ご不明な点がありましたらお気軽にご連絡ください。",
        "kr": null,
    },
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
    }, about_important_txt_12: {
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
    about_academy_txt_1: {
        "vi": null,
        "en": null,
        "jp": "当スクールでは、これまで10万人以上の施術を担当した",
        "kr": null,
    },
    about_academy_txt_2: {
        "vi": null,
        "en": null,
        "jp": "脱毛のプロ・福田麻理から脱毛に関する技術や知識をゼロから学ぶことができます。",
        "kr": null,
    },
    about_academy_txt_3: {
        "vi": null,
        "en": null,
        "jp": "脱毛に「本気」で、「マジメ」なサロンが、全国に増えていくことが私たちの願いです。",
        "kr": null,
    },
    about_academy_txt_4: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyでは、現在、東京、愛知、福岡をはじめスクール生および、",
        "kr": null,
    },
    about_academy_txt_5: {
        "vi": null,
        "en": null,
        "jp": "オンラインスクール生を募集しています。",
        "kr": null,
    },
    about_academy_txt_6: {
        "vi": null,
        "en": null,
        "jp": "サロンオーナー様や開業を目指す方向けに、各種脱毛コースをご用意。部位別のコースに加え、皮膚理論などが学べる座学、開業コース、代表・福田麻理のトータルプロデュースコースなどもご用意しております。",
        "kr": null,
    },
    about_academy_txt_7: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyは独自の技術と理論を基礎から学ぶことができるスクール。講師との距離が近いので、疑問や不明点などはその都度、直接聞くことで解決しましょう。脱毛に関する技術テクニックや知識はもちろん、カウンセリングや衛生管理など開業する上でのポイントについても学べます。",
        "kr": null,
    },
    about_product_txt_1: {
        "vi": null,
        "en": null,
        "jp": "プロデュースアイテムの中でも特にこだわり、１年半以上の期間をかけて開発した「ワックス」。",
        "kr": null,
    },
    about_product_txt_2: {
        "vi": null,
        "en": null,
        "jp": "性別問わず身体の全パーツを施術可能です。",
        "kr": null,
    },
    about_product_txt_3: {
        "vi": null,
        "en": null,
        "jp": "ワックス自体が扱いやすく、お客様の毛質・肌質を選ばず、温度も熱くなりすぎない。",
        "kr": null,
    },
    about_product_txt_4: {
        "vi": null,
        "en": null,
        "jp": "施術者・お客様の両面から「仕上がりが他のワックスと全然違う！」「やみつきになる！」と、",
        "kr": null,
    },
    about_product_txt_5: {
        "vi": null,
        "en": null,
        "jp": "喜びのお声をいただいています。",
        "kr": null,
    },
    about_product_txt_6: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは代表・福田麻理が10万人以上のお客様へ施術を行ってきた経験から、",
        "kr": null,
    },
    about_product_txt_7: {
        "vi": null,
        "en": null,
        "jp": "自身が、そしてプロフェッショナルの方々が納得して使える",
        "kr": null,
    },
    about_product_txt_8: {
        "vi": null,
        "en": null,
        "jp": "「お客様の肌」に本当に良いものを代表自らがプロデュース。",
        "kr": null,
    },
    about_product_txt_9: {
        "vi": null,
        "en": null,
        "jp": "プロ用ワックス、アフターケア専用アイテムなど、プロフェッショナルを養成するスクールでも採用している",
        "kr": null,
    },
    about_product_txt_10: {
        "vi": null,
        "en": null,
        "jp": "高品質のアイテムを現場目線で企画、開発しております。",
        "kr": null,
    },
    about_product_txt_11: {
        "vi": null,
        "en": null,
        "jp": "性別問わず身体の全パーツを、弊社のワックス「màremove(マ・リムーブ)TheOne」で施術が可能。現場のワクサー達の声を最大限に反映したワックスは、どのパーツでも扱いやすく、毛質・肌質を選ばず、誰が塗ってもきれいに仕上がります。",
        "kr": null,
    },
    about_product_txt_12: {
        "vi": null,
        "en": null,
        "jp": "皆様が思い浮かべるワックス脱毛の悪いイメージが覆るほど、痛みを感じづらい仕様。お客様にリラックスしていただくことにより集中できるので、サロンケアのサービスの品質を高めることができます。\n" +
            "※痛みの感じ方は、施術を受けるお客様によって左右されます。",
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
    about_academy_title_4: {
        "vi": null,
        "en": null,
        "jp": "各種コースをご用意",
        "kr": null,
    },
    about_academy_title_5: {
        "vi": null,
        "en": null,
        "jp": "ワックス脱毛をもっと身近に",
        "kr": null,
    },
    about_academy_title_3: {
        "vi": null,
        "en": null,
        "jp": "マジメなサロンを日本中に増やしたい",
        "kr": null,
    },
    about_product_title_1: {
        "vi": null,
        "en": null,
        "jp": "一度使ったら、やみつきになる。",
        "kr": null,
    },
    about_product_title_2: {
        "vi": null,
        "en": null,
        "jp": "プロから愛される極上のワックス",
        "kr": null,
    },
    about_product_title_3: {
        "vi": null,
        "en": null,
        "jp": "フェイス・ボディ・VIO・メンズのヒゲまで全パーツに対応",
        "kr": null,
    },
    about_product_title_4: {
        "vi": null,
        "en": null,
        "jp": "痛みを感じづらい",
        "kr": null,
    },
    about_product_btn_1: {
        "vi": null,
        "en": null,
        "jp": "プロデュースアイテム詳細へ",
        "kr": null,
    },
    about_product_btn_2: {
        "vi": null,
        "en": null,
        "jp": "オンラインショップへ",
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
    about_message_profile_role: {
        "vi": null,
        "en": null,
        "jp": "株式会社マリーブ　代表取締役",
        "kr": null,
    },
    about_message_profile_name: {
        "vi": null,
        "en": null,
        "jp": "福田 麻理",
        "kr": null,
    },
    about_message_content_title_1: {
        "vi": null,
        "en": null,
        "jp": "広がる脱毛への意識",
        "kr": null,
    },
    about_message_content_title_2: {
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
        "jp": "NATURAL BEAUTY恵比寿本店アクセス",
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
        "jp": "NATURAL BEAUTY恵比寿本店アクセス",
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
    },

    // yen
    defaultLayout_row1_item1: {
        "vi": null,
        "en": null,
        "jp": "本店アクセス",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row1_item2: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row1_item3: {
        "vi": null,
        "en": null,
        "jp": "会社概要",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item1: {
        "vi": null,
        "en": null,
        "jp": "株式会社マリーブ",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item2: {
        "vi": null,
        "en": null,
        "jp": "〒150-0021",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item3: {
        "vi": null,
        "en": null,
        "jp": "東京都渋谷区恵比寿西1-3-10",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item4: {
        "vi": null,
        "en": null,
        "jp": "EBISU. TANAKA. BLDG. 4F",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item5: {
        "vi": null,
        "en": null,
        "jp": "NATURAL BEAUTY 恵比寿本店",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item6: {
        "vi": null,
        "en": null,
        "jp": "営業時間/11:00〜21:00",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item7: {
        "vi": null,
        "en": null,
        "jp": "定休日/年末年始",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item8: {
        "vi": null,
        "en": null,
        "jp": "予約専用フリーダイヤル：0246-6899-303",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item9: {
        "vi": null,
        "en": null,
        "jp": "TEL：0246-6899-303",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item10: {
        "vi": null,
        "en": null,
        "jp": "メール: naturalbeautyjapan24@gmail.com",
        "kr": null,
        "mergeFlag": false
    },

    defaultLayout_row2_col2_item1: {
        "vi": null,
        "en": null,
        "jp": "ご予約専用LINE",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col2_item2: {
        "vi": null,
        "en": null,
        "jp": "「NATURAL BEAUTY恵比寿本店」へのご予約（仮予約）はこちらのLINEからお友達追加をお願いします。完全プライベートサロンのため、ご希望の日時をいただいた後に調整を行います。",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col2_item3: {
        "vi": null,
        "en": null,
        "jp": "まずはお気軽にこちらよりご連絡ください。",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col2_item4: {
        "vi": null,
        "en": null,
        "jp": "LINEから予約する",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item1: {
        "vi": null,
        "en": null,
        "jp": " アカデミー専用",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item2: {
        "vi": null,
        "en": null,
        "jp": " お問い合わせLINE",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item3: {
        "vi": null,
        "en": null,
        "jp": " 「M beauty academy」「プロデュース商品」「セミナー、講演、取材のご依頼」等、アカデミー関連へのお問い合わせはこちらのLINEからお友達追加し、ご連絡ください。",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item4: {
        "vi": null,
        "en": null,
        "jp": "アカデミー問い合わせLINE",
        "kr": null,
        "mergeFlag": false
    },

    defaultLayout_row3_col1_item1: {
        "vi": null,
        "en": null,
        "jp": "ABOUT NATURAL BEAUTY",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item2: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item3: {
        "vi": null,
        "en": null,
        "jp": "M beauty academy",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item4: {
        "vi": null,
        "en": null,
        "jp": "プロデュース商品",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item5: {
        "vi": null,
        "en": null,
        "jp": "お客様の声",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item6: {
        "vi": null,
        "en": null,
        "jp": "会社概要",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item7: {
        "vi": null,
        "en": null,
        "jp": "お知らせ",
        "kr": null,
        "mergeFlag": false
    },

    defaultLayout_row3_col1_item8: {
        "vi": null,
        "en": null,
        "jp": "個人情報保護方針",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col1_item9: {
        "vi": null,
        "en": null,
        "jp": "NATURAL BEAUTY恵比寿本店アクセス",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item1: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item2: {
        "vi": null,
        "en": null,
        "jp": "全身脱毛",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item3: {
        "vi": null,
        "en": null,
        "jp": "顔",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item4: {
        "vi": null,
        "en": null,
        "jp": "上半身",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item5: {
        "vi": null,
        "en": null,
        "jp": "下半身",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item6: {
        "vi": null,
        "en": null,
        "jp": "デリケートゾーン",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item7: {
        "vi": null,
        "en": null,
        "jp": "メンズ脱毛",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row3_col2_item8: {
        "vi": null,
        "en": null,
        "jp": "キッズ脱毛",
        "kr": null,
        "mergeFlag": false
    },

    defaultLayout_row4_col2_item1: {
        "vi": null,
        "en": null,
        "jp": "Copyright © 株式会社マリーブ 2020",
        "kr": null,
        "mergeFlag": false
    },

    home_service_mainText_item1: {
        "vi": null,
        "en": null,
        "jp": "顔",
        "kr": null,
        "mergeFlag": false
    },
    home_service_subText_item1: {
        "vi": null,
        "en": null,
        "jp": "FACE",
        "kr": null,
        "mergeFlag": false
    },
    home_service_mainText_item2: {
        "vi": null,
        "en": null,
        "jp": "全身",
        "kr": null,
        "mergeFlag": false
    },
    home_service_subText_item2: {
        "vi": null,
        "en": null,
        "jp": "BODY",
        "kr": null,
        "mergeFlag": false
    },
    home_service_mainText_item3: {
        "vi": null,
        "en": null,
        "jp": "VIO",
        "kr": null,
        "mergeFlag": false
    },
    home_service_subText_item3: {
        "vi": null,
        "en": null,
        "jp": "VIO",
        "kr": null,
        "mergeFlag": false
    },

    home_product_mainText_item1: {
        "vi": null,
        "en": null,
        "jp": "学ぶ",
        "kr": null,
        "mergeFlag": false
    },
    home_product_subText_item1: {
        "vi": null,
        "en": null,
        "jp": "M beauty academy 公式サイト",
        "kr": null,
        "mergeFlag": false
    },
    home_product_mainText_item2: {
        "vi": null,
        "en": null,
        "jp": "買う",
        "kr": null,
        "mergeFlag": false
    },
    home_product_subText_item2: {
        "vi": null,
        "en": null,
        "jp": "オンラインショップ",
        "kr": null,
        "mergeFlag": false
    },
    home_new_title: {
        "vi": null,
        "en": null,
        "jp": "NEWS",
        "kr": null,
        "mergeFlag": false
    },
    home_new_textButton: {
        "vi": null,
        "en": null,
        "jp": "お知らせ一覧へ",
        "kr": null,
        "mergeFlag": false
    },

    home_instagram_title: {
        "vi": null,
        "en": null,
        "jp": "公式Instagram",
        "kr": null,
        "mergeFlag": false
    },
    home_instagram_text_row1: {
        "vi": null,
        "en": null,
        "jp": `    福田麻理公式Instagram
        脱毛サービス、セミナー情報、新商品などを`,
        "kr": null,
        "mergeFlag": false
    },
    home_instagram_text_row2: {
        "vi": null,
        "en": null,
        "jp": "This template does not exist!",
        "kr": null,
        "mergeFlag": false
    },
    home_instagram_button: {
        "vi": null,
        "en": null,
        "jp": "続きは公式Instagramへ",
        "kr": null,
        "mergeFlag": false
    },

    home_pharagraph_title: {
        "vi": null,
        "en": null,
        "jp": "マリーブは日本の「脱毛」のレベルを変えます。",
        "kr": null,
        "mergeFlag": false
    },
    home_pharagraph_titleMobile: {
        "vi": null,
        "en": null,
        "jp": `マリーブは日本の
        「脱毛」のレベルを変えます。`,
        "kr": null,
        "mergeFlag": false
    },
    home_pharagraph_sub: {
        "vi": null,
        "en": null,
        "jp": `10万人の施術実績。女性の独立支援。
        マリーブはプロフェッショナルの育成に力を入れています。`,
        "kr": null,
        "mergeFlag": false
    },
    home_pharagraph_subMobile: {
        "vi": null,
        "en": null,
        "jp": `10万人の施術実績。女性の独立支援。
        マリーブはプロフェッショナルの育成に
        力を入れています。`,
        "kr": null,
        "mergeFlag": false
    },

    mainMenu_title: {
        "vi": null,
        "en": null,
        "jp": "私たちになくせない「ムダ毛」はありません。",
        "kr": null,
        "mergeFlag": false
    },
    mainMenu_sub: {
        "vi": null,
        "en": null,
        "jp": `あなたのお悩みをお聞かせください。
        肌の状態を確認し、これまでの処理方法など総合的に伺いあなたの肌質にあった施術を行います。
        日焼け肌でも問題ありません。`,
        "kr": null,
        "mergeFlag": false
    },
    mainMenu_menu_img_p: {
        "vi": null,
        "en": null,
        "jp": "脱毛",
        "kr": null,
        "mergeFlag": false
    },

    menuComponent_containerCol1_title: {
        "vi": null,
        "en": null,
        "jp": "脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menuComponent_button_reservation: {
        "vi": null,
        "en": null,
        "jp": "予約専用フォームへ",
        "kr": null,
        "mergeFlag": false
    },
    menuComponent_priceList_title: {
        "vi": null,
        "en": null,
        "jp": "MENU",
        "kr": null,
        "mergeFlag": false
    },
    menuComponent_relatedPost_title: {
        "vi": null,
        "en": null,
        "jp": "脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_banner_bannerText_text_p: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    menu_menu_menuPosition_item2: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    menu_menu_menuPosition_item3: {
        "vi": null,
        "en": null,
        "jp": "脱毛",
        "kr": null,
        "mergeFlag": false
    },
    news_banner_bannerText_text_title: {
        "vi": null,
        "en": null,
        "jp": "お知らせ",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_menuPosition_news: {
        "vi": null,
        "en": null,
        "jp": "脱毛メニュー",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_bodyMenu_item1: {
        "vi": null,
        "en": null,
        "jp": "キャンペーン記事一覧",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_bodyMenu_item2: {
        "vi": null,
        "en": null,
        "jp": "公式Instagram",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_newDetail_notice_noticeTitle_main: {
        "vi": null,
        "en": null,
        "jp": "お知らせ",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_newDetail_notice_noticeTitle_news: {
        "vi": null,
        "en": null,
        "jp": "お知らせ一覧",
        "kr": null,
        "mergeFlag": false
    },
    pricacyPolicy_policy_p: {
        "vi": null,
        "en": null,
        "jp": `令和2年9月10日制定

        株式会社マリーブ
        代表取締役　福田　麻理
        
        近年、高度情報化に伴う個人情報保護の重要性への社会の関心は高まっており、お預かりした個人情報を保護することは、エステティックサロン及びビューティーサロンの経営に関する事業を営む株式会社マリーブ（以下「当社」といいます）の社会的責務であると考えます。当社は、当社の事業活動に際し、個人情報保護の重要性を認識し、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、役員・従業員一人一人に周知し、個人情報保護の重要性の認識と取組みの徹底を図り、個人情報の保護を推進することを宣言致します。当社は、本方針の内容を事前の予告なく変更することがあり、変更後の本方針については、当社のホームページに掲載した時から効力を生じるものとします。
        
        第１　個人情報の取扱いに関する法令等の遵守について
        
        当社は、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を含む個人情報の取扱いに関する関係法令、国が定めるガイドラインを遵守します。
        
        第２　個人情報について
        
        個人情報とは、生存する個人に関する情報（氏名、生年月日、その他の個人を識別することができる情報）であって、特定の個人を識別できるものをいい、他の情報と照合することで識別することができる情報を含みます。
        
        第３　個人情報の利用目的について
        
        　当社は、当社の事業目的の達成に必要な範囲内で、個人情報の利用の目的をで　きる限り特定し、あらかじめ明示した利用目的のもと、あらかじめご本人の同意を得た上で、個人情報を取得し、あらかじめ明示した利用目的の達成に必要な範囲内で適切に取扱います。合併その他の事由による事業の承継に伴い個人情報を取得した場合にも、あらかじめご本人の同意を得ないで、承継前の利用目的の達成に必要な範囲を超えて取扱うことはありません。ただし、次の場合はこの限りではありません。
        
        （１）法令に基づく場合
        
        （２）人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき
        
        （３）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき
        
        （４）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
        
        第４　個人情報の取得について
        
        当社は、適法かつ公正な手段で個人情報を取得し、偽りその他不正の手段により個人情報を取得することはありません。
        
        第５　個人情報の提供について
        
        １　当社は、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。ただし、次の場合はこの限りではありません。
        
        （１）法令に基づく場合
        
        （２）人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき
        
        （３）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき
        
        （４）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
        
        　２　以下の場合は、上記１に定める第三者には該当しないものとします。
        
        　　（１）当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託することに伴って提供される場合
        
        　　（２）合併その他の事由による事業の承継に伴って個人情報が提供される場合
        
        　　（３）特定の者との間で共同して利用される個人情報が当該特定の者に提供される場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめご本人に通知し、またはご本人が容易に知り得る状態に置いているとき
        
        第６　個人情報の取扱いの委託について
        
        当社は、個人情報の取扱いの全部または一部を第三者に委託することがあります。この場合、当社は、当該第三者について厳正な調査を行い、取扱いを委託された個人情報の安全管理が図られるよう、当該第三者に対する必要かつ適切な監督を行います。
        
        第７　個人情報の安全管理について
        
        当社は、個人情報の管理にあたっては、個人情報への不正アクセス、漏えい、滅失、改ざんまたはき損の防止、その他の個人情報の安全管理が図られるよう、従業員に対する必要かつ適切な監督を含む必要かつ適切な措置を講じます。また、この措置については定期的に見直し、必要に応じて是正します。
        
        第８　組織・体制
        
        当社は、個人情報管理責任者を設置し、個人情報の適正な管理及び継続的な改善を実施します。
        
        第９　個人情報の開示等の請求及びお問合わせ等について
        
        当社は、当社が保有する個人情報について、個人情報保護法に基づく開示、訂正・追加・削除、利用停止・消去、第三者提供の停止または利用目的の通知にかかるご本人からのご請求があった場合には、ご請求いただいた方がご本人であることを確認の上、個人情報保護法に従い、適切に対応します。また、当社は、個人情報の取扱いに関する苦情、相談、お問い合わせ等には、誠実かつ迅速に対応するよう努めます。上記のご請求・お問い合わせ等については、以下までご連絡くださいますようお願い申し上げます。
        
        【個人情報お問い合わせ窓口】
        〒150-0021
        東京都渋谷区恵比寿西1-3-10 EBISU. TANAKA. BLDG. 4F
        株式会社マリーブ　　個人情報お問い合わせ窓口
        電話：03-6416-3451
        E-mail：
        お問い合わせ受付時間：11:00～21:00（年末年始は除く）`,
        "kr": null,
        "mergeFlag": false
    },


    // data
    news_item1_title: {
        "vi": null,
        "en": null,
        "jp": "オフィシャルサロン一覧を公開しました",
        "kr": null,
        "mergeFlag": false
    },
    news_item1_date: {
        "vi": null,
        "en": null,
        "jp": "2024.03.9",
        "kr": null,
        "mergeFlag": false
    },
    news_item1_content: {
        "vi": null,
        "en": null,
        "jp": "オフィシャルサロンは、こちらからお探しください",
        "kr": null,
        "mergeFlag": false
    },
    news_item2_title: {
        "vi": null,
        "en": null,
        "jp": "コーポレートサイトをオープン致しました",
        "kr": null,
        "mergeFlag": false
    },
    news_item2_date: {
        "vi": null,
        "en": null,
        "jp": "2020.11.24",
        "kr": null,
        "mergeFlag": false
    },
    news_item2_content: {
        "vi": null,
        "en": null,
        "jp": `平素は格別のお引き立てを賜り誠にありがとうございます。
  
        この度、弊社「株式会社マリーブ」のコーポレートサイトを公開いたしました。
        今後とも皆様へのサービス向上のため、サイト内のコンテンツ充実に努め、様々な情報を皆様に発信して参ります。
    
        なにとぞ、ご活用いただけますよう宜しくお願い申し上げます。
    
        株式会社マリーブ
        福田 麻理`,
        "kr": null,
        "mergeFlag": false
    },

    pharagraph_item1_title: {
        "vi": null,
        "en": null,
        "jp": "M beauty academy",
        "kr": null,
        "mergeFlag": false
    },
    pharagraph_item1_subTitle: {
        "vi": null,
        "en": null,
        "jp": "東京、愛知、福岡。現在３校ある「M beauty academy（エム ビューティー アカデミー）」では、10万人の施術実績をもつ脱毛のスペシャリスト福田麻理が技術のすべてをお教えしています。",
        "kr": null,
        "mergeFlag": false
    },
    pharagraph_item2_title: {
        "vi": null,
        "en": null,
        "jp": "日本初。肌への優しさ、仕上がりの質、全てにこだわった国産ワックス。",
        "kr": null,
        "mergeFlag": false
    },
    pharagraph_item2_subTitle: {
        "vi": null,
        "en": null,
        "jp": "ワックスは施術者の経験・技術が問われる施術。日本でも屈指のワクサーである福田麻理が、「施術者」の扱いやすさと「お客様」の安心と満足を考え、全てにこだわりプロデュースしました。日本のワックス脱毛のレベルを変えます。",
        "kr": null,
        "mergeFlag": false
    },
    pharagraph_item3_title: {
        "vi": null,
        "en": null,
        "jp": "マリーブを選んだ「お客様の声」",
        "kr": null,
        "mergeFlag": false
    },
    pharagraph_item3_subTitle: {
        "vi": null,
        "en": null,
        "jp": "心を込めた施術で、たくさんのお客様にリピートいただいております。モデル、タレント、プロスポーツ選手など美しさや仕上がりにこだわる「プロフェッショナル」のお客様にもマリーブは選ばれています。",
        "kr": null,
        "mergeFlag": false
    },
    courseProduct_item1_textCenter: {
        "vi": null,
        "en": null,
        "jp": "技術を学ぶ",
        "kr": null,
        "mergeFlag": false
    },
    courseProduct_item1_textBelow: {
        "vi": null,
        "en": null,
        "jp": "M beauty academyについて",
        "kr": null,
        "mergeFlag": false
    },
    courseProduct_item2_textCenter: {
        "vi": null,
        "en": null,
        "jp": "商品を見る",
        "kr": null,
        "mergeFlag": false
    },
    courseProduct_item2_textBelow: {
        "vi": null,
        "en": null,
        "jp": "福田麻理プロデュースアイテムについて",
        "kr": null,
        "mergeFlag": false
    },
    //
    menu_item1_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "全身脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "一人ひとりの肌に合った、クオリティ第一の「脱毛」",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "マリーブの確かな技術で、全身のムダ毛をなくします。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "他社で満足できなかった方も、本当の「つるすべ肌」へ。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item1_dataList_title: {
        "vi": null,
        "en": null,
        "jp": "こんな方に",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item1: {
        "vi": null,
        "en": null,
        "jp": "全身丸ごと任せたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item2: {
        "vi": null,
        "en": null,
        "jp": "自分の肌に合わせて丁寧な施術をして欲しい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item3: {
        "vi": null,
        "en": null,
        "jp": "全身トータルでつるすべ肌を目指したい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item4: {
        "vi": null,
        "en": null,
        "jp": "クオリティを第一に求めている",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item5: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛の処理から解放されたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_dataList_item6: {
        "vi": null,
        "en": null,
        "jp": "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item1_contentList_item1_title: {
        "vi": null,
        "en": null,
        "jp": "あなたにあったベストな脱毛を",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_contentList_item1_subText: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_contentList_item2_title: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛のことは全てお任せ下さい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_contentList_item2_subText: {
        "vi": null,
        "en": null,
        "jp": "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item1_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "全身脱毛（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "通常￥55,000　→お得なキャンペーン中！詳しくはお問い合わせ下さい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "全身脱毛（６回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "¥253,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item1_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item2_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "顔",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "美肌の道は顔脱毛から",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "施術後のお肌に感動してください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "すべての美肌の基礎となるお手入れは、顔の脱毛です。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item2_dataList_title: {
        "vi": null,
        "en": null,
        "jp": "こんな方に",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item1: {
        "vi": null,
        "en": null,
        "jp": "本当の美肌を目指している",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item2: {
        "vi": null,
        "en": null,
        "jp": "化粧ノリをアップさせたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item3: {
        "vi": null,
        "en": null,
        "jp": "明るく透明感のある肌になりたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item4: {
        "vi": null,
        "en": null,
        "jp": "毛穴やくすみ、肌荒れに悩んでいる",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item5: {
        "vi": null,
        "en": null,
        "jp": "肌の状態を見極められるプロのいるサロンで施術したい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_dataList_item6: {
        "vi": null,
        "en": null,
        "jp": "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item2_contentList_item1_title: {
        "vi": null,
        "en": null,
        "jp": "スキンケアアイテムの使用感が変わる",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_contentList_item1_subText: {
        "vi": null,
        "en": null,
        "jp": "施術後、普段お使いの化粧水や美容液で比べてください。どんなに良いものを使っても、顔の脱毛をしてスキンケアの土台となる「肌」の準備ができている状態と、顔のうぶ毛やムダ毛がそのままの状態とでは、スキンケアの実感が違います",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_contentList_item2_title: {
        "vi": null,
        "en": null,
        "jp": "美を追求する人が選ぶマリーブの脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_contentList_item2_subText: {
        "vi": null,
        "en": null,
        "jp": "プロの現場で本物の「美しさ」を求められる方がマリーブの脱毛を選んでいます。脱毛のプロフェッショナルがお一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item2_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "顔脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥6,600",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "フェイシャルワックス",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "￥12,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※顔脱毛（光脱毛）、フェイシャルワックスのご希望をご予約時に選択して下さい。不明点はお気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item2_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item3_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "上半身",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "気になるワキ、腕、胸、お腹、背中など上半身の脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "ワキ、首、腕、指などの細かなパーツと、他人から一番見られる上半身。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "スポーツなどの日焼けしたお肌もマリーブにお任せください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item3_dataList_title: {
        "vi": null,
        "en": null,
        "jp": "こんな方に",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item1: {
        "vi": null,
        "en": null,
        "jp": "細かなパーツを脱毛したい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item2: {
        "vi": null,
        "en": null,
        "jp": "クオリティを第一に求めている",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item3: {
        "vi": null,
        "en": null,
        "jp": "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item4: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛の処理から解放されたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item5: {
        "vi": null,
        "en": null,
        "jp": "自分の肌に合わせて丁寧な施術をして欲しい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_dataList_item6: {
        "vi": null,
        "en": null,
        "jp": "お子様の肌に優しい脱毛サロンや技術者を探している",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item3_contentList_item1_title: {
        "vi": null,
        "en": null,
        "jp": "気になるパーツのケアが可能",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_contentList_item1_subText: {
        "vi": null,
        "en": null,
        "jp": "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。お子様の脱毛についても、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_contentList_item2_title: {
        "vi": null,
        "en": null,
        "jp": "あなたにあったベストな脱毛を",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_contentList_item2_subText: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item3_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "両ワキ（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥1,100",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "両ワキ（１年）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "￥11,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item3_title: {
        "vi": null,
        "en": null,
        "jp": "背中上（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item3_sub: {
        "vi": null,
        "en": null,
        "jp": "￥4,400",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item4_title: {
        "vi": null,
        "en": null,
        "jp": "胸（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item4_sub: {
        "vi": null,
        "en": null,
        "jp": "￥3,300",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item5_title: {
        "vi": null,
        "en": null,
        "jp": "乳りん周り（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item5_sub: {
        "vi": null,
        "en": null,
        "jp": "￥1,100",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item6_title: {
        "vi": null,
        "en": null,
        "jp": "両ヒジ上（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item6_sub: {
        "vi": null,
        "en": null,
        "jp": "￥2,200",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item7_title: {
        "vi": null,
        "en": null,
        "jp": "両手指甲（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_item_item7_sub: {
        "vi": null,
        "en": null,
        "jp": "￥550",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item3_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item4_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "下半身",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "肌質に合った施術で究極の美肌に仕上げます",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "脚（太もも、ひざ、すね）、腰回り、ヒップ（VIOを除く）、足の甲や指などの細かいパーツまで。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "お客様の求めるムダ毛のない美肌に仕上げます。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item4_dataList_title: {
        "vi": null,
        "en": null,
        "jp": "こんな方に",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item1: {
        "vi": null,
        "en": null,
        "jp": "他社の仕上がりに満足できなかった",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item2: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛の処理から解放されたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item3: {
        "vi": null,
        "en": null,
        "jp": "自分の肌に合わせて丁寧な施術をして欲しい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item4: {
        "vi": null,
        "en": null,
        "jp": "お子様の肌に優しい脱毛サロンや技術者を探している",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item5: {
        "vi": null,
        "en": null,
        "jp": "細かなパーツを脱毛したい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item6: {
        "vi": null,
        "en": null,
        "jp": "クオリティを第一に求めている",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_dataList_item7: {
        "vi": null,
        "en": null,
        "jp": "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item4_contentList_item1_title: {
        "vi": null,
        "en": null,
        "jp": "気になるパーツのケアが可能",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_contentList_item1_subText: {
        "vi": null,
        "en": null,
        "jp": "大手サロン等では相談できなかったことや、目指したい肌の状態など、ムダ毛のことは全てお任せ下さい。プライベートサロンだからご提供できる確かな技術があります。お子様の脱毛についても、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_contentList_item2_title: {
        "vi": null,
        "en": null,
        "jp": "あなたにあったベストな脱毛を",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_contentList_item2_subText: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item4_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "腰（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥3,300",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "ヒップ（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "￥4,400",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item3_title: {
        "vi": null,
        "en": null,
        "jp": "お腹（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item3_sub: {
        "vi": null,
        "en": null,
        "jp": "￥3,300",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item4_title: {
        "vi": null,
        "en": null,
        "jp": "両ヒザ上（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item4_sub: {
        "vi": null,
        "en": null,
        "jp": "￥5,500",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item5_title: {
        "vi": null,
        "en": null,
        "jp": "両ヒザ下（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_item_item5_sub: {
        "vi": null,
        "en": null,
        "jp": "￥4,400",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item4_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item5_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "デリケートゾーン",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "他社の仕上がりに満足できなかった方こそ、マリーブへ",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "デリケートな部位こそ、お客様の肌、毛の状態を見極めて施術させていただきます。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "10万人以上の施術を行ってきた私たちに、「ムダ毛」ことでお答えできない事はありません。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item5_dataList_title: {
        "vi": null,
        "en": null,
        "jp": "こんな方に",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item1: {
        "vi": null,
        "en": null,
        "jp": "他社の仕上がりに満足できなかった",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item2: {
        "vi": null,
        "en": null,
        "jp": "はじめての脱毛で不安がある",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item3: {
        "vi": null,
        "en": null,
        "jp": "クオリティを第一に求めている",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item4: {
        "vi": null,
        "en": null,
        "jp": "自分の肌に合わせて丁寧な施術をして欲しい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item5: {
        "vi": null,
        "en": null,
        "jp": "ムダ毛の処理から解放されたい",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_dataList_item6: {
        "vi": null,
        "en": null,
        "jp": "仕事の状況（プロスポーツ、モデル撮影等）を相談できるサロンを選びたい",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item5_contentList_item1_title: {
        "vi": null,
        "en": null,
        "jp": "デリケートな部分こそ技術が問われます",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_contentList_item1_subText: {
        "vi": null,
        "en": null,
        "jp": "他社の仕上がりに満足いかなかった方こそ、マリーブへ。デリケートなVIOこそ、お客様の肌の状態、毛の状態を見極めることのできる経験と知識が豊富なプロにご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_contentList_item2_title: {
        "vi": null,
        "en": null,
        "jp": "あなたにあったベストな脱毛を",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_contentList_item2_subText: {
        "vi": null,
        "en": null,
        "jp": "マリーブでは老若男女すべてのお客様に合う施術をご提供するため、お一人おひとりの肌質、毛の状態、お仕事状況（プロスポーツ、モデル撮影等）に合った施術を行います。日焼けしている肌でも問題ございません。脱毛のプロフェッショナルが対応致しますので、お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item5_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "Vライン（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥3,300",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "Iライン（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "￥2,200",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item3_title: {
        "vi": null,
        "en": null,
        "jp": "Oライン（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item3_sub: {
        "vi": null,
        "en": null,
        "jp": "￥2,200",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item4_title: {
        "vi": null,
        "en": null,
        "jp": "VIOセット（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item4_sub: {
        "vi": null,
        "en": null,
        "jp": "￥6,600",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item5_title: {
        "vi": null,
        "en": null,
        "jp": "VIOセット（６回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_item_item5_sub: {
        "vi": null,
        "en": null,
        "jp": "￥33,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item5_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },

    //////////////////////////
    //
    menu_item6_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "メンズ脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "男性の脱毛のお悩み、全てお任せください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "全身はもちろん、ヒゲやワキなどの細かい部位や、デリケートゾーンの脱毛までご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "脱毛のプロフェッショナルがあなたのお肌の状態に合わせて、効果を実感できる適切な施術をご提案致します。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_titleArea_sub_discription_item3: {
        "vi": null,
        "en": null,
        "jp": "完全予約制なのでプライバシー対策もご安心ください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item6_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "メンズ全身脱毛（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥44,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item2_title: {
        "vi": null,
        "en": null,
        "jp": "メンズ全身脱毛（６回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item2_sub: {
        "vi": null,
        "en": null,
        "jp": "￥242,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item3_title: {
        "vi": null,
        "en": null,
        "jp": "ヒゲ（１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item3_sub: {
        "vi": null,
        "en": null,
        "jp": "￥6,600",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item4_title: {
        "vi": null,
        "en": null,
        "jp": "ヒゲ（６回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item4_sub: {
        "vi": null,
        "en": null,
        "jp": "￥33,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item5_title: {
        "vi": null,
        "en": null,
        "jp": "メンズVIO玉さお（セット１回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item5_sub: {
        "vi": null,
        "en": null,
        "jp": "￥16,500",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item6_title: {
        "vi": null,
        "en": null,
        "jp": "メンズVIO玉さお（セット６回）",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_item_item6_sub: {
        "vi": null,
        "en": null,
        "jp": "￥99,000",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item6_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item7_titleArea_title: {
        "vi": null,
        "en": null,
        "jp": "キッズ脱毛",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_subTitle: {
        "vi": null,
        "en": null,
        "jp": "お子様と一緒に施術可能です。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item1: {
        "vi": null,
        "en": null,
        "jp": "お子様も脱毛する方が増えております。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item2: {
        "vi": null,
        "en": null,
        "jp": "「毛深い」「ムダ毛が気になる」など、お子様の様々な毛の悩みをご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item3: {
        "vi": null,
        "en": null,
        "jp": "親御様のお隣でご一緒に施術出来ますので、ご安心ください。",
        "kr": null,
        "mergeFlag": false
    },
    //-
    menu_item7_priceList_item_item1_title: {
        "vi": null,
        "en": null,
        "jp": "１部位",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_priceList_item_item1_sub: {
        "vi": null,
        "en": null,
        "jp": "￥1,100",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_priceList_description_item1: {
        "vi": null,
        "en": null,
        "jp": "※全て消費税込み。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_priceList_description_item2: {
        "vi": null,
        "en": null,
        "jp": "※お子様のみのご予約はご遠慮させていただきます。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": null,
        "mergeFlag": false
    },
    menu_item7_priceList_description_item3: {
        "vi": null,
        "en": null,
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": null,
        "mergeFlag": false
    },
}
