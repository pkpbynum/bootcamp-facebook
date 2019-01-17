import React from "react"
import { Container, Image, Post, Posts } from "./styles"

const User = ({ image, posts }) => (
  <Container>
    <Image src={image} />
    <Posts>{posts.map(post => <Post id={post.id}>{post.content}</Post>)}</Posts>
  </Container>
)

export default User
