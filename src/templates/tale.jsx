import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const TalePage = ({ data, location, pageContext }) => {
  const { tale, site } = data;

  return (
    <>
      <Seo
        title={`${tale.title} - українська народна казка`}
        description={`${tale.title}: текст казки, аудіозапис`}
      >
        <script type='application/ld+json'>
          {`{
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${tale.title}",
              "description": "Українська народна казка: ${tale.title}",
              "abstract": "Українська народна казка: ${tale.title}",
              "author": "${tale.author}",
              "url": "${site.siteMetadata.siteUrl}${location.pathname}",
              "accessMode": "textual"
          }`}
        </script>
      </Seo>
      <div className="container-md py-10 md:py-20">
        <Breadcrumbs
          crumbs={pageContext.breadcrumb.crumbs}
          crumbLabel={tale.title}
        />
        <h1 className="typo-h1 mt-4">
          {tale.title}
        </h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {tale.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
        <div>
          <h3 className="typo-h3 mt-5 md:mt-14">Поділитися:</h3>
        </div>
        <ShareButtons
          className="mt-5 md:mt-10"
          title={tale.title}
          url={`${site.siteMetadata.siteUrl}${location.pathname}`}
        />
      </div>
    </>
  )
};

export default TalePage;

export const pageQuery = graphql`
  query($slug: String!) {
    tale: tale(slug: { eq: $slug }) {
      title
      content {
        body
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
