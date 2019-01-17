import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex: 1;
  width: 100%;
  background-color: red;
`

export const Header = styled(Flex)`
  width: 100%;
  height: 50px;
  background-color: yellow;
  justify-content: flex-end;
`
export const SearchBar = styled.input`
  width: 200px;
  height: 20px;
  background-color: green;
  align-self: center;
  margin-right: 20px;
`
export const UsersContainer = styled(Flex)`
  flex: 1;
  width: 100%;
  background-color: orange;
`
export const User = styled(Flex)`
  width: 100px;
  height: 100px;
  background-color: blue;
`
