import React, { useState } from "react";
import logo from "../logo.png";
import gall1 from "./imagesA/gall1.avif";
import gall2 from "./imagesA/gall2.avif";
import gall3 from "./imagesA/gall3.avif";
import gall4 from "./imagesA/gall4.avif";
import gall5 from "./imagesA/gall5.avif";
import gall6 from "./imagesA/gall6.avif";
import gall7 from "./imagesA/gall7.avif";
import gall8 from "./imagesA/gall8.avif";
import gall9 from "./imagesA/gall9.avif";
import pic1 from "./imagesA/pic1.jpg";
import "./SolarFieldInstallations.css";
import Footer from "../components/Footer";

const images = [gall1, gall2, gall3, gall4, gall5, gall6, gall7, gall8, gall9];

const SolarFieldInstallations = () => {
  const [lightbox, setLightbox] = useState({ active: false, index: 0, scale: 1 });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomingIn, setZoomingIn] = useState(false);

  const openLightbox = (index) => {
    setLightbox({ active: true, index, scale: 1 });
    setZoomingIn(false);
  };

  const closeLightbox = () => {
    setLightbox({ active: false, index: 0, scale: 1 });
    setIsFullScreen(false);
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % images.length, // Loop to the first image
    }));
  };

  const zoomIn = () => {
    setLightbox((prev) => ({
      ...prev,
      scale: prev.scale + 0.2, // Zoom by 0.2 increments
    }));
    setZoomingIn(true);
  };

  const zoomOut = () => {
    setLightbox((prev) => ({
      ...prev,
      scale: Math.max(prev.scale - 0.2, 1), // Ensure scale doesn't go below 1
    }));
    setZoomingIn(false);
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
    } else {
      const lightboxContent = document.querySelector('.lightbox-content');
      lightboxContent.requestFullscreen ? lightboxContent.requestFullscreen() : lightboxContent.webkitRequestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <div className="image-front">
        <img src={pic1} alt="Solar Panels" />
      </div>
      <div className="fields">
        <h2>Solar Fields</h2>
      </div>
      <div className="get-started">
      <h2>Get in Touch to Start Your Solar Journey</h2>
<p>
  Ready to switch to solar and start saving on energy costs? The Solar
  Company specializes in helping businesses—from auto dealers to apartments, warehouses, and solar fields—achieve increased ROI through solar energy solutions.
</p>
<p>
  Reach out to our expert team today and begin transforming your energy expenses into long-term savings. We’ll kick off the process with a consultation and provide you with a free quote for solar panel installation. If you have any questions, we're here to guide you through every step of the process.
</p>

      </div>

      {/* Video and Photo Containers */}
      <div className="gallery">
        {/* Video Container */}
        <div className="video-container1">
          <video controls autoPlay muted loop width="100%" height="auto">
            <source
              src="https://cdn.pixabay.com/video/2020/05/02/37907-415263544_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Photo Grid */}
        <div className="photo-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Solar Field ${index + 1}`}
              className="grid-photo"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightbox.active && (
          <div className="lightbox" onClick={closeLightbox}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing on image click
              style={{
                transform: `scale(${lightbox.scale})`,
                transformOrigin: "center center", // Set zoom to happen around the center
              }}
            >
              <img
                src={images[lightbox.index]}
                alt={`Solar Field ${lightbox.index + 1}`}
                className="lightbox-image"
                onClick={nextImage} // Change image on click
              />
              <div className="controls">
                {zoomingIn ? (
                  <button className="zoom-out" onClick={zoomOut}>
                    <i className="bx bx-zoom-out" style={{ color: "#fffbfb" }}></i>
                  </button>
                ) : (
                  <button className="zoom-in" onClick={zoomIn}>
                    <i className="bx bx-zoom-in" style={{ color: "#fffbfb" }}></i>
                  </button>
                )}
                <button className="fullscreen" onClick={toggleFullScreen}>
                  {isFullScreen ? (
                    <i className="bx bx-exit-fullscreen" style={{ color: "#fffbfb" }}></i>
                  ) : (
                    <i className="bx bx-fullscreen" style={{ color: "#fffbfb" }}></i>
                  )}
                </button>
                <button className="close" onClick={closeLightbox}>
                  <i className="bx bx-x" style={{ color: "#fffbfb" }}></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer logo={logo} />
    </div>
  );
};

export default SolarFieldInstallations;
