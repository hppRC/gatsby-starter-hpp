import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

/**
 * use site's default icon's fluid object
 */
export const useIcon = () => {
  //relativePath: path from `image`
  //it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const data = useStaticQuery<Props>(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
};
