import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import Link from '../components/Link';
import Seo from '../components/Seo';
import OrnamentSource from '../images/ornament.svg';

import HeroVisualSource from '../images/visuals/home-hero.svg';

// markup
const IndexPage = () => {
  return (
    <>
      <Seo
        title="Перлини української народної творчості"
      />
      <div className="bg-red-500 text-white">
        <div
          className="container-lg relative"
        >
          <div
            className="hidden md:block absolute inset-0 bg-no-repeat bg-right-top"
            style={{ backgroundImage: `url(${HeroVisualSource})` }}
          />
          <div className="row items-center">
            <div className="col-full md:col-6 py-10 md:py-32">
              <h1 className="typo-h1 max-w-sm">
                перлини української народної творчості
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Категорії
        </h2>
        <div className="row mt-8">
          <div className="col-full md:col-6 md:mt-0">
            <Link to="/pisni/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h3 className="typo-h3">
                пісні
              </h3>
              <p className="typo-body mt-4">
                 Пісні історичні, баладні, трудові, обрядові, календарні, колискові, коломийки.
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-8 md:mt-0">
            <Link to="/smikhovyny/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h3 className="typo-h3">
                сміховини
              </h3>
              <p className="typo-body mt-4">
                Дотепні мініатюри, анекдоти, діалогічні сцени, новели-алегорії та нісенітниці
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-8">
            <Link to="/skoromovky/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h3 className="typo-h3">
                скоромовки
              </h3>
              <p className="typo-body mt-4">
                Дотепна гра спеціально скомпонованих важковимовних слів, і звуків, що створюють труднощі для швидкої й виразної вимови слів.
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-8">
            <Link to="/pryslivia-ta-prykazky/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h3 className="typo-h3">
                прислів'я та приказки
              </h3>
              <p className="typo-body mt-4">
                Короткі влучні вислови.
              </p>
            </Link>
          </div>
          <div className="col-full md:col-6 mt-8">
            <Link to="/kazky/" className="block bg-red-500 text-white px-4 py-4 h-full">
              <h3 className="typo-h3">
                казки
              </h3>
              <p className="typo-body mt-4">
                Народна казка - це народна мудрість, філософія і фантазія. Надзвичайні та життєво-повчальні історії.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-lg pt-10 pb-10 md:pt-0 md:pb-24">
        <div className="row md:flex-nowrap items-center">
          <div className="col-full md:col-6">
            <h2 className="typo-h2">
              Про проєкт
            </h2>
            <p className="typo-intro mt-8">
              Протягом багатовікової історії розвитку української національної культури наш народ дав силу-силенну
              чудових витворів словесного мистецтва. В них проявились яскрава поетична уява, волелюбний дух, глибока
              мудрість, любов до вітчизни, ненависть до гнобителів, віра у перемогу добра і правди.
            </p>
            <p className="typo-intro mt-4">
              Дорогоцінним надбанням нашим є пісні, казки, перекази, легенди, коломийки, прислів’я та приказки,
              народні усмішки, жарти, дотепи, нісенітниці, небилиці та байки й інші жанри усної творчості.
              Усі вони значною мірою перейняті сатирично-гумористичним елементом.
            </p>
            <p className="typo-intro mt-4">
              Проєкт “Українська народна творчість” був створений щоб зібрати та зберегти ці перлини, що висвічують
              веселками непідробного гумору, глибокою мудрістю і простотою мови.
            </p>
          </div>
          <div className="hidden md:block col-full md:col-6 md:ml-2/12 md:order-2">
            <img src={OrnamentSource} alt="Ornament" className="w-full"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
