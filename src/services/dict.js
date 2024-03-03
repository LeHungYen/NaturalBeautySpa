import store from "../store/store";


export function getDict(key) {
    try {
        const state = store.getState();
        const rs = state.dictLibrary[key][state.lang]
        return rs;
    } catch (e) {
        return "DICT_ERROR";
    }
}
