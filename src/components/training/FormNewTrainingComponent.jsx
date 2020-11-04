import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as apiTraining from '../../API/trainingAPI';


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
            <div>
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
                                <div>
                                    <Field type="text" name="title" />
                                    <label>Training Title</label>
                                </div>

                                <div>
                                    <Field as="select" name="prerequisite" >
                                        <option value=""></option>
                                        {this.state.trainingList.map((list) =>
                                            <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                        )}
                                    </Field>
                                    <label>Training Prerequisite</label>
                                </div>

                                <div>
                                    <Field type="file" name="image" value={this.state.formData.image} onChange={(e) => {
                                        formProps.setFieldValue("image", e.target.files[0])
                                    }} />
                                    <label>Training Image</label>
                                </div>

                                <div>
                                    <Field type="text" name="description" />
                                    <label>Training Description</label>
                                </div>
                                <button type="submit">
                                    <p>SUBMIT</p>
                                </button>
                                <button type="button" onClick={this.props.close}>
                                    <p>CLOSE</p>
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}


export default FormNewTrainingComponent;