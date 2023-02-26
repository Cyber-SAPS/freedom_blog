import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Link } from 'theme-ui'


export const LayoutHeader = ({siteTitle,siteDescription})=> {
    return(
        <Box as="Header" sx={{ bg:"highlight", mb: "1.45rem"}}>
            <Box as="div" sx={{m: "0 auto", maxWidth: "640px", p: "1.45rem 1.0875rem"}}>
                <Link as={GatsbyLink} to="/">
                    <Heading>{siteTitle}</Heading>
                </Link>
                <Box as="p" variant='styles.p'>
                    {siteDescription}
                </Box>
            </Box>
        </Box>
    )
}