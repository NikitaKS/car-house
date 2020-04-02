import {AppActions} from "./formActionCreators";
import {SET_CAR_NAMES} from "../../helpers/constants";
import {ICarName} from "../../helpers/types";

let initialState = {
    carNames: [] as ICarName[]
};
type IInitialState = typeof initialState;

export const formReducer = (state = initialState, action: AppActions): IInitialState => {
    switch (action.type) {
        case SET_CAR_NAMES: {
            return {
                ...state,
                carNames: action.carNames
            }
        }
        default: {
            return state
        }
    }
};
