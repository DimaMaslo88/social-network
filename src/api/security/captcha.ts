import {instance} from "api/instance";

export const SecurityApi={
    getCaptcha(){
        return instance.get<string>('security/get-captcha-url')
    }
}
