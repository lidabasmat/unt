import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

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
      <Seo
        title="Перлини української народної творчості"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full md:col-6 py-10 md:py-24">
              <h1 className="typo-h1 max-w-sm">
                перлини української народної творчості
              </h1>
            </div>
            <div className="col-full md:col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
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
              Проект “Українська народна творчість” був створений щоб зібрати та зберегти ці перлини, що висвічують
              веселками непідробного гумору, глибокою мудрістю і простотою мови.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
