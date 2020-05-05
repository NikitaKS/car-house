import {ThunkAction} from "redux-thunk";
import {AppState} from "../store";
import {apiMainForm} from "../../dal/api";
import {actions, AppActions} from "./formActionCreators";

type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getCarNames = (): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiMainForm.getCarNames();
        dispatch(actions.setCarNames(result))
    } catch (e) {

    }
    // try {
    //     dispatch(setStatus(Statuses.isLoading));
    //     const result = await apiNotes.getNotes();
    //     dispatch(setNotes(result));
    //     dispatch(setStatus(Statuses.success));
    // } catch (e) {
    //     console.log(e.response.data.error);
    //     dispatch(setStatus(Statuses.error));
    // }
};
export const getYears = (): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiMainForm.getYears();
        dispatch(actions.setYears(result))
    } catch (e) {

    }
};
export const sendDataTC = (): ThunkActionType => async (dispatch, getState) => {
    try {
        const data = getState().formState.data
        const result = await apiMainForm.setUserData(data)
    } catch (e) {

    }
};
export const register = (name: string, email: string, number: string): ThunkActionType => async (dispatch) => {
    try {
        await apiMainForm.register(name, email, number)
    } catch (e) {

    }
}
