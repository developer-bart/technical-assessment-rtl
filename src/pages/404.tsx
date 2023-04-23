import React from 'react'

// Components
import Seo from '../components/Seo'

const NotFoundPage: React.FC = () => (
  <>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export const Head = () => <Seo title="404" />

export default NotFoundPage
