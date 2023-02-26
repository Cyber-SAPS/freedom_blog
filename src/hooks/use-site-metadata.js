import {graphql, useStaticQuery } from 'gatsby'


export const useSiteMetadata =()=> {
    const {site} = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                id
                siteMetadata{
                    title
                    description
                    lastBuildDate
                    siteUrl
                    authorName
                    siteLanguage
                    siteLocale
                }
                }
            }
        `
    );
    return site.siteMetadata
};