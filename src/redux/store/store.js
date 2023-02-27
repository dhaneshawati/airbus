import { createStore } from "redux";
// import { combineReducers } from 'redux';
import userReducer from "../reducers/userReducer";
// import questionReducer from '../reducers/questionReducer';

// const rootReducer = combineReducers({
//     userInfo: userReducer,
//     questionInfo: questionReducer
// });

const store = createStore(userReducer);

export default store;
