import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { DeepReadonly } from 'utility-types';

type Props = DeepReadonly<{
  images: {
    edges: {
      node: {
        relativePath: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }[];
  };
}>;

/**
 * use any image in src/images
 */
export default (filename: string): FluidObject | undefined => {
  // relativePath: path from `image`
  // it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const data = useStaticQuery<Props>(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1400, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((edge) => edge.node.relativePath.includes(filename));

  return image?.node.childImageSharp?.fluid;
};
