import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const KupalskiPisniPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "kupalski-pisni"}}) {
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
        title="Купальскі пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            купальскі пісні
          </h1>
          <p className="typo-body mt-4 max-w-md">
            Купальські пісні — обрядові пісні, які співали на Івана Купала, біля ритуального вогнища.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Список купальских пісень
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
    </>
  );
};

export default KupalskiPisniPage;
