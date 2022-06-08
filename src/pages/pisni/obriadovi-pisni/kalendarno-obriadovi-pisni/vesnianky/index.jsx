import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const VesniankyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "vesnianky"}}) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const songs = data.songs.nodes;

  return (
    <>
      <Seo
        title="Веснянки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            веснянки
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row mt-4">
          {songs.map((song) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={song.slug} className="typo-small">
                {song.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VesniankyPage;
