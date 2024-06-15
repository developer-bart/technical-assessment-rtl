import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface IProps {
  id: number
  title: string
  description: string
  image: string
}

const ArticleCard: FC<IProps> = ({ id, title, description, image }) => (
  <StyledLink to={`article/${id}`}>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </StyledLink>
)

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 14px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
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
