import { graphql, useStaticQuery } from 'gatsby';
import { DeepReadonly } from 'utility-types';

type Props = DeepReadonly<{
  site: {
    buildTime: string;
  };
}>;

export default (): string => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `);

  return data.site.buildTime;
};
