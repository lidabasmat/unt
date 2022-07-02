import React from 'react';
import Link from '../../components/Link';
import List from '../../components/List';
import Seo from '../../components/Seo';

const SongsPage = () => {
  return (
    <>
      <Seo
        title="Пісні"
        description="Українські народні пісні. Обрядові, епічні, соціально-побутові, родинно-побутова лірика, пісні літературного походження, коломийки."
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
          <li className="typo-h4 py-10">
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
                <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/">
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
          <li className="typo-h4 py-10">
            <Link to="/pisni/epichni-pisni/">
              Епічні пісні
            </Link>
            <ul className="ml-10">
              <li className="typo-h5 mt-4">
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
        </ul>
        <div className="py-10">
          <p className="typo-body mt-4">
            Основні показники пісні як жанру лірики — строфічна будова, повторюваність віршів строфи, розмежування заспіву та приспіву (рефрен), виразна ритмізація, музичність звучання, синтаксичний паралелізм, проста синтаксична будова.
          </p>
          <p className="typo-body mt-4">
            Найдавніший, традиційний різновид лірики користується найрізноманітнішими мовними засобами, передає найтонші переживання.
          </p>
          <p className="typo-body mt-4">
            Розрізняють фольклорну пісню: як жанр писемної поезії та як самостійний вокально-музичний твір.
          </p>
        </div>
      </div>
    </>
  );
};

export default SongsPage;
