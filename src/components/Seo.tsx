import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface IMeta {
  name: string
  content: string
}

interface IProps {
  title: string
  description?: string
  lang?: string
  meta?: IMeta[]
}

const Seo: React.FC<IProps> = ({
  title,
  description = '',
  lang = 'en-nl',
  meta = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta || [])}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
      />
    </Helmet>
  )
}

export default Seo
