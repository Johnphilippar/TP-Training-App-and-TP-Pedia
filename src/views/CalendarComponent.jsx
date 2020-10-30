import React, { useState, useEffect } from 'react';
import './CalendarComponent.scss' ;
import { CalendarModalComponent } from '../components/Calendar/CalendarModalComponent';
import moment from 'moment';
    
function CalendarComponent() {
    const [modalShow, setModalShow] = useState(false);
    const [startMonth, setStartMonth] = useState(moment().format('MMMM YYYY'));
    const [getSelectedDate, setSelectedDate] = useState({});



    const dates = [];
    const getDates = dates => {
        let content = []; 
        let start = moment(startMonth).startOf('month').format('YYYY-MM-DD');
        let end = moment(startMonth).endOf('month').format('YYYY-MM-DD'); 
        let dayAWeek = moment(start).day(); 
        for(let i = 0; i < dayAWeek; i++){
            content.push(<div className="number"></div>);
        } 
        for(let m = moment(start); m.isSameOrBefore(end); m.add(1, 'days')){
            const x = m.format('MMMM DD YYYY');
            content.push( 
                    <div className="number" onClick={()=>{
                        setModalShow(true)
                        setSelectedDate(x)
                     }}>{m.date()}  
                        <ul>
                                <div className="li-sched-blue">
                                    <li className="training" >Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div>

                                <div className="li-sched-green">
                                    <li className="training">Training 101</li>
                                    <li className="time">8:00PM - 10:00PM</li>
                                </div> 
                        </ul> 
                    </div>
            )
        }
        return content;
    }


    return(
        <div className="calendar">
                <div className="month-week">
                    <h1>Calendar</h1>
                    <div className="border-btm"></div>
                    <br/>
                    <div className="m-w"> 
                        <div className="month">
                            <button type="button">
                                <span class="material-icons" onClick={()=>setStartMonth(moment(startMonth).subtract(1, 'month').format('MMMM YYYY'))}>keyboard_arrow_left</span>
                            </button>
                            <span>{startMonth}</span>
                            <button type="button">
                                <span class="material-icons" onClick={() => setStartMonth(moment(startMonth).add(1, 'month').format('MMMM YYYY'))}>keyboard_arrow_right</span>
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
                        {getDates(dates)}
                </div>

       {modalShow && <CalendarModalComponent
       setModalShow = {setModalShow}
       getSelectedDate = {getSelectedDate}
       />}  
         </div>
    )
}

export default CalendarComponent;

                        