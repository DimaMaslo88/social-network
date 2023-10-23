import {setAppError, SetAppErrorType} from "bll/actions/appActions";
import {Dispatch} from "redux";

export const handleServerError = (error: any, dispatch: Dispatch<SetAppErrorType>) => {
    dispatch(setAppError(error ? error.response.data.messages[0] : "Произошла ошибка, проверьте корректрность ввода данных"))
}
