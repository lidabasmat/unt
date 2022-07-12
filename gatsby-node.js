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
        author: String
        category: String
        hasYoutube: Boolean
        content: Mdx
        meta: MetaFields
      }
    `,
    `
      type Proverb implements Node {
        slug: String
        title: String
        content: Mdx
        meta: MetaFields
      }
    `,
    `
      type Tale implements Node {
        slug: String
        title: String
        content: Mdx
        meta: MetaFields
        hasYoutube: Boolean
        author: String
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
        author: node.frontmatter.author,
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

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'proverbs') {
      const proverbContent = {
        slug: `/pryslivia-ta-prykazky${createFilePath({ node, getNode })}`,
        title: node.frontmatter.title,
        content: node,
        meta: node.frontmatter.meta,
      };

      createNode({
        id: createNodeId(`proverb-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Proverb',
          contentDigest: createContentDigest(proverbContent),
        },
        ...proverbContent,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'tales') {
      let content = {
        slug: `/kazky${createFilePath({ node, getNode })}`,
        title: node.frontmatter.title,
        content: node,
        author: node.frontmatter.author,
        hasYoutube: node.frontmatter.hasYoutube,
        meta: node.frontmatter.meta,
      };

      createNode({
        id: createNodeId(`tale-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Tale',
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const jokeTemplate = path.resolve('src/templates/joke.jsx');
  const songTemplate = path.resolve('src/templates/song.jsx');
  const proverbTemplate = path.resolve('src/templates/proverb.jsx');
  const taleTemplate = path.resolve('src/templates/tale.jsx');

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
        proverbs: allProverb {
          nodes {
            slug
          }
        }
        tales: allTale {
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

  const proverbs = result.data.proverbs.nodes;

  proverbs.forEach((proverb) => {
    createPage({
      path: proverb.slug,
      component: proverbTemplate,
      context: {
        slug: proverb.slug,
      },
    });
  });

  const tales = result.data.tales.nodes;

  tales.forEach((tale) => {
    createPage({
      path: tale.slug,
      component: taleTemplate,
      context: {
        slug: tale.slug,
      },
    });
  });
};
