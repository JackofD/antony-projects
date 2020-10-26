import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import "../scss/main.scss";
import "../scss/bio.scss";

const Bio = () => {
  return (
    <section className="site-bio">
      <h3 className="heading background-brick">Meet the guy running this operation</h3>
      <section className="site-bio-details">
        <div className="bio-image-container">
          <BioImage />
        </div>
        <div className="bio-text-container">
          <h3>Antony Kanyongo</h3>
          <p>
            Antony has been in the construction and building industy for over 30 years.
            He learned his father's trade, and eventually took over for him carrying on the family business.
            He's the head of a family of 5, including his wife, daughter and two sons who he has been teaching and passing on his skills to.
          </p>
          <p>
            Antony prides himself on integrity and will go the extra mile for his client.
            He gives good advice on the work that needs to be done and is always fair on his quotes.
            The workmanship of his team is always up to standard and they will gladly sort out any issues that may pop up.
          </p>
          <blockquote className="">
            "I love this industry because these skills that I've learned and honed during my life time
            are always relevant and can be taken anywhere."
          </blockquote>
        </div>

      </section>
    </section>
  );
}

export const BioImage = () => {
  const imageData = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "antony.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
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