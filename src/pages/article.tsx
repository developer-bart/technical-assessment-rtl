import React from 'react'
import { Router } from '@reach/router'
import { navigate } from 'gatsby'

// Components
import Article from '../components/Article'

// Data
import data from '../../data/data.json'

// Types
import { ArtikelReferentie } from '../types/data'

const ArticlePage: React.FC<any> = ({ serverData }) => {
  const { status, article } = serverData

  if (status !== 200) {
    // Quick solution is redirect, normally make sure the actual page renders as a 404
    navigate('/404')
    return <></>
  }
  return (
    <Router>
      <Article path="article/:id" article={article} />
    </Router>
  )
}

export default ArticlePage

export const getServerData = async ({ params }: any) => {
  try {
    // Normally you would do an api call here
    const response = data.bundelItems.find(
      (article: ArtikelReferentie) => article.id === Number(params.id)
    )

    if (!response) {
      throw new Error('Response failed')
    }

    const article = {
      title: response.titel,
      description: response.lead,
    }

    return {
      props: {
        article,
        status: 200,
      },
    }
  } catch (error) {
    return {
      props: {
        status: 500,
      },
    }
  }
}
