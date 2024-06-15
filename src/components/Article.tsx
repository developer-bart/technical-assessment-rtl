import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Components
import Header from '../components/Header'
import ContentWrapper from '../components/ContentWrapper'
import Intro from '../components/Intro'

interface IArticle {
  path: string
  article: {
    title: string
    description: string
  }
}

const Article: FC<IArticle> = ({ article }) => (
  <Container>
    <Header />
    <ContentWrapper>
      <StyledLink to="/">Terug</StyledLink>
      <Intro title={article.title} description={article.description} />
    </ContentWrapper>
  </Container>
)

const Container = styled.div`
  min-height: 100vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.primary};
`

export default Article
