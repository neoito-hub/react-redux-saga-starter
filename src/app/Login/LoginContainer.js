import * as authActions from '../../store/auth/actions';
import Login from './Login';
import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux';

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this)
  }
  componentDidMount() {}
  login(email, password) {
    this.props.RequestLogin({email, password})
    // this.props.dispatch(
    //     authActions.RequestLogin(email, password)
    // )
  }
  render() {
    if(this.props.auth && this.props.auth.isLoggedIn) {
      return (<Redirect to={{pathname: '/dashboard', state: {from: this.props.location}}} />)
    }
    return (
      < Login login={this.login} auth={this.props.auth}/>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {auth: state.auth}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
