import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import fStyle from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={fStyle.footer}>
      <p>
        {data.site.siteMetadata.author} September 18, 2020 Langdon Hall
      </p>43
    </footer>
  )
}

export default Footer
