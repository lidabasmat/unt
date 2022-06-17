import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Link from '../../components/Link';
import List from '../../components/List';
import Seo from '../../components/Seo';

const ProverbsPage = () => {
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
          <h1 className="typo-h1">
            прислів'я та приказки
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
            <li className="typo-h4">
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
