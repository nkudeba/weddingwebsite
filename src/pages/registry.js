import React from "react"
import PageTitle from "../components/PageTitle"
import Layout from "../components/layout"
import RegistryPage from "./subpages/registrypage"
import Head from "../components/head"

const Title = "Registry"
const Venue = () => (
  <Layout title={Title}>
    <Head title={Title} />
    <RegistryPage />
  </Layout>
)

export default Venue
