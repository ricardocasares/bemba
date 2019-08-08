import { combineReducers } from "redux";
import { reducer as audio } from "./audio";
import { reducer as player } from "./player";
import { reducer as station } from "./station";
import { reducer as stations } from "./stations";

export const reducers = combineReducers({ audio, player, station, stations });
