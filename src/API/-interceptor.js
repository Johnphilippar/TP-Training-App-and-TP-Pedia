import axios from 'axios';

class interceptor {

    constructor() {
        this.TOKEN = window.localStorage.getItem('token');
    }

    authAxios() {
        return axios.create({
            baseURL: 'http://208.109.10.234:81/',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                Accept: 'application/json',
                ContentType: 'application/json'
            }
        })
    }

}

export default new interceptor()