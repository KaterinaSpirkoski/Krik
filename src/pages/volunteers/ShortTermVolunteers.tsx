import { useAccessibility } from "@/contex/AccessibilityContext";
import Link from "next/link";
import { useRouter } from "next/router";

const ShortTermVolunteers = () => {
  const { contrast, oversized } = useAccessibility();
  const { pathname } = useRouter();
  return (
    <>
      <div className="volunteers">
        <div className="title">
          <h1 className={` ${oversized ? "xl-oversized " : "HeadlineXL"}`}>
            Нашите Волонтери
          </h1>
          <div className="shortTerm-volunteers-link">
            <Link
              href="/volunteers"
              className={pathname === "/volunteers" ? "active-link" : ""}
            >
              {" "}
              <p
                className={` link ${oversized ? "l-oversized " : "HeadlineM"}`}
              >
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
              <p
                className={` link ${oversized ? "l-oversized " : "HeadlineM"}`}
              >
                Краток Рок
              </p>
            </Link>
          </div>
        </div>

        <p className="short-term-desc">
          There is no volunteers on short term.{" "}
        </p>
      </div>
    </>
  );
};
export default ShortTermVolunteers;
