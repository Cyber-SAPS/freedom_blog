import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { LayoutHeader } from './header'
import Seo from "react-seo-component";
import '../styles/main.css'
import { LayoutFooter } from './footer';

// import { Container } from 'theme-ui'
export const Layout = ({children})=> {
    
    const {
        title,
        description,
        siteUrl,
        siteLanguage,
        siteLocale,
    } = useSiteMetadata();
    return(
        <>
        <Seo
            title={`Home`}
            titleTemplate={title}
            description={description}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
        />
        <LayoutHeader siteTitle={title} />

            <main className="main-content pb-3">{children}</main>
            <LayoutFooter />

        </>
    )
}