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
          Список дум
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
          Опис жанру думи
        </h2>
        <p className="typo-body mt-4">
          З фольклорних джерел українських пісень в книзі Кобзар недарма виділена саме дума, напророкувавши їй уславлене
          довголіття. В цьому жанрі пісень описаний перебіг подій нашого народу, звитяжні й жахливі її аркуші, до того
          ж не описані з літописною незацікавленістю, а оспівані душевно, натхненно, підтримуючи “козацькі звичаї”
          непожадливих і хоробрих Нетяги, Голоти і других героїв, які “ні города, ні села не займають”, однак
          загарбникам чинять тотальний опір, бо так наказує праведність.
        </p>
        <p className="typo-body mt-4">
          Тематично подібна до думи про козака Нетягу дума про козака Голоту закінчується, як і більшість дум цього
          циклу, вславленням героя:
        </p>
        <p className="typo-body italic mt-4">
          А слава не вмре, не поляже
          <br />
          Од нині до віка!
          <br />
          Даруй, Боже, на многії літа!
        </p>
        <p className="typo-body mt-4">
          Гарячим співчуттям сповнені думи про козаків, що потрапили в турецьку неволю, і їм, прикутим до галер,
        </p>
        <p className="typo-body italic mt-4">
          Тяжкая неволя добре далась знати:
          <br />
          Кайдани руки та ноги покривали,
          <br />
          Сирая сириця тіло козацьке-молодецьке
          <br />
          До жовтої кості проїдала…
        </p>
        <p className="typo-body mt-4">
          Думи цього циклу називалися ще невольничими плачами, козацькими або лицарськими піснями. Серед них є думи з
          оптимістичним фіналом. Наприклад, у думі про Самійла Кішку розповідається, як він, більше піввіку прикутий до
          галери, знайшов спосіб визволитися, ще й усіх своїх товаришів вивезти в Україну. Невільниця Маруся Богуславка,
          яка заплатила власним життям задля того, щоб врятувати сімсот невільників, які тридцять літ не бачили світу
          білого. Вони вирушили в рідну сторону “на ясні зорі, на тихі води, у край веселий, у мир хрещений”.
        </p>
        <p className="typo-body mt-4">
          У думі про втечу трьох братів з турецької неволі розказано про їх трагічну загибель — старших кінних, а
          молодшого пішого, який, позбивавши ноги до крові й засипаючи рани піском, хапався за стремена і благав братів
          хоч трішечки його підвезти, але брати думали тільки про себе та не врятувалися. Народна мораль засуджує
          жорстокість, тим більше, коли йдеться про рідню.
        </p>
        <p className="typo-body mt-4">
          Епічна традиція, за словами М. Чернишевського, зумовлена енергією народного буття. Такою вікопомною, значною
          подією стала всенародна боротьба проти шляхетсько-польських загарбників. За нових історичних подій думи
          поширюють такі ж проблеми, як і в минулі сторіччя: величаються і безіменні звитяжці, і відомі полководці —
          Іванов Богун, Іванов Сірко, Семен Палій, Максим Кривонос, Данило Нечай і перш за все Богдан Хмельницький.
        </p>
        <p className="typo-body mt-4">
          Не одне сторіччя продовжувалося боріння українців проти пригнічення релігії, громадськості, державності. Так
          склалося історично, що тривалий час ворогами народу лишалася дворянська Річ Посполита, “ляхи — мостиві пани”.
          А лють пригнічених зверталася не на звичайних польських мешканців, а на шляхту і командира. Ще й на особистих
          “дук-срібляників”, які частіше за все заперечували приналежність до власної нації. В думах термін “лях”
          стосується  не лише військових супротивників, але до них відносяться: зрадник Барабаша, переяславець
          Довгополенко, ніженець Войтенка, чернігівець Золотаренка, ключник на турецькому судні Ботурлака (потурнака).
        </p>
        <p className="typo-body mt-4">
          У думах, як були створені опісля, ще чіткіше виступають соціально-побутові мотиви. Герої лишаються без імені:
          “Сестра та брат”, “Бідна вдова і три сини”, “Повернення сина” і т.д. Метою співця було розголошення
          загальнолюдських морально-етичниї проблем, — осудити гордість, байдужість, непорядність і нагадати, як
          потрібна людям самопоміч, співпереживання, шляхетність і зичливість.
        </p>
        <p className="typo-body mt-4">
          На вершині нової хвилі всенародних заворушень кобзарі звертаються до конкретних виявів класової боротьби
          (наприклад, дума про чорну неділю в Сорочинцях, коли в 1905 р. каральна експедиція жорстоко розправилася з
            повсталими селянами).
        </p>
        <p className="typo-body mt-4">
          За яких умов виник думовий епос достовірно не відомо. Давайте замислимося над самим терміном “дума”. Письмові
          джерела, українського та польського походження ще в ХVI ст. зберігають дані про опис історичних пісень і
          суміжних з нею категорій. У 1819 р. близько десяти українських дум оприлюднив М. Цвертелєв у збірці
          українських народних пісень, але визначення “дума” там не переважав. К. Рилєєв, захоплений українським
          пісенним фольклором, назвав свій збірник “Думами” (1825 р.), в нього увійшли авторські твори й історичні
          пісні, але власне думи там не зустрічалися. Вперше як окремий оригінальний жанр українські народні думи
          розглядав М. Максимович. Він відзначив унікальність дум тим, що, ці пісні мають характер оповіді, довільний
          віршовий розмір, акомпонемент. З тих пір — з 30-х рр. минулого сторіччя — шукачі українського фольклору
          використовують слово “думи” на визначення епічних пісень з детальним описом про випадки, значущі для всього
          народу, пісень, які виконувалися протяжним проказуванням тексту під звуки бандури чи кобзи.
        </p>
        <p className="typo-body mt-4">
          Хочеться ще порівняти значення схожого болгарського “дума”, яке має значення “слово”. Термін „слово” на
          позначення історичної пісні відоме для слов'ян ще з ХІІ ст. Пам’ятаєте “Слово о полку Ігореве”? Боян, цей
          “соловей старого часу”, накладав на живі струни віщі персти свої, і вони самі князям славу рокотали. Згадавши
          Бояна, автор цього твору звертається до теперішніх для нього билинних звичаїв. Пишний, торжествений лад
          зобов’язував до мелодійності, притаманної думам, і билинам, яка і стала отримана за допомогою протяжного
          проказування тексту пісні і акомпанементу. Науковці звернули свою увагу на подібність дум та голосінь і
          засвідчували це плачем Ярославни із “Слова о полку”. Якщо “слово” і “дума” мають однакове значення, а твори,
          мають назви цих визначень, схожі за тематикою та методом втілення, то є певні сенс думати, що історія дум
          починається з ХІІ ст., тільки як жанр української народної творчості вони стали окремими пізніше, десь у ХV ст.
        </p>
        <p className="typo-body mt-4">
          Кобзарі чи бандуристи — це народні мийстри. Хоча частина з них не тільки виконавці, а й автори дум (їхнє
            авторство пізніше було закріплене у друкові), але самі твори продовжують функціононувати за фольклорними
            законами, тобто поширюються усно, передаючись з покоління в покоління і піддаючись певному варіюванню.
            Виконавці дум повинні були володіти голосним, гарного тону голосу, бо ж співалося “на розпуттях велелюдних”,
            на майданах, на ярмарках. Потрібен був і музичний талант для вмілого акомпанування чи й виконання
            індивідуальних музичних творів (напр., знаменитого козацького маршу Є. Адамцевича).
        </p>
        <p className="typo-body mt-4">
          Навчалися кобзарі три роки у фахових кобзарських школах, де їх навчали учителі наставники (а бо як їх ще
            називали старші кобзарі-майстри). Наприкінці ХVІІ ст. були утворені братства кобзарів, які слугували для
            збагачення мистецтва та збільшенню творів для виконання; вони служили самообороні та захистові їхніх
            професійних інтересів. Найбільш відомими кобзарями тих часів були: Андрій Шут, Остап Вересай, Іван та
            Михайло Кравченки. Михайло мав дружні стосунки з Тарасом Шевченком, який вручив свій «Кобзар» з власним
            підписом, з поваги до таланту та праць О.Вересая. Думи М. Кравченка були записані на фонограф Ф. Колессою за
            фінансової підтримки Лесі Українки. У збиранні, публікації і дослідженні дум брали участь М. Драгоманов,
            М. Лисенко, П. Мартинович, І. Франко, О. Потебня, М. Сумцов, Д. Яворницький. В 1972 році вийшло видання
            “Українські народні думи”. Думові традиції продовжили Єгор Мовчан, Євген Адамцевич, Григорій Ільченко та ін.
        </p>
        <p className="typo-body mt-4">
          Грандіозний вплив на народну думову творчість був здійснений за допомогою доробку Т. Шевченка, п’єси Ю.
          Яновського “Дума про Британку”, драми М. Старицького “Маруся Богуславка”, опери М. Лисенка “Тарас Бульба”.
        </p>
      </div>
    </>
  );
};

export default DumyPage;
