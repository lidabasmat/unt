import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import Seo from '../components/Seo';

const TalesPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      tales1: allTale(filter: {title: {regex: "/^А/"}}) {
        nodes {
          title
          slug
        }
      }
      tales2: allTale(filter: {title: {regex: "/^Б/"}}) {
        nodes {
          title
          slug
        }
      }
      tales3: allTale(filter: {title: {regex: "/^В/"}}) {
        nodes {
          title
          slug
        }
      }
      tales4: allTale(filter: {title: {regex: "/^Г/"}}) {
        nodes {
          title
          slug
        }
      }
      tales5: allTale(filter: {title: {regex: "/^Д/"}}) {
        nodes {
          title
          slug
        }
      }
      tales6: allTale(filter: {title: {regex: "/^Е/"}}) {
        nodes {
          title
          slug
        }
      }
      tales7: allTale(filter: {title: {regex: "/^Є/"}}) {
        nodes {
          title
          slug
        }
      }
      tales8: allTale(filter: {title: {regex: "/^Ж/"}}) {
        nodes {
          title
          slug
        }
      }
      tales9: allTale(filter: {title: {regex: "/^З/"}}) {
        nodes {
          title
          slug
        }
      }
      tales10: allTale(filter: {title: {regex: "/^І/"}}) {
        nodes {
          title
          slug
        }
      }
      tales11: allTale(filter: {title: {regex: "/^Ї/"}}) {
        nodes {
          title
          slug
        }
      }
      tales12: allTale(filter: {title: {regex: "/^Й/"}}) {
        nodes {
          title
          slug
        }
      }
      tales13: allTale(filter: {title: {regex: "/^К/"}}) {
        nodes {
          title
          slug
        }
      }
      tales14: allTale(filter: {title: {regex: "/^Л/"}}) {
        nodes {
          title
          slug
        }
      }
      tales15: allTale(filter: {title: {regex: "/^М/"}}) {
        nodes {
          title
          slug
        }
      }
      tales16: allTale(filter: {title: {regex: "/^Н/"}}) {
        nodes {
          title
          slug
        }
      }
      tales17: allTale(filter: {title: {regex: "/^О/"}}) {
        nodes {
          title
          slug
        }
      }
      tales18: allTale(filter: {title: {regex: "/^П/"}}) {
        nodes {
          title
          slug
        }
      }
      tales19: allTale(filter: {title: {regex: "/^Р/"}}) {
        nodes {
          title
          slug
        }
      }
      tales20: allTale(filter: {title: {regex: "/^С/"}}) {
        nodes {
          title
          slug
        }
      }tales21: allTale(filter: {title: {regex: "/^Т/"}}) {
        nodes {
          title
          slug
        }
      }
      tales22: allTale(filter: {title: {regex: "/^У/"}}) {
        nodes {
          title
          slug
        }
      }
      tales23: allTale(filter: {title: {regex: "/^Ф/"}}) {
        nodes {
          title
          slug
        }
      }
      tales24: allTale(filter: {title: {regex: "/^Х/"}}) {
        nodes {
          title
          slug
        }
      }
      tales25: allTale(filter: {title: {regex: "/^Ц/"}}) {
        nodes {
          title
          slug
        }
      }
      tales26: allTale(filter: {title: {regex: "/^Ч/"}}) {
        nodes {
          title
          slug
        }
      }
      tales27: allTale(filter: {title: {regex: "/^Ш/"}}) {
        nodes {
          title
          slug
        }
      }
      tales28: allTale(filter: {title: {regex: "/^Щ/"}}) {
        nodes {
          title
          slug
        }
      }
      tales29: allTale(filter: {title: {regex: "/^Ю/"}}) {
        nodes {
          title
          slug
        }
      }
      tales30: allTale(filter: {title: {regex: "/^Я/"}}) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const tales1 = data.tales1.nodes;
  const tales2 = data.tales2.nodes;
  const tales3 = data.tales3.nodes;
  const tales4 = data.tales4.nodes;
  const tales5 = data.tales5.nodes;
  const tales6 = data.tales6.nodes;
  const tales7 = data.tales7.nodes;
  const tales8 = data.tales8.nodes;
  const tales9 = data.tales9.nodes;
  const tales10 = data.tales10.nodes;
  const tales11 = data.tales11.nodes;
  const tales12 = data.tales12.nodes;
  const tales13 = data.tales13.nodes;
  const tales14 = data.tales14.nodes;
  const tales15 = data.tales15.nodes;
  const tales16 = data.tales16.nodes;
  const tales17 = data.tales17.nodes;
  const tales18 = data.tales18.nodes;
  const tales19 = data.tales19.nodes;
  const tales20 = data.tales20.nodes;
  const tales21 = data.tales21.nodes;
  const tales22 = data.tales22.nodes;
  const tales23 = data.tales23.nodes;
  const tales24 = data.tales24.nodes;
  const tales25 = data.tales25.nodes;
  const tales26 = data.tales26.nodes;
  const tales27 = data.tales27.nodes;
  const tales28 = data.tales28.nodes;
  const tales29 = data.tales29.nodes;
  const tales30 = data.tales30.nodes;

  return (
    <>
      <Seo
        title="Казки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 text-white mt-4">
            казки
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Казка – це народний або літературний твір про вигадані, часто фантастичні події.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h3">
          A
        </h2>
        <div className="row mt-4">
          {tales1.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Б
        </h2>
        <div className="row mt-4">
          {tales2.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          В
        </h2>
        <div className="row mt-4">
          {tales3.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Г
        </h2>
        <div className="row mt-4">
          {tales4.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Д
        </h2>
        <div className="row mt-4">
          {tales5.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ж
        </h2>
        <div className="row mt-4">
          {tales8.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          З
        </h2>
        <div className="row mt-4">
          {tales9.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          І
        </h2>
        <div className="row mt-4">
          {tales10.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          К
        </h2>
        <div className="row mt-4">
          {tales13.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Л
        </h2>
        <div className="row mt-4">
          {tales14.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          М
        </h2>
        <div className="row mt-4">
          {tales15.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Н
        </h2>
        <div className="row mt-4">
          {tales16.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          П
        </h2>
        <div className="row mt-4">
          {tales18.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Р
        </h2>
        <div className="row mt-4">
          {tales19.map((tale) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={tale.slug} className="typo-small">
                {tale.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TalesPage;
