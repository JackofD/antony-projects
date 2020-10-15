import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../scss/main.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <section className="hero">
          <HeroImage />
          <div className="hero-text">The text that may or may not stay</div>
        </section>
      </section>
    </Layout>
  )
}


export const HeroImage = () => {
  const imageData = useStaticQuery(graphql`
  query heroImageQuery {
    file(relativePath: {eq: "hero.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)

  if (!imageData) {
    console.log('data lost', imageData)
    return <div><b>The image couldn't be found :'(</b></div>;
  }
  console.log('data found', imageData)
  return <Img alt="hero image" fluid={imageData?.file?.childImageSharp?.fluid}/>;
}

export default IndexPage;
