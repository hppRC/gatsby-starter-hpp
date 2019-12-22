import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      [key: string]: string;
    };
  };
};

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
