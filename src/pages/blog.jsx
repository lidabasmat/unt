import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../components/icons/YoutubeIcon';

import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import Seo from '../components/Seo';

const BlogPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      blogs: allBlog {
        nodes {
          title
          description
          slug
          author
          date(formatString: "DD.MM.YYYY")
          tags
        }
      }
    }
  `);

  const blogs = data.blogs.nodes;

  return (
    <>
      <Seo
        title="Блог"
        description="В цьому розділі ви знайдете цікаві теми пов'язані з традиціями, звичаями українського народу та багато іншого"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 text-white mt-4">
            блог
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            В цьому розділі ви знайдете цікаві теми пов'язані з традиціями, звичаями українського народу та багато іншого
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row mt-4">
          {blogs.map((blog) => (
            <div className="col-full md:col-6 mb-4">
              <div className="block border-2 rounded-md px-4 py-4">
                <p className="typo-small text-gray-700 mb-2">
                  {blog.tags.join(' • ')}
                </p>
                <h2 className="typo-h4 hover:text-red-500 mb-4">
                  <Link to={blog.slug}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="typo-body mb-4">
                  {blog.description}
                </p>
                <p className="typo-body">
                  {blog.date}
                </p>
                <Button to={blog.slug} variant="primary" size="sm">
                  Читати
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
