import React from "react"
import PageTitle from "../components/PageTitle"
import Layout from "../components/layout"
import VenuePage from "./subpages/venuepage"
import Head from "../components/head"

const Title = "Venue"
const Venue = () => (
  <Layout>
    <PageTitle title={Title} />
    <Head title={Title} />
    <VenuePage />
  </Layout>
)

export default Venue
