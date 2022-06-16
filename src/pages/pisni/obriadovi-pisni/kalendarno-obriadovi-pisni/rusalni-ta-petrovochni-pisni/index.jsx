import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const RusalniTaPetrovochniPisniPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "rusalni-ta-petrovochni-pisni"}}) {
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
        title="Русальні та петровочні пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            русальні та петровочні пісні
          </h1>
          <div className="flex-wrap md:flex justify-between">
            <div>
              <p className="typo-body mt-4 max-w-lg">
                Русальні пісні — окремий рід української народної обрядової пісенності з частими згадками про русалок, зустрічі з ними і їх «проводи».
              </p>
            </div>
            <div>
              <p className="typo-body mt-4 max-w-lg">
                Петрівчані пісні — пісні, які виконувалися у Петрівку (починалась відразу ж після святкування Русального тижня).
              </p>
            </div>
          </div>
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

export default RusalniTaPetrovochniPisniPage;
