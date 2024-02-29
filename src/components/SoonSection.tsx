import { useAccessibility } from "@/contex/AccessibilityContext";
import { UpcomingProps } from "@/interface";
import Link from "next/link";

const SoonSection: React.FC<Partial<UpcomingProps>> = ({
  name,
  desc,
  img,
  date,
  month,
}) => {
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="soon-section">
      <div
        className={` soon-inner ${
          contrast ? "defaultBlackBg  " : "darkGreyBg "
        }`}
      >
        <div className="text">
          <h2
            className={` ${
              contrast ? "contrastYellowText " : "defaultYellowText"
            } ${oversized ? "l-oversized-title" : "HeadlineM "}`}
          >
            Наскоро
          </h2>
          <h4 className={` ${oversized ? "m-oversized-title" : "HeadlineS "}`}>
            {name}
          </h4>
          <p className={` ${oversized ? "xl-oversized-body" : "bodyL "}`}>
            {desc}
          </p>
          <div className="btn-inner">
            <Link href="/projects">
              <button
                className={`btn bg-orange ${
                  contrast ? "contrastYellowBg " : "defaultYellowBg "
                }  ${oversized ? "button-oversized-L" : "buttonL "}`}
              >
                Види повеќе{" "}
              </button>
            </Link>
            <Link href="/aplication">
              <button
                className={`btn bg-purple ${
                  contrast ? "contrastPurpleBg " : "defaultPurpleBg "
                } ${oversized ? "button-oversized-L" : "buttonL "}`}
              >
                Пријави се!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="event">
        <img src={img} alt="event-image" className="event-img" />
        <div className="time">
          <strong>{date}</strong>
          <p>{month}</p>
        </div>
      </div>
    </div>
  );
};
export default SoonSection;
