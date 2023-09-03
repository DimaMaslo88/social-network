export type SetAuthUser = ReturnType<typeof setAuthUser>
export const setAuthUser = (email:string,password:string)=>{
    return{
        type:'auth/SET-AUTH-USER',
        email,
        password
    }as const
}
export type SetIsAuthType = ReturnType<typeof setIsAuth>
export const setIsAuth = (isAuth:boolean)=>{
    return {
        type:'auth/SET-IS-AUTH',
        isAuth
    }as const
}
export type SetInitializedType = ReturnType<typeof setInitialized>
export const setInitialized = (isInitialed:boolean)=>{
    return {
        type:'auth/SET-INITIALIZED-AUTH',
        isInitialed
    }as const
}
