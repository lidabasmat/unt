import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const KolyskoviPisniPage = ({ pageContext }) => {
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
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Колискові пісні
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
          Колискові пісні виділені в окремий цикл родинно-побутових пісень, так як мають індивідуальну особливість та
          призначення, їх застосування здійснюється лише для єдиної людини — малечі і при цьому мають лише єдиного
          виконувача — неньку або дуже близьку особу.
        </p>
        <p className="typo-body mt-4">
          Матір та дитина — це найкраще втілення духовного зв’язку. “Нічого кращого немає, як тая мати молодая з своїм
          дитяточком малим”, — писав Тарас Григорович. Особливий контакт, який починаючи з перших днів існування дитини
          з мамою, отримує вічний відбиток у проймаюче чуйних колискових. Всю ласкавість, чуттєвість, кохання, жадання
          своїй дитині щасливого життя, розуму, здоров’я, краси. Ненька укладає ці побажання в чуттєві стрічки і простий
          мотив, який формується ритмом колисання. Простий та монотонний наспів, а також ніжні, приязні, чутливі рядки
          мають заспокоювати, присипляти маля. Саме тому так багато в колискових образів тваринок, які поводять себе
          подібно до людей, що в дитячому сприйнятті є звичним. За допомогою колискових діти можуть ознайомитися з
          моральними цінностями, зі щоденними предметами, відбувається стимуляція до хороших вчинків, праці,
          слідкуванням за порядком та добротою до інших.
        </p>
      </div>
    </>
  );
};

export default KolyskoviPisniPage;
