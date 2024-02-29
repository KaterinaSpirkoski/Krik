import { useAccessibility } from "@/contex/AccessibilityContext";
import { ServicesProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  servicesData: ServicesProps;
}
const Services: NextPage<Props> = ({ servicesData }) => {
  const { pathname } = useRouter();
  const { contrast, oversized } = useAccessibility();
  return (
    <div className="services-page" id="saturation-content">
      <div className="services-inner">
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

        <h2 className={` ${oversized ? "HeadlineXL " : "HeadlineL"}`}>
          {servicesData.title}
        </h2>
        <p className={` ${oversized ? "xl-oversized-body" : "bodyL"}`}>
          {servicesData.description}
        </p>
        <div className="gallery">
          <h4 className={` ${oversized ? "l-oversized" : "HeadlineM "}`}>
            Галерија со Активности
          </h4>
          <div className="gallery-first">
            <img
              src={servicesData.image_first}
              alt=""
              className="services-img-one"
            />
            <img
              src={servicesData.image_second}
              alt=""
              className="services-img-two "
            />
          </div>
          <div className="gallery-second">
            <img
              src={servicesData.image_third}
              alt="services image"
              className="grey-img"
            />
            <img src={servicesData.image_fourth} alt="services image" />
            <img src={servicesData.image_fifth} alt="services image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/services");
  const servicesData: ServicesProps = await res.json();

  return {
    props: {
      servicesData,
    },
  };
};
