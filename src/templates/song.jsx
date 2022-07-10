import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const SongPage = ({ data, location, pageContext }) => {
  const { song, site } = data;

  return (
    <>
      <Seo
        title={`${song.title} - Українська пісня`}
        description={`${song.title}: текст пісні`}
      >
        <script type='application/ld+json'>
          {`{
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${song.title}",
              "description": "Українська народна пісня: ${song.title}",
              "abstract": "Українська народна пісня: ${song.title}",
              "author": "${song.author}",
              "url": "${site.siteMetadata.siteUrl}${location.pathname}",
              "accessMode": "textual"
          }`}
        </script>
      </Seo>
      {console.log(pageContext)}
      <div className="container-md py-10 md:py-20">
        <Breadcrumbs
          crumbs={pageContext.breadcrumb.crumbs}
          crumbLabel={song.title}
        />
        <h1 className="typo-h1 mt-4">
          {song.title}
        </h1>
        <div className="mt-4 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {song.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
        <div>
          <h3 className="typo-h3 mt-5 md:mt-14">Поділитися:</h3>
          <ShareButtons
            className="mt-4"
            title={song.title}
            url={`${site.siteMetadata.siteUrl}${location.pathname}`}
          />
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
      author
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
