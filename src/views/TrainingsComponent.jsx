import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import './TrainingsComponent.scss';
import image from '../image/tobio.jpg';
import Modal from 'react-modal';
import { getTraining, getTrainingList, postTraining } from '../API/trainingAPI';
import HeroComponent from '../components/TrainingFeatureComponents/HeroComponent';
import ScheduleListComponent from '../components/TrainingFeatureComponents/ScheduleListComponent';
import config from '../../package.json'
import { v4 as uuidv4, v4 } from 'uuid';
Modal.setAppElement('#root');

export default function Trainings() {

    const [trainingDetailsData, setTrainingDetailsData] = useState([
        {
            Details: {},
            Prerequisite: [],
            schedules: []
        }
    ]);
    const [trainingFormData, setTrainingFormData] = useState([
        {
            formTrainingTitle: '',
            formTrainingDesc: '',
            formTrainingImg: '',
            formTrainingPrereq: ''
        }
    ])
    const [trainingList, setTrainingList] = useState([]);
    const [arrayIndex, setArrayIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const [formTrainingPrerequisiteData, setFormTrainingPrerequisiteData] = useState([
        {
            Training_Id: '',
            Required_Training_Id: ''
        }
    ])

    const [addScheduleModal, setAddScheduleModal] = useState(false)
    // const [editTrainingModal, setEditTrainingModal] = useState(false)

    const onChangeTraining = e => setTrainingDetailsData({ ...trainingDetailsData, [e.target.value]: e.target.value })

    const onChangePrerequisite = f => setFormTrainingPrerequisiteData({ ...formTrainingPrerequisiteData, [f.target.value]: f.target.value })

    const getTrainingData = () => {
        getTraining().then(results => {
            setTrainingDetailsData(results.data)
            console.log(results.data)
        }).catch(e => {
            console.log(e)
        })
        getTrainingList().then(result => {
            setTrainingList(result.data)
        }).catch(e => {
            console.log(e)
        })
        setLoading(false)
    }

    useEffect(() => {
        getTrainingData()
    }, [])

    const trainingItemClick = (index) => {
        setArrayIndex(index);
    };

    const [addTrainingModal, setAddTrainingModal] = useState(false)
    const [newTrainingTitle, setNewTrainingTitle] = useState('');
    const [newTrainingPrereq, setNewTrainingPrereq] = useState('');
    const [newTrainingDesc, setNewTrainingDesc] = useState('');
    const [newTrainingImg, setNewTrainingImg] = useState('');

    const handleSubmit = (e) => {
        // let addTrainingData = {
        //     Training_Title: newTrainingTitle,
        //     Training_Details: newTrainingDesc,
        //     formFile: newTrainingImg.replace(/.*[\/\\]/, ''),
        //     PrerequisiteID: newTrainingPrereq
        // }

        const fd = new FormData();
        fd.append("Training_Title", newTrainingTitle);
        fd.append("Training_Details", newTrainingDesc);
        fd.append("formFile", newTrainingImg);
        fd.append("PrerequisiteID", uuidv4());

        for (var pair of fd.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }



        postTraining(fd).then(result => {
            // alert(`${newTrainingTitle} is submitted`);

        }).catch(e => console.log(e.message))
    }

    const closeModal = () => {
        setAddTrainingModal(false);
        setNewTrainingTitle('');
        setNewTrainingPrereq('');
        setNewTrainingDesc('');
        setNewTrainingImg('');
    }


    if (loading) {
        return null
    }
    const { Details, Prerequisite, schedule } = trainingDetailsData[arrayIndex]
    return (
        <div className="training-page">
            <h1>Trainings</h1>
            <div className="border-btm"></div>
            <div className="training-body">
                <div className="trainings-section">
                    <button className="custom-add-button" onClick={() => setAddTrainingModal(true)}>Click here to add new training</button>
                    <Modal isOpen={addTrainingModal}>

                        <Formik initialValues={{ trainingFormData }}
                            onSubmit={handleSubmit}>
                            <Form>
                                <div>
                                    <Field type="text" name="formTrainingTitle" value={newTrainingTitle} onChange={(e) => setNewTrainingTitle(e.target.value)} />
                                    <label>Training Title</label>
                                </div>

                                <div>
                                    <select onChange={(e) => setNewTrainingPrereq(e.target.value)}>
                                        <option value=""></option>
                                        {trainingList.map((list) =>
                                            <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                        )}
                                    </select>
                                    <label>Training Prerequisite</label>
                                </div>

                                <div>
                                    <Field type="file" name="formTrainingImg" value={newTrainingImg} onChange={(e) => setNewTrainingImg(e.target.value)} />
                                    <label>Training Image</label>
                                </div>

                                <div>
                                    <Field type="text" name="formTrainingDesc" value={newTrainingDesc} onChange={(e) => setNewTrainingDesc(e.target.value)} />
                                    <label>Training Description</label>
                                </div>
                                <button type="submit">
                                    <p>SUBMIT</p>
                                </button>
                                <button onClick={closeModal}>
                                    <p>CLOSE</p>
                                </button>
                            </Form>

                        </Formik>



                        {/* <div className="add-new-training-modal">
                            <img src={image} alt="" />
                            <div className="add-training-form">
                                <div className="add-training-title">
                                    <h4>Training Information</h4>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <span>Training title</span>
                                        <input type="text" className="form-control" name="Training_Title" value={newTrainingTitle} onChange={(e) => setNewTrainingTitle(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <span>Pre - requisite</span>
                                        <select className="form-control" name="" id="" onChange={(e) => setNewTrainingPrereq(e.target.value)}>
                                            <option value=""></option>
                                            {trainingList.map((list) =>
                                                <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                            )}

                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <span>Training Image</span>
                                        <input type="file" className="form-control" name="Training_Details" onChange={(e) => setNewTrainingImg(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <span>Description</span>
                                        <input type="text" className="form-control" name="Training_Details" value={newTrainingDesc} onChange={(e) => setNewTrainingDesc(e.target.value)} />
                                    </div>

                                    <div className="add-training-button">
                                        <button className="btn btn-danger" onClick={closeModal}>Cancel</button>
                                        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </Modal>

                    <div className="list-trainings">
                        <ul>
                            {
                                trainingDetailsData && trainingDetailsData.map((obj, index) =>

                                    <li className={trainingDetailsData[arrayIndex].Details.ID == obj.Details.ID ? "li-active" : ""} key={index} onClick={() => trainingItemClick(index)}>
                                        <img src={config.configuration.TRAINING_IMAGE_PATH + obj.Details.TRAINING_IMAGE} alt="" />
                                        <div className="info">
                                            <div>
                                                <label>{obj.Details.TRAINING_TITLE}</label>
                                                <small>obj.Details.TRAINING_DETAILS</small>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="information-section">

                    <HeroComponent details={trainingDetailsData[arrayIndex]} />

                    <div className="trainings-body-main-schedule">
                        <ScheduleListComponent schedules={trainingDetailsData[arrayIndex]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
