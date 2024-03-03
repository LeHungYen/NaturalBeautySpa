import {legacy_createStore as createStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";

const store = createStore(reducer)

export default store;