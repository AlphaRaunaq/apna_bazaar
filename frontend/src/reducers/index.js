import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./counter";

const rootReducer = combineReducers({ countReducer });

export default rootReducer;
