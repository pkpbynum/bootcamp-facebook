import React from 'react'
import { Container, Image, Name } from './styles'

const UserCard = ({ image, name }) => (
  <Container>
    <Image src={image} />
    <Name>{name}</Name>
  </Container>
)

export default UserCard
