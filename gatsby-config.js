const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Better In Between',
    description: 'Stories at the intersection of design and code',
    siteUrl: 'https://betterinbetween.com',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://blog.crisp.studio',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-color-function'),
          require('cssnano')(),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77295352-5',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
  ],
  // // for avoiding CORS while developing Netlify Functions locally
  // // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // }
};
