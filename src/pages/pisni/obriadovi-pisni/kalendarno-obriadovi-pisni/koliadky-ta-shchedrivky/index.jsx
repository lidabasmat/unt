import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const KoliadkyTaShchedrivkyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs1: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-hospodariu-ta-yoho-rodyni"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs2: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-hospodyni"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs3: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-parubkovi"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
    }
  `);

  const songs1 = data.songs1.nodes;
  const songs2 = data.songs2.nodes;
  const songs3 = data.songs3.nodes;

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
      <div className="container-lg pt-10 md:pt-24 pb-10">
        <h2 className="typo-h2">
          Колядки та щедрівки господарю та його родині
        </h2>
        <div className="row mt-4">
          {songs1.map((song) => (
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
      <div className="container-lg py-10 md:py-10">
        <h2 className="typo-h2">
          Колядки та щедрівки господині
        </h2>
        <div className="row mt-4">
          {songs2.map((song) => (
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
      <div className="container-lg py-10 md:py-10">
        <h2 className="typo-h2">
          Колядки та щедрівки парубкові
        </h2>
        <div className="row mt-4">
          {songs3.map((song) => (
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

export default KoliadkyTaShchedrivkyPage;
