import { useAccessibility } from "@/contex/AccessibilityContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Counseling = () => {
  const { pathname } = useRouter();
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="independent-page" id="saturation-content">
      <div className="links">
        <Link
          href="/servicesPage"
          className={pathname === "/servicesPage" ? "active-link" : ""}
        >
          {" "}
          <p
            className={` link ${
              oversized ? "s-oversized-title  " : "HeadlineS"
            }`}
          >
            Центар Крикни
          </p>
        </Link>
        <Link
          href="/servicesPage/independent"
          className={
            pathname === "/servicesPage/independent" ? "active-link" : ""
          }
        >
          {" "}
          <p
            className={` link ${
              oversized ? "s-oversized-title  " : "HeadlineS"
            }`}
          >
            Независни станбени единици
          </p>
        </Link>
        <Link
          href="/servicesPage/counseling"
          className={
            pathname === "/servicesPage/counseling" ? "active-link" : ""
          }
        >
          {" "}
          <p
            className={` link ${
              oversized ? "s-oversized-title  " : "HeadlineS"
            }`}
          >
            Советувалиште
          </p>
        </Link>
      </div>
      <h1 className={` ${oversized ? "l-oversized" : "HeadlineM "}`}>
        Советувалиште
      </h1>
      <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        laborum aliquid tempora repudiandae minus, deleniti reiciendis
        consectetur atque ipsum voluptatem non quibusdam optio, ratione
        explicabo. Id eum officiis voluptates consectetur, earum corporis
        adipisci ea ipsam obcaecati accusamus fugiat nesciunt corrupti
        voluptatem perferendis dolores modi accusantium. Quidem soluta
        blanditiis quis at?
      </p>
    </div>
  );
};
export default Counseling;
