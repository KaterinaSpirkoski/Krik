import { DocumentsProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  dataProjects: DocumentsProps[];
}

const Financial: NextPage<Props> = ({ dataProjects }) => {
  const { pathname } = useRouter();

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
