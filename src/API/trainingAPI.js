import interceptor from './-interceptor';

export const getTraining = async () => {
    return await interceptor.authAxios().get('/Trainings')
}

export const getTrainingList = async () => {
    return await interceptor.authAxios().get('/Trainings/List')
}