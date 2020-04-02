import axios from 'axios'
import {ICarName} from "../helpers/types";
const instance = axios.create({
    baseURL: 'http://localhost:3004',
});

export const apiMainForm = {
    async getCarNames(){
        return await instance.get<ICarName[]>('/carNames').then((res)=>{
            return res.data
        })
    }
};
