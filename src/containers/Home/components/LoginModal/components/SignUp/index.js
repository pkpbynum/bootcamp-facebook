import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import CREATE_USER from './queries'
import { Mutation } from 'react-apollo'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Title>Nice to meet you!</Title>
        <LineInput
          placeholder="Name"
          onChange={e => this.onChange('name', e)}
        />
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
          mutation={CREATE_USER}
          variables={{
            createUserInput: this.state
          }}
        >
          {(addUser, { data }) => {
            return <SubmitButton onClick={addUser}>Get Started</SubmitButton>
          }}
        </Mutation>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default SignUp
