import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import YoutubeIcon from '../../../../../components/icons/YoutubeIcon';

import Link from '../../../../../components/Link';
import Seo from '../../../../../components/Seo';

const ZhnyvarskiPisniPage = () => {
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
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            жниварські пісні
          </h1>
          <p className="typo-body mt-4 max-w-md">
            Жниварські пісні — музично-поетичні твори, що оспівують початок, хід та завершення жнив.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <div className="row mt-4">
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
        <div className="py-10">
          <p className="typo-body mt-4">
            Жнива — підсумок, реалізація усіх сподівань і зусиль хлібороба. “Хліб — усьому голова”. У всьому слов’янському
            світі до початку жнив готувалися, як до великого урочистого свята і водночас до тяжкої відповідальної роботи,
            коли доводилось трудитися від зорі до зорі, незважаючи на спеку й спрагу. У перший день жнив урочисто вирушали
            до схід сонця на поле, вдягнені у чисту одежу, починала першу зачинку найкраща жниця, сніп з першого ужинку —
            “воєвода” — встановлювався на покуті.
          </p>
          <p className="typo-body mt-4">
            Пісні, виконувані під час жнив, відбивали основні періоди праці й обрядів, з нею пов’язаних. Їх можна поділити
            на три групи: зажинкові — ті, що величають вправних жниць, перший сніп, бажають починати роботу в добрий час,
            пророкують добрий врожай, аби кіп було стільки, що “сивий соловейко”, ставши на поміч при складанні кіп, не
            спроможний їх усіх зложити, “зозулька ж кує — копойки рахує — не злічить”; власне жниварські — в яких величальні
            мотиви відступають, а натомість на повен голос звучать скарги на тяжкий труд, на нелюдську втому, на зажерливість
            господарів, які до ночі тримають голодних наймитів-женців на полі. Тут спостерігається невластиве в інших видах
            обрядової поезії зіткнення поетичного замилування природою і суворого реалізму підневільної праці.
          </p>
          <p className="typo-body mt-4">
          Третю групу жниварських пісень складають пісні обжинкові, у яких знову переважають нотки бадьорості, оптимізму,
          задоволення з того, що вдалося завершити найтяжчий етап хліборобського року. Але от усе лихе вже позаду,
          дожинається останній сніп, його замаюють червоною стрічкою і з піснями несуть додому (якщо жито свого наділу)
          або тому господареві, який наймав женців. Цей сніп — “дід”, або “осталець” — має символізувати достаток, запоруку
          нового гарного врожаю, бо ж вилущене з нього зерно першим ляже в землю під час нового осіннього посіву.
          </p>
          <p className="typo-body mt-4">
            На вижатому полі женці залишали кілька стеблин — “бороду”, зерно з них витрушували у розпушену серпами землю —
            на майбутній врожай. Коло “бороди”, начебто дякуючи ниві, клали хлібину і воду, лягали і качались по ниві, щоб
            повернути собі вироблену силу (відзвуки стародавніх вірувань про живодайну силу землі). З останнього вижатого
            збіжжя, прикрашеного калиною і волошками, робили ще й вінок, який символізував завершення праці — його несла
            в село найкраша жниця. В піснях величалися роботящі руки, знову звучали піднесені, урочисті, повні високої поезії
            порівняння — віночок як сонце, як золото, звитий із перлів, він світить, як зірка; женці нагадували господарям
            про почастунок, — вони заробили його тяжкою працею і тепер чекали віддяки.
          </p>
          <p className="typo-body mt-4">
            Широку популярність обжинкового звичаю своєрідно засвідчив у середині ХІХ ст. І. Головацький, назвавши
            упорядкований ним альманах “Вінок русинам на обжинки”. У повісті Т. Шевченка “Наймичка” подана картина обжинок.
          </p>
        </div>
      </div>
    </>
  );
};

export default ZhnyvarskiPisniPage;
