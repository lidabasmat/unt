import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Link from '../components/Link';

const JokesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      jokes: allJoke {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const jokes = data.jokes.nodes;

  return (
    <>
    <div className="bg-red-500 text-white">
      <div className="container-lg py-10 md:py-24">
        <h1 className="typo-h1 text-white">
          сміховини
        </h1>
      </div>
    </div>
    <div className="container-lg py-10 md:py-24">
      {jokes.map((joke) => (
        <div>
          <Link to={joke.slug}>
            {joke.title}
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default JokesPage;
