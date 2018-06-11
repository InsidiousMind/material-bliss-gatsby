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
