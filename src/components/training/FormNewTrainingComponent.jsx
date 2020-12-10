import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as apiTraining from '../../API/trainingAPI';
import image from '../../image/tobio.jpg';


class FormNewTrainingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: "",
                description: "",
                prerequisite: "",
                image: null
            },
            trainingList: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        apiTraining.getTrainingList().then(result => {
            this.setState({ trainingList: result.data })
        }).catch(e => {
            console.log(e)
        })
    }

    handleSubmit(data) {
        const fd = new FormData();
        fd.append("Training_Title", data.title);
        fd.append("Training_Details", data.description);
        fd.append("formFile", data.image, data.image.name);
        if (data.prerequisite != "") {
            fd.append("PrerequisiteID", `{${data.prerequisite}}`);
        }
        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        apiTraining.postTraining(fd).then(result => {
            alert(`${data.title} is submitted`);
        }).catch(e => console.log(e.message));
        this.props.close()
    }

    render() {
        return (
            <div className="add-new-training-modal">
                <div className="add-training-form">
                    <div className="add-training-title">
                        <h4>Trainings Information</h4>
                    </div>
                    <Formik initialValues={this.state.formData}
                        onSubmit={(values) => this.handleSubmit(values)}
                        validateOnChange={true}
                        validateOnBlur={false}
                        //   validationSchema={ReviewSchema}
                        enableReinitialize={true}
                    >
                        {
                            (formProps) => (
                                <Form>
                                    <div className="form-group">
                                        <label>Training Title</label>
                                        <Field className="form-control" type="text" name="title" />
                                    </div>

                                    <div className="form-group">
                                        <label>Training Prerequisite</label>
                                        <Field className="form-control" as="select" name="prerequisite" >
                                            <option value=""></option>
                                            {this.state.trainingList.map((list) =>
                                                <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="form-group">
                                        <label>Training Image</label>
                                        <Field className="form-control" type="file" name="image" value={this.state.formData.image} onChange={(e) => {
                                            formProps.setFieldValue("image", e.target.files[0])
                                        }} />
                                    </div>

                                    <div className="form-group">
                                        <label>Training Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </div>
                                    <div className="add-training-button">
                                        <button className="btn btn-primary" type="submit">
                                            Submit
                                        </button>
                                        <button className="btn btn-danger" type="button" onClick={this.props.close}>
                                            Close
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            </div>
        )
    }
}


export default FormNewTrainingComponent;