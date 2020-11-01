import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarComponent from '../components/shared/SidebarComponent';
import CalendarComponent from '../views/CalendarComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import config from '../../package.json';
import TrainingsComponent from '../views/TrainingsComponent';
import './RouterComponent.scss'
class RouterComponent extends Component{

 
    render(){
        return(
            <div>
                <Router>
                    <>
                        <SidebarComponent/>
                        <div className="main">
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/"} exact component={TrainingsComponent} />
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/trainings"}  component={TrainingsComponent} />
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/calendar/"}  component={CalendarComponent} />
                        </div>
                    </>
                </Router>
            </div>
        );
    }
}

export default RouterComponent;