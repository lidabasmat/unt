import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../../../../../components/Breadcrumbs';
import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const ZhnyvarskiPisniPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      songs: allSong(filter: {category: {eq: "zhnyvarski-pisni"}}) {
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
        title="Жниварські пісні"
        description="Жниварські пісні — музично-поетичні твори, що оспівують початок, хід та завершення жнив. "
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            Жниварські пісні
          </h1>
          <p className="typo-body mt-4 max-w-md">
            Жниварські пісні — музично-поетичні твори, що оспівують початок, хід та завершення жнив.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Список жниварських пісень
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
          Опис жанру жниварської пісні
        </h2>
        <p className="typo-body mt-4">
          Жнивування — кінцевий результат всієї праці та очікування землероба. “Хліб — усьому голова”. Український народ
          до жнив заздалегідь готувався, неначе до грандіозного торжества, але й одночасно до важливої нелегкої праці.
          Працювати доводилося з ранку до ночі, не дивлячись ні на які погодні умови, спека та спрага була буденністю
          під час роботи на полі. Коли починалося жнивування, ще до сходу сонця, люди вбрані в чисте вбрання йшли до
          поля. Першу зачинку розпочинала найліпша жниця. На покупі встановлювався “воєвода” — сніп, з першого зжатого
          на ниві хліба.
        </p>
        <p className="typo-body mt-4">
          Всі пісні, які виконувалися під час жнивування, були відображені за обрядовістю та періодом роботи. Основні
          категорії: зажинкові — возвеличення роботящих жниць, першого снопа, побажання доброї роботи та доброго врожаю,
          щоб кіп було настільки багато, що “сивий соловейко”, допомагаючи складати снопи, не зміг їх всі скласти,
          “зозулька ж кує — копойки рахує — не злічить”; жниварські — ніякого возвеличення тут немає, натомість йде
          зворотній мотив, оспівування тяжкої роботи, складність цього процесу, на надтяжке виснаження, на жадібність
          господарів, які не піклуються про своїх наймитів, не годують їх. Тут помічаємо не типову в інших категоріях
          обрядових пісень зіткнення ліричного захоплення навколишніми красотами природи і реалій надтяжкої роботи.
        </p>
        <p className="typo-body mt-4">
          До третьої категорії пісень відносяться обжинкові, у яких домінують мотиви піднесення, життєрадості, оптимізму,
          радості, що змогли закінчити важкий етап року. І коли жнива лишаються позаду, коли зрізаний останній сніп,
          тоді його обв’язують червоною стрічкою і відносять додому з піснями (якщо врожай власний) або господареві, у
          якого працювали. Такого снопа називали “дід” або “осталець”, він уособлював гарантію хорошого врожаю,
          добробуту, бо отримане з нього насіння пшениці, першим посіється під час осінніх робіт.
        </p>
        <p className="typo-body mt-4">
          На полі, де був зібраний врожай, робочі лишали декілька стебелинок — “бороду”, насіння пшениці витрушувалося з
          колосків прямо у землю, яку до цього моменту розпушили, це була традиція для отримання в майбутньому хорошого
          врожаю. Біля “бороди”, в знак подяки, клали хліб та воду, лягали на землю та качалися по ній, щоби відновити
          відроблені сили на полі (давні вірування про життєдайну силу землі). З кінцевого отриманої пашні, яка
          прикрашалася калиною та центаврією, робився ще й вінок, який уособлював собою фінал роботи — його приносила
          до селища найліпша жниця. В жниварських піснях воспівувалися трудячі долоні, звучали пишні, торжественні
          порівняння — вінок як сонце, як золото, сплетений із перлів, він блищить, як зорі; женці нагадували господарям
          про пригощання, — люди заробили його тяжкою службою і тепер очікували винагороди.
        </p>
        <p className="typo-body mt-4">
          Щорічну популярність обжинкової традиції характерно засвідчив у сер. ХІХ сторіччя Іван Дмитрович
          Головацький, назвавши системну ним збірку “Вінок русинам на обжинки”. У повісті Т. Шевченка “Наймичка”
          присутні описи обжинок.
        </p>
      </div>
    </>
  );
};

export default ZhnyvarskiPisniPage;
