import { combineReducers } from "redux";
import { reducer as player } from "./player";
import { reducer as stations } from "./stations";

export const reducers = combineReducers({ player, stations });
