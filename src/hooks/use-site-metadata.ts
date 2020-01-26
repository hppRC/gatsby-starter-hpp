import { graphql, useStaticQuery } from 'gatsby';
import { DeepPartial, DeepReadonly } from 'utility-types';

type Props = DeepReadonly<{
  site: DeepPartial<{
    siteMetadata: {
      siteTitle: string;
      siteTitleAlt: string;
      siteHeadline: string;
      siteUrl: string;
      siteDescription: string;
      siteLanguage: string;
      author: string;
      social: {
        twitter: string;
        github: string;
        qiita: string;
      };
    };
  }>;
}>;

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default () => {
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
          social {
            twitter
            github
            qiita
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
