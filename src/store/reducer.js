
const defaultValue = {
    lang: "jp",
    dictLibrary: [],
    pageData: undefined,
    showLoading: true
}

export function reducer (state = defaultValue, action) {
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