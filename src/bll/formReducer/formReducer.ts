import {AppActions} from "./formActionCreators";
import {ICar, IYear} from "../../helpers/types";

let initialState = {
    carNames: [] as ICar[],
    years: [] as IYear[],
    models: [] as any,
    data: {
        carName: '',
        carModel: '',
        yearFrom: '',
        yearTo: '',
        priceFrom: '',
        priceTo: '',
        engine: '',
        transmission: '',
        driving: '',
        colors: '',
        currency: '',
        information: '',
        fullName: '',
        email: '',
        number: '',
        city: ''
    }
};
type IInitialState = typeof initialState;

export const formReducer = (state = initialState, action: AppActions): IInitialState => {
    switch (action.type) {
        case 'SET_CAR_NAMES': {
            return {
                ...state,
                carNames: action.carNames
            }
        }
        case 'SET_YEARS': {
            return {
                ...state,
                years: action.years
            }
        }
        case 'GET_CURRENT_MODEL': {
            const checkedCar = state.carNames.find((c) => c.name === action.name)!;
            // const checkedCar = state.carNames.find((c) => c.name === action.name);
            return {
                ...state,
                // models: checkedCar ? checkedCar.models : []
                models: checkedCar.models
            }
        }
        case 'SET_FORM_DATA': {
            return {...state, data: {...state.data, ...action.value}}
        }
        default: {
            return state
        }
    }
};
