import React, { Component , useState } from 'react';
import './TrainingsComponent.scss';
import image from '../image/tobio.jpg';
import Modal from 'react-modal';

const Trainings = () => {

    const [modalIsOpen , setModalIsOpen] = useState(false)
    return (
        <div className="training-page">
            <h1>Trainings</h1>
            <div className="border-btm"></div>
            <div className="training-body">
                <div className="trainings-section">
                    <button className="custom-add-button" onClick={()=>setModalIsOpen(true)}>Click here to add new training</button>
                    <Modal isOpen={modalIsOpen}>
                        <img src={image} alt=""/>
                        <div>
                            <button onClick={()=>setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                    <div className="list-trainings">
                        <ul>
                            <li className="li-active">
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 101</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://www.e-gain.co.in/wp-content/uploads/2020/02/itil-foundation.jpg" alt="" />
                                <div className="info">
                                    <div>
                                        <label>WFM Training 102</label>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="information-section">
                    <div className="trainings-body-title">
                        <span>TRAINING TITLE</span>
                        <button>
                            <i className="fas fa-pen"></i>
                        </button>
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
                        <button className="custom-add-button">
                            Click here to add new training
                        </button>
                        <div className="schedule">
                            <div className="schedule-date">
                                <span>6 October 2020</span>
                            </div>
                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-first-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>

                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-second-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="schedule">
                            <div className="schedule-date">
                                <span>11 October 2020 - 12 October 2020</span>
                            </div>
                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-first-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>

                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-second-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="schedule">
                            <div className="schedule-date">
                                <span>13 October 2020</span>
                            </div>
                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-first-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>

                            <div className="schedule-time-desc">
                                <div className="schedule-time">
                                    <span>8:30</span>
                                    <p>10:30</p>
                                </div>
                                <div className="schedule-second-border">

                                </div>
                                <div className="schedule-desc">
                                    <div className="schedule-name-position">
                                        <span>Juan Dela Cruz, WFM Senior Barc Analyst</span>
                                    </div>
                                    <div className="schedule-location">
                                        <span>12 Attendees at TP PH Octagon Centre, Training room 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainings;