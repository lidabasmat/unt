import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const RodynnoObriadoviPisniPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Родинно-обрядові пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Родинно-обрядові пісні
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Родинно-обрядові пісні — цикл, що супроводжує обрядові пісні, пов'язані із такими найважливішими родинними подіями, як народження, створення сім'ї, смерть.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Жанри родинно-обрядових пісень
        </h2>
        <ul className="mt-10">
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/vesilni-pisni/">
              Весільні пісні
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/holosinnia/">
              Голосіння
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Опис родинно-обрядових пісень
        </h2>
        <p className="typo-body mt-4">
          Родинно-обрядові пісні – найдавніші за походженням, пройшли багатовіковий розвиток і побутують у народі до
          наших днів. Родинно-обрядові пісні супроводжують людину все життя – від народження й до смерті.
        </p>
      </div>
    </>
  );
};

export default RodynnoObriadoviPisniPage;
