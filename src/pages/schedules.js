import React from "react"
import PageTitle from "../components/PageTitle"
import Layout from "../components/layout"
import Head from "../components/head"
import SPage from "./subpages/spage"

const Title = "Schedule"

const Schedules = () => (
  <Layout>
    <Head title={Title} />
    <PageTitle title={Title} />
    <SPage />
  </Layout>
)

export default Schedules
