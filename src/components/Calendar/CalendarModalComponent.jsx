import React, { Component } from 'react'
import './CalendarModalComponent.scss'

export class CalendarModalComponent extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className="modal-bg">
                <div className="modal-content">
                    <div><span className="close-btn" onClick={()=>this.props.setModalShow(false)}>&times;</span></div>
                     <span className="month-date">{this.props.getSelectedDate}</span>

                    <div className="modal-body">

                        <div className="week-date">
                        
                            <div className="leftButton">

                                <button type="button" className="button-date-left">
                                    <span className="material-icons">keyboard_arrow_left</span>
                                </button>

                            </div>

                            <div className="midContent">

                                <div className="weekModal">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>T</span>
                                    <span>W</span>
                                    <span>T</span>
                                    <span>F</span>
                                    <span>S</span>
                                </div>

                                <div className="dateModal">  
                                        <span>9</span>
                                        <span>10</span>
                                        <span>11</span>
                                        <span>12</span>
                                        <span>13</span>
                                        <span>14</span>
                                        <span>15</span>
                                        <span>16</span>
                                        <span>17</span>
                                        <span>11</span>
                                        <span>12</span>
                                        <span>13</span>
                                        <span>14</span>
                                        <span>15</span>
                                </div>

                            </div>

                            <div className="rightButton">
                            
                                <button type="button" className="button-date-right">
                                    <span className="material-icons">keyboard_arrow_right</span>
                                </button>   

                            </div>
                        </div>




                        <span className="time">10:00 AM</span>
                        <div className="div-part-one">
                            <span className="training-part-one">WFM Training 101</span>
                            <span className="training-date-one">{this.props.getSelectedDate}</span>
                            <span className="training-time-one">10:00 PM - 12:00 AM</span>
                            <span className="training-address-one">at Octagon Centre, Complete Address..</span>
                        </div>

                        <div className="div-part-two">
                            <span className="training-part-two">WFM Training 101</span>
                            <span>{this.props.getSelectedDate}</span>
                            <span>10:00 PM - 12:00 AM</span>
                            <span>at Octagon Centre, Complete Address..</span>
                        </div>

                        <span className="time">10:00 AM</span>
                        <div className="div-part-three">
                            <span className="training-part-three">WFM Training 101</span>
                            <span>{this.props.getSelectedDate}</span>
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
