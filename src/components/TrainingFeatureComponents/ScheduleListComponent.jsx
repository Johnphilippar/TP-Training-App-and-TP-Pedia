import React, { useState } from 'react'
import Modal from 'react-modal';
import FormEditScheduleComponent from '../training/FormEditScheduleComponent'
import FormNewScheduleComponent from '../training/FormNewScheduleComponent';
Modal.setAppElement('#root');

export default function ScheduleListComponent(props) {
    const [editSchedModal, setEditSchedModal] = useState(false)
    const [schedIndex, setSchedIndex] = useState(0)

    const closeEditModal = () => {
        setEditSchedModal(false)
    }
    const clickEdit = (index) => {
        setSchedIndex(index)
        setEditSchedModal(true)
    }

    const [addSchedModal, setAddSchedModal] = useState(false)

    const openAddSched = () => {
        setAddSchedModal(true)
    }

    const closeAddSched = () => {
        setAddSchedModal(false)
    }

    return (
        <>
            <h5>Schedule</h5>
            <button className="custom-add-button" onClick={openAddSched}>
                Click here to add new training
            </button>


            <Modal isOpen={addSchedModal}>
                <div className="add-new-schedule-modal">
                    <FormNewScheduleComponent closeMe={closeAddSched} trnItem={props.sch.Details} loc={props.loc} />
                </div>
            </Modal>

            <div className="schedule">
                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {props.sch?.schedules?.map((item, isch) => {
                        return (
                            <li key={isch}>
                                <div className="list-container">
                                    <div className="schedule-date">
                                        <span>{item?.schedule?.DATE_START.substring(0, 10)}</span>
                                    </div>

                                    <div className="schedule-time-desc">
                                        <div className="schedule-time">
                                            <span>{item?.schedule?.TIME_START.substring(11, 16)}</span>
                                            <p>{item?.schedule?.TIME_END.substring(11, 16)}</p>
                                        </div>
                                        <div className="schedule-first-border">

                                        </div>
                                        <div className="schedule-desc">
                                            <div className="schedule-name-position">
                                                <span>{item?.schedule?.INSTRUCTOR}</span>
                                            </div>
                                            <div className="schedule-location">
                                                <span>{item?.location?.CAPACITY} @ {item?.location?.SITE}, {item?.location?.ROOM}</span>
                                            </div>
                                        </div>
                                        <button onClick={() => clickEdit(isch)}>
                                            <i className="fas fa-pen"></i>
                                        </button>
                                    </div>

                                </div>
                            </li>
                        )
                    })}
                </ul>

                <Modal isOpen={editSchedModal}>
                    <div className="add-new-schedule-modal">
                        <FormEditScheduleComponent closeEditSched={closeEditModal} schItem={props.sch.schedules[schedIndex]} trnItem={props.sch.Details} loc={props.loc} />
                    </div>
                </Modal>
            </div>
        </>
    )
}
