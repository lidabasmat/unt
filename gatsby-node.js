const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const { toKebabCase } = require('./src/utils/toKebabCase');
const slugify = require('slugify');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
      type MetaFields implements Node {
        title: String
        description: String
        image: File @fileByRelativePath
      }
    `,
    `
      type Joke implements Node {
        slug: String
        title: String
        category: String
        content: Mdx
        meta: MetaFields
      }
    `,
    `
      type Song implements Node {
        slug: String
        title: String
        category: String
        hasYoutube: Boolean
        content: Mdx
        meta: MetaFields
      }
    `,
  ];

  createTypes(typeDefs)
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        name: 'sourceName',
        node: node,
        value: parent.sourceInstanceName,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'jokes') {
      const jokeContent = {
        slug: `/smikhovyny${createFilePath({ node, getNode })}`,
        title: node.frontmatter.title,
        category: node.frontmatter.category,
        content: node,
        meta: node.frontmatter.meta,
      };

      createNode({
        id: createNodeId(`joke-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Joke',
          contentDigest: createContentDigest(jokeContent),
        },
        ...jokeContent,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'songs') {
      const songContent = {
        slug: `/pisni${createFilePath({ node, getNode })}`,
        title: node.frontmatter.title,
        category: node.frontmatter.category,
        hasYoutube: node.frontmatter.hasYoutube,
        content: node,
        meta: node.frontmatter.meta,
      };

      createNode({
        id: createNodeId(`song-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Song',
          contentDigest: createContentDigest(songContent),
        },
        ...songContent,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const jokeTemplate = path.resolve('src/templates/joke.jsx');
  const songTemplate = path.resolve('src/templates/song.jsx');

  const result = await graphql(`
      {
        jokes: allJoke {
          nodes {
            slug
          }
        }
        songs: allSong {
          nodes {
            slug
          }
        }
      }
  `);

  if (result.errors) {
    rporter.panicOnBuild('Build failed while running GraphQL query');
    return;
  }

  const jokes = result.data.jokes.nodes;

  jokes.forEach((joke) => {
    createPage({
      path: joke.slug,
      component: jokeTemplate,
      context: {
        slug: joke.slug,
      },
    });
  });

  const songs = result.data.songs.nodes;

  songs.forEach((song) => {
    createPage({
      path: song.slug,
      component: songTemplate,
      context: {
        slug: song.slug,
      },
    });
  });
};
