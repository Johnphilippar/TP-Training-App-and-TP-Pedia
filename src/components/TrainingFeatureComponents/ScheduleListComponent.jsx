import React from 'react'
import Modal from 'react-modal';
import image from '../../image/tobio.jpg';
Modal.setAppElement('#root');

export default function ScheduleListComponent(props) {
    return (
        <>
            <h5>Schedule</h5>
            <button className="custom-add-button">
                Click here to add new training
                        </button>
            <Modal>
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
                    <li>
                        {props.schedules?.schedules?.map((sch) => {
                            return (
                                <div key={sch?.schedule?.CLASS_CODE}>

                                    <div className="schedule-date">
                                        <span>{sch?.schedule?.DATE_START.substring(0, 10)}</span>
                                    </div>

                                    <div className="schedule-time-desc">
                                        <div className="schedule-time">
                                            <span>{sch?.schedule?.TIME_START.substring(11, 16)}</span>
                                            <p>{sch?.schedule?.TIME_END.substring(11, 16)}</p>
                                        </div>
                                        <div className="schedule-first-border">

                                        </div>
                                        <div className="schedule-desc">
                                            <div className="schedule-name-position">
                                                <span>{sch?.schedule?.INSTRUCTOR}</span>
                                            </div>
                                            <div className="schedule-location">
                                                <span>{sch?.location?.CAPACITY} @ {sch?.location?.SITE}, {sch?.location?.ROOM}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </li>
                </ul>
            </div>
        </>
    )
}
