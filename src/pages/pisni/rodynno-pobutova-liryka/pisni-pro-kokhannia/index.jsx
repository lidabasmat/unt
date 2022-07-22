import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const PisniProKokhanniaPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "pisni-pro-kokhannia"}}) {
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
        title="Пісні про кохання"
        description="Пісні про кохання становлять найбільший масив родинно-побутової лірики. В них передаються усі перипетії відносин."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Пісні про кохання
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Пісні про кохання становлять найбільший масив родинно-побутової лірики.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список пісень про кохання
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
          Опис жанру - пісня про кохання
        </h2>
        <p className="typo-body mt-4">
          Пісні про кохання становлять найбільший масив родинно-побутової лірики. В них передаються усі перипетії
          відносин двох: і перше несміливе почуття, яке боїться виказати себе навіть поглядом, і відкрите утвердження
          щастя любити і бути любленим, і сумніви та образи, і біль розлуки, і невтішне горе зраджених і покинутих, і
          гадки про одруження, про майбутню долю.
        </p>
        <p className="typo-body mt-4">
          Глибоке й сильне почуття підказує звичайній селянській дівчині слова, повні хвилюючої поезії. Виспівуючи свою
          любов, дівчина добирає зворушливі у своїй простоті й правдивості слова. Для неї від миленького кращого немає,
          бо в нього все гарне: «любая розмова», «та що сам молод, під ним кінь ворон, ще й в сопілку грає!», навіть
          його сліди їй дорогі: «Та вирву я, вирву кленовий листочок, прикрию, пристелю милого слідочок»...
        </p>
        <p className="typo-body mt-4">
          В уяві юнака також постають найпоетичніші образи, коли він думає про свою милу — червону калину, чорноброву,
          пишну,— «ой як вона заговорить — як у дзвін задзвонить, ой як вона заспіває — село розлягає».
        </p>
      </div>
    </>
  );
};

export default PisniProKokhanniaPage;
