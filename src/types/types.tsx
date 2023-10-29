// NavBarType
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
    userId: number
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

// ResponseTypes
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
