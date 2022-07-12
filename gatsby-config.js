const siteUrl = 'https://folklore.com.ua';

module.exports = {
  siteMetadata: {
    title: 'Перлини української народної творчості',
    description: 'Перлини української народної творчості',
    author: '@lidabasmat',
    siteUrl: siteUrl,
    image: '/images/unt-share-image.png',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jokes`,
        path: `${__dirname}/src/content/jokes`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/src/content/songs`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tales`,
        path: `${__dirname}/src/content/tales`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `proverbs`,
        path: `${__dirname}/src/content/proverbs`,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-kit",
        short_name: "starter",
        start_url: "/",
        background_color: "#ff2728",
        theme_color: "#ff2728",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-breadcrumb',
      options: {
        useAutoGen: true,
        autoGenHomeLabel: 'Головна',
        exclude: [
          '/404/',
        ],
        trailingSlashes: true,
        crumbLabelUpdates: [
          {
            pathname: '/pisni',
            crumbLabel: 'Пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni',
            crumbLabel: 'Обрядові пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni',
            crumbLabel: 'Календарно-обрядові пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky',
            crumbLabel: 'Колядки та щедрівки',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/kupalski-pisni',
            crumbLabel: 'Купальські пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrivchani-pisni',
            crumbLabel: 'Русальні та петрівчані пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/vesnianky',
            crumbLabel: 'Веснянки',
          },
          {
            pathname: '/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/zhnyvarski-pisni',
            crumbLabel: 'Жниварські пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/rodynno-obriadovi-pisni',
            crumbLabel: 'Родинно-обрядові пісні',
          },
          {
            pathname: '/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/holosinnia',
            crumbLabel: 'Голосіння',
          },
          {
            pathname: '/pisni/obriadovi-pisni/rodynno-obriadovi-pisni/vesilni-pisni',
            crumbLabel: 'Весільні пісні',
          },
          {
            pathname: '/pisni/epichni-pisni',
            crumbLabel: 'Епічні пісні',
          },
          {
            pathname: '/pisni/epichni-pisni/balady',
            crumbLabel: 'Балади',
          },
          {
            pathname: '/pisni/epichni-pisni/dumy',
            crumbLabel: 'Думи',
          },
          {
            pathname: '/pisni/epichni-pisni/istorychni-pisni',
            crumbLabel: 'Історичні пісні',
          },
          {
            pathname: '/pisni/epichni-pisni/pisni-khroniky',
            crumbLabel: 'Пісні-хроніки',
          },
          {
            pathname: '/pisni/rodynno-pobutova-liryka',
            crumbLabel: 'Родинно-побутова лірика',
          },
          {
            pathname: '/pisni/rodynno-pobutova-liryka/kolyskovi-pisni',
            crumbLabel: 'Колискові пісні',
          },
          {
            pathname: '/pisni/rodynno-pobutova-liryka/pisni-pro-kokhannia',
            crumbLabel: 'Пісні про кохання',
          },
          {
            pathname: '/pisni/rodynno-pobutova-liryka/pisni-pro-rodynne-zhyttia',
            crumbLabel: 'Пісні про родинне життя',
          },
          {
            pathname: '/pisni/rodynno-pobutova-liryka/zhartivlyvi-pisni',
            crumbLabel: 'Жартівливі пісні',
          },
          {
            pathname: '/smikhovyny',
            crumbLabel: 'Сміховини',
          },
          {
            pathname: '/skoromovky',
            crumbLabel: 'Скоромовки',
          },
          {
            pathname: '/pryslivia-ta-prykazky',
            crumbLabel: `Прислів'я та приказки`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.jsx`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
         mergeSecurityHeaders: false,
        },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 907,
              quality: 100,
              withWebp: true,
              ignoreFileExtensions: [],
              wrapperStyle: 'border-radius: 10px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); overflow: hidden;',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-8V6PS3Y0XB",
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
  ]
}
