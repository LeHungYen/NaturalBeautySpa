
const defaultValue = {
    lang: "jp",
    dictLibrary: []
}

export function reducer (state = defaultValue, action) {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang: action.payload,
            }
        case "UPDATE_DICT":
            return {
                ...state,
                dictLibrary: action.payload,
            }
        default:
            return state
    }
}