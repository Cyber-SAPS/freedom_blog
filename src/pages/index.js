import * as React from 'react'
import { graphql } from 'gatsby';
import { Link as GatsbyLink} from 'gatsby'
import { Link } from 'theme-ui'

import { StaticImage } from "gatsby-plugin-image"


const IndexPage =({data})=> {

    return(
        <>
            <div className="container">
                <div className="row h-96 w-auto mt-2">
                    <div className="shadow-2 col-xs-12 col-sm-12 col-xl-12 bg-primary-light-1 justify-center position-relative w-full h-full">
                        <StaticImage src="../images/2.jpg" alt="A dinosaur" className="w-full h-full  br-xs" />
                        <div  className="position-absolute b-0 r-0 l-0 z-2 o-70 bg-primary-dark-9 w-full h-20 text-align-center p-2">
                            <h1 className="text-white font-xl">Freedom Blog</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
        <div className="row gap-1 justify-center">
            
            <div className="col-xs-12 col-sm-12 col-xl-12">
                
                
<div className="row gap-1 justify-center">
    
{data.allMdx.nodes.map(({id, excerpt, frontmatter:{title, date, slug, hero_image}},index)=>{
  
        
            return(
         
      

                <div className="col-xs-12 col-sm-5 col-xl-3" key={id}>
        
        <div className="card p-2 text-base bg-white">
            <div className="card-img mb-1">
        
                <StaticImage src="../images/5.jpg" alt="A dinosaur" />
            </div>
            <div className="card-title font-lg">{title}</div>
            <div className="card-body font-sm">
            {date}
            </div>
            
            <div className="card-footer">
            <Link as={GatsbyLink} to={`/blog${slug}`} className="text-primary text-hover-primary-light-5">Read More</Link>
                
            </div>
            
        </div>

    </div>
  
  
            )
        })}
    

    
</div>
                

            </div>
            
  
        </div>
    </div>











        </>
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
                    date(formatString:"MMM Do YYYY")
       
                }
            }
        }
    }
`;
export default IndexPage;