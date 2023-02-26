import * as React from 'react'
import { Box } from 'theme-ui'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { LayoutHeader } from './header'
export const Layout = ({children})=> {
    const { title, description } = useSiteMetadata();
    return(
        <>
        <LayoutHeader siteTitle={title} siteDescription={description} />
        <Box as="div" sx={{m: "0 auto", maxWidth: "640px", p: "1.45rem 1.0875rem"}}>
            <Box as="main">{children}</Box>
        </Box>
        </>
    )
}