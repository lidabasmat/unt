import React from 'react';
import Link from '../../../components/Link';
import Seo from '../../../components/Seo';

const ObriadoviPisniPage = () => {
  return (
    <>
      <Seo
        title="Обрядові пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            обрядові пісні
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Обрядові пісні – народні поетичні твори, які супроводжують родинні (весілля, похорон) та календарні (колядки, гаївки-веснянки, русальні, купальські, жнивні) обряди.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <ul>
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
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/vesnianky/">
                  Веснянки
                </Link>
              </li>
              <li className="typo-small">
                <span className="mx-4">
                  *
                </span>
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrovochni-pisni/">
                  Русальні та петровочні пісні
                </Link>
              </li>
              <li className="typo-small">
                <span className="mx-4">
                  *
                </span>
                <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/kupalski-pisni/">
                  Купальскі пісні
                </Link>
              </li>
              <li className="typo-small">
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
      </div>
    </>
  );
};

export default ObriadoviPisniPage;
