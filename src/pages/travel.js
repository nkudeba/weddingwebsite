

import TravelAccomodations from "./subpages/travelaccommodations"


import BackgroundImage from "gatsby-background-image"


import React from "react"
import Layout from "../components/layout"
import ContactForm from "../pages/subpages/contactform"
import PageTitle from "../components/PageTitle"
import Head from "../components/head"
import "../styles/index.scss"
import SStyle from "../components/site.module.scss"
import hStyle from "../components/header.module.scss"
import NavMenu from "../components/menu"
import Banner from '../components/banner'


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
