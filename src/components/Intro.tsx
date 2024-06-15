import React, { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  title: string
  description: string
}

const Intro: FC<IProps> = ({ title, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

const Container = styled.div`
  margin-top: 40px;
`

const Title = styled.h1`
  font-size: 40px;
`

const Description = styled.p`
  max-width: 800px;
`

export default Intro
