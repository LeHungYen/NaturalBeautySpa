import store from "./store";

export function changeLanguage(dispatch, lang) {
    dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: lang
    })
}

export function updatePageData(dispatch, pageData) {
    const state = store.getState();
    const library = state.dictLibrary;
    const dicts = pageData.dicts;
    for(const dict of dicts) {
        library[dict.dictKey] = dict;
    }
    dispatch({
        type: 'UPDATE_PAGE_DATA',
        payload: {
            library,
            pageData
        }
    })
}