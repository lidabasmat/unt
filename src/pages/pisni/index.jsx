import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';
import List from '../../components/List';
import Seo from '../../components/Seo';

const SongsPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Пісні"
        description="Пісня — це вірш ліричного або ліро-епічного характеру, мелодичний за своїм інтонаційним малюнком і призначений для співу. Українські народні обрядові, епічні, соціально-побутові, родинно-побутова лірика, пісні літературного походження, коломийки."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Пісні
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Пісня — вірш ліричного або ліро-епічного характеру, мелодичний за своїм інтонаційним малюнком і призначений для співу.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Жанри пісень
        </h2>
        <ul className="mt-10">
          <li>
            <Link to="/pisni/obriadovi-pisni/" className="typo-h4">
              Обрядові пісні
            </Link>
            <ul className="ml-10 mt-4">
              <li>
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/" className="typo-h5">
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
                    <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrivchani-pisni/">
                      Русальні та петрівчані пісні
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
              <li className="mt-4">
                <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/" className="typo-h5">
                  Родинно-обрядові пісні
                </Link>
                <ul className="flex mt-4">
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/vesilni-pisni/">
                      Весільні пісні
                    </Link>
                  </li>
                  <li className="typo-small">
                    <span className="mx-4">
                      *
                    </span>
                    <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/holosinnia/">
                      Голосіння
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mt-10">
            <Link to="/pisni/epichni-pisni/" className="typo-h4">
              Епічні пісні
            </Link>
            <ul className="ml-10 mt-4">
              <li className="typo-h5">
                <Link to="/pisni/epichni-pisni/dumy/">
                  Думи
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/epichni-pisni/istorychni-pisni/">
                  Історичні пісні
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/epichni-pisni/pisni-khroniky/">
                  Пісні-хроніки
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/epichni-pisni/balady/">
                  Балади
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-10">
            <Link to="/pisni/rodynno-pobutova-liryka/" className="typo-h4">
              Родинно-побутова лірика
            </Link>
            <ul className="ml-10 mt-4">
              <li className="typo-h5">
                <Link to="/pisni/rodynno-pobutova-liryka/pisni-pro-kokhannia/">
                  Пісні про кохання
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/rodynno-pobutova-liryka/pisni-pro-rodynne-zhyttia/">
                  Пісні про родинне життя
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/rodynno-pobutova-liryka/kolyskovi-pisni/">
                  Колискові пісні
                </Link>
              </li>
              <li className="typo-h5 mt-4">
                <Link to="/pisni/rodynno-pobutova-liryka/zhartivlyvi-pisni/">
                  Жартівливі пісні
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container-lg my-10 md:my-24">
        <h2 className="typo-h2">
          Українська пісня
        </h2>
        <p className="typo-body mt-4">
          Основні показники пісні як жанру лірики – строфічна будова, повторюваність віршів строфи, розмежування заспіву та приспіву (рефрен), виразна ритмізація, музичність звучання, синтаксичний паралелізм, проста синтаксична будова.
        </p>
        <p className="typo-body mt-4">
          Найдавніший, традиційний різновид лірики користується найрізноманітнішими мовними засобами, передає найтонші переживання.
        </p>
        <p className="typo-body mt-4">
          Розрізняють фольклорну пісню: як жанр писемної поезії та як самостійний вокально-музичний твір.
        </p>
      </div>
    </>
  );
};

export default SongsPage;
