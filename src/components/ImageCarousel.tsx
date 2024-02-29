import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAccessibility } from "@/contex/AccessibilityContext";

interface ImageCarouselProps {
  images: string[];
}
interface CustomArrowProps {
  onClick: () => void;
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const { contrast } = useAccessibility();
  const SampleNextArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <img src="/images/arrowRight.png" alt="arrow-right" />
      </div>
    );
  };

  const SamplePrevArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <img src="/images/arrowLeft.png" alt="arrow-left" />
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image: any, index: any) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${contrast ? "contrast-img " : ""}`}
              style={{ borderRadius: "30px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
