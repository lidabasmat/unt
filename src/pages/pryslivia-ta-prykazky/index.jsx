import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';
import List from '../../components/List';
import Seo from '../../components/Seo';

const ProverbsPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      proverbs: allProverb {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const proverbs = data.proverbs.nodes;

  return (
    <>
      <Seo
        title="Прислів'я та приказки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Прислів'я та приказки
          </h1>
          <div className="flex-wrap md:flex justify-between">
            <div>
              <p className="typo-body mt-4 max-w-lg">
                Прислів'я — мала форма народної поетичної творчості, короткий, ритмізований вислів, що несе узагальнену думку, висновок, іносказання з дидактичним ухилом.
              </p>
            </div>
            <div>
              <p className="typo-body mt-4 max-w-lg">
                Приказка — жанр фольклорної прози, короткий сталий образний вислів констатуючого характеру, що має одночленну будову, нерідко становить частину прислів'я, але без висновку, і вживається в переносному значенні.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <ul>
          {proverbs.map((proverb) => (
            <li className="typo-h4 mt-4 first:mt-0">
              <Link to={proverb.slug}>
                {proverb.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProverbsPage;
