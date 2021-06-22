import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import hStyle from "./header.module.scss"
import NavMenu from "./menu"
import Image from "./image"
import Banner from "./banner"

const Header = props => {
  return (
    <header className={hStyle.header}>
      <NavMenu />
      <Banner className={hStyle.space}/>

<br/><br/><br/>
      <Image title={props.title} />
    </header>
  )
}

export default Header

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "rarotongas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
