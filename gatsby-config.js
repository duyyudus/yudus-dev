/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Yudus Labs`,
    siteUrl: `https://yudus.dev`,
    description: `A blockchain labs focused on cross-chain services`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yudus Labs`,
        short_name: `Yudus Labs`,
        start_url: `/`,
        background_color: `#E2DED0`,
        theme_color: `#647C90`,
        display: `standalone`,
        icon: `static/yudus-labs-logo-v2-simple.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169204893-1",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
