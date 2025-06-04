import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css";
import images from "../../data/galleryImages";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title lobster">Pixels of My Universe</h1>
      <p className="gallery-subtitle ">
        From cats to code to starry skies —
        <span className="highlight no-wrap">
          welcome to my multiverse of interests❤️
        </span>
      </p>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="gallery-img"
            onClick={() => openModal(img)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </Masonry>

      {modalImg && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg.src} alt={modalImg.alt} className="gallery-modal-img" />
            <div className="gallery-modal-caption">{modalImg.alt}</div>
            {modalImg.url && (
              <a
                href={modalImg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-modal-link"
              >
                <button className="gallery-modal-visit-btn">Visit</button>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
