import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import fStyle from "./footer.module.scss"
import Timer from "./timer"
import { StaticImage } from "gatsby-plugin-image"

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
     <Timer/>
     
    </footer>
  )
}

export default Footer
