import React from 'react';

import Breadcrumbs from '../../../components/Breadcrumbs';
import Link from '../../../components/Link';
import Seo from '../../../components/Seo';

const ObriadoviPisniPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Обрядові пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Обрядові пісні
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Обрядові пісні – народні поетичні твори, які супроводжують родинні (весілля, похорон) та календарні (колядки, гаївки-веснянки, русальні, купальські, жнивні) обряди.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Жанри обрядових пісень
        </h2>
        <ul className="mt-10">
          <li className="mt-10">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/" className="typo-h4">
              Календарно-обрядові пісні
            </Link>
            <ul className="ml-10 mt-4">
              <li className="typo-h5">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky/">
                  Колядки та щедрівки
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/vesnianky/">
                  Веснянки
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrivchani-pisni/">
                  Русальні та петрівчані пісні
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/kupalski-pisni/">
                  Купальскі пісні
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/zhnyvarski-pisni/">
                  Жниварські пісні
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-10">
            <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/" className="typo-h4">
              Родинно-обрядові пісні
            </Link>
            <ul className="ml-10 mt-4">
              <li className="typo-h5">
                <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/vesilni-pisni/">
                  Весільні пісні
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/holosinnia/">
                  Голосіння
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ObriadoviPisniPage;
