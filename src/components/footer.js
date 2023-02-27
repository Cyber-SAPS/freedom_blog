import * as React from 'react'
import { Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'


export const LayoutFooter =()=> {
    return(
        <footer className="footer-content text-white p-4 pt-2 pb-2">
        <div className="row gap-3 justify-center">
            <div className="col-xs-12 col-sm-12 col-xl-5">
                <h1>Contact us </h1>
                <address className="mt-1">

                    <a href="mailto:test@test.com">test@test.com.com</a><br />
                    <a href="tel:+13115552368"> (758) 123-1234</a><br />
                    <span>Freedom Blog Headquarters, Castries, Saint Lucia</span>
                </address>
    
            </div>
            <div className="col-xs-12 col-sm-5 col-xl-3">
                <h1 className="pl-3 font-md mt-1">Quick Links</h1>
                    <ul className="pl-3 mt-1 ml-1">
                        

                        
      <li className="text-white text-hover-primary-light-5 pb-1 font-md">
        <Link to="/faq" as={GatsbyLink}  className='text-white'>Faq's</Link>
      </li>
    
      <li className="text-white text-hover-primary-light-5 pb-1 font-md">
        <Link to="/contact" as={GatsbyLink}  className='text-white'>Contact</Link>
      </li>
    
                    </ul>
            </div>
            <div className="col-xs-12 col-sm-5 col-xl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nostrum amet labore sapiente doloremque eum adipisci ut debitis omnis repellendus.
            </div>
        </div>
        <p className="text-align-center">&copy; Copyright 2023 - Freedom Blog</p>
    </footer>
    )
}