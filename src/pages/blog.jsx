import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../components/icons/YoutubeIcon';

import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import Seo from '../components/Seo';

const BlogPage = ({ pageContext }) => {


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

      </div>
    </>
  );
};

export default BlogPage;
