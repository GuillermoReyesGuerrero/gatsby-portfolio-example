import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
    author
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc}></meta>
      <meta name="image" content={image}></meta>
    </Helmet>
  )
}

export default SEO