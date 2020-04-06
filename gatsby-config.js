module.exports = {
  siteMetadata: {
    title: 'Marrying McManus',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: `${__dirname}/src/photos`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'background',
        path: `${__dirname}/src/background`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Marrying McManus',
        short_name: 'MarryingMcManus',
        start_url: '/',
        background_color: '#6495ED',
        theme_color: '#6495ED',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
