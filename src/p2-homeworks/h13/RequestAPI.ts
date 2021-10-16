import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com'
})

export type ResponsePostType = {
    errorText: string,
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

 type UserType = {
    created: string,
    email: string,
    isAdmin: boolean,
    name: string,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    _id: string,
}
type ResponseGetType = {
    users: Array<UserType>,
    warnings:string
}

export const requestAPI = {
    get() {
        return instance.get<ResponseGetType>('auth');
    },
    post(success:boolean) {
        return instance.post<{success:boolean}, AxiosResponse<ResponsePostType>>('auth/test',{
            success
        })
    },
}