import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProjectsDataProps, ProjectsProps } from "@/interface";
import Link from "next/link";

const ProjectsGallery: React.FC<Partial<ProjectsDataProps>> = ({
  id,
  img,
  name,
}) => {
  const { contrast } = useAccessibility();

  return (
    <div className="projects-inner">
      <Link href={`/projects/${id}`}>
        <img
          src={img}
          alt="project-image"
          className={`img-gallery ${contrast ? "contrast-img " : ""}`}
        />
        <p className="project-name">{name}</p>
      </Link>
    </div>
  );
};
export default ProjectsGallery;
