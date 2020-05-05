import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {formReducer} from "./formReducer/formReducer";


const rootReducer = combineReducers({
    formState: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type  HelperActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
// @ts-ignore
window.store = store;
