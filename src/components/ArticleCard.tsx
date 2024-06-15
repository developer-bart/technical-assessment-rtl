import React, { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  id: number
  title: string
  description: string
  image: string
}

const ArticleCard: FC<IProps> = ({ title, description, image }) => (
  <Container>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 14px;
`

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 18px;
  border-radius: 18px;

  &:hover ${Title} {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Description = styled.p`
  margin-bottom: 0;
`

export default ArticleCard
