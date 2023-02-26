import * as React from 'react'
import { graphql } from "gatsby";
import Seo from "react-seo-component";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
const  BlogPage=({data, children})=>{
    const {excerpt,frontmatter:{title, slug, date}} = data.mdx;
    const {
      title: siteTitle,
      siteUrl,
      siteLanguage,
      siteLocale,
      authorName,
    } = useSiteMetadata();
    return(
        <>
      <Seo
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        pathname={`${siteUrl}${slug}`}
        article={true}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        author={authorName}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
  
<h1>{title}</h1>
<p>{date}</p>
<p>Slug: {slug}</p>
 
        {/* {date} */}
        {children}
        </>
    )
}


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
        date(formatString:"MMM Do YYYY")
      }
      excerpt
    }
  }
`;
export default BlogPage;