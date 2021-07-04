import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import hStyle from "./header.module.scss"
import SStyle from "../components/site.module.scss"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "images/EngagementBlossoms184.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={hStyle.image}>
      <BackgroundImage
        className={"masthead"}
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      ><br/><br/><br/><br/><br/><br/>
        {" "}
        <h1 className={hStyle.titleBox}>
          <br></br>
        </h1>
        <h2 className={hStyle.titleBox}>
          <br></br>
        </h2>
        {/* <h2>
          {" "}
          <br></br>
        </h2> */}


        <h2 className={SStyle.pageTitle}> 
          {props.title}
          <br/><br/><br/>
        </h2>
              <h2>
          {" "}
          <br></br><br/>
        </h2>
        <div className="black-overlay">
          <div className={hStyle.titleBox}></div>
        </div>
      </BackgroundImage>
    </div>
  )
}
export default Image
