import {SET_CAR_NAMES, SET_STATUS} from "../../helpers/constants";
import {ICarName, Statuses} from "../../helpers/types";

interface ISetStatus {
    type: typeof SET_STATUS,
    status: Statuses
}

interface ISetCarNames {
    type: typeof SET_CAR_NAMES,
    carNames: ICarName[]
}

export type AppActions = ISetCarNames | ISetStatus
export const setStatus = (status: Statuses): ISetStatus => ({type: SET_STATUS, status});
export const setCarNames = (carNames: ICarName[]): ISetCarNames => ({type: SET_CAR_NAMES, carNames});
