import React from "react"
import Layout from "../components/layout"
import ContactForm from "../pages/subpages/contactform"
import PageTitle from "../components/PageTitle"
import Head from "../components/head"

const Title = "Contact"

const contact = () => {
  return (
    <Layout>
        <PageTitle title={Title} />
        <Head title={Title} />
      <ContactForm />
    </Layout>
  )
}

export default contact
