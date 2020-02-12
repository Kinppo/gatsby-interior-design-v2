module.exports = {
  siteMetadata: {
    title: `MF`,
    description: `Metro Floring & Interior Design`,
    author: `Mouaad Boukiaou`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7vso7tyv",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
        },
    },
  ],
}
