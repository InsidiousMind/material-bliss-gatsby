module.exports = {
  siteMetadata: {
    title: 'code.LiquidThink',
    name: 'Andrew Plaza',
    author: 'Andrew Plaza',
    menu_right_subtitle: 'Blogger || Computer Scientist',
    description: '',
    logo: 'https://www.ledr.com/colours/white.jpg',
    email: 'aplaza@liquidthink.net',
    url: 'http://code.liquidthink.net',
    social: {
      twitter: 'https://twitter.com/liquid_think',
      github: 'https://github.com/InsidiousMind',
      facebook: 'https://www.facebook.com/liquidthinknet',
      googlePlus: 'https://plus.google.com/+LiquidthinkNet',
      feed: 'https://code.liquidthink.net/feed.xml',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass', 
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
