import React from 'react'
import Modal from 'react-modal';
import image from '../../image/tobio.jpg';
import config from '../../../package.json';
Modal.setAppElement('#root');

export default function HeroComponent(props) {
    return (
        <>
            <div className="trainings-body-title">
                <span>{props.details.Details.TRAINING_TITLE}</span>
                <button onClick={() => { }}>
                    <i className="fas fa-pen"></i>
                </button>
                <Modal>
                    <div className="add-new-training-modal">
                        <img src={`${config.configuration.TRAINING_IMAGE_PATH}${props.details.Details.TRAINING_IMAGE}`} alt="" />
                        <div className="add-training-form">
                            <div className="add-training-title">
                                <h4>Training Information</h4>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}
