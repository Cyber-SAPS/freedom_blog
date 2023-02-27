import * as React from 'react'
import { Box, Heading, Link, Flex, Grid } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

export const LayoutHeader = ({siteTitle})=> {
    return(
      <Box as="header" sx={{ backgroundColor:"#0077C8 ", mb: "1.45rem"}}>
        <Grid gap={3} columns={[2, '3fr 6fr 3fr']} >
          <Box sx={{ p: '2',pl: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2'}}>
            <Link as={GatsbyLink} to="/" sx={{ textDecoration: 'none',}}><Heading sx={{ color: 'white'}}>{siteTitle}</Heading></Link>
          </Box>
          <Box></Box>
          <Box >
            <Flex as="nav" sx={{ p: '2', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2'}}>
              <Link to="/" as={GatsbyLink} p={2} sx={{ textDecoration: 'none',color: 'white'}}>
                Home
              </Link>
              <Link to="/about" as={GatsbyLink} p={2} sx={{ textDecoration: 'none',color: 'white'}}>
                About
              </Link>
              <Link to="/faq" as={GatsbyLink} p={2} sx={{ textDecoration: 'none',color: 'white'}}>
                Faq's
              </Link>
              <Link to="/contact" as={GatsbyLink} p={2} sx={{ textDecoration: 'none',color: 'white'}}>
                Contact
              </Link>
            </Flex>
          </Box>
        </Grid>
      </Box>
    )
}