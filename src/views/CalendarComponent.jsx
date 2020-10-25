import React, { Component } from 'react';
import './CalendarComponent.scss' ;
    

class CalendarComponent extends Component{


    render(){
        return(
            <div className="calendar">
                <div className="month-week">
                    <h1>Calendar</h1>
                    <div className="border-btm"></div>
                    <br/>
                    <div className="m-w"> 
                        <div className="month">
                            <button type="button">
                                <span class="material-icons">keyboard_arrow_left</span>
                            </button>
                            <span>October 2020</span>
                            <button type="button">
                                <span class="material-icons">keyboard_arrow_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="week">
                    <span>SUNDAY</span>
                    <span>MONDAY</span>
                    <span>TUESDAY</span>
                    <span>WEDNESDAY</span>
                    <span>THURSDAY</span>
                    <span>FRIDAY</span>
                    <span>SATURDAY</span>
                </div>
                <div className="date">
                        <div className="number"> 1 </div>
                        <div className="number">2
                        
                            <ul>
                                <div className="li-sched-blue">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>

                                <div className="li-sched-green">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>
                                
                            </ul>
                        </div>
                        <div className="number">3
                            <ul>
                                <div className="li-sched-purple">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>

                                <div className="li-sched-orange">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div> 
                            </ul>
                        </div>
                        <div className="number">4</div>
                        <div className="number">5</div>
                        <div className="number">6</div>
                        <div className="number">7</div>
                        <div className="number">8</div>
                        <div className="number">9</div>
                        <div className="number">10</div>
                        <div className="number">11</div>
                        <div className="number">12
                            <ul>
                                <div className="li-sched-green">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>

                                <div className="li-sched-blue">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div> 
                            </ul>
                        </div>
                        <div className="number">13</div>
                        <div className="number">14</div>
                        <div className="number">15</div>
                        <div className="number">16</div>
                        <div className="number">17</div>
                        <div className="number">18</div>
                        <div className="number">19</div>
                        <div className="number">20</div>
                        <div className="number">21
                            <ul>
                                <div className="li-sched-green">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>

                                <div className="li-sched-blue">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div> 
                            </ul>
                        </div>
                        <div className="number">22</div>
                        <div className="number">23</div>
                        <div className="number">24</div>
                        <div className="number">25</div>
                        <div className="number">26</div>
                        <div className="number">27</div>
                        <div className="number">28</div>
                        <div className="number">29</div>
                        <div className="number">30</div>
                        <div className="number">31</div>
                </div>
             </div>
        )
    }
}

export default CalendarComponent;

                        