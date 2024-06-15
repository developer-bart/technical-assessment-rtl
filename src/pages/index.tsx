import React from 'react'

// Components
import Seo from '../components/Seo'
import Header from '../components/Header'

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default Homepage
