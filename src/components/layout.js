import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import SStyle from "./site.module.scss"
import Head from "./head"

const Layout = (props, { location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={SStyle.spacing}>
      <link rel="icon" href="/favicon.ico" />
      <Head title={data.site.siteMetadata.title} />
      <Header />
      <div className={SStyle.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
