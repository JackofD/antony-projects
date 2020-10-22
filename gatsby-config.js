module.exports = {
  siteMetadata: {
    title: `Antony Kanyongo Projects`,
    description: `For all your residential and business construction and improvement needs`,
    author: `AK Projects`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antony Kanyongo Projects`,
        short_name: `AK Projects`,
        start_url: `/`,
        background_color: `#005544`,
        theme_color: `#005544`,
        display: `minimal-ui`,
        icon: `src/images/ak-icon-large.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
