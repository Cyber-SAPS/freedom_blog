import * as React from 'react'
import { graphql } from "gatsby";
import Seo from "react-seo-component";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const  BlogPage=({data, children})=>{
    const {excerpt,frontmatter:{title, slug, date}} = data.mdx;
    const {
      title: siteTitle,
      siteUrl,
      siteLanguage,
      siteLocale,
      authorName,
    } = useSiteMetadata();
    const image = getImage(data.mdx.frontmatter.hero_image)
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
               <div className="container display-f justify-center">
            <h1 className="font-xl mb-2  mt-2">{title}</h1>
           
        </div>

  <div className="container font-sm">

<GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
     <p>Published on {date}</p>
 
        {/* {date} */}
        <div className="text-align-justify">{children}</div>
        
        </div>
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`;
export default BlogPage;