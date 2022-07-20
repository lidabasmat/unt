import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const DumyPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "dumy"}}) {
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
        title="Думи"
        description="Думи — один із жанрів фольклору; ліро-епічні твори української усної словесності про події з життя козаків XVI—XVIII століть."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Думи
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Думи — один із жанрів фольклору; ліро-епічні твори української усної словесності про події з життя козаків XVI—XVIII століть.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список думи
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
          Опис жанру дум
        </h2>
        <p className="typo-body italic mt-4">
          Наша дума, наша пісня
          <br />
          Не вмре, не загине…
          <br />
          От де, люде, наша слава,
          <br />
          Слава України!
        </p>
        <p className="typo-body mt-4">
          З фольклорного моря української пісенності Великий Кобзар недарма вирізнив саме думу, напророкувавши їй славне
          довголіття. В думах-бо — неписана історія українського народу, героїчні й трагічні її сторінки, причому не
          переказані з літописною безпристрасністю, а виспівані емоційно, піднесено, схвалюючи “козацькі звичаї”
          безкорисливих і мужніх Голоти, Нетяги та інших героїв, які самі “ні города, ні села не займають”, але
          нападникам дають нищівну відсіч, бо так велить справедливість:
        </p>
        <p className="typo-body italic mt-4">
          Нетяга каже:
          <br />
          Татарине старий,
          <br />
          Не буду я злий такий на тебе,
          <br />
          Як ти на мене.
          <br />
          Як ти мене хотів брати,
          <br />
          До Килиї мя проводити,
          <br />
          Хотів червонії за мене шликами брати.
          <br />
          А тепер, татарине, жарту козацького не знаєш
          <br />
          Та із коня ся валяєш,
          <br />
          Нічому ся не спротивляєш…
        </p>
      </div>
    </>
  );
};

export default DumyPage;
