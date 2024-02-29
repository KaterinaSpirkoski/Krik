import { useAccessibility } from "@/contex/AccessibilityContext";
import { PartnersProps } from "@/interface";
import { useEffect } from "react";

const Partners: React.FC<Partial<PartnersProps>> = ({ id, image }) => {
  const { isAnimationPaused } = useAccessibility();

  useEffect(() => {
    const partnersContainer = document.querySelector(".our-partners");

    if (partnersContainer) {
      partnersContainer.classList.add("animate");
    }
  }, []);

  useEffect(() => {
    const partnersContainer = document.querySelector(".our-partners");

    if (partnersContainer) {
      if (isAnimationPaused) {
        partnersContainer.classList.remove("animate");
        partnersContainer.classList.add("paused");
      } else {
        partnersContainer.classList.add("animate");
        partnersContainer.classList.remove("paused");
      }
    }
  }, [isAnimationPaused]);
  return (
    <div className="partners-inner">
      <img src={image} alt="partner-image" />
    </div>
  );
};
export default Partners;
