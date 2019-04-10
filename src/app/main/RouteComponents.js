import {readCookie} from '../utilities/utils';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest}) => {
  const session_id = readCookie("session_id")
  return (
    <Route
      {...rest}
      render={(props) => !!session_id
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
export const PublicRoute = ({component: Component, ...rest}) => {
  const session_id = readCookie("session_id")
  return (
    <Route
      {...rest}
      render={(props) => !session_id
        ? <Component {...props} />
        : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />}
    />
  )
}
