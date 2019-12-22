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
 * use site's default banner's fluid object
 */
export const useSiteBanner = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      file(relativePath: { eq: "banner.png" }) {
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

export default useSiteBanner;
