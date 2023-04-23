import React from 'react'

// Components
import Seo from '../components/Seo'

const Homepage: React.FC = () => (
  <>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

export const Head = () => <Seo title="Home" />

export default Homepage
