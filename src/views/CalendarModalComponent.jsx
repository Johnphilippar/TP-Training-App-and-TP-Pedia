import React, { Component } from 'react'

export class CalendarModalComponent extends Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal-content">
                    <div><span className="close-btn">&times;</span></div>
                     <span>October 1, 2020</span>

                    <div className="modal-body">
                        <div className="week">
                            <span>S</span>
                            <span>M</span>
                            <span>T</span>
                            <span>W</span>
                            <span>T</span>
                            <span>F</span>
                            <span>S</span>
                        </div>

                         <div className="date">
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                        </div>

                        <span className="time">10:00 AM</span>
                        <div className="div-part-one">
                            <span className="training-part-one">WFM Training 101</span>
                            <span>10/08/2020 - 10/10/2020</span>
                            <span>10:00 PM - 12:00 AM</span>
                            <span>at Octagon Centre, Complete Address..</span>
                        </div>

                        <div className="div-part-two">
                            <span className="training-part-two">WFM Training 101</span>
                            <span>10/08/2020 - 10/10/2020</span>
                            <span>10:00 PM - 12:00 AM</span>
                            <span>at Octagon Centre, Complete Address..</span>
                        </div>

                        <span className="time">10:00 AM</span>
                        <div className="div-part-three">
                            <span className="training-part-three">WFM Training 101</span>
                            <span>10/08/2020 - 10/10/2020</span>
                            <span>10:00 PM - 12:00 AM</span>
                            <span>at Octagon Centre, Complete Address..</span>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default CalendarModalComponent
