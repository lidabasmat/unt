import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';
import { Helmet } from 'react-helmet';

function Seo({ children, description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = title || site.siteMetadata.title;
  const defaultImage = image || site.siteMetadata?.image;
  const siteUrl = site.siteMetadata?.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={(defaultTitle && !title.includes(defaultTitle)) ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: `${siteUrl}${defaultImage}`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.author || ``,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'twitter:image',
          content: `${siteUrl}${defaultImage}`,
        },
      ].concat(meta)}
    >
      {children}
    </Helmet>
  )
}

Seo.defaultProps = {
  children: null,
  lang: 'uk',
  meta: [],
  title: '',
  description: '',
  image: null,
};

Seo.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Seo;
