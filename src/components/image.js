import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import hStyle from "./header.module.scss"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <BackgroundImage
        className={"masthead"}
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      >
        {" "}
        {props.children}
        <div className="black-overlay">
          <div className={hStyle.titleBox}></div>
        </div>
      </BackgroundImage>
    </div>
  )
}
export default Image
