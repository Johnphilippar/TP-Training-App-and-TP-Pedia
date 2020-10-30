import interceptor from './-interceptor';

 const getTraining = async () => {
    return await interceptor.authAxios().get('training-scheduling/api/Trainings')
}


export default getTraining;