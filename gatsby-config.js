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
        overlayDrafts: true,
        watchMode: true,
        token:
          "skmaICNM4b7ic8xsol5e15bNBVUUwm3qla5bh9K7m3suVGPaQHg87is3kXXnWK4oq8wJ82wCsTY38x6rKVAW1UpdzHUdndZXcL7NpwgskZaKCZiDS3oydgxdvZIoebO353OEqAOLw8MZQf65ZrDjZMVkH6QJXFNgNQfr05a4HzDmgA4A1bnH",
      },
    },
  ],
}
