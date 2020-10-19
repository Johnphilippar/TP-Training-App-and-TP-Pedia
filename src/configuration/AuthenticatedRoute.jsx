import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import * as webConfig from '../configuration/WebConfiguration';
import packagejson from '../../package.json'
class AuthenticatedRoute extends Component{

    render(){
        if(webConfig.isUserLogin()){ 
            return <Route {...this.props}/>
        }else{ 
            return <Redirect to={ packagejson.configuration.IISFolder + "/unauthorize"}/>
        }
    }
}

export default AuthenticatedRoute;