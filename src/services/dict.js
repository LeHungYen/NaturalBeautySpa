import store from "../store/store";


export function getDict(key) {
    const state = store.getState();
    try {
        return dictLibrary[key][state.lang]
    } catch (ex) {
        return "DICT_ERROR";
    }
}

const dictLibrary= {
    nav_home: {
        en: "Home",
        vi: "Trang chủ",
        jp: "Home"
    },
    nav_doctor: {
        en: "Doctor",
        vi: "Bác sỹ",
        jp: "医師"
    },
    nav_service_1: {
        en: "Pigmentation treatment",
        vi: "Điều trị thâm nám",
        jp: "色素沈着（しみ、そばかす、肝斑など）の治療"
    },
    nav_service_2: {
        en: "Aesthetic treatment & skincare",
        vi: "Trẻ hoá - điều trị thẩm mỹ",
        jp: "肌質改善トリートメント・注射など"
    },
    nav_contact: {
        en: "Contact",
        vi: "Liên hệ",
        jp: "お問合せ・ご相談"
    },
    nav_introduce: {
        en: "Introduction",
        vi: "Giới thiệu",
        jp: "ご紹介"
    },
    nav_news: {
        en: "News",
        vi: "Tin tức",
        jp: "新着情報"
    },
    nav_product: {
        en: "Product",
        vi: "Sản phẩm",
        jp: "商品販売"
    },
    contact_msg: {
        en: "Hotline (Free consultation)",
        vi: "Hotline tư vấn miễn phí",
        jp: "ホットライン（無料診断）"
    },
    search: {
        en: "Search anything",
        vi: "Tìm kiếm",
        jp: ""
    }
}