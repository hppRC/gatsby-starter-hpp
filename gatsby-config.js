const siteTitle = `Gatsby Starter hpp`;
const siteUrl = `https://gatsby-starter-hpp.netlify.com`;
const siteDescription = `simple gatsby starter with mdx, typescript, pwa`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `Gatsby Starter hpp - @hppRC/gatsby-starter-hpp`,
  siteHeadline: `Gatsby Starter hpp - Gatsby Starter from @hppRC`,
  siteUrl,
  siteDescription,
  siteLanguage: `en`,
  author: `@hpp_ricecake`, // twitter account id
  basePath: `/`,
  social: {
    twitter: `https://twitter.com/hpp_ricecake`,
    github: `https://github.com/hppRC`,
    qiita: `https://qiita.com/hppRC`,
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `@hpprc/gatsby-theme-core`,
      options: {
        siteTitle,
        siteUrl,
        siteDescription,
        iconPath: `./assets/icon.png`,
        googleAnalyticsTrackingId: `UA-149661454-1`,
      },
    },
  ],
};
