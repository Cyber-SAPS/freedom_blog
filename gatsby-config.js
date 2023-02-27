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
        `gatsby-transformer-sharp`,
        {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
            {
                resolve: `gatsby-remark-images`,
                options: {
                maxWidth: 800,
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "images",
                path: `${__dirname}/src/images/`
            },
        }, 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              "name": "pages",
              "path": `${__dirname}/src/pages/`
            },
            __key: "pages"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              "name": "styles",
              "path": `${__dirname}/src/styles/`
            },
            __key: "styles"
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              defaults: {
                formats: [`auto`, `webp`],
                placeholder: `blurred`,
                quality: 70,
                breakpoints: [750, 1080, 1366, 1920],
                backgroundColor: `transparent`,
                tracedSVGOptions: {},
                blurredOptions: {},
                jpgOptions: {},
                pngOptions: {},
                webpOptions: {},
                avifOptions: {},
              }
            }
        },
    ],
};