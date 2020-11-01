import React, { useState, useEffect } from 'react';
import './TrainingsComponent.scss';
import image from '../image/tobio.jpg';
import Modal from 'react-modal';
import { getTraining, getTrainingList } from '../API/trainingAPI';
import HeroComponent from '../components/TrainingFeatureComponents/HeroComponent';
import ScheduleListComponent from '../components/TrainingFeatureComponents/ScheduleListComponent';
import config from '../../package.json'
Modal.setAppElement('#root');

export default function Trainings() {

    const [trainingDetailsData, setTrainingDetailsData] = useState([
        {
            Details: {},
            Prerequisite: [],
            schedules: []
        }
    ]);
    const [trainingList, setTrainingList] = useState([]);
    const [arrayIndex, setArrayIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const [formTrainingPrerequisiteData, setFormTrainingPrerequisiteData] = useState([
        {
            Training_Id: '',
            Required_Training_Id: ''
        }
    ])

    const [addTrainingModal, setAddTrainingModal] = useState(false)
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

    const trainingItemClick = (index)=> {
        setArrayIndex(index); 
    };


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
                                            <option value=""></option>
                                            {trainingList.map((list) =>
                                                <option value={list.ID} key={list.ID}>{list.TRAINING_TITLE}</option>
                                            )}

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

                                    <li className={trainingDetailsData[arrayIndex].Details.ID==obj.Details.ID ? "li-active" :""} key={index} onClick={() => trainingItemClick(index)}>
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
