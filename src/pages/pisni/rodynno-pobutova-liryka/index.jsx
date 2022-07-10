import React from 'react';

import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from '../../../components/Link';
import Seo from '../../../components/Seo';

const RodynnoPobutovaLirykaPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Родинно-побутова лірика"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Родинно-побутова лірика
          </h1>
          <p className="typo-body mt-4 max-w-3xl">
            Родинно-побутові пісні — це ліричні поетично-музичні твори, в яких відбиті почуття, переживання, думки людини, пов'язані з її особистим життям, подіями в сім'ї, родинними стосунками.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Жанри родинно-побутової лірики
        </h2>
        <ul className="mt-10">
          <li className="typo-h4 mt-4">
            <Link to="/pisni/rodynno-pobutova-liryka/pisni-pro-kokhannia/">
              Пісні про кохання
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/rodynno-pobutova-liryka/pisni-pro-rodynne-zhyttia/">
              Пісні про родинне життя
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/rodynno-pobutova-liryka/kolyskovi-pisni/">
              Колискові пісні
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/rodynno-pobutova-liryka/zhartivlyvi-pisni/">
              Жартівливі пісні
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Опис жанру
        </h2>
        <p className="typo-body mt-4">
          Родинно-побутові пісні — це ліричні поетично-музичні твори, в яких відбиті почуття, переживання, думки людини,
          пов´язані з її особистим життям, подіями в сім´ї, родинними стосунками.
        </p>
      </div>
    </>
  );
};

export default RodynnoPobutovaLirykaPage;
