import React from 'react';
import Link from '../../components/Link';
import List from '../../components/List';
import Seo from '../../components/Seo';

const SongsPage = () => {
  return (
    <>
      <Seo
        title="Пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            пісні
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <ul>
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/">
              Обрядові пісні
            </Link>
            <ul className="ml-10">
              <li className="typo-h5 mt-4">
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/">
                  Календарно-обрядові пісні
                </Link>
                <ul className="flex mt-4">
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky/">
                      Колядки та щедрівки
                    </Link>
                  </li>
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <span>
                      Веснянки
                    </span>
                  </li>
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <span>
                      Русальні та петровочні
                    </span>
                  </li>
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <span>
                      Купальскі пісні
                    </span>
                  </li>
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <span>
                      Жниварські пісні
                    </span>
                  </li>
                </ul>
              </li>
              <li className="typo-h5 mt-6">
                <span>
                  Родинно-обрядові пісні
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SongsPage;
