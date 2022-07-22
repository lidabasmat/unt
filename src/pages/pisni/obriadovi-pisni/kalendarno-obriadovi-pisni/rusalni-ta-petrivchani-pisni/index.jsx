import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const RusalniTaPetrivchaniPisniPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "rusalni-ta-petrivchani-pisni"}}) {
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
        title="Русальні та петрівчані пісні"
        description="Русальні пісні — окремий рід української народної обрядової пісенності з частими згадками про русалок, зустрічі з ними і їх «проводи»."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Русальні та петрівчані пісні
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список русальних та петрівчаних пісень
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
          Опис жанрів русальної та петрівчаної пісні
        </h2>
        <p className="typo-body mt-4">
          Русальні пісні виконувалися під час обрядів, пов’язаних з “зеленими святами” чи “клечальною неділею” (кінець
          травня — початок червня). Самі епітети “зелений”, “клечальний” вказують на особливість цього свята —
          вшановувати зелений світ рослинності, яку наші предки одухотворювали. Так само, за стародавніми уявленнями,
          й люди посмертно могли ставати рослинами або людиноподібними духами, які знаходили собі притулок у лісах,
          полях, водах. Свято називалося ще “русальний”, або “мавський”, чи “навій” тиждень, під час якого ці
          фантастичні істоти показувалися в селі.
        </p>
        <p className="typo-body mt-4">
          Віра в русалок, яких народна фантазія наділила надзвичайною красою і підступним характером, виявилась досить
          стійкою. Серед багатьох народів Європи залишилися легенди, балади, перекази, й обрядові пісні, в яких
          згадуються мавки (нявки), віли й самовіли, русалки – стрункі, зеленоокі й русокосі дівчата у легкому прозорому
          вбранні, уквітчані водяними лілеями чи польовим зелом. Вони можуть сприяти або шкодити людині в її
          господарських справах; їх улюблене заняття – водити танки, а побачивши необережних юнака чи дівчину, що
          опинилися серед них, втягувати в свої ігрища і залоскочувати до смерті, через що русалок ще звали іноді
          “лоскотухами” чи “лоскотарками”. Проти них були й відомі обереги – деякі види зілля (часник, полин), яких
          русалки не переносили й втікали.
        </p>
        <p className="typo-body mt-4">
          Замаюючи хати й подвір ‘я, водячи з піснями по селу прикрашену зеленню дівчину — “тополю”, завиваючи і
          розвиваючи “берізку”, наші предки вшановували рослинний світ і своїх прародичів у ньому. Ще й досі в деяких
          українських селах на Поліссі в останній день зелених свят “випроваджують русалок із села” — дівчата й жінки у
          віночках, узявшись попід руки, утворюють щільний ряд, перегороджуючи вулицю, і простуючи нею в напрямі лісу,
          поля чи водоймища під спів: “Проводили русалочок, проводили, щоб вони до нас не ходили, да наших дівочок не
          ловили…”. Вважається, що віночки, кинуті на город, сприяють збільшенню врожаю — це одне з реліктовтх вірувань
          у силу магічного впливу на сили природи.
        </p>
        <p className="typo-body mt-4">
          Пісні русального циклу — ліричні, повні радості буття, вони славлять буяння світла, простору, відчуття
          духовного здоров’я. Героїні пісень — дівчата, настрій яких співзвучний із розквітаючою природою: “Ой зросла
          ж я у свого таточка, кохалася в рідної мамочки — ой луги ж мої всі зелені!”
        </p>
        <p className="typo-body mt-4">
          Повір’я про русалок та про чудесне перетворення дівчини оживають у Шевченкових поемах “Причинна”, “Утоплена”,
          “Тополя”. Образи Мавки, Русалки польової та Русалки водяної були навіяні Лесі Українці (“Лісова пісня”)
          народними русальними піснями. Ці ж пісні лягли в основу “Травневої ночі чи Утоплениці” М. Гоголя та
          одноіменної опери М. Лисенка.
        </p>
        <p className="typo-body mt-4">
          * * *
        </p>
        <p className="typo-body mt-4">
          В окрему групу об’єднують пісні, в яких є згадка про найкоротші літні ночі, так звані “петрівочні” (від імені
          Петро — у цей час відзначаються його іменини). Лейтмотив цього циклу — взаємини молодих:
        </p>
        <p className="typo-body italic mt-4">
          Чи ти чула, дівчинонько, як я тебе кликав,
          <br />
          Через твоє подвір’ячко сивим конем їхав?
          <br />
          Ой чи чула, чи не чула, не озивалася.
          <br />
          Темна нічка петрівочка, вийти боялася.
        </p>
        <p className="typo-body mt-4">
          В піснях звучать скарги на малу нічку, коли дівчині виспатися ніколи, а попереду — розлука з привільним
          життям під батьківською стріхою: восени починається пора весіль.
        </p>
        <p className="typo-body italic mt-4">
          До Петра зозулі да кувать, да кувать,
          <br />
          До осені дівці да гулять, да гулять.
        </p>
        <p className="typo-body mt-4">
          Русальні й петрівочні співи стихали напередодні найбільшого літнього свята — Івана Купала.
        </p>
      </div>
    </>
  );
};

export default RusalniTaPetrivchaniPisniPage;
