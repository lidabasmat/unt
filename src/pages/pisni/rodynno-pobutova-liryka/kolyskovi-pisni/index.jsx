import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const KolyskoviPisniPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "kolyskovi-pisni"}}) {
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
        title="Колискові пісні"
        description="Колискова — жанр народної родинної лірики, специфічний зміст і форма якої функціонально зумовлені присиплянням дитини в колисці."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            колискові пісні
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Колискова — жанр народної родинної лірики, специфічний зміст і форма якої функціонально зумовлені присиплянням дитини в колисці.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список колискових пісень
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
          Колискові пісні виділяються в окремий цикл, тому що мають чітко окреслені тематику і функцію, вони призначені
          тільки для одного слухача — дитини і мають тільки одного виконавця — матір або близьку людину.
        </p>
      </div>
    </>
  );
};

export default KolyskoviPisniPage;
