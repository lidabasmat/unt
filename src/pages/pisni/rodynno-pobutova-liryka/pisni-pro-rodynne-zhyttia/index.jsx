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
          Пісні про родинне життя — говорять про радість і смуток, щастя материнства й горе сирітства, сімейну злагоду
          й незгоду; чимало пісень складено жінками, нещасливими в сім'ї. Досліджуючи зображення жіночої недолі в
          українських піснях, І. Франко писав: «Зустрічаємо дуже багато так сумовитих, так жалібно болющих, розкриваючих
          нам таку многоту недолі, що, вдумавшись в ті пісні і в те життя, котре їх викликало, ми не можемо но
          вжахнутись, не можемо не спитати самих себе: невже се правда?!» [1] Правдою було те, що часто дівчину видавали
          заміж тільки з розрахунку на кращий майновий стан жениха. А потім, у чужій сім'ї, вона ставала наймичкою, над
          якою збиткувалася свекруха, бо «невістка — чужа кістка»; під'юджуваний матір'ю, чоловік брав у руки нагайку.
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
          Горе було й тій жінці, що «мала мужа — пияка, — бо він ніц не робит, тільки п'є, як прийде додому, як додому
          прийде, жінку молодую б'є».
        </p>
        <p className="typo-body mt-4">
          Сімейні драми, як слушно зауважив І. Франко, у більшості випадків були засновані «не на грубих та варварських
          обичаях народних», бо «чуття і здоровий розум народу супротивляються їм», бо “чуття і здоровий розум народу
          супротивляються їм”, а викликані вони тиском «поганих обставин економічних» [2].
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
