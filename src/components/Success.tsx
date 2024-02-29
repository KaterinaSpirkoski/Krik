import { useAccessibility } from "@/contex/AccessibilityContext";

const Success = () => {
  const { contrast, oversized } = useAccessibility();
  return (
    <>
      <div className="projects-num">
        <span className={` ${oversized ? "span-oversized-Xl " : "spnaXl "}`}>
          320+
        </span>
        <p>Проекти</p>
      </div>
      <div className="volunters-num">
        <span className={` ${oversized ? "span-oversized-Xl " : "spnaXl "}`}>
          580+
        </span>
        <p>Волонтери</p>
      </div>
      <div className="partners-num">
        <span className={` ${oversized ? "span-oversized-Xl " : "spnaXl "}`}>
          25+
        </span>
        <p>Партнери</p>
      </div>
    </>
  );
};
export default Success;
