import store from "../store/store";


export function getDict(key) {
    const state = store.getState();
    const rs = state.dictLibrary[key][state.lang]
    if(rs) {
        return rs;
    }
    return "DICT_ERROR";
}
