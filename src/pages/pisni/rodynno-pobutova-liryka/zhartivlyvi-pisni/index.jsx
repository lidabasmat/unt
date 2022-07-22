import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const ZhartivlyviPisniPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "zhartivlyvi-pisni"}}) {
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
        title="Жартівливі пісні"
        description="Жартівливі пісні — жанр українського музичного фольклору, що характеризується жартівливим чи сатиричним змістом."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Жартівливі пісні
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Жартівливі пісні — жанр українського музичного фольклору, що характеризується жартівливим чи сатиричним змістом.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список жартівливих пісень
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
          Опис жанру жартівливої пісні
        </h2>
        <p className="typo-body mt-4">
          Жартівливі пісні — численні за кількістю і розмаїті за тематикою — становлять значний розділ української
          народної пісенності, це здавна було відзначено фольклористами. Ще в середині минулого сторіччя М. Закревський
          підкреслив, що в цих піснях бачимо «привілля для веселощів, іронії, дотепу українця, без яких він не може
          жити. Ця веселість тим привабливіша, що вона непідробна, природна; а дотепність, неначе іскра, часто
          з'являється несподіва­но і з блиском».
        </p>
      </div>
    </>
  );
};

export default ZhartivlyviPisniPage;
