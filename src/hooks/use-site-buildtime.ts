import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    buildTime: string;
  };
};

export default () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `);

  return data.site.buildTime;
};
