import React from 'react'
import styled from 'styled-components'

// Components
import Seo from '../components/Seo'
import Header from '../components/Header'
import ContentWrapper from '../components/ContentWrapper'
import Intro from '../components/Intro'
import ArticleCard from '../components/ArticleCard'

// Data
import data from '../../data/data.json'

// Types
import { ArtikelReferentie } from '../types/data'

const Homepage: React.FC = () => {
  const { title, description, bundelItems } = data
  return (
    <>
      <Header />
      <ContentWrapper>
        <Intro title={title} description={description} />
        <Articles>
          {bundelItems.map((item: ArtikelReferentie) => {
            return (
              <ArticleCard
                key={item.id}
                id={item.id}
                title={item.titel}
                description={item.lead}
                image={item.afbeelding.afbeelding}
              />
            )
          })}
        </Articles>
      </ContentWrapper>
    </>
  )
}

const Articles = styled.div`
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: ${({ theme }) => `${theme.sizes.S}px`}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => `${theme.sizes.M}px`}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Head = () => <Seo title="Home" />

export default Homepage
