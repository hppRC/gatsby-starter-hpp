module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }
  ]
};
