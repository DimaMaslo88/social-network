import {setUserId, SetUserIdType, setUserProfileData, SetUserProfileDataType} from "bll/actions/userAction";
import {AppThunkType} from "bll/store";
import {setAppStatus} from "bll/actions/appActions";
import {UserApi} from "api/auth-api/user-api";

export const userReducerState = {
    userId: null,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
    },
    photos: {
        small: '',
        large: ''
    }
}
export type UserReducerType = {
    userId: number | null
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string

        large: string
    }
}


export type userReducerActions = SetUserProfileDataType
    | SetUserIdType

export const UserReducer = (state: UserReducerType = userReducerState, action: userReducerActions): UserReducerType => {
    switch (action.type) {
        case "SET-USER-ID": {
            return {...state, userId: action.userId}
        }
        case "SET-USER": {
            return {...state,...action.data}
        }
        default:
            return state
    }
}
export const GetProfile = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus(true))
    try {
        const res = await UserApi.getUser(userId)
        dispatch(setUserProfileData(res.data))
        dispatch(setUserId(res.data.userId))

    } catch (error) {
        console.log(error)
    } finally {
        dispatch(setAppStatus(false))
    }
}



