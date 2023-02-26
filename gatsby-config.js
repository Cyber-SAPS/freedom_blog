// Website metadata configuration
const siteMetadata = {
    title: "Freedom Blog",
    description: "Blog to promote freedom of expression",
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `http://localhost:8000`,
    authorName: `Daryl Evans`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
};

module.exports = {
    siteMetadata,
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
            {
                resolve: `gatsby-remark-images`,
                options: {
                maxWidth: 640,
                },
            },
            ],
        },
        },
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/content/`,
        },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "content",
                path: `${__dirname}/content/`
            },
        },
    ],
};