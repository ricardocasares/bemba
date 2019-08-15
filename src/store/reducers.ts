import { combineReducers } from "redux";
import { reducer as audio } from "./audio";
import { reducer as player } from "./player";
import { reducer as search } from "./search";
import { reducer as station } from "./station";

export const reducers = combineReducers({ audio, player, search, station });
