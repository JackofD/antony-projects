import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import "../scss/main.scss";
import "../scss/bio.scss";

const Bio = () => {
  return (
    <article className="site-bio">
      <h3 className="heading background-brick">Meet the guy running this operation</h3>
      <section className="site-bio-details">
        <div className="bio-image-container">
          <BioImage />
        </div>
        <div className="bio-text-container">
          <h3 className="heading">Antony Kanyongo</h3>
          <p>
            Antony has been in the construction and building industry for over 30 years.
            He learned his father's trade, and eventually took over for him, carrying on the family business.
            He has a loving wife and daughter, as well as two sons whom he has been teaching and passing his skills on to.
          </p>
          <p>
            Antony prides himself on integrity and will go the extra mile for his client.
            He gives good advice on the work that needs to be done and is always fair in his quotes.
            The workmanship of his team is always up to standard, and they will gladly sort out any issues that may pop up.
          </p>
          <blockquote className="">
            "I love this industry because these skills that I've learned and honed during my lifetime
            are always relevant and can be used anywhere in the world."
          </blockquote>
        </div>

      </section>
    </article>
  );
}

export const BioImage = () => {
  const imageData = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "antony.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 450) {
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

export default Bio;