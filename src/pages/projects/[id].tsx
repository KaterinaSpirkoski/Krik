import ImageCarousel from "@/components/ImageCarousel";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProjectsDataProps } from "@/interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Props {
  dataProjects: ProjectsDataProps | null;
}

const SingleProject: NextPage<Props> = ({ dataProjects }) => {
  if (!dataProjects) {
    return <div>Project not found...</div>;
  }
  const isFinished = dataProjects.status === "finished";
  const progress = isFinished ? "100%" : dataProjects.progress;
  const images = [dataProjects.img, dataProjects.image_second];
  const { contrast, oversized } = useAccessibility();

  return (
    <div className="single-projects" id="saturation-content">
      <div className="gallery-projects">
        <ImageCarousel images={images} />
      </div>
      <div className="project-info">
        <div className="middle">
          <h1 className={` ${oversized ? "HeadlineXL" : "xl-oversized "}`}>
            {dataProjects.name}
          </h1>
          <p className={` ${oversized ? "bodyL " : "bodyS"}`}>
            Проектот ќе се фокусира на обезбедување и креирање иновативна
            дигитална алатка која ќе обезбеди онлајн можност за учење на младите
            од партнерски земји за развој на заедницата, активно граѓанство и
            процеси на одлучување.
          </p>
        </div>

        <div className="goal">
          <div className="goal-title">
            <h2 className={` ${oversized ? "HeadlineXL" : "xl-oversized "}`}>
              Цел на проектот
            </h2>
          </div>
          <div className="goal-desc">
            <p className={` ${oversized ? "l-oversized-body " : "bodyL"}`}>
              {dataProjects.goals}
            </p>
          </div>
        </div>
        <div className="intended">
          <div className="intended-desc">
            <h2 className={` ${oversized ? "HeadlineXL" : "xl-oversized "}`}>
              За кого е наменет овој проект ?{" "}
            </h2>
            <p className={` ${oversized ? "l-oversized-body " : "bodyL"}`}>
              {dataProjects.intendedFor}
            </p>
          </div>
          <div className="img-intended">
            <img src={dataProjects.image_second} alt="" />
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar">
            <div
              className={`progress-bar-inner ${
                contrast ? "contrastYellowBg" : "defaultYellowBg"
              }`}
              style={{
                width: progress,
              }}
            >
              <span>{progress}</span>
            </div>
          </div>

          {!isFinished && (
            <div className="buttons">
              <Link href="/aplication">
                <div className="join-us">
                  <h3>Заинтересиран/а си ?</h3>
                  <button
                    className={`join-btn ${
                      contrast ? "defaultBlackBg" : "darkGreyBg"
                    } ${oversized ? "button-oversized-L" : "buttonL"}`}
                  >
                    Пријави се!
                  </button>
                </div>
              </Link>

              <Link href="/donation">
                <div className="donate">
                  <h3>Сакаш да не поддржиш ? </h3>

                  <button
                    className={`donate-btn ${
                      contrast ? "cotrastOrangeBg" : "defaultOrangeBg"
                    } ${oversized ? "button-oversized-L" : "buttonL"}`}
                  >
                    Донирај
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("  http://localhost:5001/projectsData");
  const dataProjects: ProjectsDataProps[] = await res.json();

  const paths = dataProjects.map((el) => {
    return {
      params: {
        id: el.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let dataProjects: ProjectsDataProps | null = null;

  if (params?.id) {
    const res = await fetch(`http://localhost:5001/projectsData/${params.id}`);
    dataProjects = await res.json();
  }

  return {
    props: {
      dataProjects,
    },
  };
};
