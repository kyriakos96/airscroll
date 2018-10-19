import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Dashboard = ({match}) => (

    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
            <Route path={`${match.url}/default`} component={asyncComponent(() => import('./routes/Default'))}/>
        </Switch>
    </div>
);

export default Dashboard;