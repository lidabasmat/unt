import React from 'react';

import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from '../../../components/Link';
import Seo from '../../../components/Seo';

const EpichniPisniPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Епічні пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Епічні пісні
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Епічні пісні – давні фольклорні віршовані твори, що розповідають про народних героїв та їхні подвиги.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Жанри епічних пісень
        </h2>
        <ul className="mt-10">
          <li className="typo-h4">
            <Link to="/pisni/epichni-pisni/dumy/">
              Думи
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/epichni-pisni/istorychni-pisni/">
              Історичні пісні
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/epichni-pisni/pisni-khroniky/">
              Пісні-хроніки
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/epichni-pisni/balady/">
              Балади
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EpichniPisniPage;
