import store from "./store";

export function changeLanguage(dispatch, lang) {
    dispatch({
        type: 'CHANGE_LANGUAGE',
        payload: lang
    })
}

export function updateDict(dispatch, dictLibrary) {
    const state = store.getState();
    const keys = Object.keys(dictLibrary);
    const dicts = state.dictLibrary;
    for(const key of keys) {
        dicts[key] = dictLibrary[key];
    }
    dispatch({
        type: 'UPDATE_DICT',
        payload: dicts
    })
}