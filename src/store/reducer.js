
const defaultValue = {
    lang: "jp",
    dictLibrary: [],
    pageData: undefined
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
                pageData: action.payload.pageData
            }
        default:
            return state
    }
}