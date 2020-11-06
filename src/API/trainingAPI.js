import interceptor from './-interceptor';

export const getTraining = async () => {
    return await interceptor.authAxios().get('/Trainings')
}

export const getTrainingList = async () => {
    return await interceptor.authAxios().get('/Trainings/List')
}

export const postTraining = (trn) => {
    return interceptor.authAxios().post('/Trainings', trn)
}

export const putTraining = (trn) => {
    return interceptor.authAxios().put('/Trainings', trn)
}

export const getLocations = async () => {
    return await interceptor.authAxios().get('/Locations')
}

export const putSchedule = (sch) => {
    return interceptor.authAxios().put('/Schedule', sch)
}

export const postSchedule = (sch) => {
    return interceptor.authAxios().post('/Schedule', sch)
}