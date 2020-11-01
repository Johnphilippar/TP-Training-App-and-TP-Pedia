import React, { Component } from 'react';
import config from '../../../package.json';
import './SidebarComponent.scss' ;
import { Link } from "react-router-dom";
class SidebarComponent extends Component{

    constructor(props){
        super(props);
        this.ChangeRoute =  this.ChangeRoute.bind(this);
    }
    componentDidMount(){
 
    }
    ChangeRoute(){
        this.forceUpdate(); 
    }
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li style={{marginBottom : "32px"}}>
                        <img src="./favicon.ico" alt=""/>
                    </li>
                    <li> 
                        <Link className={((window.location.pathname.split('/').indexOf("trainings") > -1 ||
                        window.location.pathname == "/") ?  'active-li':'')} onClick={this.ChangeRoute}
                         to={config.configuration.IISFolder + "/trainings"}>
                            <div>
                                <span className="material-icons-outlined">model_training</span> 
                            </div>
                            <div>
                                <small>Trainings</small>
                            </div>
                        </Link>
                    </li>  
                    <li> 
                        <Link className={(window.location.pathname.split('/').indexOf("calendar") > -1 ?  'active-li':'')} 
                        onClick={this.ChangeRoute} to={config.configuration.IISFolder + "/calendar"}>
                            <div>
                                <span className="material-icons-outlined">model_training</span> 
                            </div>
                            <div>
                                <small>Calendar</small>
                            </div>
                        </Link>
                    </li>
                    <li> 
                        <Link to={config.configuration.IISFolder + "/"}>
                            <div>
                                <span className="material-icons-outlined">model_training</span> 
                            </div>
                            <div>
                                <small>Attendance</small>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SidebarComponent;