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
export default () => {
  //relativePath: path from `image`
  //it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const data = useStaticQuery<Props>(graphql`
    query hooksUseIcon {
      file(relativePath: { eq: "icon.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
};
