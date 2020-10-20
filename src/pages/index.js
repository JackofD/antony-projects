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
          {/* <div className="hero-text">The text that may or may not stay</div> */}
        </section>
        <section className="what-we-do-section">
          <h2 className="background-brick">What we do</h2>
          <section className="flex-row">
            <section className="section">
              <MyImg className="section-img" src="photos/image1.jpg" />
              <section className="section-description">
                We're experts at doing repairs to roofs. We know there's nothing worse
                than a leaky roof or ceiling in winter.
                We'll make sure you stay warm and dry during those cold and rainy months.
              </section>
            </section>
            <section className="section">
              <MyImg className="section-img" src="photos/image6.jpg" />
              <section className="section-description">
                Need to do some upgrading? We've got you covered.
                Our skills in home improvement are top-notch and will leave nothing to be desired.
              </section>
            </section>
          </section>
          <section>
            <p>
              Apart from our specialties, our skills also cover brickwork, plastering, painting, skimming,
              tiling and general home-improvement
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
