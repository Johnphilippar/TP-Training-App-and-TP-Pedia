
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './TrainingsComponent.scss';
import image from '../image/tobio.jpg';
import Modal from 'react-modal';
import trainingAPI from '../API/trainingAPI';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';
Modal.setAppElement('#root');

const Trainings = () => {

    // useEffect(() => {
    //     const getTrainingData = async () => {
    //         const trainingDataResponse = await fetch('http://208.109.10.234:81/Training-scheduling/api/Trainings');
    //         const jsonResponse = trainingDataResponse.json();
    //         console.log(jsonResponse);
    //     }
    //     getTrainingData();
    // }, [])

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await axios.post('Training-scheduling/api/Trainings')
    //         console.log(res);
    //         return res;
    //     }
    //     fetchData();
    // }, [])

    const [addTrainingModal, setAddTrainingModal] = useState(false)
    const [addScheduleModal, setAddScheduleModal] = useState(false)
    const [editTrainingModal, setEditTrainingModal] = useState(false)

    const [trainingDetailsData, setTrainingDetailsData] = useState([
        {
            Details: {
                ID: '',
                CODE: '',
                TRAINING_TITLE: '',
                INSERT_DATE: '',
                STATUS: '',
                TRAINING_IMAGE: '',
                TRAINING_DETAILS: ''
            },
            id: '',
            code: '',
            trainingTitle: '',
            insertDate: '',
            status: '',
            trainingImage: '',
            trainingDetails: ''
        }
    ])


    const [formTrainingPrerequisiteData, setFormTrainingPrerequisiteData] = useState([
        {
            Count_id: '',
            Training_Id: '',
            Required_Training_Id: ''
        }
    ])

    // const { Training_Title, preRequisite, Training_Details } = formTrainingData;

    // const { Count_id, Training_Id, Required_Training_Id } = formTrainingPrerequisiteData;

    const onChangeTraining = e => setTrainingDetailsData({ ...trainingDetailsData, [e.target.value]: e.target.value })

    const onChangePrerequisite = f => setFormTrainingPrerequisiteData({ ...formTrainingPrerequisiteData, [f.target.value]: f.target.value })

    // const onSubmit = e => {
    //     e.preventDefault();
    //     addNewTraining(formTrainingData, formTrainingPrerequisiteData)
    // }

    const getTrainingData = () => {
        trainingAPI().then(results => {
            setTrainingDetailsData(results.data)
            console.log(results.data)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getTrainingData()
    }, [])

    const onSubmitTrainingForm = (data) => {
        let params = {
            ID: data.id,
            CODE: data.code,
            TRAINING_TITLE: data.trainingTitle,
            INSERT_DATE: data.insertDate,
            STATUS: data.status,
            TRAINING_IMAGE: data.trainingImage,
            TRAINING_DETAILS: data.trainingDetails
        }
    }



    // const [formScheduleData, setFormScheduleData] = useState({
    //     Training_Title: '',
    //     preRequisite: '',
    //     startDate: '',
    //     endDate: '',
    //     startTime: '',
    //     endTime: '',
    //     siteName: '',
    //     room: '',
    //     maxcapacity: '',
    //     address: '',
    //     country: '',
    //     Training_Details: ''
    // })

    // const { trainingForm, handleSubmit , errors } = useForm();

    // const onSubmitTraining = (data) => {
    //     console.log(data)
    // }

    // const { startDate, endDate, startTime, endTime, siteName, room, maxcapacity, address, country } = formScheduleData;




    let { id, code, trainingTitle, insertDate, status, trainingImage, trainingDetails } = this.trainingDetailsData;
    return (

        <div className="training-page">
            <h1>Trainings</h1>
            <div className="border-btm"></div>
            <div className="training-body">
                <div className="trainings-section">
                    <button className="custom-add-button" onClick={() => setAddTrainingModal(true)}>Click here to add new training</button>
                    <Modal isOpen={addTrainingModal}>
                        <div className="add-new-training-modal">
                            <img src={image} alt="" />
                            <div className="add-training-form">
                                <div className="add-training-title">
                                    <h4>Training Information</h4>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <span>Training title</span>
                                        <input type="text" className="form-control" name="Training_Title" onChangeTraining={e => onChangeTraining(e)} />
                                    </div>

                                    <div className="form-group">
                                        <span>Pre - requisite</span>
                                        <select className="form-control" name="" id="" onChangePrerequisite={f => onChangePrerequisite(f)}>
                                            <option value="">Training title 101</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <span>Description</span>
                                        <input type="text" className="form-control" name="Training_Details" onChangeTraining={e => onChangeTraining(e)} />
                                    </div>

                                    <div className="add-training-button">
                                        <button className="btn btn-danger">Cancel</button>
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
                    <div className="list-trainings">
                        <ul>
                            {
                                trainingDetailsData && trainingDetailsData.map((obj, index) =>

                                    <li className="li-active" key={index}>
                                        <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                        <div className="info">
                                            <div>
                                                <label>{obj.Details.TRAINING_TITLE}</label>
                                                <small>{obj.Details.TRAINING_DETAILS}</small>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="information-section">
                    <div className="trainings-body-title">
                        <span>TRAINING TITLE</span>
                        <button onClick={() => { setEditTrainingModal(true) }}>
                            <i className="fas fa-pen"></i>
                        </button>
                        <Modal isOpen={editTrainingModal}>
                            <div className="add-new-training-modal">
                                <img src={image} alt="" />
                                <div className="add-training-form">
                                    <div className="add-training-title">
                                        <h4>Training Information</h4>
                                    </div>

                                    <Formik initialValues={{ id, code, trainingTitle, insertDate, status, trainingImage, trainingDetails }}
                                        onSubmit={data => {
                                            console.log(data);
                                        }}>
                                        {({ values, errors, status, touched , handleChange , handleBlur,handleSubmit }) => {
                                            <form>
                                                <div className={"form-group" + (errors.trainingTitle && touched.trainingTitle ? 'errorInput' : '')}>
                                                    <span>Training title</span>
                                                    <Field type="text" className={"form-control input"} autoComplete="off" name="trainingTitle" placeholder="Training title 101" required />
                                                    <TextField value={values.id} onChange={handleChange} onBlur={handleBlur}/>
                                                </div>

                                                <div className="errorMessages">
                                                    <ErrorMessage name="trainingTitle" component="span" className="tag is-danger is-light" />
                                                </div>

                                                <div className={"form-group" + (errors.preRequisite && touched.preRequisite ? 'errorInput' : '')}>
                                                    <span>Pre - requisite</span>
                                                    <Field type="text" className="form-control" name="preRequisite" placeholder="Training title 101" required />
                                                </div>

                                                <div className="errorMessages">
                                                    <ErrorMessage name="trainingTitle" component="span" className="tag is-danger is-light" />
                                                </div>

                                                <div className={"form-group" + (errors.preRequisite && touched.preRequisite ? 'errorInput' : '')}>
                                                    <span>Description</span>
                                                    <select className="form-control" name="trainingDetails" id="">
                                                        <option value="">Training title 101</option>
                                                    </select>
                                                </div>

                                                <div className="errorMessages">
                                                    <ErrorMessage name="trainingDetails" component="span" className="tag is-danger is-light" />
                                                </div>

                                                <div className="add-training-button">
                                                    <button className="btn btn-danger">Cancel</button>
                                                    <button className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        }}</Formik>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="trainings-body-code">
                        <span>ABCD CODE</span>
                    </div>
                    <div className="trainings-body-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="trainings-body-summary">
                        <h5>Pre-requisite:
                            <span>  Trainings Prerequisite</span>
                        </h5>

                        <div className="trainings-body-desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            </p>
                        </div>
                        <div className="trainings-body-desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus aut animi amet soluta a? Dolore ratione fugit veritatis tenetur voluptatem tempora! Ut voluptatem magnam libero, aperiam velit esse distinctio.
                            </p>
                        </div>
                    </div>
                    <div className="trainings-body-main-schedule">
                        <h5>Schedule</h5>
                        <button className="custom-add-button" onClick={() => setAddScheduleModal(true)}>
                            Click here to add new training
                        </button>
                        <Modal isOpen={addScheduleModal}>
                            <div className="add-new-schedule-modal">
                                <img src={image} alt="" />
                                <div className="add-schedule-form">
                                    <div className="add-schedule-title">
                                        <h4>Setup new Schedule</h4>
                                    </div>
                                    <form action="">
                                        <div className="form-group">
                                            <span>Training title</span>
                                            <input type="text" className="form-control" placeholder="schedule title 101" disabled />
                                        </div>

                                        <div className="form-group">
                                            <span>Pre - requisite</span>
                                            <input type="text" className="form-control" placeholder="schedule title 101" disabled />
                                        </div>

                                        <div className="add-schedule-date-time">
                                            <div className="add-schedule-date">

                                                <div className="form-group date-form">
                                                    <span>Starting Date</span>
                                                    <input type="date" className="form-control" name="startDate" placeholder="2020-09-18" />
                                                </div>

                                                <div className="form-group date-form">
                                                    <span>End Date</span>
                                                    <input type="date" className="form-control" placeholder="2020-09-18" />
                                                </div>
                                            </div>

                                            <div className="add-schedule-time">

                                                <div className="form-group time-form">
                                                    <span>Starting Time</span>
                                                    <input type="time" className="form-control" placeholder="2020-09-18" />
                                                </div>

                                                <div className="form-group time-form">
                                                    <span>End Time</span>
                                                    <input type="time" className="form-control" placeholder="2020-09-18" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span>Instructor</span>
                                            <select className="form-control" name="" id="">
                                                <option value="Training title 101">Juan Dela Cruz, WFM Senior BARC Analyst</option>
                                            </select>
                                        </div>

                                        <div className="add-schedule-location">
                                            <div className="add-schedule-location-title">
                                                <h4>Location</h4>
                                            </div>

                                            <div className="form-group">
                                                <span>Site Name</span>
                                                <select className="form-control" name="" id="">
                                                    <option value="">TP PH, Octagon Centre</option>
                                                </select>
                                            </div>


                                            <div className="form-group">
                                                <span>Room</span>
                                                <input type="text" className="form-control" value="Training room 5" />
                                            </div>

                                            <div className="form-group">
                                                <span>Maximum Capacity</span>
                                                <input type="number" className="form-control" value="12" />
                                            </div>

                                            <div className="form-group">
                                                <span>Address</span>
                                                <textarea type="text" className="form-control" value="San Miguel Ave, San Antonio, Pasig, Metro Manila" />
                                            </div>

                                            <div className="form-group">
                                                <span>Country</span>
                                                <input type="text" className="form-control" value="Training room 5" />
                                            </div>

                                            <div className="form-group">
                                                <span>Description</span>
                                                <textarea type="text" className="form-control" value="Description its up to you" />
                                            </div>

                                        </div>

                                        <div className="add-schedule-button">
                                            <button className="btn btn-danger">Cancel</button>
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal>
                        <div className="schedule">
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                {
                                    trainingDetailsData && trainingDetailsData.map((obj, index2) =>
                                        <li key={index2}>
                                            <div className="schedule-date">
                                                <span>{obj.schedules[0]?.schedule.DATE_START}</span>
                                            </div>
                                            <div className="schedule-time-desc">
                                                <div className="schedule-time">
                                                    <span>{obj.schedules[0]?.schedule.TIME_START}</span>
                                                    <p>{obj.schedules[0]?.schedule.TIME_END}</p>
                                                </div>
                                                <div className="schedule-first-border">

                                                </div>
                                                <div className="schedule-desc">
                                                    <div className="schedule-name-position">
                                                        <span>{obj.schedules[0]?.schedule.INSTRUCTOR},{obj.schedules[0]?.schedule.INSTRUCTOR_TITLE}</span>
                                                    </div>
                                                    <div className="schedule-location">
                                                        <span>{obj.schedules[0]?.location.CAPACITY} at {obj.schedules[0]?.location.SITE}, {obj.schedules[0]?.location.ROOM}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainings;