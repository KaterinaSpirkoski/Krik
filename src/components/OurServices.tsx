import { useAccessibility } from "@/contex/AccessibilityContext";
import { OurServicesProps } from "@/interface";
import Link from "next/link";

const OurServices: React.FC<OurServicesProps> = ({
  id,
  description,
  title,
  redirecting,
}) => {
  const { contrast, oversized } = useAccessibility();
  const getBackgroundColor = () => {
    if (contrast) {
      return id === "0" ? "black" : "#f82d00";
    } else {
      return id === "0" ? "black" : "#fb5e3c";
    }
  };

  return (
    <div className="ourServices">
      <div className="title">
        <h2>{title}</h2>
        <Link
          href={redirecting}
          className="img-icon"
          style={{ backgroundColor: getBackgroundColor() }}
        >
          <img src="./images/arrowUp.svg" alt="arrow-up" />
        </Link>
      </div>
      <p className={` ${oversized ? "s-oversized-body" : "bodyS"}`}>
        {description}
      </p>
    </div>
  );
};

export default OurServices;
