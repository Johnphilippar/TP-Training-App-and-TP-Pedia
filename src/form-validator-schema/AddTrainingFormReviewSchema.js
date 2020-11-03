import * as yup from 'yup';

const ReviewSchema = yup.object().shape({
    TRAINING_TITLE: yup.string()
        .required('Training title is required')
        .max(200, 'Maximum of 200 characters only'),
    TRAINING_DESCRIPTION: yup.string()
        .required('Training title is required')
        .max(200, 'Maximum of 200 characters only')
});

export default ReviewSchema;