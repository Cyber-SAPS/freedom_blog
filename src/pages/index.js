import { graphql } from 'gatsby';
import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Link } from 'theme-ui'
import { Layout } from '../components/layout';
// import { useSiteMetadata } from '../hooks/use-site-metadata'


export default function IndexPage({data}){
    // const { title, description } = useSiteMetadata();

    return(
        <Layout>
            {data.allMdx.nodes.map(({id, excerpt, frontmatter:{title, date, slug}})=>{
                return(
                    <Box key={id} as="article" sx={{mb:4, p:3, boxShadow:"0 10px 15px -3px rgba()0,0,0,0.1", border: "1px solid #d1d1d1", borderRadius:"15px"}}>
                        {/* {excerpt} */}
                        <Link as={GatsbyLink} to={`/${slug}`}>
                            <Heading>{title}</Heading>
                            <Box as="p" variant="style.p">{date}</Box>
                        </Link>
                    </Box>
                )
            })}
        </Layout>
    )
}

export const query = graphql`
    query{
        allMdx(sort: {frontmatter: { date: DESC } }){
            nodes{
                id
                excerpt(pruneLength: 250)
                frontmatter{
                    slug
                    title
                    date
                }
            }
        }
    }
`;