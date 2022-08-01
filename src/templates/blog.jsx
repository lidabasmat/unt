import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Seo from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const blogPage = ({ data, location, pageContext }) => {
  const { blog, site } = data;

  return (
    <>
      <Seo
        title={blog.meta.title}
        description={blog.meta.description}
      >
        <script type='application/ld+json'>
          {`{
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "name": "${blog.meta.title}",
              "description": "${blog.meta.description}",
              "author": "${blog.author}",
              "datePublished": "${blog.date}",
              "url": "${site.siteMetadata.siteUrl}${location.pathname}"
          }`}
        </script>
      </Seo>
      <div className="container-md py-10 md:py-20">
        <Breadcrumbs
          crumbs={pageContext.breadcrumb.crumbs}
          crumbLabel={blog.title}
        />
        <h1 className="typo-h1 mt-4">
          {blog.title}
        </h1>
        <div className="mt-5 md:mt-10">
          <CustomMDXProvider>
            <MDXRenderer>
              {blog.content.body}
            </MDXRenderer>
          </CustomMDXProvider>
        </div>
        <div>
          <h3 className="typo-h3 mt-5 md:mt-14">Поділитися:</h3>
        </div>
        <ShareButtons
          className="mt-5 md:mt-10"
          title={blog.title}
          url={`${site.siteMetadata.siteUrl}${location.pathname}`}
        />
      </div>
    </>
  )
};

export default blogPage;

export const pageQuery = graphql`
  query($slug: String!) {
    blog: blog(slug: { eq: $slug }) {
      title
      date(formatString: "DD.MM.YYYY")
      author
      content {
        body
      }
      meta {
        title
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
