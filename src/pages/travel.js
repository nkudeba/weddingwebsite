import React from "react"
import Layout from "../components/layout"
import TravelAccomodations from "./subpages/travelaccommodations"
import PageTitle from "../components/PageTitle"
import Head from "../components/head"
import BackgroundImage from "gatsby-background-image"

const Title = "Accommodations"
const Travel = () => {
  return (
    <Layout title={Title}> 
      {/* <PageTitle title={Title} /> */}
      <Head title={Title} />

      <TravelAccomodations />
    </Layout>
  )
}

export default Travel
