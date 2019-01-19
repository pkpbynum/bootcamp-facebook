import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import LOGIN_USER from './queries'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  setRedirect = data => {
    if (data.user.token) {
      this.setState({ redirect: true })
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/user" />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Title>Welcome Back!</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange('email', e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange('password', e)}
          type="password"
        />
        <Mutation
          mutation={LOGIN_USER}
          variables={{
            email: this.state.email,
            password: this.state.password
          }}
        >
          {(query, { data }) => (
            <SubmitButton
              onClick={() => {
                this.setRedirect(data)
              }}
            >
              Login
            </SubmitButton>
          )}
        </Mutation>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Sign Up
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default Login
