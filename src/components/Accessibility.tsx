import { useAccessibility } from "@/contex/AccessibilityContext";
import React, { useEffect, useState } from "react";

const Accessibility = () => {
  const {
    contrast,
    toggleContrastColors,
    oversized,
    toggleFontSize,
    cursorSize,
    toggleCursorSize,
    toggleSaturation,
    saturation,
    isAnimationPaused,
    togglePauseAnimation,
    toggleReadingMask,
  } = useAccessibility();
  const { isReadingMaskActive, setMaskPosition } = useAccessibility();
  const [isModalOpen, setModalOpen] = useState(false);
  const [oversizedImage, setOversizedImage] = useState(
    "/images/accessibility/Off.svg"
  );
  const [cursorImage, setCursorImage] = useState(
    "/images/accessibility/cursor-size.svg"
  );
  const [isClicked, setClicked] = useState(false);
  const [isContrastClicked, setContrastClicked] = useState(false);
  const [isPauseAnimationClicked, setPauseAnimationClicked] = useState(false);
  const [isSaturationClicked, setSaturationClicked] = useState(false);
  const [isReadingMaskClicked, setReadingMaskClicked] = useState(false);
  const [isScreenReaderClicked, setScreenReaderClicked] = useState(false);
  const [contrastImage, setContrastImage] = useState(
    "/images/accessibility/contrast-off.svg"
  );
  const [animationImage, setAnimationImage] = useState(
    "/images/accessibility/pause-animation.svg"
  );
  const [saturationImage, setSaturationImage] = useState(
    "/images/accessibility/saturation.svg"
  );
  const [readingMaskImage, setReadingMaskImage] = useState(
    "/images/accessibility/reading-mask.svg"
  );
  const [screenReaderImage, setScreenReaderImage] = useState(
    "/images/accessibility/screen-reader.svg"
  );

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleContrastButtonClick = () => {
    toggleContrastColors();
    setContrastClicked(!isContrastClicked);
    setContrastImage((prevImage) =>
      prevImage === "/images/accessibility/contrast-off.svg"
        ? "/images/accessibility/contrast-on.svg"
        : "/images/accessibility/contrast-off.svg"
    );
  };
  const handleOversizedButtonClick = () => {
    toggleFontSize();
    setOversizedImage((prevImage) =>
      prevImage === "/images/accessibility/Off.svg"
        ? "/images/accessibility/on.svg"
        : "/images/accessibility/Off.svg"
    );
  };

  const handleCursorSizeButtonClick = () => {
    toggleCursorSize();
    setClicked(!isClicked);
    document.body.classList.toggle("custom-cursor-active", !isClicked);

    setCursorImage((prevImage) =>
      prevImage === "/images/accessibility/cursor-size.svg"
        ? "/images/accessibility/cursor-active.svg"
        : "/images/accessibility/cursor-size.svg"
    );
  };
  useEffect(() => {
    document.body.classList.toggle("custom-cursor-active", cursorSize);
  }, [cursorSize]);

  const handleSaturationButtonClick = () => {
    toggleSaturation();
    setSaturationClicked(!isSaturationClicked);
    const contentContainer = document.getElementById("saturation-content");
    if (contentContainer) {
      contentContainer.style.filter = `saturate(${
        isSaturationClicked ? 100 : 200
      }%)`;
    }
    setSaturationImage((prevImage) =>
      prevImage === "/images/accessibility/saturation-on.svg"
        ? "/images/accessibility/saturation.svg"
        : "/images/accessibility/saturation-on.svg"
    );
  };
  useEffect(() => {
    const contentContainer = document.getElementById("saturation-content");
    if (contentContainer) {
      contentContainer.style.filter = `saturate(${
        isSaturationClicked ? 200 : 100
      }%)`;
    }
  }, [isSaturationClicked]);
  const handlePauseAnimationButtonClick = () => {
    togglePauseAnimation();
    setPauseAnimationClicked(!isPauseAnimationClicked);
    setAnimationImage((prevImage) =>
      prevImage === "/images/accessibility/pause-animation.svg"
        ? "/images/accessibility/animation-stop.svg"
        : "/images/accessibility/pause-animation.svg"
    );
  };

  const handleScreenReaderButtonClick = () => {
    setScreenReaderClicked(!isScreenReaderClicked);
    setScreenReaderImage((prevImage) =>
      prevImage === "/images/accessibility/screen-reader.svg"
        ? "/images/accessibility/screen-reader-on.svg"
        : "/images/accessibility/screen-reader.svg"
    );
  };
  const handleReadingMaskButtonClick = () => {
    toggleReadingMask();
    setReadingMaskClicked(!isReadingMaskClicked);
    setReadingMaskImage((prevImage) =>
      prevImage === "/images/accessibility/reading-mask.svg"
        ? "/images/accessibility/reading-mask-on.svg"
        : "/images/accessibility/reading-mask.svg"
    );
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      console.log("Mouse move event");
      setMaskPosition({ x: e.clientX, y: e.clientY });
    };

    if (isReadingMaskActive) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isReadingMaskActive, setMaskPosition]);

  return (
    <div
      className={`accessibility-inner ${isModalOpen ? "open" : ""}`}
      onMouseLeave={closeModal}
    >
      <button
        className={`accessibility ${
          contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"
        }`}
        style={{
          width: isModalOpen ? "500px" : "auto",
          borderBottomLeftRadius: isModalOpen ? "0" : "15px",
        }}
        onClick={openModal}
      >
        Пристапност
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="oversized">
            <div className="inner">
              <span>XL</span>
              <span>Oversized Widget</span>
            </div>
            <img
              src={oversizedImage}
              alt="toggle-image"
              onClick={handleOversizedButtonClick}
            />
          </div>
          <div className="wrapper">
            <div
              className={`cursor  ${isClicked ? "clicked" : "btn-inner"} ${
                contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"
              }`}
              onClick={handleCursorSizeButtonClick}
            >
              <img src={cursorImage} alt="cursor-size" />
              <p>Cursor size</p>
            </div>
            <div
              className={`screen-reader  ${
                isScreenReaderClicked ? "clicked" : "btn-inner"
              } ${contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"}`}
              onClick={handleScreenReaderButtonClick}
            >
              <img src={screenReaderImage} alt="screen-reader" />
              <p>Screen reader</p>
            </div>
          </div>
          <div className="wrapper">
            <div
              className={`contrast  ${
                isContrastClicked ? "clicked" : "btn-inner"
              } ${contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"}`}
              onClick={handleContrastButtonClick}
            >
              <img src={contrastImage} alt="contrast-img" />
              <p>Contrast</p>
            </div>
            <div
              className={`reading-mask  ${
                isReadingMaskClicked ? "clicked" : "btn-inner"
              } ${contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"}`}
              onClick={handleReadingMaskButtonClick}
            >
              <img src={readingMaskImage} alt="reading-mask-img" />
              <p>Reading Mask</p>
            </div>
          </div>
          <div className="wrapper">
            <div
              className={`pause-animation  ${
                isPauseAnimationClicked ? "clicked" : "btn-inner"
              } ${contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"}`}
              onClick={handlePauseAnimationButtonClick}
            >
              <img src={animationImage} alt="pause-animation" />
              <p>Pause Animation</p>
            </div>
            <div
              className={`saturation  ${
                isSaturationClicked ? "clicked" : "btn-inner"
              } ${contrast ? "cotrastOrangeBg  " : "defaultOrangeBg"}`}
              onClick={handleSaturationButtonClick}
            >
              <img src={saturationImage} alt="saturation-img" />
              <p>Saturation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
