import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
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
};

/**
 * use any image in src/images
 */
export default (filename: string) => {
  //relativePath: path from `image`
  //it is configured in gatsby-config.js of `gatsby-source-filesystem`
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

  const image = data.images.edges.find(edge => {
    return edge.node.relativePath.includes(filename);
  });

  return image?.node.childImageSharp?.fluid;
};
