import TeamCard from "@/components/TeamCard";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { TeamDataProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface Props {
  teamData: TeamDataProps[];
  menagmentData: TeamDataProps[];
}

const OurTeam: NextPage<Props> = ({ teamData, menagmentData }) => {
  const { contrast, oversized } = useAccessibility();
  const [active, setActive] = useState(1);
  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1) % 3);
  };
  const handlePrev = () => {
    setActive((prevActive) => (prevActive - 1 + 3) % 3);
  };
  return (
    <>
      <div className="our-team-page" id="saturation-content">
        <h1 className={` ${oversized ? "xl-oversized" : "HeadlineXL"}`}>
          Запознајте го <br />
          Нашиот Тим{" "}
        </h1>
        <div className="team-inner">
          <div className="team-slider">
            {teamData.map((member, index) => (
              <div
                className={`item ${index === active ? "center" : ""} ${
                  index === (active + 1) % 3 ? "right" : ""
                } ${index === (active - 1 + 3) % 3 ? "left" : ""}  `}
                key={index}
              >
                <Link href={`/ourTeam/${member.id}`}>
                  <div
                    className={`image-container ${
                      contrast ? "contrast-img " : ""
                    }`}
                  >
                    <img src={member.image} alt="" />
                  </div>
                </Link>
                <div className="slider-buttons">
                  <div className="btn">
                    <button onClick={handleNext}>
                      <img src="./images/arrowLeft.png" alt="" />
                    </button>
                    <button onClick={handlePrev} className="right-btn">
                      <img src="./images/arrowRight.png" alt="" />
                    </button>
                  </div>
                </div>
                <div className="description">
                  <Link href={`/ourTeam/${member.id}`}>
                    <h5
                      className={` ${oversized ? "l-oversized" : "HeadlineM"}`}
                    >
                      {member.name}
                    </h5>
                  </Link>
                  <p>{member.position}</p>
                  <button
                    className={`linkedIn ${
                      contrast ? "cotrastOrangeBg " : "defaultOrangeBg"
                    }`}
                  >
                    <a href={`${member.linkedin}`}> LinkedIn</a>
                    <img src="./images/arrowRight.png" alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menagment-inner">
          <h1 className={` ${oversized ? "HeadlineXL" : "xl-oversized"}`}>
            Членови на Управниот Одбор
          </h1>
          <div className="menagment-card">
            {menagmentData.map((member) => {
              return (
                <Link href={`/ourTeam/${member.id}`} key={member.id}>
                  <TeamCard {...member} />;
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/ourTeam");
  const teamData: TeamDataProps[] = await res.json();
  const resMenagment = await fetch("http://localhost:5001/menagment");
  const menagmentData = await resMenagment.json();
  return {
    props: {
      teamData,
      menagmentData,
    },
  };
};
