import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import MyImg from "../components/ImageFilter"
import "../scss/main.scss"
import "../scss/home.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <section className="hero">
          <HeroImage />
          <blockquote className="hero-text">
            <div>Without integrity, a building will collapse. The same is true for society.</div>
            <br />
            <div className="text-right"> - Unknown</div>
          </blockquote>
        </section>
        
        <section className="what-we-do-section">
          <h2 className="background-brick">What we do</h2>
          <section className="flex-row">
            <section className="section">
              <MyImg className="section-img" src="photos/image1.jpg" />
              <section className="section-heading">
                <h3 className="background-brick">Need repairs done?</h3>
              </section>
            </section>
            <section className="section">
              <MyImg className="section-img" src="photos/image6.jpg" />
              <section className="section-heading">
                <h3 className="background-brick">Want to do some upgrading?</h3>
              </section>
            </section>
          </section>
          <section className="details">
            <h3>Whatever you need, we've got you covered.</h3>
          <p>
            We're experts at doing repairs to roofs. We know there's nothing worse
            than a leaky roof or ceiling in winter.
            We'll make sure you stay warm and dry during those cold and rainy months.
          </p>
          <p>
            Our skills in home improvement are top-notch and will leave nothing to be desired.
            Our skills also cover brickwork, plastering, painting, skimming,
            tiling and general home-improvement.
          </p>
          </section>
        </section>
      </section>
    </Layout>
  )
}


export const HeroImage = () => {
  const imageData = useStaticQuery(graphql`
  query heroImageQuery {
    file(relativePath: {eq: "hero.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`);

  if (!imageData) {
    return <div><b>The image couldn't be found :'(</b></div>;
  }
  return <Img alt="hero image" fluid={imageData?.file?.childImageSharp?.fluid}/>;
}

export default IndexPage;
