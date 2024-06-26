/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-stylus",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
