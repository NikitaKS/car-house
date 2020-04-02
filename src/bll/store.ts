import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {formReducer} from "./formReducer/formReducer";


const rootReducer = combineReducers({
    formState: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
// @ts-ignore
window.store = store;
