// Website metadata configuration
const siteMetadata = {
    title: "Freedom Blog",
    description: "Blog to promote freedom of expression"
};

module.exports = {
    siteMetadata,
    plugins: ['gatsby-plugin-theme-ui','gatsby-plugin-mdx',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "content",
                path: `${__dirname}/content/`
            },
        },
    ],
};