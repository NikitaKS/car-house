import {addedValues, ICar, IYear, Statuses} from "../../helpers/types";
import {HelperActionsType} from "../store";

// type setCarType = ReturnType<typeof setCarNames>
// type setYearsType = ReturnType<typeof setYears>
// type currentModelType = ReturnType<typeof getCurrentModel>
// type formDataType = ReturnType<typeof setFormData>


export type AppActions = HelperActionsType<typeof actions>;

// export type AppActions = setCarType | setYearsType | currentModelType | formDataType;
export const actions = {
    setStatus: (status: Statuses) => ({type: "SET_STATUS", status} as const),
    setCarNames: (carNames: ICar[]) => ({type: "SET_CAR_NAMES", carNames} as const),
    setYears: (years: IYear[]) => ({type: "SET_YEARS", years} as const),
    getCurrentModel: (name: string) => ({type: "GET_CURRENT_MODEL", name} as const),
    setFormData: (value: addedValues) => ({type: "SET_FORM_DATA", value} as const)
}
// export const setStatus = (status: Statuses) => ({type: "SET_STATUS", status} as const);
// export const setCarNames = (carNames: ICar[]) => ({type: "SET_CAR_NAMES", carNames} as const);
// export const setYears = (years: IYear[]) => ({type: "SET_YEARS", years} as const);
// export const getCurrentModel = (name: string) => ({type: "GET_CURRENT_MODEL", name} as const);
// export const setFormData = (value: addedValues) => ({type: "SET_FORM_DATA", value} as const);
