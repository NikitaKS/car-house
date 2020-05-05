import axios from 'axios'
import {FormValues, ICar, IYear} from "../helpers/types";

const instance = axios.create({
    baseURL: 'http://localhost:3004',
});

export const apiMainForm = {
    async getCarNames() {
        return await instance.get<ICar[]>('/carNames').then((res) => {
            return res.data
        })
    },
    async getYears() {
        return instance.get<IYear[]>('/years').then((res) => {
            return res.data
        })
    },
    async setUserData(data: FormValues) {
        return instance.post('/_data', data).then((res) => {
        })
    },
    async register(name: string, email: string, number: string){
        return instance.post('/_register',{name,email,number}).then(()=>{

        })
    }
};
