import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import config from '../../../package.json';
import * as apiTraining from '../../API/trainingAPI';

export default function FormNewScheduleComponent(props) {
    const [addSchedData, setAddSchedData] = useState({
        DATE_START: '2020-01-01',
        DATE_END: '2020-01-02',
        INSTRUCTOR: '',
        INSTRUCTOR_TITLE: '',
        TIME_START: '21:00:00',
        TIME_END: '06:00:00',
        SITE: '',
        ROOM: '',
        ADDRESS: '',
        DESCRIPTION: '',
        CAPACITY: 0
    })

    const handleNewSched = (data) => {
        let newSchedData = {
            TRAINING_ID: props.trnItem.ID,
            DATE_START: data.DATE_START,
            DATE_END: data.DATE_END,
            INSTRUCTOR: data.INSTRUCTOR,
            INSTRUCTOR_TITLE: data.INSTRUCTOR_TITLE,
            INSERTED_BY: 'developer',
            TIME_START: data.DATE_START + 'T' + data.TIME_START,
            TIME_END: data.DATE_END + 'T' + data.TIME_END,
            SITE: data.SITE,
            ROOM: data.ROOM,
            ADDRESS: data.ADDRESS,
            DESCRIPTION: data.DESCRIPTION,
            CAPACITY: data.CAPACITY
        }
        apiTraining.postSchedule(newSchedData).then(result => {
            alert(`Added schedule for ${props.trnItem.TRAINING_TITLE}`);
        }).catch(e => console.log(e.message));
    }

    return (
        <>
            {console.log(props)}
            <img src={`${config.configuration.TRAINING_IMAGE_PATH}${props.trnItem.TRAINING_IMAGE}`} alt="" />
            <div className="add-schedule-form">
                <div className="add-schedule-title">
                    <h4>{props.trnItem.TRAINING_TITLE}</h4>
                </div>

                <Formik initialValues={addSchedData}
                    onSubmit={(values) => handleNewSched(values)}
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
                                                <option value="">-- Select Site --</option>
                                                {props.loc.map((list) => <option key={list.UUID}>{list.NAME}</option>)}
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
                                            <span>Description</span>
                                            <Field type="text" className="form-control" name="DESCRIPTION" />
                                        </div>

                                    </div>

                                </div>


                                <div className="add-schedule-button">
                                    <button className="btn btn-danger" onClick={props.closeMe} type="button">Cancel</button>
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
