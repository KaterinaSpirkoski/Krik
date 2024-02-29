import Link from "next/link";
import { useRouter } from "next/router";

const Political = () => {
  const { pathname } = useRouter();
  return (
    <div className="political">
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
  );
};
export default Political;
