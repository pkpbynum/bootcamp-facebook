import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer, User } from './styles'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const users = [...Array(10)].map(() => <User />)
    return (
      <Container>
        <Header>
          <SearchBar
            classname="serachbar"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </Header>
        <UsersContainer>{users}</UsersContainer>
      </Container>
    )
  }
}

export default Users
