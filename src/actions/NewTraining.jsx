import axios from 'axios';

export const addNewTraining = (formTrainingData , formTrainingPrerequisiteData) => async dispatch => {
    try {

        const res = await axios.post('http://208.109.10.234:81/training-scheduling/api/Trainings',formTrainingData , formTrainingPrerequisiteData);
         
        dispatch({
            payload: res.data
        })
    } catch (err) {
        
    }
}

