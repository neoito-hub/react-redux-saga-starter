import {messages} from '../utilities/messages'
import {routes} from '../utilities/routes'
import {validateEmail} from '../utilities/utils'
import LoginForm from './LoginForm'
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            user: {email: '', password: ''},
            loginButtonState: {
                disabled: "",
                text: "Sign in"
            }
        }
        this.processForm = this.processForm.bind(this)
        this.changeUser = this.changeUser.bind(this)
    }
    componentDidMount(){}
    processForm(event) {
        if(event.which && event.which !== 13){
            return false
        }
        if(this.state.user.email === ""){
            this.setState({
                errors: {
                    summary: messages.login.error_summury_1,
                    email: messages.login.empty
                }
            });
            return false
        }
        if(this.state.user.email  && !validateEmail(this.state.user.email)){
            this.setState({
                errors: {
                    summary: messages.login.error_summury_1,
                    email: messages.login.invalid_email
                }
            });
            return false
        }
        if(this.state.user.password === ""){
            this.setState({
                errors: {
                    summary: messages.login.error_summury_1,
                    password: messages.login.empty
                }
            });
            return false
        }
        this.setState({
            loginButtonState: {
                disabled: "disabled",
                text: <img src="/images/login-loading.gif" alt="" />
            }
        })

        this.props.login(this.state.user.email, this.state.user.password)
        return false
    }
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
            errors: {
                summary: "",
                email: "",
                password: ""
            }
        })
    }
    componentDidUpdate(){
        if(this.props.loggeduser){
            if(this.props.loggeduser.user_id){
                this.props.router.push(routes.dashboard_page)
            }
        }
    }
    componentWillUnmount(){
        // this.props.dispatch(resetLoginError())
    }
    render() {
        let loginPageError
        let loginButton = this.state.loginButtonState
        if(this.state.errors){
            loginPageError = this.state.errors
        }
        if(this.props.auth.error){
            loginPageError = {
                summary: messages.login.error_summury_2
            }
            loginButton = {
                disabled: "",
                text: "Sign in"
            }
        }

        return (<LoginForm
          onClick={this.processForm}
          onChange={this.changeUser}
          onKeyPress={this.processForm}
          errors={loginPageError}
          user={this.state.user}
          loginButton={loginButton} />
        );
    }
}

export default Login;
