module.exports = {
  siteMetadata: {
    title: `Persian Flag Up`,
    description: `  یه راه حل خوب  برای هرکی که زیر پرچم ایرانه`,
    author: `Amin moslemi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`],
  pathPrefix: "/persian-flag-up",
}
