import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
// @ts-ignore
window.store = store;
