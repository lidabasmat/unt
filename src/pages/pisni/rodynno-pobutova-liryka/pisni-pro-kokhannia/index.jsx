import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../components/icons/YoutubeIcon';

import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const PisniProKokhanniaPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "pisni-pro-kokhannia"}}) {
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
        title="Пісні про кохання"
        description="Пісні про кохання становлять найбільший масив родинно-побутової лірики. В них передаються усі перипетії відносин."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Пісні про кохання
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Пісні про кохання становлять найбільший масив родинно-побутової лірики.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список пісень про кохання
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
          Опис жанру пісні про кохання
        </h2>
        <p className="typo-body mt-4">
          Незважаючи на події, які описані в поетичній ліриці, вона завжди проймає відкритістю та ніжністю. Її авторам
          притаманне чітко-образне мислення, вони описують в своїх творах те, що зачіпає їхні душі, що породжує радісні
          емоції чи навпаки сумні; в ліричних піснях характерно виражаються характери людей: задирлива чи смиренна,
          непіддатлива чи покірна, лайлива чи ніжна. Через відчуття однієї особи передається характер всього народу.
          “Мені завжди здається, — писала Леся Українка, — що коли де можна побачити вдачу народу, то се скоріше в
          ліричних піснях та в коломийках”. Про коломийки поговоримо окремо, а тут відзначимо тільки, що тематика і
          настроєвий діапазон родинно-побутової лірики дуже обширний, а співзвучність із загальнолюдськими переживаннями
          забезпечила їй народну любов і незгасаючу популярність.
        </p>
        <p className="typo-body mt-4">
          Перші публікації української народно-пісенної лірики належить до XVIII ст. (у збірниках пісень М. Чулкова,
            В. Трутовського, І. Прача та ін). Починаючи з XIX ст. родинно побутова лірика публікується регулярно. До
            найбільш відомих досліджень цього жанру належать: дисертація О. Бодянського “Про народну поезію слов’янських
            племен”, праці І. Франка, О. Потебні, М. Лисенка, К. Квітки, Д. Яворницького, А. Кінька, О. Дея.
        </p>
        <p className="typo-body mt-8">
          * * *
        </p>
        <p className="typo-body mt-8">
          Пісні про кохання — серед родинно-побутових пісень займають лідируючу позицію. В цих піснях передаються усі
          злети та падіння взаємовідносин двох людей: про перші почуття, коли боїшся признатися про них і відводиш
          погляд, аби не виказати себе цим, про відкритість своїх намірів, освідчення в коханні, про невтішне горе
          розлучення, про вагання і образи, про болі тих кого зрадили і покинули, про шлюбу і долю, яка очікує в
          майбутньому.
        </p>
        <p className="typo-body mt-4">
          Бездонне та міцне почуття дає підказку звичайній сільській дівчині рядки, повні зворушливої лірики. Оспівуючи
          своє кохання, дівчина підбирає хвилюючі у своїй звичайності й простодушності слова. Для неї від коханого
          більше нікого краще не існує, бо в ньому все прекрасно і його бесіди і його врода і сила і талант до музики,
          навіть його сліди на землі, для неї дорогі.
        </p>
        <p className="typo-body mt-4">
          В думках хлопця з’являються найліричніша картина, — червона калина, чорноброва, пишна,— так він розмірковує
          про кохану — особливість її мови та співу, наскільки гарні, що все село захоплюється нею.
        </p>
        <p className="typo-body mt-4">
          Одним з широко поширених мотивів у піснях про кохання є мотив розруки. Це не є випадковстю: період розквіту
          українського фольклору XV—XVII ст. був періодом лицарської звитяги, дальніх мандрівок, завзятих битв. На
          народну своєрідність побутового життя молодих людей звернув увагу М. В. Гоголь, зазначивши, що тоді молодь
          бачилася дуже короткий відлік часу, а згодом прощалася на роки. Цей період минав для жіночої частини в смутку,
          в очікуванні своїх чоловіків, коханих, які промайнули перед ними в своїй розкішній військовій формі, як міраж,
          як мрія. По цій причині кохання їх стає по особливому ліричним.
        </p>
        <p className="typo-body mt-4">
          Ліричним символом української пісні стала “дівчина з легенди” — Маруся Чурай. Опубліковано понад двадцять
          пісень, приписуваних народній поетесі, що жила й творила у XVII ст. Документально історичність особи Марусі
          Чурай поки що не підтверджено. Тому все, що стосується її долі, межує з легендою. Народній співачці присвячено
          немало художніх творів та досліджень, серед них відома поема Л. Костенко. “Серед творів, які безперечно
          належали Марусі Чурай, найвідоміші “Віють вітри, віють буйні”, “Ой не ходи, Грицю”, “Грицю, Грицю, до роботи”,
          “Сидить голуб на черешні”, “Засвистали козаченьки”, “Котилися вози з гори”.
        </p>
      </div>
    </>
  );
};

export default PisniProKokhanniaPage;
