import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "../LoginForm";
import Register from "../Register";
import RegisterInfo from "../RegisterInfo";
import TakePhoto from "../TakePhoto";
import TakeRegisterPhoto from "../TakeRegisterPhoto";
import VerifyEmail from "../VerifyEmail";
import UserHome from "../User/UserHomePage";
import Result from "../ElectionResult/ElectionResult";
import CandidateDetail from "../Candidate/CandidateDetail";
import Logout from "../Logout/Logout";
import MainHome from '../MainHome';

const Routes = (props) => {
    let routes = null;
    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route exact path="/Welcome" component={UserHome} />
                <Route exact path="/Result" component={Result} />
                <Route exact path="/CandidateDetail" component={CandidateDetail} />
                <Route exact path="/Logout" component={Logout} />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/MainHome" component={MainHome}/>
                <Route path="/Login" component={LoginForm} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/RegisterInfo" component={RegisterInfo} />
                <Route exact path="/TakePhoto" component={TakePhoto} />
                <Route exact path="/verifyemail" component={VerifyEmail} />
                <Route exact path="/takeregisterphoto" component={TakeRegisterPhoto} />
            </Switch>
        );
    }
    return routes;
};

//Export The Main Component
export default Routes;
