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
