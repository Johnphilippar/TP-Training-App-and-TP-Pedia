import React, { Component } from 'react';
import './CalendarComponent.scss'

class CalendarComponent extends Component{


    render(){
        return(
            <div className="calendar">
                <div className="month-week">
                    <h1>Calendar</h1>
                    <div className="border-btm"></div>
                    <div className="m-w">
                        <span id="schedule">Schedules Calendar</span>
                        <span id="m-y">October 2020</span>
                    </div>
                </div>
                <div className="week">
                    <span>Sunday</span>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                </div>
                <div class="date">
                        <div className="number">1</div>
                        <div className="number">2</div>
                        <div className="number">3</div>
                        <div className="number">4</div>
                        <div className="number">5</div>
                        <div className="number">6</div>
                        <div className="number">7</div>
                        <div className="number">8</div>
                        <div className="number">9</div>
                        <div className="number">10</div>
                        <div className="number">11</div>
                        <div className="number">12</div>
                        <div className="number">13</div>
                        <div className="number">14</div>
                        <div className="number">15</div>
                        <div className="number">16</div>
                        <div className="number">17</div>
                        <div className="number">18</div>
                        <div className="number">19</div>
                        <div className="number">20</div>
                        <div className="number">21</div>
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