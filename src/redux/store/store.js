import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import bookingReducer from "../reducers/bookingReducer";
import flightReducer from "../reducers/flightReducer";
import travelReducer from "../reducers/travelReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  travelInfo: travelReducer,
  flightInfo: flightReducer,
  bookingInfo: bookingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // As calling async function in dispatch

export default store;
