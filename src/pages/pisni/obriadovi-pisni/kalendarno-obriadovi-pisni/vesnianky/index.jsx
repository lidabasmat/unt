import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const VesniankyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "vesnianky"}}) {
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
        title="Веснянки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            веснянки
          </h1>
          <p className="typo-body mt-4 max-w-xl">
            Веснянки - назва старовинних слов'янських обрядових пісень, пов'язаних з початком весни і наближенням весняних польових робіт.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список веснянок
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
          Веснянки, як видно з самої назви, - це пісні на честь приходу весни; вони здавна відомі багатьом народам. У
          різних місцевостях України ці пісні називаються ще гаївками, гагілками, ягілками, яголойками, маївками тощо.
          Веснянки складають один з найцікавіших за змістом, найбагатший емоційно фольклорно-пісенний цикл, тісно
          пов'язаний з календарем сільськогосподарських робіт і родинним побутом трудівників.
        </p>
        <p className="typo-body mt-4">
          Навесні пробуджується земля, оживає природа, а з нею — радісні надії та клопоти хлібороба. Після холодних
          коротких днів і довгих зимових вечорів, що минали колись у тісних хатах за роботою, при тьмяному освітленні,
          молодь діставала нарешті можливість вийти на залиті сонячним світлом левади, вкриті першою прозеленню пагорби,
          де дихалось на повні груди і співалося на повен голос. Можна було затіяти гру, повеселитися, радіючи ласкавому
          сонцю і теплу.
        </p>
        <p className="typo-body mt-4">
          Пісні, хороводи, ігри поступово утворили специфічний обряд із чітко визначеним порядком дійства і усталеним
          пісенним супроводом.
        </p>
        <p className="typo-body mt-4">
          Весну, за уявленням наших предків, приносили на крилах птахи. Тому в березні, першому весняному місяці,
          випікалося обрядове печиво у формі пташок; діти, співаючи, носили їх по селу, провіщаючи і закликаючи весну:
          «Весна, весна красна, прийди, весно, з радістю, з великою милістю!» Свято зустрічі весни приурочувалося до
          початку льодоходу — «коли щука хвостом розіб'є лід». А що бажання дочекатись цього дня швидше було дуже
          великим, то у веснянках і висловлюються нахваляння йти «полонку рубати, гагілку добувати».
        </p>
        <p className="typo-body mt-4">
          До найдавніших веснянок належать обрядові хороводи та співи з пантомімою, а також ігри, у яких висловлюється
          бажання прискорити прихід тепла, а з ним і тієї пори, коли закладався реальний грунт для доброго врожаю.
        </p>
        <p className="typo-body mt-4">
          Глибокою старовиною віє від веснянок, у яких відчувається одвічна турбота про майбутній добробут та бажання
          «накликати» його піснею-замовлянням: «Куди воробець ішов — туди ячменець зійшов». З цією ж метою дівчата
          імітували в танках процеси вирощування збіжжя та городини: «орали» поле, «збирали» льон, гречку, «завивали»
          огірочки, «саджали» грушу.
        </p>
        <p className="typo-body mt-4">
          На молодіжних весняних гулянках, під час ігор і танців, зав'язувалися ближчі знайомства, відбувалися зустрічі
          закоханих, мріялося про майбутнє одруження. Вибір дівчини до пари — лейтмотив багатьох хороводних пісень:
          «Ягіл-ягілочка, ягілова дочка, вибери собі дівчину, як червону калину»; «Біжи до Дунаю, бери ту, що скраю»;
          «На городі вільха, під нев вода мілка, ото мені сподобалась всередині дівка».
        </p>
        <p className="typo-body mt-4">
          Серед веснянок чимало творів з виразним соціальним спрямуванням, у яких осуджуються гонористі, ледачі багачки
          і схвалюється прихильність до роботящих, скромних убогих дівчат.
        </p>
        <p className="typo-body mt-4">
          В останні дні весняних свят виконувалися пісні, в яких переважали мотиви прощання, розлуки, суму: «Співай,
          співай, товаришко, бо вже не будемо, бо надходить годинонька, що ся розійдемо».
        </p>
        <p className="typo-body mt-4">
          Перші записи і публікації веснянок були здійснені фольклористами ще в першій половині XIX ст.
          (збірники З. Доленги-Ходаковського, М. Максимовича, А. Метлинського). Найповніша наукова подача матеріалу в
          дореволюційних виданнях належить В. Гнатюку, який видав том «Гаївок», куди звів весняні пісні, зібрані по
          всій Україні. Кілька збірок веснянок разом з мелодіями опублікував М. Лисенко. Чимало веснянок записано з
          голосу Л. Українки. «Зовсім малою, либонь п'ятилітньою дитиною, запам'яталися Лесі весняні танкові пісні», —
          згадував К. Квітка.
        </p>
        <p className="typo-body mt-4">
          Ліричні почуття, оспівування пробудженої природи і юної дівочої краси, турбота про врожай і сімейний
          добробут — все це єднає обрядові весняні пісні з родинно-побутовою лірикою.
        </p>
        <p className="typo-body mt-4">
          З часом веснянки втратили ознаки обрядовості і ввійшли до молодіжного репертуару як лірично-побутові пісні.
          Багато з них і тепер користується заслуженою популярністю серед аматорів співу та професіоналів
          («А вже весна», «Чи я в лузі не калина була», «Попід мостом, мостом», «Ой у полі криниченька»), а деякі стали
          набутком дитячого фольклору, перетворившись на такі ігри й забави, як «Подоляночка», «Журавель», «Зайчик»,
          «Просо», «Мак», «Огірочки». Окремі строфи веснянок, переважно коломийкового розміру, виконуються зовсім
          незалежно від календаря, як приспівки до танцю («Чи й у вас так, як у нас», «Та заспівай, соловію»,
          «Ой у лісі, у лісочку», «Ой кувала зозуленька» та ін.).
        </p>
        <p className="typo-body mt-4">
          Звичай водити хороводи, співати веснянки і забавлятися іграми, приуроченими весні, зберігся подекуди до наших
          днів, задовольняючи естетичні потреби людей, у яких такий спосіб святкування приходу весни шанується як жива
          традиція. В наш час зміст цього звичаю і його дидактична спрямованість збагатилися новими ідеями, співзвучними
          нашій добі. Весняні ігри та пісні відтворюють у поетичних образах не тільки спостереження трудівника над
          змінами в житті природи і його емоції, викликані цими змінами, а й спрямовані на те, щоб прославити роботящі
          руки, завзяття, прагнення самовіддано працювати на благо України.
        </p>
        <p className="typo-body mt-4">
          Веснянки — пісні молодості й краси. В них звучить здоровий оптимізм і світлі, ліричні мотиви. Вони й сьогодні
          дарують естетичну насолоду людям як високохудожні твори народного мистецтва.
        </p>
      </div>
    </>
  );
};

export default VesniankyPage;
