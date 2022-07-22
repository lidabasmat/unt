import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const PisniKhronikyPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "pisni-khroniky"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
    }
  `);

  const songs = data.songs.nodes;

  return (
    <>
      <Seo
        title="Пісні-хроніки"
        description="Пісні-хроніки — є літературним жанром, який відображає неординарні, виняткові події громадсько-побутового та родинно-побутового характеру."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Пісні-хроніки
          </h1>
          <p className="typo-body mt-4 max-w-3xl">
            Пісні-хроніки — є літературним жанром, який відображає неординарні, виняткові події громадсько-побутового та родинно-побутового характеру, цей
            літературний жанр описує реальні факти, з усіма подробицями інформуючи про особливе в житті людини або колективу.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список пісень-хронік
        </h2>
        <ul className="row mt-8">
          {songs.map((song) => (
            <li className="col-full md:col-4 mb-4">
              <Link to={song.slug} className="typo-small flex items-center">
                {song.title}
                {song.hasYoutube && (
                  <YoutubeIcon className="ml-2 w-4 h-4" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Опис жанру пісні-хроніки
        </h2>
        <p className="typo-body mt-4">
          Пісні-хроніки дуже близькі за жанром до історичних пісень і до балад, про які детальніше говоритиметься в
          наступному розділі. З історичними піснями хроніки єднає достовірність зображуваного, дійсні факти, покладені в
          їх основу, але, як правило, пісні-хроніки обмежуються зображенням якогось одного випадку, найчастіше
          трагічного, свідком або й учасником якого був співак. Якщо прирівняємо історичні пісні до картин, змальованих
          крупними яскравими мазками олійними фарбами, то пісні-хроніки можна уподібнити до детальної прорисовки
          олівцем. Крім того, пісні-хроніки легко впізнати за чисто формальними ознаками: майже кожна з них починається
          звертанням до слухачів: “послухайте, добрі люди, що маю казати, а я хочу про (ім’я) співанку співати”, а
          закінчується заповненням у цілковитій правдивості співаного:
        </p>
        <p className="typo-body italic mt-4">
          Сіло котя на воротях, на вітер си здуло,
          <br />
          Я би того не співала, якби так не було.
        </p>
      </div>
    </>
  );
};

export default PisniKhronikyPage;
