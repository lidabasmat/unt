import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import Seo from '../components/Seo';

const JokesPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      jokes1: allJoke(filter: {title: {regex: "/^А/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes2: allJoke(filter: {title: {regex: "/^Б/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes3: allJoke(filter: {title: {regex: "/^В/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes4: allJoke(filter: {title: {regex: "/^Г/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes5: allJoke(filter: {title: {regex: "/^Д/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes6: allJoke(filter: {title: {regex: "/^Е/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes7: allJoke(filter: {title: {regex: "/^Є/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes8: allJoke(filter: {title: {regex: "/^Ж/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes9: allJoke(filter: {title: {regex: "/^З/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes10: allJoke(filter: {title: {regex: "/^І/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes11: allJoke(filter: {title: {regex: "/^Ї/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes12: allJoke(filter: {title: {regex: "/^Й/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes13: allJoke(filter: {title: {regex: "/^К/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes14: allJoke(filter: {title: {regex: "/^Л/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes15: allJoke(filter: {title: {regex: "/^М/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes16: allJoke(filter: {title: {regex: "/^Н/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes17: allJoke(filter: {title: {regex: "/^О/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes18: allJoke(filter: {title: {regex: "/^П/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes19: allJoke(filter: {title: {regex: "/^Р/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes20: allJoke(filter: {title: {regex: "/^С/"}}) {
        nodes {
          title
          slug
        }
      }jokes21: allJoke(filter: {title: {regex: "/^Т/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes22: allJoke(filter: {title: {regex: "/^У/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes23: allJoke(filter: {title: {regex: "/^Ф/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes24: allJoke(filter: {title: {regex: "/^Х/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes25: allJoke(filter: {title: {regex: "/^Ц/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes26: allJoke(filter: {title: {regex: "/^Ч/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes27: allJoke(filter: {title: {regex: "/^Ш/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes28: allJoke(filter: {title: {regex: "/^Щ/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes29: allJoke(filter: {title: {regex: "/^Ю/"}}) {
        nodes {
          title
          slug
        }
      }
      jokes30: allJoke(filter: {title: {regex: "/^Я/"}}) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const jokes1 = data.jokes1.nodes;
  const jokes2 = data.jokes2.nodes;
  const jokes3 = data.jokes3.nodes;
  const jokes4 = data.jokes4.nodes;
  const jokes5 = data.jokes5.nodes;
  const jokes6 = data.jokes6.nodes;
  const jokes7 = data.jokes7.nodes;
  const jokes8 = data.jokes8.nodes;
  const jokes9 = data.jokes9.nodes;
  const jokes10 = data.jokes10.nodes;
  const jokes11 = data.jokes11.nodes;
  const jokes12 = data.jokes12.nodes;
  const jokes13 = data.jokes13.nodes;
  const jokes14 = data.jokes14.nodes;
  const jokes15 = data.jokes15.nodes;
  const jokes16 = data.jokes16.nodes;
  const jokes17 = data.jokes17.nodes;
  const jokes18 = data.jokes18.nodes;
  const jokes19 = data.jokes19.nodes;
  const jokes20 = data.jokes20.nodes;
  const jokes21 = data.jokes21.nodes;
  const jokes22 = data.jokes22.nodes;
  const jokes23 = data.jokes23.nodes;
  const jokes24 = data.jokes24.nodes;
  const jokes25 = data.jokes25.nodes;
  const jokes26 = data.jokes26.nodes;
  const jokes27 = data.jokes27.nodes;
  const jokes28 = data.jokes28.nodes;
  const jokes29 = data.jokes29.nodes;
  const jokes30 = data.jokes30.nodes;

  return (
    <>
      <Seo
        title="Сміховини"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 text-white mt-4">
            сміховини
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Сміховина - щось смішне, анекдотична історія, кумедний випадок, сміховинка, анекдота.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h3">
          A
        </h2>
        <div className="row mt-4">
          {jokes1.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Б
        </h2>
        <div className="row mt-4">
          {jokes2.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          В
        </h2>
        <div className="row mt-4">
          {jokes3.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Г
        </h2>
        <div className="row mt-4">
          {jokes4.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Д
        </h2>
        <div className="row mt-4">
          {jokes5.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Е
        </h2>
        <div className="row mt-4">
          {jokes6.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Є
        </h2>
        <div className="row mt-4">
          {jokes7.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ж
        </h2>
        <div className="row mt-4">
          {jokes8.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          З
        </h2>
        <div className="row mt-4">
          {jokes9.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          І
        </h2>
        <div className="row mt-4">
          {jokes10.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          К
        </h2>
        <div className="row mt-4">
          {jokes13.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Л
        </h2>
        <div className="row mt-4">
          {jokes14.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          М
        </h2>
        <div className="row mt-4">
          {jokes15.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Н
        </h2>
        <div className="row mt-4">
          {jokes16.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          О
        </h2>
        <div className="row mt-4">
          {jokes17.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          П
        </h2>
        <div className="row mt-4">
          {jokes18.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Р
        </h2>
        <div className="row mt-4">
          {jokes19.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          С
        </h2>
        <div className="row mt-4">
          {jokes20.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Т
        </h2>
        <div className="row mt-4">
          {jokes21.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          У
        </h2>
        <div className="row mt-4">
          {jokes22.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ф
        </h2>
        <div className="row mt-4">
          {jokes23.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Х
        </h2>
        <div className="row mt-4">
          {jokes24.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ц
        </h2>
        <div className="row mt-4">
          {jokes25.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ч
        </h2>
        <div className="row mt-4">
          {jokes26.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Ш
        </h2>
        <div className="row mt-4">
          {jokes27.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Щ
        </h2>
        <div className="row mt-4">
          {jokes28.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
        <h2 className="typo-h3 mt-8">
          Я
        </h2>
        <div className="row mt-4">
          {jokes30.map((joke) => (
            <div className="col-full md:col-4 mb-4">
              <Link to={joke.slug} className="typo-small">
                {joke.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JokesPage;
