import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const BaladyPage = () => {
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
          <h1 className="typo-h1">
            балади
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
          Балада — як жанр народнопісенної творчості увійшла у вітчизняну науку на початку ХІХ ст. Відомий дослідник
          слов’янського фольклору М. Драгоманов так охарактеризував цей жанр: “То пісні епічного змісту, що, оповідаючи,
          звичайно мають за сюжет яку-небудь сумно-ефектну подію: вбивство свояка, жінки, мужа, отрута брата і т.п.” [1]
          — і в цьому подібність балади до пісні-хроніки, але балада не дає конкретних імен і конкретних обставин.
          Існує багато варіантів балад, в яких той самий випадок поміщається у різні географічні й часові координати;
          по-різному звучать й імена героїв, тому що в баладі, як зазначав В. Г. Бєлінський, “головне не подія, а
          відчування, яке вона збуджує, думка, на яку вона наводить” [2]. Романтична піднесеність, елементи фантастики,
          трагічний фінал, моралізаторство — все це вирізняє баладу серед інших пісенних жанрів.
        </p>
        <p className="typo-body mt-4">
          До найдавніших слід віднести балади з міфологічними мотивами: невістка, проклята свекрухою, стає тополею або
          калиною; зрізана з дерева на сопілку гілочка промовляє людським голосом; віддана за нелюба заміж дочка
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
          Відповідно до народної етики й моралі майже всі балади закінчуються заслуженою карою або запізнілим каяттям
          злочинців чи призвідців трагедії. Цей момент, як і деякі інші, споріднює баладу з казкою, але кожен із жанрів
          у розв’язці має і певну специфіку: якщо казка наприкінці обов’язково компенсує страждання героя,
          винагороджуючи його статками і щасливим одруженням, а слухача — розповіддю про торжество справедливості, то
          балада викликає складніші й тонші емоції, змушуючи нас співпереживати трагічній долі тих, що постраждали
          безвинно. Ідейно-образний світ балад ліричніший, емоційніший від епічного, вони зіткані з драматичних колізій,
          які вимагають постійного, напруженого співпереживання.
        </p>
        <p className="typo-body mt-4">
          Найдавніший запис балади знаходимо в рукописній граматиці чеського вченого Яна Благослава (“Дунаю, Дунаю,
            чему смутен течеш?”). Починаючи з ХІХ ст. балади публікуються в багатьох збірниках українського фольклору.
        </p>
        <p className="typo-body mt-4">
          Глибоко проаналізував баладну творчість І. Франко (“Студії над українськими народними піснями”, “Жіноча неволя
          в руських піснях народних” та ін.). Розглядові балади на широкому тлі слов’янської народної творчості 
          присвячені праці О. Потебні, Ф. Колесси, К. Квітки.
        </p>
        <h2 className="typo-h2 mt-10">
          Примітки
        </h2>
        <p className="typo-body mt-4">
          [1] Розвідки Михайла Драгоманова про українську народну словесність і письменство. Львів, 1899. — Т. І. — С. 67.
        </p>
        <p className="typo-body mt-4">
          [2] В. Белинський. Розподіл поезії на рід та види / / Повна збірка творів — М., 1954. — Т. 5. — С. 51.
        </p>
      </div>
    </>
  );
};

export default BaladyPage;
