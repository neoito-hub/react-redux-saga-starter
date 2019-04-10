import {Dashboard} from '../Dashboard/DashboardContainer'
import Login from '../Login/LoginContainer'
import {routes} from '../utilities/routes'
import {PrivateRoute, PublicRoute} from './RouteComponents'
import React from "react"
import { Switch } from 'react-router-dom'

export default class Main extends React.Component{

  componentDidMount(){}

  componentWillMount(){}
  render(){
    return (<Switch>
              <PublicRoute exact path='/' component={Login}/>
              <PublicRoute path={routes.login} component={Login}/>
              <PrivateRoute path={routes.dashboard}  component={Dashboard}/>/>
           </Switch>
          )
  }
}
