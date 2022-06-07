import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const KoliadkyTaShchedrivkyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs1: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-hospodariu-ta-yoho-rodyni"}}) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const songs1 = data.songs1.nodes;

  return (
    <>
      <Seo
        title="Колядки та щедрівки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            колядки та щедрівки
          </h1>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Колядки та щедрівки господарю та його родині
        </h2>
        <div className="row mt-4">
          {songs1.map((song) => (
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

export default KoliadkyTaShchedrivkyPage;
