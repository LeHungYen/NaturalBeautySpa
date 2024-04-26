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
    service_counseling: {
        "vi": "Tư vấn",
        "en": "Counsel",
        "jp": "カウンセリング",
        "kr": "권하다",
    },
    service_facial_wax: {
        "vi": "Sáp mặt",
        "en": "Facial Wax",
        "jp": "フェイシャルワックス",
        "kr": "페이셜 왁스",
    },
    service_facial_hair_removal: {
        "vi": "Triệt lông mặt",
        "en": "Facial Fur Removal",
        "jp": "顔脱毛",
        "kr": "얼굴 탈모",
    },
    service_body_hair_removal: {
        "vi": "Triệt lông toàn thân",
        "en": "Full Body Fur Removal",
        "jp": "全身脱毛",
        "kr": "전신 탈모"
    },
    service_part_hair_removal: {
        "vi": "Triệt lông từng phần",
        "en": "Parts Fur Removal",
        "jp": "パーツ脱毛",
        "kr": "부품 탈모",
    },
    service_VIO_hair_removal: {
        "vi": "Triệt lông VIO",
        "en": "VIO Fur Removal",
        "jp": "VIO脱毛",
        "kr": "VIO 제모",
    },
    service_men_hair_removal: {
        "vi": "Triệt lông cho nam giới",
        "en": "Mens Fur Removal",
        "jp": "メンズ脱毛",
        "kr": "남성 제모",
    },
    service_kid_hair_removal: {
        "vi": "Triệt lông cho trẻ nhỏ",
        "en": "Kids Fur Removal",
        "jp": "キッズ脱毛",
        "kr": "어린이 탈모"
    },
    service_other: {
        "vi": "Dịch vụ khác",
        "en": "Kids Fur Removal",
        "jp": "キッズ脱毛",
        "kr": "어린이 탈모"
    },
    about_academy_title_1: {
        "vi": "Tôi muốn tăng số lượng các thẩm mỹ viện nghiêm túc trên khắp thế giới",
        "en": "I want to increase the number of serious salons Japan",
        "jp": "マジメなサロンを世界中に増やしたい",
        "kr": "진지한 살롱을 전세계에 늘리고 싶습니다",
    },
    product_page_title_1: {
        "vi": "loại bỏ",
        "en": "remove is",
        "jp": "remove（マ・リムーブ）は",
        "kr": "remove(마·리무브)는",
    },
    product_page_title_2: {
        "vi": "mong muốn tạo lớp nền cho mọi loại「da đẹp」",
        "en": "We want to create the foundation for all kinds of 「beautiful skin」",
        "jp": "全ての「美肌」の土台づくりを叶えたい",
        "kr": "우리는 모든 종류의 「아름다운 피부」를 위한 기초를 만들고 싶습니다",
    },
    product_page_title_3: {
        "vi": "Để loại bỏ sự lo lắng cho các học viên và khách hàng",
        "en": "To eliminate anxiety for practitioners and customers",
        "jp": "施術者とお客様の不安を取り除くために",
        "kr": "시술자와 고객의 불안을 없애기 위해",
    },
    product_page_title_4: {
        "vi": "Hiện nay đã có thể hợp tác tẩy lông bằng máy và sáp",
        "en": "Collaborative fur removal using machine and wax is now possible",
        "jp": "機械とワックスのコラボ脱毛が可能に",
        "kr": "기계와 왁스의 협업 제모가 가능",
    },
    product_page_title_5: {
        "vi": "Từ giờ trở đi, tôi sẽ tiếp tục đối mặt với các vấn đề về lông một cách nghiêm túc",
        "en": "From now on, I will continue to fur seriously",
        "jp": "これからも、マジメに毛と向き合うこと",
        "kr": "앞으로도 진지하게 머리카락과 마주하는 것",
    },
    product_page_title_6: {
        "vi": "Tẩy lông rất đau?",
        "en": "Waxing is painful?",
        "jp": "ワックス脱毛は痛い？",
        "kr": "왁스 제모는 아프다?",
    },
    product_page_title_7: {
        "vi": "Đây là một công việc của sự tự tin sẽ thay đổi sự hiểu biết thông thường",
        "en": "This is a work of confidence that will change conventional wisdom",
        "jp": "これまでの常識が変わる自信作です",
        "kr": "지금까지의 상식이 바뀌는 자신작입니다",
    },
    product_page_title_8: {
        "vi": "Một loại “sáp nội địa” đa năng có thể được sử dụng bất kể giới tính hay khu vực điều trị",
        "en": "A versatile “domestic wax” that can be used regardless of gender or treatment area",
        "jp": "性別も施術箇所も選ばない万能の「国産ワックス」",
        "kr": "성별도 시술 개소도 가리지 않는 만능의 「국산 왁스」",
    },
    product_page_title_9: {
        "vi": "Hỗ trợ điều trị thư giãn tại salon",
        "en": "Supporting the relaxing salon treatment",
        "jp": "サロン本来のリラックスした施術をサポート",
        "kr": "살롱 본래의 릴렉스한 시술을 서포트",
    },
    product_page_title_10: {
        "vi": "Sử dụng nhựa thông không màu, không mùi thơm, không gây dị ứng",
        "en": "Uses non-colored, non-scented, allergy-free rosin",
        "jp": "無着色・無香料　アレルギーフリーのロジンを使用",
        "kr": "무착색·무향료 알레르기 프리의 로진을 사용",
    },
    product_page_title_11: {
        "vi": "Triệt lông mặt (waxing mặt) hiện nay rất được ưa chuộng, đặc biệt là ở chị em phụ nữ",
        "en": "Facial hair removal (facial waxing) is now very popular, especially among women",
        "jp": "今、女性を中心に顔脱毛（フェイシャルワックス）が大人気です",
        "kr": "지금, 여성을 중심으로 얼굴 탈모(페이셜 왁스)가 대인기입니다",
    },
    product_page_txt_8: {
        "vi": "Tẩy lông bằng sáp truyền thống có liên quan đến các vấn đề về da như đau và sưng,",
        "en": "Traditional waxing hair removal is associated with skin problems such as pain and swelling,",
        "jp": "従来のワックス脱毛は痛みや腫れなどの皮膚トラブルがつきもので、",
        "kr": "종래의 왁스 탈모는 통증이나 붓기 등의 피부 트러블이 붙는 것으로,",
    },
    product_page_txt_9: {
        "vi": "việc sử dụng phương pháp tẩy lông cơ học là rất khó khăn.",
        "en": "collaboration with mechanical hair removal was difficult.",
        "jp": "機械脱毛とのコラボが難しいものでした。",
        "kr": "기계 탈모와의 협업이 어려웠습니다.",
    },
    product_page_txt_10: {
        "vi": "Tuy nhiên, tẩy lông bằng sáp Natural Beauty có thể kết hợp với tẩy lông cơ học,",
        "en": "However, Natural Beauty wax hair removal can be combined with mechanical hair removal.",
        "jp": "ですがマリーブのワックス脱毛は機械脱毛とのコラボが可能、",
        "kr": "하지만 말리브의 왁스 탈모는 기계 탈모와의 콜라보레이션이 가능,",
    },
    product_page_txt_11: {
        "vi": "Nó được thiết kế để sử dụng ngay cả trên da của trẻ nhỏ.",
        "en": "It is designed to be used even on the skin of young children.",
        "jp": "小さなお子様の肌でも使える仕様になっています。",
        "kr": "어린 아이들의 피부에도 사용하도록 고안되었습니다.",
    },
    product_page_txt_12: {
        "vi": "Đặc biệt, việc triệt lông cho nam giới có thể được thực hiện bằng cách kết hợp giữa tẩy lông bằng sáp và máy",
        "en": "In particular, beard hair removal for men can be performed using a combination of wax and machine hair removal",
        "jp": "特に男性のヒゲ脱毛はワックスと機械のコラボ脱毛で施術することで",
        "kr": "특히 남성의 수염 탈모는 왁스와 기계의 협업 탈모로 시술함으로써",
    },
    product_page_txt_13: {
        "vi": "Bạn sẽ có thể cảm nhận được hiệu quả tẩy lông sớm hơn.",
        "en": "You will be able to feel the hair removal effect sooner.",
        "jp": "より早く脱毛効果を実感できるようになります。",
        "kr": "빨리 탈모 효과를 실감할 수 있게 됩니다.",
    },
    product_page_txt_14: {
        "vi": "Với phương châm phát triển của thương hiệu là ``Làm cho việc tẩy lông trở nên đơn giản và dễ dàng hơn...''",
        "en": "With the motto of the brand's development concept, ``Make waxing simpler and easier...''",
        "jp": "ブランドの開発のコンセプトである「ワックス脱毛をもっとシンプルに、もっと簡単に・・・」をモットーとして、",
        "kr": "브랜드의 개발의 컨셉인 「왁스 탈모를 보다 심플하게, 보다 간단하게・・・」를 모토로 하고,",
    },
    product_page_txt_15: {
        "vi": "Chúng tôi dự định tiếp tục tăng số lượng sản phẩm trong tương lai để có thêm nhiều thẩm mỹ viện muốn giới thiệu dịch vụ tẩy lông bằng sáp.",
        "en": "We plan to continue to increase the number of products in the future so that more salons want to introduce waxing services.",
        "jp": "ワックス脱毛を導入したいと思ってもらえるサロンが増えるよう、今後も商品を増やしていく予定です。",
        "kr": "앞으로도 더 많은 살롱에서 왁싱 서비스를 도입하고 싶도록 제품 수를 계속 늘릴 예정입니다.",
    },
    product_page_txt_16: {
        "vi": "Bạn có tưởng tượng gì khi nghe tẩy lông bằng sáp?",
        "en": "What image do you have when you hear wax hair removal?",
        "jp": "ワックス脱毛と聞いて、皆さんはどのようなイメージを持たれますか？",
        "kr": "왁스 제모라고 듣고 여러분은 어떤 이미지를 가질 수 있습니까?",
    },
    product_page_txt_17: {
        "vi": "``Đau quá'' ``Nóng đến mức bỏng rát'' ``Đó là một trò chơi trừng phạt'', v.v.",
        "en": "``It hurts so much,'' ``It's so hot that it burns,'' ``It's a punishment game,'' etc.",
        "jp": "「痛みが強い」「火傷するくらい熱い」「罰ゲーム」など",
        "kr": "「통증이 강하다」 「화상할 정도로 뜨거운」 「처벌 게임」등",
    },
    product_page_txt_18: {
        "vi": "Một trong những vấn đề là việc tẩy lông đã gây căng thẳng cho khách hàng.",
        "en": "One of our issues was that waxing itself was stressful for customers.",
        "jp": "ワックス脱毛自体がお客様にとってストレスになってしまっているのが私たちの課題の一つでした。",
        "kr": "왁스 탈모 자체가 고객에게 스트레스가되어 버리는 것이 우리의 과제 중 하나였습니다.",
    },
    product_page_txt_19: {
        "vi": "Vì vậy, để thay đổi hình ảnh xấu này, chúng ta sẽ phản ánh tiếng nói của người lao động tại nơi làm việc nhiều nhất có thể,",
        "en": "Therefore, in order to change this bad image, we will reflect the voices of workplace workers as much as possible,",
        "jp": "そこでこの悪いイメージを変えるべく、現場のワクサー達の声を最大限に反映し、",
        "kr": "거기서 이 나쁜 이미지를 바꿀 수 있도록, 현장의 왁서들의 목소리를 최대한으로 반영해,",
    },
    product_page_txt_20: {
        "vi": "Dễ dàng xử lý bất kỳ bộ phận nào, phù hợp với mọi loại da.",
        "en": "Easily treat any part, suitable for all hair and skin types.",
        "jp": "どのパーツでも扱いやすく、また毛質・肌質を選ばず",
        "kr": "어떤 부위든 쉽게 다룰 수 있으며 모든 피부 타입에 적합합니다.",
    },
    product_page_txt_21: {
        "vi": "Chúng tôi đã dành một năm rưỡi để phát triển một phương pháp tẩy lông bằng sáp đơn giản và dễ dàng mang lại vẻ đẹp hoàn thiện cho dù ai áp dụng nó.",
        "en": "We spent a year and a half developing a simple and easy wax hair removal method that delivers a beautiful finish no matter who applies it.",
        "jp": "誰が塗ってもきれいに仕上がるシンプルで簡単なワックス脱毛を1年半かけて開発。",
        "kr": "누가 사용해도 아름다운 마무리를 선사하는 간단하고 쉬운 왁스 제모 방법을 개발하는 데 1년 반이 걸렸습니다.",
    },
    product_page_txt_22: {
        "vi": "Được sản xuất tại Nhật Bản, loại sáp tinh tế này được thiết kế phù hợp với làn da Nhật Bản và ít gây đau đớn hơn.",
        "en": "Made in Japan, this delicate wax is tailored to Japanese skin and is less painful.",
        "jp": "国産にこだわり、日本人の肌に合わせた繊細なワックスは痛みも少なく、",
        "kr": "일본에서 제작된 이 섬세한 왁스는 일본인 피부에 맞춰 제작되었으며 통증이 덜합니다.",
    },
    product_page_txt_23: {
        "vi": "Cho phép khách hàng thư giãn và được điều trị.",
        "en": "Allows clients to relax and receive treatment.",
        "jp": "お客様にリラックスして施術を受けていただくことができます。",
        "kr": "고객이 편안하게 진료를 받을 수 있도록.",
    },
    product_page_txt_24: {
        "vi": "Sáp 'maremove The One', được phát triển tập trung vào các sản phẩm nội địa, có thể sử dụng trên mọi vùng trên cơ thể, bất kể giới tính hay loại tóc, chẳng hạn như râu nam giới, cũng như các vùng xóa như VIO.",
        "en": "Wax 'maremove The One', developed with a focus on domestic products, can be used on any area of the body, regardless of gender or hair type, such as men's beard, as well as erased areas like VIO.",
        "jp": "国産にこだわって開発したワックス「maremove(マ・リムーブ)TheOne」は、VIOなどのデリートゾーンはもちろん、男性のヒゲなど性別や毛質を問わず、身体中全ての範囲に使用できます。通常のワックスよりも低温のためアクシデントも起きづらく、お子様から大人の肌まで使える優しいワックスです。",
        "kr": "국산 제품을 중심으로 개발된 'mremove The One' 왁스는 VIO처럼 제거 부위는 물론, 남성 수염 등 성별, 헤어 타입에 관계없이 신체 모든 부위에 사용이 가능합니다.",
    },
    product_page_txt_25: {
        "vi": "Một loại sáp dễ xử lý có thể lật ngược những ấn tượng tiêu cực như “nóng” và “đau”, Nó có tác dụng tẩy lông mạnh và nhẹ nhàng trên da nên một số khách hàng thậm chí còn ngủ quên trong quá trình điều trị,Nâng cao chất lượng dịch vụ tại salon của bạn với 'maremove The One'.",
        "en": "An easy-to-handle wax can overturn negative impressions such as “hot” and “painful”, It has a strong hair removal effect and is gentle on the skin so some customers even fall asleep during the treatment. Improve service quality at your salon with 'maremove The One'.",
        "jp": "「熱い」「痛い」などのネガティブな印象を覆す、扱いやすいワックス。しっかりとした除毛効果と肌への優しさを兼ね備えているので、施術中に寝てしまうお客様もいらっしゃいます。「màremove(マ・リムーブ)TheOne」で、あなたのサロンでのサービスのクオリティを高めてください。",
        "kr": "다루기 쉬운 왁스는 '뜨겁다', '아프다' 등의 부정적인 인상을 뒤집을 수 있습니다. 강력한 제모 효과가 있으며 피부에 순해서 시술 중에 잠들어 버리는 고객도 있습니다. '마레무브 더원'과 함께합니다.",
    },
    product_page_txt_26: {
        "vi": "'maremove The One' sử dụng nhựa thông không gây dị ứng, không chứa nhựa thông tự nhiên, viên có màu trắng hơi ngọc trai, chuyển từ trắng sang trong suốt khi đun nóng.",
        "en": "'maremove The One' uses hypoallergenic rosin, does not contain natural rosin, the pellets are slightly pearly white, turning from white to transparent when heated.",
        "jp": "「màremove(マ・リムーブ)TheOne」は天然ロジンを配合しないアレルギーフリーのロジンを使用し、ペレットの色はややパールがかった白色で、熱を加えると白から透明へと変化します。透明のため毛の状態が確認しやすく施術効率を格段に高めてくれます。",
        "kr": "'maremove The One'은 저자극성 로진을 사용하고 천연 로진을 포함하지 않으며 펠릿은 약간 진주빛 흰색이며 가열하면 흰색에서 투명하게 변합니다.",
    },
    product_page_txt_27: {
        "vi": "Nhiều khách hàng phát hiện ra nguyên nhân khiến da mặt xỉn màu không phải do tế bào chết mà do lớp lông tơ che phủ khuôn mặt,Đây là một phương pháp điều trị khả thi vì mremove The One là một loại sáp an toàn và chắc chắn, ngay cả trẻ nhỏ cũng có thể sử dụng.*Vì chăm sóc da mặt đòi hỏi những kỹ thuật tinh tế, chúng tôi khuyên bạn nên tham gia khóa học chăm sóc da mặt của học viện.",
        "en": "Many customers discovered that the cause of dull facial skin is not due to dead skin cells but due to the fine hair covering the face. This is a possible treatment method because mremove The One is a safe and strong wax. Certainly, even young children can use it.*Since facial care requires delicate techniques, we recommend taking the facial care course at the academy.",
        "jp": "化粧乗りの悪さ、くすみの原因は古い角質じゃなくて、顔を覆っているように生えてる産毛なんだと、気づくお客様がたくさんいます。小さいお子様でも使える安心・安全なワックス「maremove(マ・リムーブ)TheOne」だから叶う施術です。※フェイシャルは繊細な技術が不可欠のため、アカデミーのフェイシャルコースを受講されることをお勧めします。",
        "kr": "얼굴 피부가 칙칙해지는 원인은 각질이 아니라 얼굴을 덮고 있는 잔털 때문이라는 사실을 많은 고객님들이 발견하셨습니다. 미리무브 더원은 안전하고 강력한 왁스이기 때문에 가능한 시술법입니다. *페이셜 케어는 섬세한 기술이 필요하므로 학원에서 페이셜 케어 강좌를 수강하는 것을 권장합니다.",
    },
    product_btn_txt_1: {
        "vi": "Thắc mắc về sản phẩm",
        "en": "For questions about the product",
        "jp": "商品に関するお問い合わせ",
        "kr": "제품에 대한 문의사항은",
    },
    product_page_txt_0: {
        "vi": "Một số khách hàng vẫn có hình ảnh tiêu cực về việc tẩy lông như một trò chơi trừng phạt thường thấy trên TV.",
        "en": "Some customers still have a negative image of hair removal as a punishment game often seen on TV.",
        "jp": "お客様の中には、ワックス脱毛＝テレビでよく見る罰ゲームといったマイナスなイメージを持つ方がいまだにいらっしゃいます。",
        "kr": "일부 고객들은 TV에서 흔히 볼 수 있는 벌칙 게임으로 제모에 대해 여전히 부정적인 이미지를 갖고 있다.",
    },
    product_page_txt_1: {
        "vi": "Một vấn đề khác từ phía học viên là nhiều người không muốn thực hiện phương pháp tẩy lông bằng sáp truyền thống do cảm giác đau, nóng và thô ráp trên da.",
        "en": "Another problem from the practitioner side is that many people do not want to perform traditional wax hair removal methods due to the pain, heat and roughness on the skin.",
        "jp": "施術者側でも、痛み・熱さ・肌荒れなど従来のワックス脱毛に抵抗がある人が多い事も一つの課題でした。",
        "kr": "시술자 측의 또 다른 문제점은 피부의 통증과 열, 거칠기 때문에 전통적인 왁스 제모 방법을 꺼리는 분들이 많다는 것입니다.",
    },
    product_page_txt_2: {
        "vi": "Để loại bỏ những yếu tố gây lo lắng này, chúng tôi sản xuất các loại sáp nguyên gốc, kem làm dịu da để chăm sóc sau, v.v.",
        "en": "To eliminate these anxiety factors, we produce original waxes, soothing creams for aftercare, and more.",
        "jp": "そこでこれらの不安要素を取り除くために、オリジナルのワックス、アフターケア専用鎮静クリームなどをプロデュース。",
        "kr": "이러한 불안 요인을 없애기 위해 오리지널 왁스, 애프터 케어용 진정 크림 등을 생산하고 있습니다.",
    },
    product_page_txt_7: {
        "vi": "Chúng tôi sẽ loại bỏ mọi mối lo ngại của bạn với chất lượng cao nhất.",
        "en": "We will eliminate all your concerns with the highest quality.",
        "jp": "最高のクオリティで全ての不安を解消します。",
        "kr": "최고의 품질로 여러분의 고민을 모두 없애드리겠습니다.",
    },
    product_page_txt_3: {
        "vi": "Không chỉ dành cho những thợ tẩy lông có kinh nghiệm mà còn dành cho những thẩm mỹ viện đang có ý định triển khai dịch vụ tẩy lông bằng sáp,",
        "en": "Not only for experienced hair removers but also for beauty salons that are planning to deploy wax hair removal services,",
        "jp": "熟練したワクサーの皆様はもちろん、これからワックス脱毛を導入予定のサロン様や、",
        "kr": "숙련된 제모사뿐만 아니라 왁스 제모 서비스를 전개할 예정인 미용실의 경우,",
    },
    product_page_txt_4: {
        "vi": "Các thẩm mỹ viện chăm sóc da mặt, v.v. đang cân nhắc giới thiệu đây như một thực đơn chăm sóc da mặt mới",
        "en": "Facial beauty salons, etc. are considering introducing this as a new facial care menu",
        "jp": "フェイシェルケアの新メニューとして導入を考えているフェイシャルサロン様など",
        "kr": "얼굴 미용실 등 새로운 페이셜 케어 메뉴로 도입을 고려하고 있습니다",
    },
    product_page_txt_5: {
        "vi": "Với mong muốn để càng nhiều người biết đến sự kỳ diệu của tẩy lông bằng sáp,",
        "en": "With the desire to let more people know about the magic of wax hair removal,",
        "jp": "一人でも多くの人にワックス脱毛のすばらしさを知ってほしいという思いを込めて、",
        "kr": "왁스제모의 마법을 더 많은 분들께 알리고 싶은 마음으로,",
    },
    product_page_txt_6: {
        "vi": "Thương hiệu gốc ma Remove đã ra đời.",
        "en": "The original brand maRemover was born.",
        "jp": "オリジナルブランド・ma remove（マ・リムーブ）は生まれました。",
        "kr": "오리지널 브랜드 리무버가 탄생했습니다.",
    },
    about_access_title_1: {
        "vi": "Dành cho tất cả những ai đặc biệt quan tâm đến vẻ đẹp của làn da trần của mình.",
        "en": "For everyone who is especially concerned about the beauty of their bare skin.",
        "jp": "素肌の美しさにこだわる全ての人へ。",
        "kr": "특히 맨살의 아름다움을 걱정하는 모든 분들을 위한 제품입니다.",
    },
    about_access_title_2: {
        "vi": "Chúng tôi là một thẩm mỹ viện hoàn toàn tư nhân sẽ đáp ứng nhu cầu của bạn.",
        "en": "We are a completely private salon that will meet your needs.",
        "jp": "完全プライベートサロンで、ご要望にお応えいたします。",
        "kr": "우리는 귀하의 요구에 부응하는 완전 개인 살롱입니다.",
    },
    about_access_txt_1: {
        "vi": "Vị trí ở ngay ngã tư Kim Mã giao với Văn Cao tại Hà Nội, Có bãi đỗ xe cho cả xe máy và ô tô",
        "en": "Location is right at the intersection of Kim Ma and Van Cao in Hanoi, with parking for both motorbikes and cars",
        "jp": "場所はハノイのキムマーとヴァンカオの交差点にあり、バイクと車の両方の駐車場があります。",
        "kr": "위치는 하노이의 Kim Ma와 Van Cao 교차로에 있으며, 오토바이와 자동차 모두 주차할 수 있습니다.",
    },
    about_access_txt_2: {
        "vi": "Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi.",
        "en": "If you have any questions, please contact us.",
        "jp": "ご不明な点がありましたらお気軽にご連絡ください。",
        "kr": "질문이 있으시면 저희에게 연락해주세요.",
    },
    about_important_txt_1: {
        "vi": "Chúng tôi muốn phục vụ cho mọi người ở mọi lứa tuổi, nam và nữ, những người đang tìm kiếm làn da đẹp.",
        "en": "We want to cater to people of all ages, men and women, who are looking for beautiful skin.",
        "jp": "老若男女全ての「美しい素肌」を求める方にお応えしたい。",
        "kr": "우리는 아름다운 피부를 원하는 남성, 여성 모든 연령층의 사람들을 만족시키고 싶습니다.",
    },
    about_important_txt_2: {
        "vi": "Chúng tôi sẽ truyền bá danh tiếng “các thẩm mỹ viện nghiêm túc trong việc tẩy lông” ở Nhật Bản bằng cách tạo ra các thẩm mỹ viện mà bất kỳ ai cũng có thể cảm thấy thoải mái, tổ chức các buổi hội thảo cho những người muốn học kỹ thuật và phát triển các sản phẩm dành cho mục đích sử dụng chuyên nghiệp.",
        "en": "We will spread the reputation of “beauty salons that are serious about hair removal” in Japan by creating beauty salons where anyone can feel comfortable, holding seminars for people who want to learn engineering and develop products for professional use.",
        "jp": "私たちは、誰でも安心して通えるサロン作りはもちろん技術を学びたい方へのセミナーや、プロユース商品の開発など、日本に「脱毛にマジメなサロン」を広めて参ります。",
        "kr": "누구라도 안심할 수 있는 미용실 만들기, 공학을 배우고 프로용 제품 개발을 희망하는 분들을 위한 세미나 개최 등을 통해 일본에서 '제모에 진심을 다하는 미용실'의 명성을 널리 알리겠습니다.",
    },
    about_important_txt_3: {
        "vi": "'Thẩm mỹ viện tẩy lông' là một ngành rất dễ gia nhập ngay cả với những người chưa có kinh nghiệm vì ai cũng có thể mở tiệm chỉ cần có trang thiết bị.",
        "en": "'Hair removal salon' is an industry that is very easy to enter even for those without experience because anyone can open a salon as long as they have the equipment.",
        "jp": "「脱毛サロン」は機械さえあれば誰でも開業しやすい、という理由で経験のない人でも入りやすい業界です。",
        "kr": "'제모 살롱'은 장비만 있으면 누구나 살롱을 열 수 있기 때문에 경험이 없는 분들도 아주 쉽게 진입할 수 있는 산업입니다.",
    },
    about_important_txt_4: {
        "vi": "Tuy nhiên, công nghệ “triệt lông” tưởng chừng đơn giản nhưng lại rất sâu sắc, ngay cả khi lắp đặt những máy móc đắt tiền thì cũng ít người có thể vận dụng kinh nghiệm của mình để xác định phương pháp điều trị tối ưu cho tình trạng da của khách hàng.",
        "en": "However, the 'hair removal' technology seems simple but is very profound. Even when installing expensive machines, few people can use their experience to determine the optimal treatment method. for customer's skin condition.",
        "jp": "しかし「脱毛」の技術は簡単にみえてとても奥が深く、たとえ高価な機械を導入しても、経験を元にお客様の肌状態を見極めた最適な施術をできる人は少ないでしょう。",
        "kr": "그러나 '제모' 기술은 단순해 보이지만 매우 심오한 기술입니다. 고가의 기계를 설치하더라도 자신의 경험을 바탕으로 고객의 피부 상태에 맞는 최적의 치료 방법을 결정하는 사람은 거의 없습니다.",
    },
    about_important_txt_5: {
        "vi": "Tại Natural Beauty, đại diện của chúng tôi nghiên cứu và kiểm tra kỹ lưỡng các máy họ sử dụng, so sánh hiệu quả và độ đau của chúng, đồng thời chọn ra những máy tốt nhất.Đây là điều mà các salon lớn và các salon khác không bao giờ làm được.Để tẩy lông bằng sáp ít gây đau đớn hơn, chúng tôi cũng đã phát triển một loại 'sáp' phù hợp cho việc điều trị.",
        "en": "At Natural Beauty, our representatives thoroughly research and test the machines they use, compare their effectiveness and pain, and choose the best ones. This is something that large salons and other Other salons can never do it. To make waxing less painful, we have also developed a 'wax' suitable for the treatment.",
        "jp": "Natural Beautyでは機械の選定は代表自らが徹底的に調べて試し、効果や痛みなどを比べてこだわり抜いたものを導入しています。これは大手サロンや他サロンでは絶対にやっていないこと。痛みの少ないワックス脱毛については、施術に適した「ワックス」の開発も行いました。",
        "kr": "내츄럴뷰티에서는 저희 대표님들이 사용하는 기계를 철저하게 연구하고 테스트하여 효과와 통증을 비교하고 가장 좋은 것을 선택합니다. 이것은 대형 미용실이나 다른 미용실에서는 절대 할 수 없는 일입니다. 치료에 적합한 '왁스'도 개발했다.",
    },
    about_important_txt_6: {
        "vi": "Tại Natural Beauty, chúng tôi có thể đáp ứng nhu cầu cá nhân của từng khách hàng vì chúng tôi đối xử với các vấn đề về lông một cách chân thành.",
        "en": "At Natural Beauty, we are able to meet each customer's individual needs because we treat hair problems with sincerity.",
        "jp": "Natural Beautyの脱毛は毛と真摯に向き合っているからこそ、お客様ひとりひとりのご要望を実現することができるのです。",
        "kr": "내추럴뷰티에서는 모발 고민을 정성을 다해 치료하기 때문에 고객 개개인의 요구에 부응할 수 있습니다.",
    },
    about_important_txt_7: {
        "vi": "Có 100 mối lo ngại khác nhau về lượng lông không mong muốn đối với 100 người. Cách lông mọc khác nhau ở mỗi người, không chỉ tùy thuộc vào giới tính mà còn tùy thuộc vào loại lông, loại da và sự cân bằng nội tiết tố.",
        "en": "There are 100 different concerns about unwanted hair for every 100 people. The way hair grows differs from person to person, depending not only on gender but also on hair type, skin type and hormonal balance.",
        "jp": "ムダ毛への悩みは千差万別、100人100通り。性別の違いはもちろん、毛質や肌質、ホルモンのバランスによって毛の生え方は人それぞれ違います。",
        "kr": "원치 않는 모발에 대한 고민은 100명당 100가지가 있습니다. 머리카락이 자라는 방식은 성별뿐만 아니라 머리카락 유형, 피부 유형, 호르몬 균형에 따라 사람마다 다릅니다.",
    },
    about_important_txt_8: {
        "vi": "Natural Beauty có các chuyên gia tẩy lông.",
        "en": "Natural Beauty has hair removal experts.",
        "jp": "Natural Beautyには脱毛のプロフェッショナルがいます。",
        "kr": "Natural Beauty에는 제모 전문가가 있습니다.",
    },
    about_important_txt_9: {
        "vi": "Không giống như các phương pháp điều trị thương mại ở các Spa khác, chúng tôi cung cấp các phương pháp điều trị phù hợp với loại lông và da của từng khách hàng. Điểm mạnh của Natural Beauty là xử lý lông tận gốc nên bạn có thể cảm nhận được hiệu quả triệt lông nhanh chóng. Tất nhiên, chúng tôi sẽ đảm nhận tất cả các phương pháp điều trị và chăm sóc tại nhà cũng như hậu mãi theo dõi sau khi triệt lông.",
        "en": "Unlike commercial treatments at other Spas, we offer treatments tailored to each client's hair and skin type. Natural Beauty's strength is that it treats hair at the root so you can feel the hair removal effect quickly. Of course, we will take care of all treatments and at-home care as well as follow-up after hair removal.",
        "jp": "他サロンの業務的な施術とは違い、お客様それぞれの毛質や肌質に合わせた施術を行わせていただきます。マジメに毛と向き合っているため、脱毛効果の実感が早いのがマリーブの強みです。もちろん自宅での処理・ケア方法、脱毛施術後のアフターフォローも全て真摯に対応致します。",
        "kr": "다른 스파의 시판 트리트먼트와 달리 고객의 모발과 피부 타입에 맞춰 트리트먼트를 제공합니다. 내추럴뷰티의 장점은 모발 뿌리부터 케어해 빠르게 제모 효과를 느낄 수 있다는 점이다. 물론 제모 후 사후관리까지 모든 시술과 재택케어까지 해드립니다.",
    },
    about_important_txt_10: {
        "vi": "Các chuyên gia tẩy lông đã thực hiện điều trị cho 100.000 người sẽ đào tạo kỹ lưỡng cho tất cả nhân viên về kiến ​​thức và kỹ thuật, đồng thời thực hiện các phương pháp điều trị đồng thời giải quyết những thắc mắc và nghi ngờ của khách hàng, vì vậy những người mới làm quen với việc tẩy lông có thể Tuy nhiên, chúng tôi sẽ luôn cố gắng hết sức để giải quyết chắc chắn bạn có thể yên tâm ghé thăm chúng tôi.",
        "en": "Hair removal experts who have treated 100,000 people will thoroughly train all staff in knowledge and techniques, and perform treatments while addressing questions and doubts. customers' doubts, so those who are new to hair removal may However, we will always try our best to solve it. You can definitely visit us with peace of mind.",
        "jp": "これまで10万人の施術を担当した脱毛のプロが、知識やテクニック技術をすべてのスタッフに徹底して育成をし、お客様が抱える不安や疑問を解消しながら施術していくので、初めての方でも安心して通っていただけるよう常に努力は怠りません。",
        "kr": "10만 명을 진료한 제모 전문가들이 전 직원에게 지식과 기술을 철저히 교육하고 고객의 의문과 의문을 해소하면서 시술을 실시하므로, 제모를 처음 접하시는 분들도 항상 최선을 다해 해결해 드리겠습니다. 안심하고 방문하실 수 있습니다.",
    },
    about_important_txt_11: {
        "vi": "Vui lòng cho chúng tôi biết nếu bạn có bất kỳ lo ngại nào về tình trạng của lông, dù nhỏ đến đâu.",
        "en": "Please let us know if you have any concerns about the condition of your fur, no matter how minor.",
        "jp": "脱毛へのどんな小さな不安も、私たちへお聞かせください。",
        "kr": "아무리 사소한 것이라도 모피 상태에 대한 우려 사항이 있으면 알려 주시기 바랍니다.",
    }, about_important_txt_12: {
        "vi": "'Tôi không thể đi vì đau.'",
        "en": "'I can't walk because of the pain.'",
        "jp": "「痛くて通えなかった」",
        "kr": "'통증 때문에 걸을 수가 없어요.'",
    },
    about_important_txt_13: {
        "vi": "'Tôi có vấn đề về da'",
        "en": "'I have skin problems'",
        "jp": "「肌トラブルがおきた」",
        "kr": "'피부에 문제가 있어요'",
    },
    about_important_txt_14: {
        "vi": "Lông tôi không hề giảm dù tôi liên tục đến phòng khám.",
        "en": "My hair hasn't decreased even though I keep going to the clinic.",
        "jp": "「通い続けても毛が抜けなかった」",
        "kr": "병원에 계속 다녀도 머리카락이 줄어들지 않아요.",
    },
    about_important_txt_15: {
        "vi": "Có rất nhiều khách hàng đến các Spa khác cũng gặp phải vấn đề tương tự",
        "en": "There are many customers who go to other Spas and encounter the same problem",
        "jp": "他サロンに通っていたお客様でこのような悩みは大変多いです。",
        "kr": "다른 스파에 가도 같은 문제를 겪는 고객이 많습니다",
    },
    about_important_txt_16: {
        "vi": "Không giống như các thẩm mỹ viện lớn mà bạn phải đến từ hai đến ba năm, việc tẩy lông tại Natural Beauty hoàn thành trong khoảng một năm. Việc tẩy lông được thực hiện một cách nghiêm túc, phù hợp với từng khách hàng nhu cầu cá nhân, vì vậy bạn có thể cảm thấy trải nghiệm đó rất khác.",
        "en": "Unlike big beauty salons that you have to go to for two to three years, hair removal at Natural Beauty is completed in about a year. Hair removal is done seriously, tailored to each customer's needs. personal needs, so you may feel that the experience is very different.",
        "jp": "２～３年通わなければいけない大手サロンとは違い、Natural Beautyは1年ほどで脱毛が完了します。お客様の毛と真摯に向き合いお客様ひとりひとりに合わせて丁寧に施術しているからこそ実感力が違います。",
        "kr": "2~3년을 다녀야 하는 대형 미용실과 달리 내추럴뷰티의 제모는 1년 정도에 끝납니다. 제모는 고객 한 분 한 분의 요구에 맞게 진지하게 진행됩니다. 개인적인 요구에 맞춰서 진행되기 때문에 경험은 매우 다르다.",
    },
    about_important_txt_17: {
        "vi": "Ngoài ra, phương pháp tẩy lông tại Natural beauty còn được ưa chuộng vì ít gây đau đớn. Đặc biệt, tẩy lông được thiết kế để đảm bảo an toàn và chắc chắn cho ngay cả trẻ nhỏ sử dụng, vì vậy một số khách hàng hầu như không cảm thấy đau và cuối cùng ngủ thiếp đi.",
        "en": "In addition, the hair removal method at Natural beauty is also popular because it causes little pain. In particular, hair removal is designed to ensure safety and security for even young children to use, so some customers The customer hardly felt any pain and eventually fell asleep.",
        "jp": "さらにNatural Beauty での脱毛は、痛みが最小限であることが人気の一つ。特にワックス脱毛は小さなお子様でも使える安心・安全な仕様になっていますので、ほとんど痛みを感じず、眠ってしまうお客様もいらっしゃいます。",
        "kr": "그리고 내추럴뷰티의 제모방법도 통증이 거의 없어서 인기가 많아요. 특히 제모는 어린아이도 사용할 수 있도록 안전하고 안심할 수 있도록 설계되어 있어서 고객 중에는 통증을 거의 느끼지 못하시다가 결국에는 잠 들었다.",
    },
    about_important_txt_18: {
        "vi": "Nghiêm túc trong việc tẩy lông có nghĩa là có thể cung cấp các phương pháp điều trị phù hợp với làn da của từng khách hàng và theo đuổi công nghệ mà không thỏa hiệp để đạt được kết quả.",
        "en": "Being serious about hair removal means being able to provide treatments tailored to each client's skin and pursuing technology without compromise to achieve results.",
        "jp": "脱毛にマジメ、とはお客様ひとりひとりの肌にあった施術をご提供でき、妥協のなく技術を追い求め結果を出すこと。",
        "kr": "제모에 대해 진지하다는 것은 고객 개개인의 피부에 맞는 시술을 제공할 수 있고 결과를 얻기 위해 타협하지 않고 기술을 추구한다는 것을 의미합니다.",
    },
    about_important_txt_19: {
        "vi": "Để tăng số lượng kỹ thuật viên có tư duy này, chúng tôi đã thành lập 'Học viện sắc đẹp M' và đào tạo các kỹ thuật viên.",
        "en": "To increase the number of technicians with this mindset, we established 'M Beauty Academy' and trained technicians.",
        "jp": "このマインドを持った技術者を増やすべく「M beauty academy（エム ビューティー アカデミー）」を設立し、技術者の育成を行っております。",
        "kr": "이러한 마음가짐으로 기술자를 늘리기 위해 'M뷰티아카데미'를 설립하고 기술자를 양성했습니다.",
    },
    about_important_txt_20: {
        "vi": "Dựa trên mong muốn hỗ trợ sự độc lập của phụ nữ, chúng tôi cung cấp nhiều chương trình phù hợp với 'con người' và 'thời đại', chẳng hạn như các khóa học sản xuất tổng thể và các khóa học trực tuyến.",
        "en": "Based on the desire to support women's independence, we offer a variety of programs suitable for 'the people' and 'the times', such as general production courses and online courses.",
        "jp": "女性の独立を応援したいという思いの元に、トータルプロデュースコースや、オンライン講習など「人」と「時代」にあった様々なプログラムをご用意しております。",
        "kr": "여성의 자립을 지원하고자 하는 염원을 바탕으로 일반제작강좌, 온라인강좌 등 '사람'과 '시대'에 맞는 다양한 프로그램을 제공하고 있습니다.",
    },
    about_important_txt_21: {
        "vi": "'Ma Remove', một sản phẩm dùng trong thẩm mỹ viện dành cho mục đích sử dụng chuyên nghiệp do Giám đốc điều hành Mari Fukuda phát triển, bao gồm loại sáp nội địa tốt nhất, mất một năm rưỡi để thương mại hóa và kem dưỡng da chăm sóc sau dành cho các chuyên gia. điều kiện lý tưởng.",
        "en": "'Ma Remove', a salon product for professional use developed by CEO Mari Fukuda, includes the best domestic wax, took a year and a half to commercialize and Aftercare lotion for professionals for ideal conditions.",
        "jp": "代表・福田麻理が開発するプロユースのサロンアイテム「mà remove（マ・リムーブ）」は、商品化まで１年半の歳月をかけた最高の国産ワックスをはじめ、アフターケアローションなどプロフェッショナルの方が理想とする状態をかなえるアイテムが揃っております。",
        "kr": "후쿠다 마리 대표가 개발한 전문가용 살롱 제품 '마 리무버'는 1년 반에 걸쳐 상품화한 국내 최고의 왁스와 이상적인 조건을 위한 전문가용 애프터 케어 로션을 함유하고 있습니다.",
    },
    about_important_txt_22: {
        "vi": "Hãy thử trên da bạn một lần nhé. 'maRemove loại bỏ' sẽ tiếp tục tung ra nhiều sản phẩm khác nhau để tạo nên lớp nền cho mọi 'da đẹp'".,
        "en": "Try it on your skin once. 'maRemove removal' will continue to launch various products to create a foundation for every 'beautiful skin'.",
        "jp": "是非一度、あなたのお肌で試してみてください。「mà remove」は、今後も全ての「美肌」の土台づくりのため、様々なアイテムをリリースして参ります。",
        "kr": "피부에 한 번 사용해보세요. '마리무브 리무브'는 모든 '아름다운 피부'를 위한 기초를 만들어주는 다양한 제품을 계속 출시할 예정입니다.",
    },
    about_academy_txt_1: {
        "vi": "Tại trường của chúng tôi, chúng tôi đã điều trị cho hơn 100.000 người cho đến nay.",
        "en": "At our school, we have treated more than 100,000 people to date.",
        "jp": "当スクールでは、これまで10万人以上の施術を担当した",
        "kr": "우리 학교에서는 지금까지 10만 명이 넘는 사람들을 치료했습니다.",
    },
    about_academy_txt_2: {
        "vi": "Bạn có thể học các kỹ thuật và kiến ​​thức tẩy lông từ đầu từ chuyên gia tẩy lông Mari Fukuda.",
        "en": "You can learn hair removal techniques and knowledge from scratch from hair removal expert Mari Fukuda.",
        "jp": "脱毛のプロ・福田麻理から脱毛に関する技術や知識をゼロから学ぶことができます。",
        "kr": "제모 전문가 후쿠다 마리 씨에게 제모 기술과 지식을 처음부터 배울 수 있습니다.",
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
    defaultLayout_row2_col1_item2: {
        "vi": null,
        "en": null,
        "jp": "〒150-0021 -  625 Kim Mã, Ba Đình, Hà Nội.",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col1_item5: {
        "vi": null,
        "en": null,
        "jp": "NATURAL BEAUTY",
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
        "jp": "活躍FACEBOOK",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col2_item2: {
        "vi": null,
        "en": null,
        "jp": "「NATURAL BEAUTY」Facebookのコミュニティに参加して、最も魅力的なプロモーションを受け取り、アクティビティやミニゲームに参加してください。あなたの幸せは私たちの成功です",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col2_item4: {
        "vi": null,
        "en": null,
        "jp": "FACEBOOK 行こう",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item1: {
        "vi": null,
        "en": null,
        "jp": "活躍INSTARGRAM",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item3: {
        "vi": null,
        "en": null,
        "jp": "「NATURAL BEAUTY」インスタグラムには、私たちがどのように行うかの貴重な映像があり、お客様がここに来たときの体験をよりよく理解し、それを経験した有名人とライブで話す機会があります",
        "kr": null,
        "mergeFlag": false
    },
    defaultLayout_row2_col3_item4: {
        "vi": null,
        "en": null,
        "jp": "INSTARGRAM行こう",
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
        "jp": " NATURALBEAUTY恵比寿本店アクセス",
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
    // news_menu_menuPosition_news: {
    //     "vi": null,
    //     "en": null,
    //     "jp": "脱毛メニュー",
    //     "kr": null,
    //     "mergeFlag": false
    // },
    news_menu_body_bodyMenu_item1: {
        "vi": null,
        "en": null,
        "jp": "ニュース",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_bodyMenu_item2: {
        "vi": null,
        "en": null,
        "jp": "仕事",
        "kr": null,
        "mergeFlag": false
    },
    news_menu_body_bodyMenu_item3: {
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

    news_no_news_available: {
        "vi": "Hiện không có tin tức nào.",
        "en": "No news available at the moment.",
        "jp": "現在、ニュースはありません。",
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
        "vi": "￥99,000",
        "en": "￥99,000",
        "jp": "￥99,000",
        "kr": "￥99,000",
        "mergeFlag": false
    },
    menu_item6_priceList_description_item1: {
        "vi": "*Tất cả giá đã bao gồm thuế tiêu thụ.",
        "en": "*All prices include consumption tax.",
        "jp": "※全て消費税込み。",
        "kr": "※모두 소비세 포함.",
        "mergeFlag": false
    },
    menu_item6_priceList_description_item2: {
        "vi": "*Ngoài những điều trên còn có giá cố định và menu chi tiết cho từng phần. Xin cứ thoải mái liên lạc với chúng tôi.",
        "en": "*In addition to the above, there are set prices and detailed menus for each part. Please feel free to contact us.",
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": "※상기 외, 세트 요금이나, 세세한 부위별의 메뉴가 있습니다. 부담없이 상담해 주십시오.",
        "mergeFlag": false
    },
    menu_item6_priceList_description_item3: {
        "vi": "*Giá có thể thay đổi do các chiến dịch, giới thiệu, v.v. Vui lòng liên hệ với chúng tôi để biết thêm thông tin.",
        "en": "*Prices may change due to campaigns, introductions, etc. Please contact us for more information.",
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": "※캠페인이나 소개 등으로 요금이 변동하는 경우가 있습니다. 자세한 내용은 문의하십시오.",
        "mergeFlag": false
    },
    //////////////////////////
    //
    menu_item7_titleArea_title: {
        "vi": "tẩy lông trẻ em",
        "en": "kids fur removal",
        "jp": "キッズ脱毛",
        "kr": "어린이 탈모",
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_subTitle: {
        "vi": "Có thể thực hành với con của bạn.",
        "en": "It is possible to practice with your child.",
        "jp": "お子様と一緒に施術可能です。",
        "kr": "어린이와 함께 시술 가능합니다.",
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item1: {
        "vi": "Ngày càng có nhiều trẻ em có nhiều lông.",
        "en": "More and more children are also losing their fur.",
        "jp": "お子様も脱毛する方が増えております。",
        "kr": '어린이도 탈모하는 것이 증가하고 있습니다',
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item2: {
        "vi": "Vui lòng tham khảo ý kiến ​​của chúng tôi về các mối quan tâm khác nhau về tóc của con bạn, chẳng hạn như 「nhiều lông 」 hoặc 「lo lắng không mong muốn về lông.」",
        "en": "Please consult with us about your child's various hair concerns, such as 「hairy」 or 「concerned about unwanted hair」.",
        "jp": "「毛深い」「ムダ毛が気になる」など、お子様の様々な毛の悩みをご相談ください。",
        "kr": "「털이 많은」 「낭비 머리가 신경이 쓰이는」등, 아이의 다양한 머리의 고민을 상담해 주세요. ",
        "mergeFlag": false
    },
    menu_item7_titleArea_sub_discription_item3: {
        "vi": "'Đừng lo lắng, bạn có thể điều trị bên cạnh bố mẹ mình.',",
        "en": "'Don't worry, you can have the treatment next to your parents.',",
        "jp": "親御様のお隣でご一緒に施術出来ますので、ご安心ください。",
        "kr": "'친구님 옆에서 함께 시술할 수 있으니 안심하세요.',",
        "mergeFlag": false
    },
    //-
    menu_item7_priceList_item_item1_title: {
        "vi": "1 phần",
        "en": "1 Part",
        "jp": "１部位",
        "kr": "1부위",
        "mergeFlag": false
    },
    menu_item7_priceList_item_item1_sub: {
        "vi": "￥1,100",
        "en": "￥1,100",
        "jp": "￥1,100",
        "kr": "￥1,100",
        "mergeFlag": false
    },
    menu_item7_priceList_description_item1: {
        "vi": "*Tất cả giá đã bao gồm thuế tiêu thụ.",
        "en": "*All prices include consumption tax.",
        "jp": "※全て消費税込み。",
        "kr": "※모두 소비세 포함.",
        "mergeFlag": false
    },
    menu_item7_priceList_description_item2: {
        "vi": "*Chúng tôi không chấp nhận đặt chỗ chỉ dành cho trẻ em.",
        "en": "*We do not accept reservations for children only.",
        "jp": "※お子様のみのご予約はご遠慮させていただきます。",
        "kr": "※아드님의 예약은 삼가해 드립니다.",
        "mergeFlag": false
    },
    menu_item7_priceList_description_item3: {
        "vi": "*Ngoài những điều trên còn có giá cố định và menu chi tiết cho từng phần. Xin cứ thoải mái liên lạc với chúng tôi.",
        "en": "*In addition to the above, there are set prices and detailed menus for each part. Please feel free to contact us.",
        "jp": "※上記の他、セット料金や、細かな部位別のメニューがございます。お気軽にご相談ください。",
        "kr": "※상기 외, 세트 요금이나, 세세한 부위별의 메뉴가 있습니다. 부담없이 상담해 주십시오.",
        "mergeFlag": false
    },
    menu_item7_priceList_description_item34: {
        "vi": "*Giá có thể thay đổi do các chiến dịch, giới thiệu, v.v. Vui lòng liên hệ với chúng tôi để biết thêm thông tin.",
        "en": "*Prices may change due to campaigns, introductions, etc. Please contact us for more information.",
        "jp": "※キャンペーンやご紹介等で料金が変動する場合がございます。詳しくはお問い合わせください。",
        "kr": "※캠페인이나 소개 등으로 요금이 변동하는 경우가 있습니다. 자세한 내용은 문의하십시오.",
        "mergeFlag": false
    },
    reserve_error_firstname: {
        "vi": "Please input your firstname",
        "en": "Please input your firstname",
        "jp": "Please input your firstname",
        "kr": "Please input your firstname",
    },
    reserve_error_lastname: {
        "vi": "Please input your lastname",
        "en": "Please input your lastname",
        "jp": "Please input your lastname",
        "kr": "Please input your lastname",
    },
    reserve_error_phone: {
        "vi": "phone number is not valid",
        "en": "phone number is not valid",
        "jp": "phone number is not valid",
        "kr": "phone number is not valid",
    },
    reserve_error_email: {
        "vi": "Email is not valid",
        "en": "Email is not valid",
        "jp": "Email is not valid",
        "kr": "Email is not valid",
    },
    reserve_error_service: {
        "vi": "Please choose at least one service",
        "en": "Please choose at least one service",
        "jp": "Please choose at least one service",
        "kr": "Please choose at least one service",
    },
    confirm: {
        "vi": "Xác nhận",
        "en": "Confirm",
        "jp": "Confirm",
        "kr": "Confirm",
    },
    cancel: {
        "vi": "Hủy",
        "en": "cancel",
        "jp": "cancel",
        "kr": "cancel",
    },
    notification: {
        "vi": "Thông báo",
        "en": "notification",
        "jp": "notification",
        "kr": "notification",
    },
    reservation_success_notification: {
        "vi": "request has been sent",
        "en": "request has been sent",
        "jp": "request has been sent",
        "kr": "request has been sent",
    },
    reservation_fail_notification: {
        "vi": "please fill the required field",
        "en": "please fill the required field",
        "jp": "please fill the required field",
        "kr": "please fill the required field",
    },
    error_actice_request: {
        "vi": "Can not send more than one request",
        "en": "Can not send more than one request",
        "jp": "Can not send more than one request",
        "kr": "Can not send more than one request",
    }
}
