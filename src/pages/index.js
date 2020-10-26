import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import MyImg from "../components/ImageFilter"
import Bio from "../components/bio"

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
            <div>"Without integrity, a building will collapse. The same is true for society."</div>
            <br />
            <div className="text-right"> - Unknown</div>
          </blockquote>
        </section>
        
        <section className="what-we-do-section">
          <h2 className="heading background-brick">What we do</h2>
          <section className="flex-row">
            <section className="section">
              <MyImg className="section-img" src="photos/image1.jpg" />
              <section className="section-heading">
                <h3 className="heading background-brick">Need repairs done?</h3>
              </section>
            </section>
            <section className="section">
              <MyImg className="section-img" src="photos/image6.jpg" />
              <section className="section-heading">
                <h3 className="heading background-brick">Want to do some upgrading?</h3>
              </section>
            </section>
          </section>
          <section className="details">
            <h3 className="heading">Whatever you need, we've got you covered.</h3>
            <p>
              We're experts at doing repairs to roofs. We know there's nothing worse
              than a leaky roof or ceiling in winter.
              We'll make sure you stay warm and dry during those cold and rainy months.
            </p>
            <section>
              <p>
                Our skills in home improvement and construction are top-notch and will leave nothing to be desired.
              </p>
              <h4 className="heading">Our skills cover:</h4>
              <ul className="skill-list">
                <li>brickwork</li>
                <li>plastering</li>
                <li>painting</li>
                <li>skimming</li>
                <li>tiling</li>
                <li>cladding</li>
                <li>artificial lawns</li>
                <li>braai places/pits</li>
                <li>roof and ceiling repairs</li>
                <li>general home improvement</li>
              </ul>
            </section>
          </section>
        </section>
        <br />
        <Bio />
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
