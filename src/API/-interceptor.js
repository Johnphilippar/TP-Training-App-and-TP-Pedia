import axios from 'axios';
import * as packageConfig from '../../package.json';
class interceptor {

    constructor() {
        this.TOKEN = window.localStorage.getItem('token');
    }

    authAxios() {
        return axios.create({
            baseURL: packageConfig.configuration.APITrainings,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                Accept: 'application/json',
                ContentType: 'application/json'
            }
        })
    }

    authAxiosFormData() {
        return axios.create({
            baseURL: packageConfig.configuration.APITrainings,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export default new interceptor()