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

const Title = "Contact"

const contact = () => {
  return (
    <div className={SStyle.spacing}>
      <header className={hStyle.header}>
      <NavMenu />
      <Banner/>


   
    </header>
      <div className={SStyle.content}>
      <ContactForm />
      </div>
    </div>
  )
}

export default contact


