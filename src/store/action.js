import store from "./store";

export function changeLanguage(dispatch, lang) {
    dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: lang
    })
}

export function updateDict(dispatch, dictLibrary) {
    const state = store.getState();
    const dicts = state.dictLibrary;
    for(const dict of dictLibrary) {
        dicts[dict.dictKey] = dict;
    }
    dispatch({
        type: 'UPDATE_DICT',
        payload: dicts
    })
}