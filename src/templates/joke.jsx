import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const JokePage = ({ data, location }) => {
  const { joke, site } = data;

  return (
    <>
      <Seo
        title={`${joke.title} - Українська сміховина`}
      />
      <div className="container-md py-10 md:py-20">
        <h1 className="typo-h1">
          {joke.title}
        </h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {joke.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
        <ShareButtons
          className="mt-5 md:mt-10"
          title={joke.title}
          url={`${site.siteMetadata.siteUrl}${location.pathname}`}
        />
      </div>
    </>
  )
};

export default JokePage;

export const pageQuery = graphql`
  query($slug: String!) {
    joke: joke(slug: { eq: $slug }) {
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
