import React from 'react';

import './ViewTraningComponent.scss';

function ViewTraningComponent(props) {
    return (
        <div className="ViewTraningComponent">
            <div className="view-training-wrapper">
                <i class="material-icons">clear</i>
                <h1>WFM Training 101 Title</h1>
                <p className="view-training-subtitle">@TPPH - Octagon Center</p>
                <div className="view-traning-datetime">
                    <p><span>Date: </span> 10/02/2020 - 10/02/2020</p>
                    <p><span>Time: </span> 12:00 PM - 12:00 PM</p>
                </div>
                <p className="view-traning-participants">20 Participants</p>
                <ul>
                    <li className="is-selected">
                        <span>October 28, 2020</span>
                    </li>
                    <li>
                        October 29, 2020
                    </li>
                    <li>
                        October 30, 2020
                    </li>
                    <li>
                        October 31, 2020
                    </li>
                </ul>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <th>Position</th>
                        <th>Site</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td> Juan Dela Cruz</td>
                            <td>WFM BARC Analyst</td>
                            <td>TP Octagon</td>
                            <td>
                                <div className="view-traning-actions">
                                    <div className="view-traning-container is-absent">
                                        <div className="view-traning-inner-wrapper present">
                                            <p>Present</p>
                                        </div>
                                        <div className="view-traning-inner-wrapper absent">
                                            <p>Absent</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td> Juan Dela Cruz</td>
                            <td>WFM BARC Analyst</td>
                            <td>TP Octagon</td>
                            <td>
                                <div className="view-traning-actions">
                                    <div className="view-traning-container is-present">
                                        <div className="view-traning-inner-wrapper present">
                                            <p>Present</p>
                                        </div>
                                        <div className="view-traning-inner-wrapper absent">
                                            <p>Absent</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewTraningComponent;