import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      ornament1Image: file(relativePath: {eq: "ornament1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      ornament2Image: file(relativePath: {eq: "ornament2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="bg-red-500 text-white">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full md:col-6 py-10 md:py-24">
              <h1 className="typo-h1 max-w-sm">
                перлини української народної творчості
              </h1>
              <button className="bg-black py-2.5 px-7 border-2 mt-8">
                детальніше
              </button>
            </div>
            <div className="col-full md:col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container-lg">
          <div className="row">
            <div className="col-full md:col-6">
              <p className="typo-intro">
                Протягом багатовікової історії розвитку української національної культури наш народ дав силу-силенну
                чудових витворів словесного мистецтва. В них проявились яскрава поетична уява, волелюбний дух, глибока
                мудрість, любов до вітчизни, ненависть до гнобителів, віра у перемогу добра і правди.
              </p>
              <p className="typo-intro mt-6">
                Дорогоцінним надбанням нашим є пісні, казки, перекази, легенди, коломийки, прислів’я та приказки,
                народні усмішки, жарти, дотепи, нісенітниці, небилиці та байки й інші жанри усної творчості.
                Усі вони значною мірою перейняті сатирично-гумористичним елементом.
              </p>
              <p className="typo-intro mt-6">
                Проект “Усна народна творчість” був створений щоб зібрати та зберегти ці перлини, що висвічують
                веселками непідробного гумору, глибокою мудрістю і простотою мови.
              </p>
            </div>
            <div className="col-full md:col-6">
            <Image
              image={getImage(data.ornament2Image)}
            />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container-lg">
          <div className="">
            <h2 className="typo-h2">
              категорії
            </h2>
            <div className="mt-6">
              <p className="typo-intro">
                І царі, і пани – одного поля бур’яни
              </p>
              <div className="flex">
                <p className="typo-small mt-3">Сковорода і цариця</p>
                <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
              </div>
              <div className="mt-10">
                <p className="typo-intro">
                  І царі, і пани – одного поля бур’яни
                </p>
                <div className="flex">
                  <p className="typo-small mt-3">Сковорода і цариця</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="typo-intro">
                  І царі, і пани – одного поля бур’яни
                </p>
                <div className="flex">
                  <p className="typo-small mt-3">Сковорода і цариця</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="typo-intro">
                  І царі, і пани – одного поля бур’яни
                </p>
                <div className="flex">
                  <p className="typo-small mt-3">Сковорода і цариця</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                  <p className="typo-small ml-7 mt-3">Марки царя Миколи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-32">
        <div className="container-lg">
          <div className="bg-red-500 pt-24 px-8 pb-8">
            <h3 className="typo-h3 text-white">
              “... А губернатор:
            </h3>
            <h3 className="typo-h3 text-white">
              – Свиня! – гаркнув. 
            </h3>
            <h3 className="typo-h3 text-white">
              – Дуже приємно, а я Шевченко.”
            </h3>
            <button className="bg-black py-2.5 px-10 border-2 mt-8 text-white">
               читати
            </button>
          </div>
          <div className="mt-5">

          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
