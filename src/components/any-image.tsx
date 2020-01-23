import Img from 'gatsby-image';
import React from 'react';
import { useAllImages } from 'src/hooks';

export default ({ filename }: { filename: string }) => {
  const images = useAllImages();
  const image = images.edges.find(edge => {
    return edge.node.relativePath.includes(filename);
  });

  const fluid = image?.node.childImageSharp?.fluid;

  return <Img fluid={fluid} />;
};
