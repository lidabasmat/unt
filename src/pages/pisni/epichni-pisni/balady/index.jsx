import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const BaladyPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "balady"}}) {
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
        title="Балади"
        description="Балада — жанр ліро-епічної поезії фантастичного, історико-героїчного або соціально-побутового характеру з драматичним сюжетом."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Балади
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Балада — жанр ліро-епічної поезії фантастичного, історико-героїчного або соціально-побутового характеру з драматичним сюжетом.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список балад
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
          Балада — як жанр фольклору ввійшла у вітчизняну науку на початку ХІХ ст. Український дослідник слов’янського
          фольклору Михайло Драгоманов визначив даний жанр так, що словесні твори епічного значення, розповідаючи,
          здебільшого мають в своєму сюжеті будь-яку смутно-яскравий випадок: отруєння брата, вбивство брата дружини,
          самої дружини чи чоловіка, і тому подібне [1] — в цьому і є схожість балади до пісні-хроніки, але перша не
          надає чітких імен та чітких обставин. Існує багато варіантів балад, в яких той самий випадок поміщається у
          різні географічні й часові координати; по-різному звучать й імена героїв, тому що в баладі, як зазначав В. Г.
          Бєлінський, “головне не подія, а відчування, яке вона збуджує, думка, на яку вона наводить” [2]. Романтична
          піднесеність, елементи фантастики, трагічний фінал, моралізаторство — все це вирізняє баладу серед інших
          пісенних жанрів.
        </p>
        <p className="typo-body mt-4">
          До найдавніших слід віднести балади з міфологічними мотивами: невістка, проклята свекрухою, перетворюється в
          тополю або калину; зрізана з дерева на сопілку гілка балакає людським голосом; віддана за немилого заміж дочка
          повертається до рідного дому, ставши зозулею. Балади можуть розробляти ліричну сюжетику, але на відміну від
          історичних пісень балади ліричніші, в них більше виражені емоційні акценти: полонена татарином мати
          зустрічається з дочкою, яку вважала загиблою під час давнього набігу татар. Дочка не впізнає матір і радить
          чоловікові-татаринові убити стару.
        </p>
        <p className="typo-body mt-4">
          В баладах родинно-побутового характеру підкреслюється моральна перевага бідності над панством. В узагальненому
          образі Бондарівни (балада, очевидно, виникла на ґрунті дійсної події) утверджується людська гідність. Пан не
          може присилувати дівчину виконати його забаганку, навіть коли погрожує, що вб’є її:
        </p>
        <p className="typo-body italic mt-4">
          Ой волю ж я, пан Каньовський, в сирій землі гнити,
          <br />
          Ніж з тобою на неволі на цім світі жити!
        </p>
        <p className="typo-body mt-4">
          Велика група балад присвячена темі нерозділеного кохання, що приводить до трагічного фіналу, зведення й
          загибелі дівчини.
        </p>
        <p className="typo-body mt-4">
          Зазвичай майже кожна балада завершується заробленою карою або пізнім покаянням злочинців чи призвідців лиха,
          відповідно до народної моралі та етики. Цей жанр має спільні ознаки з казкою, однак є і певні особливості.
          Наприклад в казці зазвичай всі негаразди та випробування героя компенсуються, у вигляді матеріальних благ або
          щасливого одруження або і те і інше, а слухач в свою чергу отримує чудову розповідь про перемогу
          справедливості. Однак в баладі все трохи інакше, вона викликає важчі почуття, заставляючи нас співчувати
          тяжкій долі тих, хто зазнав мук невинно. Ідея та образ балади є ліричною, емоційною, вона створена з
          драматичних колізій, які змушують до інтенсивного, завзятого переживання за героїв.
        </p>
        <p className="typo-body mt-4">
          Найбільш давню нотатку пісень жанру балад помітили в рукописній граматиці вченого чеського походження Яна
          Благослава (“Дунаю, Дунаю, чему смутен течеш?”). Починаючи з ХІХ ст. балади оприлюднюються в багатьох добірках
          українського фольклору.
        </p>
        <p className="typo-body mt-4">
          Глибоко проаналізував баладну творчість І. Франко (“Студії над українськими народними піснями”, “Жіноча неволя
            в руських піснях народних” та ін.). Розглядові балади на просторому тлі української народної творчості
            присвячені праці О. Потебні, Ф. Колесси, К. Квітки.
        </p>
        <h3 className="typo-h3 mt-10">
          Примітки
        </h3>
        <p className="typo-body mt-4">
          [1] Розвідки Михайла Драгоманова про українську народну словесність і письменство. Львів, 1899. — Т. І. — С.
          67.
        </p>
        <p className="typo-body mt-4">
          [2] В. Белинський. Розподіл поезії на рід та види / / Повна збірка творів — М., 1954. — Т. 5. — С. 51.
        </p>
      </div>
    </>
  );
};

export default BaladyPage;
