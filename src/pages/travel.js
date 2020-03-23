import React from "react"
import Layout from "../components/layout"
import TravelAccomodations from "./subpages/travelaccommodations"
import PageTitle from "../components/PageTitle"
import Head from "../components/head"
import BackgroundImage from "gatsby-background-image"

const Title = "Travel & Accommodations"
const Travel = () => {
  return (
    <Layout> 
      <PageTitle title={Title} />
      <Head title={Title} />

      <TravelAccomodations />
    </Layout>
  )
}

export default Travel
