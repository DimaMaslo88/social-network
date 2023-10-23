export type SetAppStatusType= ReturnType<typeof setAppStatus>
export const setAppStatus = (status:boolean)=>{
    return{
        type:'SET-APP-STATUS',
        status
    }as const
}
export type SetAppErrorType = ReturnType<typeof setAppError>
export const  setAppError = (error:string | null) =>{
    return {
        type:'SET-APP-ERROR',
        error
    }as const
}
