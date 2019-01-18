import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Welcome Back!</Title>
        <LineInput placeholder="Email" />
        <LineInput placeholder="Password" />
        <SubmitButton>Login</SubmitButton>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Sign Up
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default Login
