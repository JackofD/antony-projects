import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GalleryImages from "../components/galleryImages";

import "../scss/main.scss";
import "../scss/gallery.scss";

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <section className="image-gallery">
        <h2 className="heading">Take a look at some of our work</h2>
        <section className="gallery-container">
          <GalleryImages />
        </section>
      </section>
    </Layout>
  )
}

export default GalleryPage;