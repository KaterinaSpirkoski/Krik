import Link from "next/link";
import { useAccessibility } from "@/contex/AccessibilityContext";

const HeroSection = () => {
  const { contrast, oversized } = useAccessibility();
  return (
    <div className={`hero-section ${contrast ? "contrast-img " : ""}`}>
      <div className="hero-text">
        <h1
          className={`hero-title ${oversized ? "xl-oversized " : "HeadlineXL"}`}
        >
          Промената доаѓа од младите
        </h1>
        <h2 className={`${oversized ? "l-oversized " : "HeadlineM "}`}>
          Кои Сме Ние?{" "}
        </h2>
        <p className={`desc ${oversized ? "xl-oversized-body" : "bodyL"}`}>
          Центарот за младински активизам Крик е невладина, непрофитна
          организација основана од млади луѓе, предводена од млади луѓе и работи
          за и со млади луѓе.
        </p>
        <button
          className={`btn-more ${
            contrast ? "contrastPurpleBg" : "defaultPurpleBg"
          } ${oversized ? "button-oversized-L" : "buttonL"}`}
        >
          <Link href="/about">Повеќе За Нас</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
