import ProjectsGallery from "@/components/ProjectsGallery";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProjectsDataProps, ProjectsProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  dataProjects: ProjectsDataProps[];
  currentProjects: ProjectsDataProps[];
  finishedProjects: ProjectsDataProps[];
}

const Projects: NextPage<Props> = ({
  dataProjects,
  currentProjects,
  finishedProjects,
}) => {
  const projectsPerPageCurrent = 4;
  const projectsPerPageFinished = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const displayProjects = (projects: ProjectsDataProps[], perPage: number) => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return projects.slice(startIndex, endIndex);
  };

  const totalCurrentPages = Math.ceil(
    currentProjects.length / projectsPerPageCurrent
  );
  const totalFinishedPages = Math.ceil(
    finishedProjects.length / projectsPerPageFinished
  );
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="project-page" id="saturation-content">
      <div className="inner">
        <h1 className={` ${oversized ? "xl-oversized " : "HeadlineXL"}`}>
          Проекти
        </h1>
        <h2 className={` ${oversized ? "xl-oversized  " : "HeadlineL"}`}>
          Тековни
        </h2>
      </div>

      <div className="current-projects-inner">
        <div className="projects-inner left-project">
          {displayProjects(currentProjects, projectsPerPageCurrent)
            .slice(0, 1)
            .map((project) => (
              <ProjectsGallery key={project.id} {...project} />
            ))}
        </div>
        <div className="projects-inner right-projects">
          <div className="row">
            {displayProjects(currentProjects, projectsPerPageCurrent)
              .slice(1, 2)
              .map((project) => (
                <div key={project.id} className="col-1">
                  <ProjectsGallery {...project} />
                </div>
              ))}
          </div>
          <div className="row">
            {displayProjects(currentProjects, projectsPerPageCurrent)
              .slice(2)
              .map((project) => (
                <div key={project.id} className="col">
                  <ProjectsGallery {...project} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Pagination>
        {Array.from({ length: totalCurrentPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <div className="inner">
        <h2 className={` ${oversized ? "xl-oversized  " : "HeadlineL"}`}>
          Завршени
        </h2>
      </div>
      {
        <div className="finished-projects">
          {Array.from({ length: totalFinishedPages }).map((_, pageIndex) => (
            <div
              key={pageIndex + 1}
              className={`page-container ${
                pageIndex + 1 === currentPage ? "active" : ""
              }`}
            >
              <div className="row">
                {displayProjects(finishedProjects, projectsPerPageFinished)
                  .slice(pageIndex * 4, pageIndex * 4 + 1)
                  .map((project) => (
                    <div key={project.id} className="left-project">
                      <ProjectsGallery {...project} />
                    </div>
                  ))}

                <div className="right-project">
                  <div className="one-project">
                    {displayProjects(finishedProjects, projectsPerPageFinished)
                      .slice(pageIndex * 4 + 1, pageIndex * 4 + 2)
                      .map((project) => (
                        <div key={project.id} className="col">
                          <ProjectsGallery {...project} />
                        </div>
                      ))}
                  </div>
                  <div className="two-project">
                    {displayProjects(finishedProjects, projectsPerPageFinished)
                      .slice(pageIndex * 4 + 2, pageIndex * 4 + 4)
                      .map((project) => (
                        <div key={project.id} className="col">
                          <ProjectsGallery {...project} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Pagination>
            {Array.from({ length: totalFinishedPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      }
    </div>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const resProjects = await fetch("http://localhost:5001/projectsData");
  const dataProjects: ProjectsDataProps[] = await resProjects.json();

  const currentProjects = dataProjects.filter(
    (project) => project.status === "current"
  );
  const finishedProjects = dataProjects.filter(
    (project) => project.status === "finished"
  );

  return {
    props: {
      dataProjects,
      currentProjects,
      finishedProjects,
    },
  };
};
