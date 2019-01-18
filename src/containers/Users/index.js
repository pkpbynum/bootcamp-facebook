import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer } from './styles'
import UserCard from './components/UserCard'

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
    const users = [...Array(10)].map(() => (
      <UserCard
        image="https://static.stereogum.com/uploads/2018/01/GettyImages-889998292-1517445539-640x462.jpg"
        name="Rivers Cuomo"
      />
    ))
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
