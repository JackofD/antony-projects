import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import "../scss/main.scss";
import "../scss/gallery.scss";

const GalleryImages = () => {
  const imageData = useStaticQuery(graphql`
    query {
      images: allFile(filter: {ext: {regex: "/jpg|png/"}, sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "photos"}}) {
        edges {
          node {
            name
            relativePath
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const {edges: theImagas} = imageData.images;


  return (
    <>
      {
        theImagas.map((image, index) => {
          console.log(image.node)
          return (
            <div key={`image-${index}`} className="gallery-image">
              <Img fluid={image.node.childImageSharp.fluid} />
            </div>
          );
        })
      }
    </>
  )
}

export default GalleryImages;