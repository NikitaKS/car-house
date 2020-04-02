import {ThunkAction} from "redux-thunk";
import {AppState} from "../store";
import {AppActions, setCarNames} from "./formActionCreators";
import {apiMainForm} from "../../dal/api";

type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getCarNames = (): ThunkActionType => async (dispatch) => {
    try {
       const result = await apiMainForm.getCarNames();
       dispatch(setCarNames(result))
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
