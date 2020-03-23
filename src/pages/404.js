import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Title = "404 - Page Not Found"

const NotFound = () => {
  return (
    <Layout>
      <Head title={Title} />
      <div>
        <h1>NOT FOUND</h1>
        <p>You tried to hit a page that doesn&#39;t exist!</p>
      </div>
    </Layout>
  )
}

export default NotFound
