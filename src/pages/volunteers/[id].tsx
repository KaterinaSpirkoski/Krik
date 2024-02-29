import { useRouter } from "next/router";
import { NewsProps, VolunerCardProps } from "@/interface";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import LatestNews from "@/components/LatestNews";
import { useAccessibility } from "@/contex/AccessibilityContext";

interface Props {
  data: VolunerCardProps | null;
}

const VolunteerDetailPage: NextPage<Props> = ({ data }) => {
  const { contrast, oversized } = useAccessibility();
  if (!data) {
    return <div>Team member not found...</div>;
  }

  return (
    <>
      <div className="volunteer-detail" id="saturation-content">
        <div className="inner">
          <img
            src={data.image}
            alt={data.name}
            className={` ${contrast ? "contrast-img " : ""}`}
          />

          <div className="detail-text">
            <h2 className={` ${oversized ? "xl-oversized" : "HeadlineL"}`}>
              {data.name}
            </h2>
            <p className={` ${oversized ? "l-oversized-body  " : "bodyL "}`}>
              {data.description}
            </p>
          </div>
        </div>

        <div className="voluneer-projects">
          <h2 className={` ${oversized ? "xl-oversized" : "HeadlineL"}`}>
            Проекти во кои учествува
          </h2>
          <div className="type">
            <button className="btn-type">Тековен</button>
            <button className="btn-type">Завршен</button>
            <button className="btn-type">Завршен</button>
          </div>
          <div className="projects">
            <div className=" latest-card">
              {data.projects &&
                data.projects.map((data) => {
                  return <LatestNews key={data.id} {...data} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/volunteers");
  const data: VolunerCardProps[] = await res.json();

  const paths = data.map((volunteer) => {
    return {
      params: {
        id: volunteer.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: VolunerCardProps | null = null;

  if (params?.id) {
    const res = await fetch(`http://localhost:5001/volunteers/${params.id}`);
    data = await res.json();
  }
  return {
    props: {
      data,
    },
  };
};
