import { useAccessibility } from "@/contex/AccessibilityContext";
import { TeamDataProps } from "@/interface";
import Link from "next/link";

const TeamCard: React.FC<Partial<TeamDataProps>> = ({
  name,
  position,
  image,
  description,
}) => {
  const { oversized, contrast } = useAccessibility();
  return (
    <>
      <div className="team-card-inner">
        <div className="wrapper">
          <img
            src={image}
            alt="member-image"
            className={` ${contrast ? "contrast-img " : ""}`}
          />
          <div className="text-card-inner">
            <h3 className={` ${oversized ? "m-oversized-title" : "HeadlineM"}`}>
              {name}
            </h3>
            <h5 className={` ${oversized ? "s-oversized-title" : "HeadlineS"}`}>
              {position}
            </h5>
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamCard;
