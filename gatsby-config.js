module.exports = {
  siteMetadata: {
    title: "basic-project",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Basic Project",
        short_name: "Basic Project",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
  ],
}

// TODO: fix module error + add husky with yarn lint
