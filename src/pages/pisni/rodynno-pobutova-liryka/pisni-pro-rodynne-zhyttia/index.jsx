import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const PisniProRodynneZhyttiaPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "pisni-pro-rodynne-zhyttia"}}) {
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
        title="Пісні про родинне життя"
        description="Пісні про родинне життя говорять про радість і смуток, щастя материнства й горе сирітства, сімейну злагоду й незгоду."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Пісні про родинне життя
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Пісні про родинне життя говорять про радість і смуток, щастя материнства й горе сирітства, сімейну злагоду й незгоду.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список пісень про родинне життя
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
          Опис жанру пісні про родинне життя
        </h2>
        <p className="typo-body mt-4">
          У піснях про родинне життя переважають мотиви радості та смутку, радості бути мамою та горя сирітства,
          сімейної ідилії й незлагоди; багато пісень створені жінками, нещасними в шлюбі. Вивчаючи описи жіночого
          нещастя в народних піснях, Іван Франко коментував, що часто можна зустріти безліч сумних та жалібних болючих,
          розповідаючи нам про таку тяжку долю, що, замислившись над тими піснями і тим життям, котре їх викликало, ми
          не можемо не злякатися, не можемо не задати собі запитання: невже це можливо?! [1] На жаль, часто молоду
          дівчину видавали за хлопця лише з розрахунку на ліпше матеріальне становище нареченого. А згодом, у чужій
          родині, вона перетворювалася в наймичку, над якою знущалася мати чоловіка, бо невістка — то не своя дитина;
          підбурений своєю ненькою, чоловік хапав до рук батога.
        </p>
        <p className="typo-body italic mt-4">
          Ой там за горою, там за крем'яною
          <br />
          Не по правді жиє чоловік з жоною.
          <br />
          Вона йому стелить білу постелечку,
          <br />
          Він на ню готовить з дроту нагаєчку...
        </p>
        <p className="typo-body mt-4">
          Біду переживала та жінка, в якої чоловік пив, бо він вдома не працює, лише п’є, а як приходить додому, то
          свою дружину б’є.
        </p>
        <p className="typo-body mt-4">
          Родинні перипетії, які доречно підмітив Іван Франко, у більшій частині випадків були створені «не на грубих
          та варварських звичаях народних», бо відчуття і здоровий глузд нації чинить опір їм, а породжені вони під
          впливом «недобрих фактів матеріальних» [2].
        </p>
        <h3 className="typo-h3 mt-10">
          Примітки
        </h3>
        <p className="typo-body mt-4">
        [1] Франко І. Вибрані статті про народну творчість. — Київ, 1955. — С. 107.
        </p>
        <p className="typo-body mt-4">
        [2] Франко І. Зібрання творів: В 50-ти т. — Київ, 1980. — Т. 26. — С. 244-245.
        </p>
      </div>
    </>
  );
};

export default PisniProRodynneZhyttiaPage;
