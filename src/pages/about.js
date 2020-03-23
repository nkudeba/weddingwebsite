import React from "react"
import Layout from "../components/layout"
import Home from "./subpages/Home"
import Head from "../components/head"

const Title = "Home"

const About = () => {
  return (
    <Layout>
      <Head title={Title}/>
      <Home />
    </Layout>
  )
}

export default About
