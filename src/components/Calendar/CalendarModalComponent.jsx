import React, { Component } from 'react'
import './CalendarModalComponent.scss'

export class CalendarModalComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            dateItemLocation : 0
        }

        this.onTriggerNext = this.onTriggerNext.bind(this);
        this.onTriggerPrev = this.onTriggerPrev.bind(this);
    }

    getDateItems(){
        let result = []; 
        for(let x=1;x<=31;x++){
            result.push(<span style={{left: ((57.4* (x - 1))+"px")}}>
                <small className={(x==3 ? "active-day":"") }>{x}</small>
            </span>);
        }
        return result;
    }

    onTriggerNext(){ 
        if(this.state.dateItemLocation != 4){
            this.setState({dateItemLocation : (this.state.dateItemLocation + 1)});
        }
    }
    onTriggerPrev(){
        if(this.state.dateItemLocation != 0){ 
            this.setState({dateItemLocation : (this.state.dateItemLocation - 1)});
        }
     
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

                                <button type="button" className="button-date-left" onClick={this.onTriggerPrev}>
                                    <span className="material-icons">keyboard_arrow_left</span>
                                </button>

                            </div>

                            <div className="midContent">

                                <div className="weekModal">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>T</span>
                                    <span>W</span>
                                    <span>TH</span>
                                    <span>F</span>
                                    <span>S</span>
                                </div>

                                <div className="dateModal">  
                                        {/* <span style={{left:"0px"}}>9</span>
                                        <span style={{left:"61.7px"}}>10</span>
                                        <span style={{left:"123.4px"}}>11</span>
                                        <span style={{left:"185.1px"}}>12</span>
                                        <span style={{left:"123.4px"}}>13</span>
                                        <span> style={{left:"123.4px"}}14</span>
                                        <span style={{left:"123.4px"}}>15</span>  */}
                                        <div className="item-container" style={{marginLeft: "-"+(this.state.dateItemLocation * 402) +"px" }}>
                                            {
                                                this.getDateItems()
                                            }
                                        </div>
                                </div>

                            </div>

                            <div className="rightButton">
                            
                                <button type="button" className="button-date-right" onClick={this.onTriggerNext}>
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
