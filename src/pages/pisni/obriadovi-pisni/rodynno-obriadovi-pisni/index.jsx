import React from 'react';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const RodynnoObriadoviPisniPage = () => {
  return (
    <>
      <Seo
        title="Родинно-обрядові пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            родинно-обрядові пісні
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Родинно-обрядові пісні — цикл, що супроводжує обрядові пісні, пов'язані із такими найважливішими родинними подіями, як народження, створення сім'ї, смерть.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <ul>
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/vesilni-pisni/">
              Весільні пісні
            </Link>
          </li>
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/holosinnia/">
              Голосіння
            </Link>
          </li>
        </ul>
        <div className="py-10">
          <p className="typo-body mt-4">
          Родинно-обрядові пісні – найдавніші за походженням, пройшли багатовіковий розвиток і побутують у народі до
          наших днів. Родинно-обрядові пісні супроводжують людину все життя – від народження й до смерті.
          </p>
          <p className="typo-body mt-4">
          Цикли:
          </p>
          <ul className="typo-body mt-4">
            <li>
              весільні,
            </li>
            <li>
              плачі й голосіння.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RodynnoObriadoviPisniPage;