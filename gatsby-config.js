module.exports = {
    siteMetaData:{
        title: 'Loja Móveis Planejados'

    },

    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve:'gatsby-plugin-purgecss',
            options: {
                printRejected: 'true',
                tailwind: 'true'
            }
        }
       ]
}