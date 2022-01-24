import React from 'react'
import Helmet from 'react-helmet'

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
  const defaultValues = {
    title: 'Gatsby v4 Starter',
    description: 'This is a starter project based on Gatsby v4.',
    author: 'Bart Beemster',
  }

  const metaDescription = description || defaultValues.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultValues.title}`}
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
          name: 'twitter:creator',
          content: defaultValues.author,
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
