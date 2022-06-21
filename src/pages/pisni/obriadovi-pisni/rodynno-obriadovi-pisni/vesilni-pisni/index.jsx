import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const VesilniPisniPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "vesilni-pisni"}}) {
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
        title="Весільні пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            весільні пісні
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Весільні пісні — пісні, що супроводжують весільні обряди, пояснюють їх зміст і значення, прославляють молодих та їх батьків.
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
        <div className="py-10">
          <p className="typo-body mt-4">
            Весільні пісні. Українське традиційне весілля неможливо собі уявити без пісень. Вони — невід’ємна складова
            частина бучного, багатолюдного, яскравого обрядового дійства, яке тривало кілька днів, а то й тижнів і мало,
            як тепер ми сказали б, чітко окреслений сценарій з головними та другорядними дійовими особами та виконавцями.
            Не обходилося і без глядачів — запрошених близьких і далеких родичів, сусідів, друзів або й незапрошених односельців,
            які, зачувши музику і співи, просто заходили подивитися, як вбрані молода (наречена) і молодий (наречений),
            як виконуються встановлені звичаєм дії, як грають свої ролі свати й свашки, дівчата-дружки і хлопці-дружби
            (їх ще називали боярами) та інші весільні гості.
          </p>
        </div>
      </div>
    </>
  );
};

export default VesilniPisniPage;
