import { useAccessibility } from "@/contex/AccessibilityContext";
import { VolunerCardProps } from "@/interface";
import Link from "next/link";

const VolunterCard: React.FC<Partial<VolunerCardProps>> = ({
  image,
  name,
  info,
  id,
}) => {
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="card">
      <Link href={`/volunteers/${id}`}>
        <img
          src={image}
          alt="volunter-image"
          className={`volunteer-image ${contrast ? "contrast-img " : ""}`}
        />
        <div className="card-text">
          <h4 className={` ${oversized ? "s-oversized-title " : "HeadlineS"}`}>
            {name}
          </h4>
          <p className={` ${oversized ? "bodyL " : "bodyS"}`}>{info}</p>
        </div>
      </Link>
    </div>
  );
};

export default VolunterCard;
