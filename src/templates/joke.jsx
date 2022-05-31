import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';

const JokePage = ({ data }) => {
  const { joke } = data;

  return (
    <>
      <div className="container-md py-10 md:py-20">
        <h1 className="typo-h1">{joke.title}</h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {joke.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
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
  }
`;
