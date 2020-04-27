import React from "react"
import PageTitle from "../components/PageTitle"
import Layout from "../components/layout"
import Head from "../components/head"
import StoryPage from "./subpages/storypage"

const Title = "Our Story"
const Venue = () => (
  <Layout title={Title}>
    <Head title={Title} />
    <StoryPage />
  </Layout>
)

export default Venue
