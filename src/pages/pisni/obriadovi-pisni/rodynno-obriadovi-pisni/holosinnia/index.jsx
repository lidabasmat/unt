import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const HolosinniaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "holosinnia"}}) {
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
        title="Голосіння"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            голосіння
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Голосіння – жанр народної творчостi, художнє вираження туги й горя, болю й розпуки.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список голосінь
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
          Голосіння — це народно-поетичні твори, пов’язані з похоронним обрядом. В їх основі лежать стародавні уявлення
          про те, що померлий продовжує існувати в невідомому далекому краю, але його зв’язок з оточенням, в якому
          перебував до смерті, триває. Тому в голосіннях зверталися до мерця, як до живого, виповідаючи йому свої жалі,
          вихваляючи, прагнучи “розбудити” і благаючи повернутися. Виконували цю частину обряду жінки.
        </p>
        <p className="typo-body mt-4">
          Голосіння мають усталену композицію, образність, ритміку, а подеколи й римування, що зближує їх з іншими
          видами обрядової пісенності. Саме ці ознаки дозволили В. Гнатюкові твердити, що хоч “похоронні голосіння…
          переважно відбігли далеко від звичайної пісні, але… належать цілковито до неї… Голосіння в’яжуться стисло
          з похоронним обрядом”. [1]
        </p>
        <h3 className="typo-h3 mt-14">
          Примітки
        </h3>
        <p className="typo-body mt-4">
          [1] Гнатюк В. Похоронні голосіння. Похоронні звичаї й обряди. Від редакції // Етнографічний збірник. — Т.
          ХХХІ — ХХХІІ. — Львів, 1912.
        </p>
      </div>
    </>
  );
};

export default HolosinniaPage;
