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
          <p className="typo-body mt-4 max-w-lg">
            Пісня — вірш ліричного або ліро-епічного характеру, мелодичний за своїм інтонаційним малюнком і призначений для співу.
          </p>
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
                <ul className="md:flex">
                  <li className="typo-small mt-4">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky/">
                      Колядки та щедрівки
                    </Link>
                  </li>
                  <li className="typo-small mt-4">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/vesnianky/">
                      Веснянки
                    </Link>
                  </li>
                  <li className="typo-small mt-4">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrovochni-pisni/">
                      Русальні та петровочні пісні
                    </Link>
                  </li>
                  <li className="typo-small mt-4">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/kupalski-pisni/">
                      Купальскі пісні
                    </Link>
                  </li>
                  <li className="typo-small mt-4">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/zhnyvarski-pisni/">
                      Жниварські пісні
                    </Link>
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
