import React from 'react';

import TraningCardComponent from '../components/Attendance/TraningCardComponent'
import ViewTraningComponent from '../components/Attendance/ViewTraningComponent';
import './AttendanceComponent.scss';

function AttendanceComponent(props) {
    return (
        <div className="AttendanceComponent">
            <ViewTraningComponent />
            <div className="title-section"> 
                <h1>
                    Attendance
                    <div className="border-btm"></div>
                </h1>
                <div className="filter-wrapper">
                    <div className="from-control">
                        <label htmlFor="from">From:</label> 
                        <input type="date" className="form-control" name="" id=""/>
                    </div>
                    <div className="from-control">
                        <label htmlFor="to">To:</label>
                        <input type="date" name="to" className="form-control" name="" id=""/>
                    </div>
                </div>
            </div>
            <div className="list-section"> 
                <div className="list-wrapper">
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                    <div className="list-item">
                        <TraningCardComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttendanceComponent;