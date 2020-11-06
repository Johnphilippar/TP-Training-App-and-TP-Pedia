import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import config from '../../../package.json';
import FormEditTrainingComponent from '../training/FormEditTrainingComponent';
import ScheduleListComponent from './ScheduleListComponent'
import * as apiTraining from '../../API/trainingAPI';
Modal.setAppElement('#root');

export default function HeroComponent(props) {
    const [editTrainingModal, setEditTrainingModal] = useState(false);
    const closeEditModal = () => {
        setEditTrainingModal(false);
    }
    const [locationList, setLocationList] = useState([])

    const getLocationList = () => {
        apiTraining.getLocations().then(result => {
            setLocationList(result.data)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getLocationList()
    }, [])

    return (
        <>
            <div className="trainings-body-title">
                <span>{props.details.Details.TRAINING_TITLE}</span>
                <button onClick={() => setEditTrainingModal(true)}>
                    <i className="fas fa-pen"></i>
                </button>
                <Modal isOpen={editTrainingModal}>
                    <FormEditTrainingComponent trn={props.details} closeModal={closeEditModal} />
                </Modal>
            </div>
            <div className="trainings-body-code">
                <span>{props.details?.Details.CODE}</span>
            </div>
            <div className="trainings-body-image">
                <img src={`${config.configuration.TRAINING_IMAGE_PATH}${props.details.Details.TRAINING_IMAGE}`} alt="" />
            </div>
            <div className="trainings-body-summary">
                <h5>Pre-requisite:
                    {props.details.Prerequisite.map((item, i) => <span key={i}>{item.TRAINING_TITLE}</span>)}
                </h5>

                <div className="trainings-body-desc">
                    <p>{props.details?.Details.TRAINING_DETAILS}</p>
                </div>
            </div>

            <div className="trainings-body-main-schedule">
                <ScheduleListComponent sch={props.details} loc={locationList} />
            </div>
        </>
    )
}
