import { GatsbyNode } from 'gatsby';

//you can't use QraphQL query fragments to get fluid object in gatsby-node.
const query = `
query {}
`;

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql(query);
  console.log(result);
};
