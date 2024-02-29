import { useRouter } from "next/router";
import { TeamDataProps } from "@/interface";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useAccessibility } from "@/contex/AccessibilityContext";

interface Props {
  teamData: TeamDataProps | null;
  menagmentData: TeamDataProps | null;
}

const TeamMemberDetailPage: NextPage<Props> = ({ teamData, menagmentData }) => {
  const { contrast, oversized } = useAccessibility();
  if (!teamData && !menagmentData) {
    return <div>Team member not found...</div>;
  }

  return (
    <>
      <div className="team-detail" id="saturation-content">
        <div className="team-detail-inner">
          <div className="detail-image">
            <img
              className={`${contrast ? "contrast-img " : ""}`}
              src={teamData?.image || menagmentData?.image}
              alt={teamData?.name || menagmentData?.name}
            />
          </div>
          <div className="detail-info">
            <h2 className={` ${oversized ? "HeadlineXL" : "HeadlineL"}`}>
              {teamData?.name || menagmentData?.name}
            </h2>
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {teamData?.description || menagmentData?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const resTeam = await fetch("http://localhost:5001/ourTeam");
  const resMenagment = await fetch("http://localhost:5001/menagment");

  const teamData: TeamDataProps[] = await resTeam.json();
  const menagmentData: TeamDataProps[] = await resMenagment.json();

  const paths = [...teamData, ...menagmentData].map((member) => ({
    params: {
      id: member.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let teamData: TeamDataProps | null = null;
  let menagmentData: TeamDataProps | null = null;

  if (params?.id) {
    const resTeam = await fetch(`http://localhost:5001/ourTeam/${params.id}`);
    const resMenagment = await fetch(
      `http://localhost:5001/menagment/${params.id}`
    );

    teamData = await resTeam.json().catch(() => null);
    menagmentData = await resMenagment.json().catch(() => null);
  }

  return {
    props: {
      teamData,
      menagmentData,
    },
  };
};
