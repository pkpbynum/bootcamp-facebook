import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Nice to meet you!</Title>
        <LineInput placeholder="Email" />
        <LineInput placeholder="Password" />
        <SubmitButton>Get Started</SubmitButton>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default SignUp
