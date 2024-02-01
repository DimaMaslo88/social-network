// NavBarType
import {stringify} from "querystring";

export type NavTitleType = {
    title:string
}

// loginFormType

export type LoginFormTYpe = {
    email?:string
    password?:string
}

// User Types

export type UserDataType = {
    userId: number | null
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?:{
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter:string
        website: string
        youtube: string
        mainLink:string
    }
}

// Auth ResponseTypes
export type AuthResponseType={
    resultCode:number,
    messages:string,
    data: {
        userId:number
    }
}

export type InitializeResponseType={
    resultCode: 0
    messages: [],
    data: {
        id: 2,
        email: string,
        login: string
    }
}
// User Response Type
export type  UserResponseType ={
    userId: number
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

export type UserUpdateResponseType={
    resultCode:number,
    messages:string,
    data: {

    }
}
// usersResponseType
export type UsersResponseType ={
    items: ItemsType[]
    totalCount:number

}
export type ItemsType={
    name: string,
    id: number,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean
}
// query params
export type QueryParamsType={
    count?:number // кол-во юзеров в респонсе
    page?:number
    term?:string
    friend?:boolean
}
// Followed response
export type FollowedResponseType={
    resultCode:number,
    messages:string,
    data: {

    }
}
