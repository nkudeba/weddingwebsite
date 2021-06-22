/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Nick and Holly\'s Wedding',
    author: 'Holly and Nicolas',
    siteURL: 'http://hollyandnicolas.com/'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-sharp`
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src', 
        path: `./src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    // },
    `gatsby-plugin-glamor`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
  /* Your site config here */
}


// module.exports = {
//   siteMetadata: {
//     title: 'Nick and Holly\'s Wedding',
//     author: 'Holly and Nicolas',
//     siteURL: 'http://hollyandnicolas.com/'
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-glamor`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: 'gatsby-transformer-remark',
//       options: {
//         plugins: [
//           'gatsby-remark-relative-images',
//           {
//             resolve: 'gatsby-remark-images',
//             options: {
//               maxWidth: 750,
//               linkImagesToOriginal: false
//             }
//           }
//         ]
//       }
//     }
//     // {
//     //   resolve: `gatsby-plugin-manifest`,
//     //   options: {
//     //     name: `gatsby-starter-default`,
//     //     short_name: `starter`,
//     //     start_url: `/`,
//     //     background_color: `#663399`,
//     //     theme_color: `#663399`,
//     //     display: `minimal-ui`,
//     //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//     //   },
//     // },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // `gatsby-plugin-offline`,
//   ],
// }
