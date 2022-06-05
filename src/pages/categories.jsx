import React from 'react';
import Link from '../components/Link';

const CategoriesPage = () => {
  return (
    <>
      <div className="bg-red-500 ">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1 text-white">
            категорії
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row">
          <div className="col-full md:col-6">
            <Link to="/jokes/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                сміховини
              </h2>
              <p className="mt-4">
                Дотепні мініатюри, анекдоти, діалогічні сцени, новели-алегорії та нісенітниці
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-5 md:mt-0">
            <Link to="/songs/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                пісні
              </h2>
              <p className="mt-4">
                 Пісні історичні, баладні, трудові, обрядові, календарні, колискові, коломийки.
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-5">
            <Link to="/jokes/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                прислів'я
              </h2>
              <p className="mt-4">
                 Прислів'я та приказки, крилаті вирази
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-5">
            <Link to="/jokes/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                казки
              </h2>
              <p className="mt-4">
                 З тваринами, з магією, казки-формули, побутові та новелістині, небилиці.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
