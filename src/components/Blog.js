import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import Image from "gatsby-image"
import { Link } from "gatsby"
export const Blogs = ({id,title,image,date,category,slug,desc}) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img"/>
        <div className="blog-card">
           <h4>{title}</h4>
           <p>{desc}</p>
           <div className="blog-footer">
             <p>{category}</p>
             <p>{date}</p>
           </div>
        </div>
      </article>
    </Link>
  )
}
export default Blogs
