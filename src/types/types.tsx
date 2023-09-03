// NavBarType
export type NavTitleType = {
    title:string
}

// loginFormType

export type LoginFormTYpe = {
    email?:string
    password?:string
}



// ResponseTypes
export type AuthResponseType={
    resultCode:number,
    messages:string,
    data: {}
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
