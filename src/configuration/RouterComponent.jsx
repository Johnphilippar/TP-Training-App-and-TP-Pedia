import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarComponent from '../components/shared/SidebarComponent';
import CalendarComponent from '../views/CalendarComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import config from '../../package.json';
import TrainingsComponent from '../views/TrainingsComponent';
import './RouterComponent.scss'
import AttendanceComponent from '../views/AttendanceComponent';
import TPPediaComponent from '../views/TPPediaComponent';
import TPPediaSearchPage from '../components/TPPediaComponents/TPPediaSearchPage';
import TPPediaData from '../components/TPPediaComponents/TPPediaData';
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
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/attendance"}  component={AttendanceComponent} />
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/tppedia"}  component={TPPediaComponent} />
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/tppediasearchpage"}  component={TPPediaSearchPage} />
                            <AuthenticatedRoute path={config.configuration.IISFolder + "/tppediadata"}  component={TPPediaData} />
                        </div>
                    </>
                </Router>
            </div>
        );
    }
}

export default RouterComponent;