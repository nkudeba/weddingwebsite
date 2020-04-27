import React from "react"
import Layout from "../components/layout"
import Home from "./subpages/Home"
import Head from "../components/head"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
// import pageQuery from "./query"


const Title = "Holly and Nicolas"

const IndexPage = (props) => {
  return (
    <Layout title={Title}>
      <Head title={Title} />
      
      <Home />
    </Layout>
  )
}

export default IndexPage


