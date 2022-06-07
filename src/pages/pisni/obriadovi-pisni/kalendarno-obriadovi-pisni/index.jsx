import React from 'react';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const KalendarnoObriadoviPisniPage = () => {
  return (
    <>
      <Seo
        title="Календарно-обрядові пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            календарно-обрядові пісні
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <ul>
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky/">
              Колядки та щедрівки
            </Link>
          </li>
          <li className="typo-h4">
            <span>
              Веснянки
            </span>
          </li>
          <li className="typo-h4">
            <span>
              Русальні та петровочні
            </span>
          </li>
          <li className="typo-h4">
            <span>
              Купальскі пісні
            </span>
          </li>
          <li className="typo-h4">
            <span>
              Жниварські пісні
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default KalendarnoObriadoviPisniPage;
