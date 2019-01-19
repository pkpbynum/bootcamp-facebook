import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      user {
        id
      }
      token
      error {
        message
      }
    }
  }
`

export default CREATE_USER
