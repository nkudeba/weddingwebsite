import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogStyle from './blog.module.scss'
import Head from '../components/head'

const Title = "Blogs"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data)


  return (
    <Layout>
      <Head title={Title} />
      <h1> Some stuff</h1>
      <p>
    
        Posts here:
        <ol className={BlogStyle.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {

                return(
                    <li className={BlogStyle.post}>
                        <h2> 
                          <Link to={`/blog/${edge.node.fields.slug}`}> {edge.node.frontmatter.title} </Link>
                            
                        </h2>
                    </li>
                )
            })}
        </ol>
      </p>
    </Layout>
  )
}

export default BlogPage
