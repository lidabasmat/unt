import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const ProverbPage = ({ data, location }) => {
  const { proverb, site } = data;

  return (
    <>
      <Seo
        title={`${proverb.title} - Прислів'я та приказки`}
        description={`${proverb.title}: текст`}
      />
      <div className="container-md py-10 md:py-20">
      <h1 className="typo-h1">
        {proverb.title}
      </h1>
      <div className="mt-5 md:mt-10">
        <CustomMDXProvider>
          <MDXRenderer>
            {proverb.content.body}
          </MDXRenderer>
        </CustomMDXProvider>
      </div>
      <div>
        <h3 className="typo-h3 mt-5 md:mt-14">Поділитися:</h3>
      </div>
      <ShareButtons
        className="mt-5 md:mt-10"
        title={proverb.title}
        url={`${site.siteMetadata.siteUrl}${location.pathname}`}
      />
      </div>
    </>
  )
};

export default ProverbPage;

export const pageQuery = graphql`
  query($slug: String!) {
    proverb: proverb(slug: { eq: $slug }) {
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
