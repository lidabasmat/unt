import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const KoliadkyTaShchedrivkyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs1: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-hospodariu-ta-yoho-rodyni"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs2: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-hospodyni"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs3: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-parubkovi"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs4: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-vdovi"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs5: allSong(filter: {category: {eq: "koliadky-ta-shchedrivky-babusi"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs6: allSong(filter: {category: {eq: "dytiachi-koliadky-shchedrivky-zasivalky-posypalky"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
      songs7: allSong(filter: {category: {eq: "koza-i-malanka"}}) {
        nodes {
          title
          slug
          hasYoutube
        }
      }
    }
  `);

  const songs1 = data.songs1.nodes;
  const songs2 = data.songs2.nodes;
  const songs3 = data.songs3.nodes;
  const songs4 = data.songs4.nodes;
  const songs5 = data.songs5.nodes;
  const songs6 = data.songs6.nodes;
  const songs7 = data.songs7.nodes;

  return (
    <>
      <Seo
        title="Колядки та щедрівки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            колядки та щедрівки
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Колядки та щедрівки — це обрядові пісні, які виконують під час новорічних та різдвяних свят.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Колядки та щедрівки господарю та його родині
        </h2>
        <div className="row mt-8">
          {songs1.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Колядки та щедрівки господині
        </h2>
        <div className="row mt-10">
          {songs2.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Колядки та щедрівки парубкові
        </h2>
        <div className="row mt-10">
          {songs3.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Колядки та щедрівки вдові
        </h2>
        <div className="row mt-10">
          {songs4.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Колядки та щедрівки бабусі
        </h2>
        <div className="row mt-10">
          {songs5.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Дитячі колядки, щедрівки, засівалки (посипалки)
        </h2>
        <div className="row mt-10">
          {songs6.map((song) => (
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
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Коза і Меланка
        </h2>
        <div className="row mt-10">
          {songs7.map((song) => (
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
          <span className="font-extrabold italic">
            Колядки та щедрівки
          </span>
           — пісні, що були важливою складовою чистиною колись розгорнутого обряду зустрічі Нового року. Виконувався обряд в період зимового сояцевороту
          (з 24 грудня по 6 січня).
        </p>
        <p className="typo-body mt-4">
          Вчені гадають, що колядування й щедрування своїм походженням сягає и епоху патріархально-родового суспільно-економічного устрою. Протягом віків
          обряд видозмінювався, поступово включалися нові компоненти, але основний його смисл залишався тим самим: силою слова і обрядових дій сприяти
          добробутові селянської родини, пророкувати і вірити у здійснення побажань удачі у веденні господарства, рясного врожаю на полі і в саду, гарного
          приплоду худоби на оборі.
        </p>
        <p className="typo-body mt-4">
          Походження назви «колядка» остаточно не вияснене, хоч новорічні пісні, об’єднувані цим поняттям, відомі більшості народів Європи. Назва «щед­рівка»,
          що збереглася тільки на Україні, точніше проявляє призначення цього виду пісенності: накликати щедрість природи величальними піснями.
        </p>
        <p className="typo-body mt-4">
          Колядували хлопці, ходячи по дворах із саморобною зіркою, іноді — у супроводі перевдягнених Малапки, кози, ведмедя, солдата. Якщо їх запрошували
          до хати, вони розігрували сценки з народної вистави, яка пер­вісно переслідувала ту ж мсту, що й пісні напророкувати добробут у гос­подарстві
          («Де коза ходить, там жито родить, де коза ногою, там жито копою, де коза рогом, там жито стогом»), а пізніше перетворилися на святочну розвагу.
          Зібрані під час колядування подарунки складали почастуяок на спільній вечері молоді.
        </p>
        <p className="typo-body mt-4">
          Щедрували в новорічну ніч переважно дівчата; в перший день нового року головну роль одержували діти: вони ходили по хатах з «засівалками» чи
          «носипалками», посипаючи навколо себе зерном, і виголошували коротенькі мі |ішики-побажання, які часто мали гумористичне забарвлення.
        </p>
        <p className="typo-body mt-4">
          В колядках і щедрівках на повну силу буяє народна фантазія, бажане видає­ться за дійсне; яскріє казковий світ, де навіть звичайні побутові речі
          світять­ся золотом і сріблом, де панує розважливість, розум, добро і злагода, де всі заможні й веселі — господар такий ясний і красний, як місяць,
          його жона — як сонце, діти — як зірки.
        </p>
        <p className="typo-body mt-4">
          Традиція нагромадила цикли однотипних пісень: величання господарю, його дружині, хлопцям, дівчатам, вдовам, бабусям. Окрему групу становлять
          колядки й щедрівки жартівливого й пародійного характеру.
        </p>
        <p className="typo-body mt-4">
          Бажанням возвеличити господаря викликане часте порівняння його з «королем», «царем», «боярином», «паном» — ці поняття в народному тлумаченні е
          узагальненим образом благополуччя, тому й співають господареві, вихваляючи його хазяйство: «Нема такого коня і в самого короля, нема такого меча
          і в самого панича». Слухаючи пісню, навіть убогий селянин бачив себе статечним хазяїном, труди якого увінчані достатком — він сидить за тисовим
          столом, застеленим килимом, а на ньому — щедрі наїдки: «пшеничний хліб», «риба у мідяних горщиках».
        </p>
        <p className="typo-body mt-4">
          Босонога дружина хазяїна теж ставала на мить уявною власницею «лисячої шуби», «шовкового пояса», «чобіток за два червінці. Величальні пісні славили
          її розум, доброзичливість, домовитість. У колядках дівчині підкреслена її незвичайна краса, скромність, працьовитість; хлопець показаний як надія
          сім'ї, захисник рідного краю, переможець ворогів, він нерозлучний із своїм бойовим конем, котрий «море перескочить і стремен не вмочить».
        </p>
        <p className="typo-body mt-4">
          При всій гіперболізації і фантастичності у колядках та щедрівках проглядає реальний ґрунт. Обрії фантазії в них не такі вже й неосяжні, під
          райдужним, позолоченим, уквітчаним серпанком бачимо деталі звичайного селянського побуту.
        </p>
        <p className="typo-body mt-4">
          З бігом часу в цей традиційний жанр народної поезії включалися згадки про історичні події, про часи, коли доводилось усім миром відбивати
          ворожі напади, коли орачі ставали воїнами і йшли «до султана кайдани ламати, братів визволяти. Але й тут домінує думка про мирну хліборобську
          працю: «Турка ізвоюем да насієм два лани жита, третій пшениці...».
        </p>
        <p className="typo-body mt-4">
          Переважна більшість колядок і щедрівок мають таку композицію: заспів, основний текст, приспів (у щедрівках найчастіше «щедрий вечір, добрий вечір»)
          і закінчення — поколядь.
        </p>
        <p className="typo-body mt-4">
          У заспівах найчастіше вказувалося на місце дій: «А в лісі, лісі», «А в лужку», «А в саду, да й винограду», «У полі, в полі», «Гей, при дорозі»,
          «На ріці, на бистренькій», «Ой за горою, за кам'яною». Поколядь виконувалася і як окрема пісня, але її основний мотив — прощання з господарями,
          уславлення їх, прохання почастувати за віншування — були логічним завершенням будь-якої колядки:
        </p>
        <p className="typo-body italic mt-4">
          А за сим словом - бувай здоров,
          <br />
          Бувай же здоров, пане-господарю,
          <br />
          Не сам з собою, із ґаздинею,
          <br />
          Із ґаздинею, зо всією челядкою,
          <br />
          Із синоньками, із доненьками.
        </p>
        <p className="typo-body italic mt-4">
          Гей, дай же, боже, і на двір щастя,
          <br />
          І на двір щастя для худобочки.
          <br />
          Гей, дай же, боже, один стіг вівса,
          <br />
          Один стіг вівса — вже коляда вся!
        </p>
        <p className="typo-body mt-4">
          Цей багатий художньою образністю пісенний жанр здавна привертав до себе увагу збирачів і дослідників українського фольклору. Колядки та щедрівки
          публікувалися в багатьох виданнях, починаючи зі збірників М. Максимовича, В. Залеського, Я. Головацького, І. Вагилевича. Двохтомний збірник,
          спеціально присвячений цьому жанру, видав В. Гнатюк. Найбільш значні теоретичні дослідження належать І. Франкові, О. Потебні, І. Свенціцькому, О. Дею.
        </p>
        <p className="typo-body mt-4">
          У наш час колядування, щедрування і засівання відновлено як звичай висловлювати добрі різдвяні побажання.
        </p>
      </div>
    </>
  );
};

export default KoliadkyTaShchedrivkyPage;
