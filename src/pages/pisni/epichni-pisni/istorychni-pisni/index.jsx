import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const IstorychniPisniPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "istorychni-pisni"}}) {
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
        title="Історичні пісні"
        description="Історична пісня — це ліро-епічний твір, у якому відтворено історичні події чи конкретні історичні постаті та висловлено ставлення народу до них."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Історичні пісні
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Історична пісня — це ліро-епічний твір, у якому відтворено історичні події чи конкретні історичні постаті та висловлено ставлення народу до них.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список історичних пісень
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
          Герої пісень цього жанру — історичні особи, славні подвиги яких викарбовувалися в народній пам'яті. Скупі
          відомості про визначні події найдавніших часів можна одержати з літописів, пізніше — з наукових книг, дані в
          яких точніші, але й сухіші. В пісні усе наче оживає, наповнюється звуками і барвами.
        </p>
        <p className="typo-body mt-4">
          Найдавніші пісні долинули до нас із ХV сторіччя, з часів турецько-татарського лихоліття, пожеж, руїн: “стару
          неньку зарубали, а миленьку в полон взяли…” (“За річкою вогні горять”). Проте й за тих часів, і пізніше
          розорені, розтоптані ординською кіннотою люди не принижувались до того, щоб з хлібом-сіллю просить змилування
          у ворогів:
        </p>
        <p className="typo-body italic mt-4">
          — Бодай турки і татари того не діждали,
          <br />
          Щоб наші побережці з хлібом виходжали!
          <br />
          (Славна була в Побережу всіма сторонами)
        </p>
        <p className="typo-body mt-4">
          Навіть жінки брали в руки зброю, захищаючи рідний край. Пісня “Славний город Ведмедівка” повідає, як
          ведмедівська попівна “сімсот турків-яничар з коней повалила”. Зрозуміло, що справа тут не в названій цифрі, а
          в поетичному відображенні кривавої боротьби ведмедівців з напасниками.
        </p>
        <p className="typo-body mt-4">
          Таке ж символічне число назване у пісні про вірного соратника Богдана Хмельницького — Івана Богуна:
        </p>
        <p className="typo-body italic mt-4">
          Ой наточив Іван Богун невірам вина —
          <br />
          Та було їх сорок тисяч, а тепер нема!
        </p>
        <p className="typo-body mt-4">
          Про одчайдушного Данила Нечая, завзятого Максима Кривоноса — героїв визвольної війни 1648 — 1654 рр., можливо,
          склали пісні їхні сподвижники, настільки живо і яскраво вимальовуються їхні постаті. Оспівані у піснях і герої
          повстання 1768 р., названого Коліївщиною — Залізняк, Гонта, Гнат Голий. Протягом трьох віків карається
          народним презирством зрадник Сава Чалий (“Ой був в Січі старий козак”).
        </p>
        <p className="typo-body mt-4">
          …Хвилюються на пагорбах дозрілі жита, черкають серпами женці, а розігнувши натомлені спини, бачать, як увесь
          видолинок наче зацвів червоними маками — то йде запорізьке військо; женці ще здалека впізнають молодцюватого
          Дорошенка, що веде народ; доброю посмішкою проводжають бувалого в бувальцях Сагайдачного, що йде собі, не
          поспішаючи, і розкурює свою знамениту люльку (“Ой на горі да женці жнуть”).
        </p>
        <p className="typo-body mt-4">
          Як з найближчим другом ділиться з вами своїм горем Устим Кармелюк, що, наголодувавшись, намерзнувшись у
          сибірських казематах, витерпівши нелюдські муки, позбувся кайданів, але й у себе вдома потрапив у неволю.
          Тільки рідній людині можна виповісти те, що гнітить серце: “Маю жінку, маю діти, та я їх не бачу, як згадаю
          про їх долю, сам не раз заплачу”. Як наївно-довірливо звучать його слова про намагання встановити справедливу
          рівність для всіх: “Я багатих розбиваю, бідних награждаю, а так гроші розділивши, сам гріха не маю”
          (“Повернувся я з Сибіру”).
        </p>
        <p className="typo-body mt-4">
          Особливості народних історичних пісень дуже точно визначено у М. Гоголя “Історик не повинен шукати в них
          вказання дня і числа битви або точного пояснення місця… Але коли він захоче пізнати справжній побут, стихії
          характеру, всі найтонші відтінки почуттів, хвилювань, страждань, радощів описуваного народу, коли захоче
          вдихнути дух минулого віку, загальний характер всього цілого і кожного окремого, то він буде задоволений
          цілком: історія народу розкривається перед ним у ясній величі”.
        </p>
        <p className="typo-body mt-4">
          Історичні пісні надихали багатьох поетів, драматургів, прозаїків, зокрема ряд віршів Т. Шевченка побудовано
          на сюжетах і образах історичних пісень. У повісті Марка Вовчка “Кармелюк” знаходимо цитати з історичних пісень
          про У. Кармелюка. В кінокартині “Богдан Хмельницький” (за п’єсою О. Корнійчука) звучать фрагменти народних
          історичних пісень про самого Богдана та його бойових побратимів — Кривоноса, Нечая, Богуна та ін.
        </p>
      </div>
    </>
  );
};

export default IstorychniPisniPage;
