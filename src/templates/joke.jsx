import { graphql } from 'gatsby';
import React from 'react';

const JokePage = ({ data }) => {
  const { joke } = data;

  return (
    <>
      <h1>{joke.title}</h1>
    </>
  )
};

export default JokePage;

export const pageQuery = graphql`
  query($slug: String!) {
    joke: joke(slug: { eq: $slug }) {
      title
      content {
        body
      }
    }
  }
`;
