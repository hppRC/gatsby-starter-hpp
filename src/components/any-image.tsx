import Img from 'gatsby-image';
import React from 'react';
import { useAnyImage } from 'src/hooks';

export default ({ filename }: { filename: string }) => {
  const fluid = useAnyImage(filename);

  return <Img fluid={fluid} />;
};
