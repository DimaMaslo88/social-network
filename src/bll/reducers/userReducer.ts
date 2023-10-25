import {UserResponseType} from "types/types";

export const userReducerState ={
    userId: null,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter:'',
        website: '',
        youtube: '',
        mainLink:'',
    },
    photos: {
        small: '',
        large: ''
    }
}
export type UserReducerType ={
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:{
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter:string
        website: string
        youtube: string
        mainLink:string
    }
    photos: {
        small: string

        large: string
    }
}


export const userReducerActions = null

export const UserReducer =(state:UserReducerType=userReducerState,action:any):UserReducerType=>{
switch (action.type){

    default:return state
}
}
