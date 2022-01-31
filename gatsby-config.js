module.exports = {
  siteMetadata: {
    title: 'basic-project',
    description: 'Your project description',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Basic Project',
        short_name: 'Basic Project',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
