import DefaultLayout from "../layouts/DefaultLayout";

export function pathToComponentMapping() {
    return {
        home: {

        }
    }
}

export function getLayoutDict(layout, dictKeys) {
    if (layout instanceof DefaultLayout) {
        const layoutDictArr = [
            "nav-company",
            "nav-customer-feedback",
            "nav-intro",
            "nav-product",
            "nav-reservation",
            "nav-service"
        ]
        return layoutDictArr.concat(dictKeys);
    }
}

export function getHomeApiData(layout) {
    let dictKeys = [
        "home"
    ]
    dictKeys = getLayoutDict(layout, dictKeys);
    return {
        dictKeys: dictKeys
    }
}
