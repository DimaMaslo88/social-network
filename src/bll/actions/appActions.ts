export type SetAppStatusType= ReturnType<typeof setAppStatus>
export const setAppStatus = (status:boolean)=>{
    return{
        type:'SET-APP-STATUS',
        status
    }as const
}
