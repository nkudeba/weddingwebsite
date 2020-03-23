import React from "react"
import Layout from "../components/layout"
import Home from "./subpages/Home"
import Head from "../components/head"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
// import pageQuery from "./query"


const Title = "Home"

const IndexPage = (props) => {
  return (
    <Layout>
      <Head title={Title} />
      
      <Home />
    </Layout>
  )
}

export default IndexPage


