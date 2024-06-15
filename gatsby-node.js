exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Create dynamic article url's
  if (page.path.match(/^\/article/)) {
    page.matchPath = '/article/:id'
    createPage({
      ...page,
    })
  }
}
