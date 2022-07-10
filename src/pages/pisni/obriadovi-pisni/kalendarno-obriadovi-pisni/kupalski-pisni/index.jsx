import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const KupalskiPisniPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "kupalski-pisni"}}) {
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
        title="Купальскі пісні"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Купальські пісні
          </h1>
          <p className="typo-body mt-4 max-w-md">
            Купальські пісні — обрядові пісні, які співали на Івана Купала, біля ритуального вогнища.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список купальских пісень
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
          Купальські пісні виконувалися на святі Івана Купала, знаного в усьому язичницькому світі. Стародавній сенс
          купальських обрядів, як і самої назви “Купало” остаточно не з’ясований; із спогадів та пісень, що дійшли до
          наших днів, зрозуміло, що це свято, яке припадає на період літнього сонцестояння (кінець червня — початок
            липня), славить життєдайні сили природи, найсильніші її стихії — сонце (вогонь) і воду.
        </p>
        <p className="typo-body mt-4">
          Запалене колесо встановлювали на високій тичці (це подекуди роблять і тепер) або пускали його на воду. На
          галявині вкопували обрядове дерево, увішане дівочими віночками, потім їх пускали на воду і дивилися: в який
          бік вінок попливе — там і чекатиме суджений. Біля дерева розкладали кострище, і парубки — іноді й у парі з
          дівчатами — перестрибували через вогонь. Купальського вогню не гасили, а залишали дотлівати (“Лежи, лежи,
          Купалочку, в червоному багаттячку”). Вважалося, що саме в купальську ніч зілля має найбільш цілющу силу і
          навіть на мить розквітає папороть. Хто цей цвіт побачить — буде щасливий.
        </p>
        <p className="typo-body mt-4">
          Ще в кінці ХІХ ст. вченими було відзначено, що купальські пісні втратили зв’язок із стародавнім обрядом. У
          найдавніших з них звучить звертання до Купала як до живої істоти, яка ночує, вечеряє, купається. Мотиви
          купання, вінкоплетення, переходять з пісні в пісню; багато з них присвячені оспівуванню почуттів молоді.
        </p>
        <p className="typo-body mt-4">
          Художників, композиторів, письменників приваблювала поетична атмосфера купальських обрядів та пісень. М.
          Гоголь написав “Вечір проти Івана Купала”, М. Старицький — “Ніч під Івана Купала”, М. Стельмах “На Івана
          Купала”.
        </p>
      </div>
    </>
  );
};

export default KupalskiPisniPage;
