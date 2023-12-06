module.exports = {
  siteMetadata: {
    title: `MF`,
    description: `Metro Floring & Interior Design`,
    author: `Kinppo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
      },
    },
  ],
};
