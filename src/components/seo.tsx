import React from 'react';
import Helmet from 'react-helmet';
import { useSiteBanner, useSiteMetadata } from 'src/hooks';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

export const SEO: React.FCX<Props> = ({
  title = '',
  description = '',
  pathname = '',
  image = ''
}) => {
  const site = useSiteMetadata();
  const banner = useSiteBanner();

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    author
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || banner?.src}`
  };

  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={seo.title} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:alt' content={seo.description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:image:alt' content={seo.description} />
      <meta name='twitter:creator' content={author} />
    </Helmet>
  );
};

export default SEO;
