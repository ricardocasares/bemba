import { combineReducers } from "redux";
import { reducer as player } from "./player";

export const reducers = combineReducers({ player });
