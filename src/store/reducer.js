
const defaultValue = {
    lang: "jp",
    dictLibrary: [],
    pageData: undefined,
    showLoading: true
}

const getState = function () {
    if(window.localStorage.getItem("web-state")===null) {
        return defaultValue;
    }
    return JSON.parse(window.localStorage.getItem("web-state"));
}

export function reducer (state = getState(), action) {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang: action.payload,
            }
        case "UPDATE_PAGE_DATA":
            return {
                ...state,
                dictLibrary: action.payload.library,
                pageData: action.payload.pageData,
                showLoading: false
            }
        case "SHOW_LOADING":
            return {
                ...state,
                showLoading: true
            }
        default:
            return state
    }
}