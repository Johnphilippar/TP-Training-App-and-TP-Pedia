import React, { Component, useState , useEffect } from 'react';
import './TrainingsComponent.scss';
import image from '../image/tobio.jpg';
import Modal from 'react-modal';

const Trainings = () => {

    useEffect(() => {
        const getTrainingData = async () => {
            const trainingDataResponse = await fetch('http://208.109.10.234:81/Training-scheduling/api/Trainings');
            const jsonResponse = trainingDataResponse.json();
            console.log(jsonResponse);
        }
        getTrainingData();
    } , [])

    const [addTrainingModal, setAddTrainingModal] = useState(false)
    const [addScheduleModal, setAddScheduleModal] = useState(false)
    const [editTrainingModal, setEditTrainingModal] = useState(false)

    const [formTrainingData, setFormTrainingData] = useState({
        Training_Title: '',
        preRequisite: '',
        Training_Details: ''
    })

    const [formScheduleData, setFormScheduleData] = useState({
        Training_Title: '',
        preRequisite: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        siteName: '',
        room: '',
        maxcapacity: '',
        address: '',
        country: '',
        Training_Details: ''
    })

    const { Training_Title, preRequisite, Training_Details } = formTrainingData;

    const { startDate, endDate, startTime, endTime, siteName, room, maxcapacity, address, country} = formScheduleData;

    const onChangeTraining = e => setFormTrainingData({ ...formTrainingData, [e.target.value]: e.target.value })
    const onChangeSchedule = f => setFormScheduleData({ ...formScheduleData, [f.target.value]: f.target.value })



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
                                <form action="">
                                    <div className="form-group">
                                        <span>Training title</span>
                                        <input type="text" className="form-control" name="Training_Title" placeholder="Training title 101" onChangeTraining={e => onChangeTraining(e)} />
                                    </div>

                                    <div className="form-group">
                                        <span>Pre - requisite</span>
                                        <select className="form-control" name="" id="">
                                            <option value="">Training title 101</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <span>Description</span>
                                        <input type="text" className="form-control" name="Training_Details" placeholder="Training title 101" onChangeTraining={e => onChangeTraining(e)} />
                                    </div>

                                    <div className="add-training-button">
                                        <button className="btn btn-danger">Cancel</button>
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
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
                                    <form action="">
                                        <div className="form-group">
                                            <span>Training title</span>
                                            <input type="text" className="form-control" placeholder="Training title 101" required />
                                        </div>

                                        <div className="form-group">
                                            <span>Pre - requisite</span>
                                            <input type="text" className="form-control" placeholder="Training title 101" required />
                                        </div>

                                        <div className="form-group">
                                            <span>Description</span>
                                            <select className="form-control" name="" id="">
                                                <option value="">Training title 101</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <span>Training title</span>
                                            <input type="text" className="form-control" placeholder="Training title 101" />
                                        </div>

                                        <div className="add-training-button">
                                            <button className="btn btn-danger">Cancel</button>
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
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
                                                    <input type="date" className="form-control" name="startDate" placeholder="2020-09-18" onChangeSchedule={f => onChangeSchedule(f)} />
                                                </div>

                                                <div className="form-group date-form">
                                                    <span>End Date</span>
                                                    <input type="date" className="form-control" placeholder="2020-09-18" onChangeSchedule={f => onChangeSchedule(f)} />
                                                </div>
                                            </div>

                                            <div className="add-schedule-time">

                                                <div className="form-group time-form">
                                                    <span>Starting Time</span>
                                                    <input type="time" className="form-control" placeholder="2020-09-18" onChangeSchedule={f => onChangeSchedule(f)} />
                                                </div>

                                                <div className="form-group time-form">
                                                    <span>End Time</span>
                                                    <input type="time" className="form-control" placeholder="2020-09-18" onChangeSchedule={f => onChangeSchedule(f)} />
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
                                                <input type="text" className="form-control" value="Training room 5" onChangeSchedule={f => onChangeSchedule(f)} />
                                            </div>

                                            <div className="form-group">
                                                <span>Maximum Capacity</span>
                                                <input type="number" className="form-control" value="12" onChangeSchedule={f => onChangeSchedule(f)} />
                                            </div>

                                            <div className="form-group">
                                                <span>Address</span>
                                                <textarea type="text" className="form-control" value="San Miguel Ave, San Antonio, Pasig, Metro Manila" onChangeSchedule={f => onChangeSchedule(f)} />
                                            </div>

                                            <div className="form-group">
                                                <span>Country</span>
                                                <input type="text" className="form-control" value="Training room 5" onChangeSchedule={f => onChangeSchedule(f)} />
                                            </div>

                                            <div className="form-group">
                                                <span>Description</span>
                                                <textarea type="text" className="form-control" value="Description its up to you" onChangeSchedule={f => onChangeSchedule(f)} />
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