import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
  images: {
    edges: {
      node: {
        relativePath: string;
        name: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }[];
  };
};

/**
 * use all images in src/images
 */
export default () => {
  //relativePath: path from `image`
  //it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const data = useStaticQuery<Props>(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return data.images;
};
