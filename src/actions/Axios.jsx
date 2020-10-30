import axios from 'axios';

const instance = axios.create({
    baseURL: "http://208.109.10.234:81/",
})

// instance.post('training-scheduling/api/Trainings')


export default instance;