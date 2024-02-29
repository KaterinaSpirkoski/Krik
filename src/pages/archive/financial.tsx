import DocumentCard from "@/components/documentCard";
import { DocumentsProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  dataProjects: DocumentsProps[];
}

const Financial: NextPage<Props> = ({ dataProjects }) => {
  const { pathname } = useRouter();

  // const [displayedCards, setDisplayedCards] = useState<{
  //   [year: string]: number;
  // }>({
  //   "2023": 4,
  //   "2022": 4,
  //   "2021": 4,
  // });

  // const handleShowMore = (year: string) => {
  //   setDisplayedCards((prev) => ({
  //     ...prev,
  //     [year]: prev[year] + 4,
  //   }));
  // };
  return (
    <div className="financial">
      <div className="financial">
        <div className="links">
          <Link
            href="/archive"
            className={pathname === "/archive" ? "active-link" : ""}
          >
            {" "}
            <p className="link">Годишни извештаи</p>
          </Link>
          <Link
            href="/archive/financial"
            className={pathname === "/archive/financial" ? "active-link" : ""}
          >
            {" "}
            <p className="link">Финансиски извештаи</p>
          </Link>
          <Link
            href="/archive/political"
            className={pathname === "/archive/political" ? "active-link" : ""}
          >
            {" "}
            <p className="link">Политички документи</p>
          </Link>
        </div>
      </div>
      {/* <div className="annual-reports">
        <h2>2023 година</h2>

        <div className="doc-2023">
          {dataProjects
            .filter((report) => report.year === "2023")
            .slice(0, displayedCards["2023"])
            .map((report) => (
              <DocumentCard key={report.id} title={report.title} />
            ))}
        </div>
        <div className="btn-inner">
          {displayedCards["2023"] <
            dataProjects.filter((report) => report.year === "2023").length && (
            <button onClick={() => handleShowMore("2023")}>Види ги сите</button>
          )}
        </div>

        <h2>2022 година</h2>
        <div className="doc-2022">
          {dataProjects
            .filter((report) => report.year === "2022")
            .slice(0, displayedCards["2022"])
            .map((report) => (
              <DocumentCard key={report.id} title={report.title} />
            ))}
        </div>
        <div className="btn-inner">
          {displayedCards["2022"] <
            dataProjects.filter((report) => report.year === "2022").length && (
            <button onClick={() => handleShowMore("2022")}>Види ги сите</button>
          )}
        </div>

        <h2>2021 година</h2>
        <div className="doc-2021">
          {dataProjects
            .filter((report) => report.year === "2021")
            .slice(0, displayedCards["2021"])
            .map((report) => (
              <DocumentCard key={report.id} title={report.title} />
            ))}
        </div>
        <div className="btn-inner">
          {displayedCards["2021"] <
            dataProjects.filter((report) => report.year === "2021").length && (
            <button onClick={() => handleShowMore("2021")}>Види ги сите</button>
          )}
        </div>
      </div> */}
    </div>
  );
};
export default Financial;

export const getStaticProps: GetStaticProps = async () => {
  const resProjects = await fetch(" http://localhost:5001/financialStetament");
  const dataProjects: DocumentsProps[] = await resProjects.json();

  return {
    props: {
      dataProjects,
    },
  };
};
