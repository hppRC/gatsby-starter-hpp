module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Starter hpp`,
    siteTitleAlt: `Gatsby Starter hpp - @hppRC/gatsby-starter-hpp`,
    siteHeadline: `Gatsby Starter hpp - Gatsby Starter from @hppRC`,
    siteUrl: `https://gatsby-starter-hpp.netlify.com`,
    siteDescription: `simple gatsby starter with mdx, typescript, pwa`,
    siteLanguage: `en`,
    siteImage: `/icon.png`,
    author: `@osaremochi`, //twitter account id
    basePath: '/'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    }
  ]
};
