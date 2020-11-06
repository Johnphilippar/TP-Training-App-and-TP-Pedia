import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import config from '../../../package.json'
import * as apiTraining from '../../API/trainingAPI';

export default function FormEditScheduleComponent(props) {
    const [editSchedData, setEditSchedData] = useState({
        DATE_START: props.schItem.schedule.DATE_START.substring(0, 10),
        DATE_END: props.schItem.schedule.DATE_END.substring(0, 10),
        INSTRUCTOR: props.schItem.schedule.INSTRUCTOR,
        INSTRUCTOR_TITLE: props.schItem.schedule.INSTRUCTOR_TITLE,
        TIME_START: props.schItem.schedule.TIME_START.substring(11, 19),
        TIME_END: props.schItem.schedule.TIME_END.substring(11, 19),
        SITE: props.schItem.location.SITE,
        ROOM: props.schItem.location.ROOM,
        ADDRESS: props.schItem.location.ROOM,
        STATUS: props.schItem.schedule.STATUS,
        DESCRIPTION: props.schItem.location.DESCRIPTION,
        CAPACITY: props.schItem.location.CAPACITY
    })

    const handleEditSched = (data) => {
        let editSchedData = {
            Class_Code: props.schItem.schedule.CLASS_CODE,
            Training_Id: props.trnItem.ID,
            Date_Start: data.DATE_START,
            Date_End: data.DATE_END,
            Instructor: data.INSTRUCTOR,
            Instructor_Title: data.INSTRUCTOR_TITLE,
            Time_Start: data.DATE_START + 'T' + data.TIME_START,
            Time_End: data.DATE_END + 'T' + data.TIME_END,
            Site: data.SITE,
            Room: data.ROOM,
            Address: data.ADDRESS,
            Status: data.STATUS,
            Description: data.DESCRIPTION,
            Capacity: data.CAPACITY
        }
        console.log(editSchedData)
        apiTraining.putSchedule(editSchedData).then(result => {
            alert(`${props.trnItem.TRAINING_TITLE} schedule is updated`);
        }).catch(e => console.log(e.message));
        props.closeEditSched()
    }

    return (
        <>
            {console.log(props)}
            <img src={`${config.configuration.TRAINING_IMAGE_PATH}${props.trnItem.TRAINING_IMAGE}`} alt="" />
            <div className="add-schedule-form">
                <div className="add-schedule-title">
                    <h4>{props.trnItem.TRAINING_TITLE}</h4>
                </div>

                <Formik initialValues={editSchedData}
                    onSubmit={(values) => handleEditSched(values)}
                    validateOnChange={true}
                    validateOnBlur={false}
                    //   validationSchema={ReviewSchema}
                    enableReinitialize={true}
                >
                    {
                        (formProps) => (
                            <Form>

                                <div className="add-schedule-date-time">

                                    <div className="add-schedule-date">
                                        <div className="form-group date-form">
                                            <span>Starting Date</span>
                                            <Field type="date" className="form-control" name="DATE_START" />
                                        </div>
                                        <div className="form-group date-form">
                                            <span>End Date</span>
                                            <Field type="date" className="form-control" name="DATE_END" />
                                        </div>
                                    </div>

                                    <div className="add-schedule-time">
                                        <div className="form-group time-form">
                                            <span>Starting Time</span>
                                            <Field type="time" className="form-control" name="TIME_START" />
                                        </div>
                                        <div className="form-group time-form">
                                            <span>End Time</span>
                                            <Field type="time" className="form-control" name="TIME_END" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span>Instructor</span>
                                        <Field type="text" className="form-control" name="INSTRUCTOR" />
                                    </div>

                                    <div className="form-group">
                                        <span>Instructor Title</span>
                                        <Field type="text" className="form-control" name="INSTRUCTOR_TITLE" />
                                    </div>

                                    <div className="add-schedule-location">
                                        <div className="add-schedule-location-title">
                                            <h4>Location</h4>
                                        </div>

                                        <div className="form-group">
                                            <span>Site Name</span>
                                            <Field as="select" name="SITE" className="form-control">
                                                {props.loc.map((list) =>
                                                    <option key={list.UUID}>{list.NAME}</option>
                                                )}
                                            </Field>
                                        </div>


                                        <div className="form-group">
                                            <span>Room</span>
                                            <Field type="text" className="form-control" name="ROOM" />
                                        </div>

                                        <div className="form-group">
                                            <span>Maximum Capacity</span>
                                            <Field type="number" className="form-control" name="CAPACITY" />
                                        </div>

                                        <div className="form-group">
                                            <span>Address</span>
                                            <Field type="text" className="form-control" name="ADDRESS" />
                                        </div>

                                        <div className="form-group">
                                            <span>Status</span>
                                            <Field as="select" name="STATUS" className="form-control">
                                                <option value="OPEN">OPEN</option>
                                                <option value="ONGOING">ONGOING</option>
                                                <option value="CANCELLED">CANCELLED</option>
                                            </Field>
                                        </div>

                                        <div className="form-group">
                                            <span>Description</span>
                                            <Field type="text" className="form-control" name="DESCRIPTION" />
                                        </div>

                                    </div>

                                </div>


                                <div className="add-schedule-button">
                                    <button className="btn btn-danger" onClick={props.closeEditSched} type="button">Cancel</button>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>

                            </Form>
                        )
                    }

                </Formik>
            </div>
        </>
    )
}
