import React from 'react';
import Link from '../components/Link';
import Seo from '../components/Seo';

const CategoriesPage = () => {
  return (
    <>
      <Seo
        title="Категорії"
      />
      <div className="bg-red-500 ">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1 text-white">
            категорії
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row">
          <div className="col-full md:col-6 mt-5 md:mt-0">
            <Link to="/pisni/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                пісні
              </h2>
              <p className="mt-4">
                 Пісні історичні, баладні, трудові, обрядові, календарні, колискові, коломийки.
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-5 md:mt-0">
            <Link to="/smikhovyny/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h2 className="typo-h2">
                сміховини
              </h2>
              <p className="mt-4">
                Дотепні мініатюри, анекдоти, діалогічні сцени, новели-алегорії та нісенітниці
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
