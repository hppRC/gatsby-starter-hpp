module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        // specify gatsby-*.ts file's directory
        configDir: `.gatsby`,
      },
    },
  ],
};
