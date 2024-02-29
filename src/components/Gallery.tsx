import { useAccessibility } from "@/contex/AccessibilityContext";
import { useEffect } from "react";

const Gallery = () => {
  const { isAnimationPaused, contrast } = useAccessibility();
  const firstRowImages = [
    "./images/e-shop/ring-3.png",
    "./images/e-shop/ring-5.png",
    "./images/e-shop/ring-3.png",
    "./images/e-shop/ring-5.png",
    "./images/e-shop/irring-3.jpg",
    "./images/e-shop/ring.png",
    "./images/e-shop/ring-3.png",
    "./images/e-shop/ring-5.png",
    "./images/e-shop/irring-3.jpg",
    "./images/e-shop/ring.png",
  ];

  const secondRowImages = [
    "./images/e-shop/irring-5.png",
    "./images/e-shop/irring-6.png",
    "./images/e-shop/irring-5.png",
    "./images/e-shop/irring-6.png",
    "./images/e-shop/bracelet.png",
    "./images/e-shop/ring-5.png",
    "./images/e-shop/irring-5.png",
    "./images/e-shop/irring-6.png",
    "./images/e-shop/bracelet.png",
    "./images/e-shop/ring-5.png",
    "./images/e-shop/irring-5.png",
    "./images/e-shop/irring-6.png",
    "./images/e-shop/bracelet.png",
    "./images/e-shop/ring-5.png",
  ];

  useEffect(() => {
    const galleryContainer = document.querySelector(".gallery-container");

    if (galleryContainer) {
      galleryContainer.classList.add("animate");
    }
  }, []);

  useEffect(() => {
    const galleryContainer = document.querySelector(".gallery-container");

    if (galleryContainer) {
      if (isAnimationPaused) {
        galleryContainer.classList.remove("animate");
        galleryContainer.classList.add("paused");
      } else {
        galleryContainer.classList.add("animate");
        galleryContainer.classList.remove("paused");
      }
    }
  }, [isAnimationPaused]);

  const isLargeImage = (imageUrl: string) => {
    return imageUrl.includes("ring-3.png") || imageUrl.includes("bracelet.png");
  };

  return (
    <>
      <div className="gallery-container">
        <div className="row">
          {firstRowImages.map((image, index) => (
            <img
              key={index}
              className={`animated-img ${
                isLargeImage(image) ? "large-image" : ""
              } ${contrast ? "contrast-img " : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="row">
          {secondRowImages.map((image, index) => (
            <img
              key={index}
              className={`animated-img ${
                isLargeImage(image) ? "large-image" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
