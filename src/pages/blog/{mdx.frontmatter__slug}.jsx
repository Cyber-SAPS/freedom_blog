import * as React from 'react'
import { graphql } from "gatsby";


const  BlogPage=({data, children})=>{
    const {frontmatter:{title, slug, date}} = data.mdx;
    return(
        <>
   
  
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
    }
  }
`;
export default BlogPage;