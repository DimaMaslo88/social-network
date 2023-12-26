import {instance} from "api/instance";

export const DialogsApi ={
    createPost(userId:number | null,message:string){
        return  instance.post(`dialogs/${userId}/messages`,message)
}
}
