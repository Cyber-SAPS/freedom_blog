// Website metadata configuration
const siteMetadata = {
    title: "Freedom Blog",
    description: "Blog to promote freedom of expression"
};

module.exports = {
    siteMetadata,
    plugins: [
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