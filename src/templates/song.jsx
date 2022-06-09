import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';

const SongPage = ({ data }) => {
  const { song } = data;

  return (
    <>
      <Seo
        title={`${song.title} - Українська пісня`}
        description={`${song.title}: текст пісні`}
      />
      <div className="container-md py-10 md:py-20">
        <h1 className="typo-h1">{song.title}</h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {song.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
      </div>
    </>
  )
};

export default SongPage;

export const pageQuery = graphql`
  query($slug: String!) {
    song: song(slug: { eq: $slug }) {
      title
      content {
        body
      }
    }
  }
`;