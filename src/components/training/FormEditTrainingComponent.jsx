import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import config from '../../../package.json';
import * as apiTraining from '../../API/trainingAPI';

export default function FormEditTrainingComponent(props) {
    const [editFormData, setEditFormData] = useState({
        Training_Id: props?.trn?.Details?.ID,
        Training_Title: props?.trn?.Details?.TRAINING_TITLE,
        Training_Details: props?.trn?.Details?.TRAINING_DETAILS,
        Status: props?.trn?.Details?.STATUS,
        formFile: null,
        PrerequisiteId: props?.trn.Prerequisite[0]?.ID
    })

    const handleEdit = (data) => {
        console.log(data)
        const fd = new FormData();
        fd.append("Training_Id", `{${editFormData.Training_Id}}`);
        fd.append("Training_Title", data.Training_Title);
        fd.append("Training_Details", data.Training_Details);
        fd.append("Status", data.Status);

        console.log(data.formFile)
        if (data.formFile) {
            fd.append("formFile", data.formFile, data.formFile.name);
        }


        if (data.PrerequisiteId) {
            fd.append("PrerequisiteId", `{${data.PrerequisiteId}}`)
            console.log('triggered')
        }

        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        apiTraining.putTraining(fd).then(result => {
            alert(`${data.Training_Title} is updated`);
        }).catch(e => console.log(e.message));
        props.closeModal()
    }

    const [trainingList, setTrainingList] = useState([])
    const getTrainingList = () => {
        apiTraining.getTrainingList().then(result => {
            setTrainingList(result.data)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getTrainingList()
    }, [])

    return (
        <div className="add-new-training-modal">
            <img src={`${config.configuration.TRAINING_IMAGE_PATH}${props.trn.Details.TRAINING_IMAGE}`} alt="" />
            <div className="add-training-form">
                <Formik initialValues={editFormData}
                    onSubmit={(values) => handleEdit(values)}
                    validateOnChange={true}
                    validateOnBlur={false}
                    //   validationSchema={ReviewSchema}
                    enableReinitialize={true}
                >
                    {
                        (formProps) => (
                            <Form>
                                <div>
                                    <Field type="text" name="Training_Title" />
                                    <label>Training Title</label>
                                </div>

                                <div>
                                    <Field type="text" name="Training_Details" />
                                    <label>Training Description</label>
                                </div>

                                <div>
                                    <Field as="select" name="Status">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </Field>
                                    <label>Status</label>
                                </div>

                                <div>
                                    <Field type="file" name="formFile" value={editFormData.formFile} onChange={(e) => {
                                        formProps.setFieldValue("formFile", e.target.files[0])
                                    }} />
                                    <label>Training Image</label>
                                </div>

                                <div>
                                    <Field as="select" name="PrerequisiteId">
                                        <option value="">--No Prerequisite--</option>
                                        {trainingList.map((list) =>
                                            <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                        )}
                                    </Field>
                                </div>

                                <button type="submit">
                                    <p>SUBMIT</p>
                                </button>
                                <button type="button" onClick={props.closeModal}>
                                    <p>CLOSE</p>
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
