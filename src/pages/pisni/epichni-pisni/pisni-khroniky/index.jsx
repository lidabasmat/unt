import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const PisniKhronikyPage = () => {
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
        description="Пісні-хроніки — є літературним жанром, який відображає неординарні, виняткові події громадсько-побутового та родинно-побутового характеру"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            пісні-хроніки
          </h1>
          <p className="typo-body mt-4 max-w-3xl">
            Пісні-хроніки — є літературним жанром, який відображає неординарні, виняткові події громадсько-побутового та родинно-побутового характеру, цей
            літературний жанр описує реальні факти, з усіма подробицями інформуючи про особливе в житті людини або колективу.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row mt-4">
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

export default PisniKhronikyPage;
