export type SetAuthUser = ReturnType<typeof setAuthUser>
export const setAuthUser = (email:string,password:string)=>{
    return{
        type:'auth/SET-AUTH-USER',
        email,
        password
    }
}
