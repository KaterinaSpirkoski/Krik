import VolunterCard from "@/components/VolunteerCard";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { VolunerCardProps } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  volunteersData: VolunerCardProps[];
}
const Volunteers: NextPage<Props> = ({ volunteersData }) => {
  const { pathname } = useRouter();
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="volunteers" id="saturation-content">
      <div className="title">
        <h1 className={` ${oversized ? "xl-oversized " : "HeadlineXL"}`}>
          Нашите Волонтери
        </h1>
        <div className="volunteers-link">
          <Link
            href="/volunteers"
            className={pathname === "/volunteers" ? "active-link" : ""}
          >
            {" "}
            <p className={` link ${oversized ? "l-oversized " : "HeadlineM"}`}>
              Долг рок
            </p>
          </Link>
          <Link
            href="/volunteers/ShortTermVolunteers"
            className={
              pathname === "/volunteers/ShortTermVolunteers"
                ? "active-link"
                : ""
            }
          >
            {" "}
            <p className={` link ${oversized ? "l-oversized " : "HeadlineM"}`}>
              Краток Рок
            </p>
          </Link>
        </div>
      </div>
      <div className="volunteers-inner">
        {volunteersData.map((volunteer) => {
          return <VolunterCard key={volunteer.id} {...volunteer} />;
        })}
      </div>
    </div>
  );
};
export default Volunteers;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:5001/volunteers");
  const volunteersData: VolunerCardProps[] = await res.json();
  return {
    props: {
      volunteersData,
    },
  };
};
