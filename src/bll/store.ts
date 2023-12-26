import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {MessagesReducer, MessagesReducerActions} from "bll/reducers/messagesReducer";
import {useDispatch} from "react-redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AuthReducer, authReducerActions} from "bll/reducers/authReducer";
import {AppReducer, appStateActionsType} from "bll/reducers/appReducer";
import {UserReducer, UserReducerActions,} from "bll/reducers/userReducer";
import {UsersReducer, UsersReducerGeneralType} from "bll/reducers/usersReducer";

const rootReducer=combineReducers({
    messages:MessagesReducer,
    auth:AuthReducer,
    app:AppReducer,
    user:UserReducer,
    users:UsersReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))
export type StateType =ReturnType<typeof rootReducer>
export const useAppDispatch=():AppDispatch=>useDispatch<AppDispatch>()
export type AppDispatch = ThunkDispatch<
    StateType,
    undefined,
    ActionStateType
    >;
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    StateType,
    undefined,
    ActionStateType
    >;
export type ActionStateType = MessagesReducerActions
|authReducerActions
|appStateActionsType
|UserReducerActions
|UsersReducerGeneralType
// @ts-ignore
window.store = store

