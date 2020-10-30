import React, { useState, useEffect } from 'react';
import './CalendarComponent.scss' ;
import { CalendarModalComponent } from '../components/Calendar/CalendarModalComponent';
import Axios from 'axios'
import moment from 'moment';
import config from '../../package.json';
import { get } from '../../node_modules/react-hook-form';
    
function CalendarComponent() {
    const [modalShow, setModalShow] = useState(false);
    const [startMonth, setStartMonth] = useState(moment().format('MMMM YYYY'));
    const [getSelectedDate, setSelectedDate] = useState(moment("2020-10-29").format('MMMM DD, YYYY'));
    const [calendarDate, setCalendarDate] = useState([]);

    const getCalendarDate = (yearMonth) =>{ 
        Axios.get(config.configuration.APITrainings + "/Calendar/"+yearMonth+"-10").then(result => { 
            setCalendarDate(result.data);

        }).catch(e => {
            console.log(e);
        }); 
    }
    

    useEffect(()=>{
        getCalendarDate(startMonth);
    },[])

    
     
    const getScheduledTraining = (day) => { 
        let scheduleConten = [];
        if(calendarDate){
            if(calendarDate[day]){
                let obj = JSON.parse(JSON.stringify(calendarDate[day])).Schedules; 
                for(let sc=0; sc<obj.length; sc++){
                    scheduleConten.push(
                        <div className="li-sched-green">
                            <li className="training">{obj[sc].TRAINING_TITLE}</li>
                            <li className="time">{moment(obj[sc].TIME_START).format("h:mm a") + " - " + moment(obj[sc].TIME_END).format("h:mm a")}</li>
                        </div> 
                    );
                }
            }
        }
        return scheduleConten;
    }

    const getDayContainerItem  = (cdate) => {
        let dateObject = JSON.parse(JSON.stringify(cdate));
        let day = moment(dateObject.date).format("DD");
        let result = [];
        if(day == "01"){

            let start = moment(dateObject.date).format('YYYY-MM-DD');
            let dayAWeek = moment(start).day();  
            for(let i = 0; i < dayAWeek; i++){
                result.push(<div className="number"></div>);
            } 
        }

         result.push(<div className="number" onClick={()=>{
                        setModalShow(true)
                        setSelectedDate(moment(dateObject.date).format('MMMM DD, YYYY'))
                    }}>{day}  
                        <ul>
                                {
                                   getScheduledTraining(parseInt(day) - 1)  
                                }
                        </ul> 
                    </div>)
        return result;
    }

    
    const moveToNextMonth = () => {
        let newSelectedYearMonth  = moment(startMonth).add(1, 'month').format('MMMM YYYY');
        setStartMonth(newSelectedYearMonth);
        getCalendarDate(moment(newSelectedYearMonth).format("YYYY-MM"));   
    }

    const moveToPreviousMonth = () => {
        let newSelectedYearMonth  = moment(startMonth).subtract(1, 'month').format('MMMM YYYY');
        setStartMonth(newSelectedYearMonth);
        getCalendarDate(moment(newSelectedYearMonth).format("YYYY-MM"));  
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
                                <span class="material-icons" onClick={moveToPreviousMonth}>keyboard_arrow_left</span>
                            </button>
                            <span>{startMonth}</span>
                            <button type="button">
                                <span class="material-icons" onClick={moveToNextMonth}>keyboard_arrow_right</span>
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
                        {
                            calendarDate.map(
                                cdate => getDayContainerItem(cdate)
                            ) 
                        }
                </div>

                {modalShow && <CalendarModalComponent  setModalShow = {setModalShow} getSelectedDate = {getSelectedDate} />  }
         </div>
    )
}

 
export default CalendarComponent;

                        