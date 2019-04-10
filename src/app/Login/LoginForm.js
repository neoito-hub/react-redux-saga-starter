import {routes} from '../utilities/routes'
import { Card } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

const basicStyles = {
	errorStyle: {
		bottom: 5
	},
	errorSummuryStyle:{
		marginBottom:"0px",
		height:"30px"
	},
	checkbox: {
		fontFamily: 'Open Sans',
		color: 757575
	},
	labelStyle: {
		fontFamily: 'Open Sans',
		color: 757575,
		width: 163,
		lineHeight: 0
	},
	style: {
		fontFamily: 'Open Sans'
	}
}
const LoginForm = ({
  onClick,
  onChange,
  onKeyPress,
  errors,
  user,
  loginButton
}) => (
<MuiThemeProvider>
  <Card className="login-box">
    <div>
        <div className="text-center">
        </div>
        <h1 className="login-title">Sign in</h1>
        <p className="text-danger text-center" style={basicStyles.errorSummuryStyle}>
          {errors ? errors.summary: ''}
        </p>

        <TextField
            floatingLabelText="Email address"
            className="w-100"
            type="email"
            name="email"
            id="email"
            errorText={errors ? errors.email: ''}
            errorStyle={basicStyles.errorStyle}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={user ? user.email: ''} />




        <TextField
          floatingLabelText="Password"
          className="w-100"
          type="password"
          name="password"
          id="password"
          errorText={errors ?  errors.password: null}
          errorStyle={basicStyles.errorStyle}
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={user ? user.password: ''} />
        <div className="input-addon-icon">
          <span id="basic-addon2"><i className="icon-uniF127" aria-hidden="true"></i></span>
        </div>
    

      <div className="row justify-content-between md-form">
        <div className="col-auto">
        </div>
      </div>
      <div className="md-form mt-50">
        <button disabled={loginButton.disabled} type="submit" className="btn btn-custom btn-lg btn-block" onClick={onClick}>
          {loginButton.text}
        </button>
      </div>
    </div>
  </Card>
</MuiThemeProvider>
);

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
   onKeyPress: PropTypes.func.isRequired,
   errors: PropTypes.object.isRequired,
   user: PropTypes.object.isRequired,
  loginButton: PropTypes.object.isRequired
};

export default LoginForm;
