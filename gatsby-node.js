require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `es2019`,
  },
});

exports.createPages = require(`./gatsby-node/index`).createPages;
