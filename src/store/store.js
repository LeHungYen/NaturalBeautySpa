import {legacy_createStore as createStore} from "@reduxjs/toolkit";
import {applyMiddleware} from "@reduxjs/toolkit";
import {reducer} from "./reducer";

const updateState = store => next => action => {
    const result = next(action);
    window.localStorage.setItem("web-state", JSON.stringify(store.getState()))
    return result;
};

const store = createStore(reducer, applyMiddleware(updateState))

export default store;