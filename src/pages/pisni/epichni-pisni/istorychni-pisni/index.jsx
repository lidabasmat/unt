import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const IstorychniPisniPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "istorychni-pisni"}}) {
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
        title="Історичні пісні"
        description="Історична пісня — це ліро-епічний твір, у якому відтворено історичні події чи конкретні історичні постаті та висловлено ставлення народу до них."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            історичні пісні
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Історична пісня — це ліро-епічний твір, у якому відтворено історичні події чи конкретні історичні постаті та висловлено ставлення народу до них.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список історичних пісень
        </h2>
        <div className="row mt-8">
          {songs.map((song) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={song.slug} className="typo-small flex items-center">
                {song.title}
                {song.hasYoutube && (
                  <YoutubeIcon className="ml-2 w-4 h-4" />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Опис жанру
        </h2>
        <p className="typo-body mt-4">
          Герої пісень цього жанру — історичні особи, славні подвиги яких викарбовувалися в народній пам'яті. Скупі
          відомості про визначні події найдавніших часів можна одержати з літописів, пізніше — з наукових книг, дані в
          яких точніші, але й сухіші. В пісні усе наче оживає, наповнюється звуками і барвами.
        </p>
        <p className="typo-body mt-4">
          Найдавніші пісні долинули до нас із ХV сторіччя, з часів турецько-татарського лихоліття, пожеж, руїн: “стару
          неньку зарубали, а миленьку в полон взяли…” (“За річкою вогні горять”). Проте й за тих часів, і пізніше
          розорені, розтоптані ординською кіннотою люди не принижувались до того, щоб з хлібом-сіллю просить змилування
          у ворогів:
        </p>
        <p className="typo-body italic mt-4">
          — Бодай турки і татари того не діждали,
          <br />
          Щоб наші побережці з хлібом виходжали!
          <br />
          (Славна була в Побережу всіма сторонами)
        </p>
        <p className="typo-body mt-4">
          Навіть жінки брали в руки зброю, захищаючи рідний край. Пісня “Славний город Ведмедівка” повідає, як
          ведмедівська попівна “сімсот турків-яничар з коней повалила”. Зрозуміло, що справа тут не в названій цифрі, а
          в поетичному відображенні кривавої боротьби ведмедівців з напасниками.
        </p>
        <p className="typo-body mt-4">
          Таке ж символічне число назване у пісні про вірного соратника Богдана Хмельницького — Івана Богуна:
        </p>
        <p className="typo-body italic mt-4">
          Ой наточив Іван Богун невірам вина —
          <br />
          Та було їх сорок тисяч, а тепер нема!
        </p>
      </div>
    </>
  );
};

export default IstorychniPisniPage;
