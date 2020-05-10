import { GatsbyNode } from 'gatsby';

// If you don't use query in gatsby-node or any other functions, you can remove these functions.

// query example
// const query = `
//    query {
//      ...
//    }
// `;

// TIPS: you can't use QraphQL query fragments to get fluid object in gatsby-node.

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  // const result = await graphql(query);
  console.log(createPage);
  console.log(graphql);
};
