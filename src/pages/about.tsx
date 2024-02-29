import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/AccordionItem";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { AboutProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";

interface Props {
  aboutData: AboutProps;
}

const About: NextPage<Props> = ({ aboutData }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet.";

  const { contrast, oversized } = useAccessibility();
  return (
    <>
      <div className="about" id="saturation-content">
        <div className="about-inner">
          <div className="about-img">
            <img src={aboutData.img} alt="" />
          </div>
          <div className="about-des">
            <h3 className={` ${oversized ? "HeadlineM" : "HeadlineS"}`}>
              {aboutData.title}
            </h3>
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
      <div className="about-krik">
        <h2
          className={`second-title ${oversized ? "HeadlineXL" : "HeadlineL"}`}
        >
          {aboutData.second_title}
        </h2>
        <hr />
        <div className="inner">
          <h3
            className={`${
              contrast ? "contrastOrangeText " : "defaultOrangeText "
            } ${oversized ? "l-oversized" : "HeadlineM"}`}
          >
            {aboutData.first_pretitle}
          </h3>
          <div className="text">
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {aboutData.first_content}
            </p>
          </div>
        </div>
        <hr />
        <div className="inner">
          <h3
            className={`${
              contrast ? "contrastOrangeText " : "defaultOrangeText "
            } ${oversized ? "l-oversized" : "HeadlineM"}`}
          >
            {aboutData.second_title}
          </h3>
          <div className="text">
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {aboutData.second_content}
            </p>
          </div>
        </div>
        <hr />
        <div className="inner">
          <h3
            className={`${
              contrast ? "contrastOrangeText " : "defaultOrangeText "
            } ${oversized ? "l-oversized" : "HeadlineM"}`}
          >
            {aboutData.thirt_pretitle}
          </h3>
          <div className="text">
            <p className={` ${oversized ? "l-oversized-body" : "bodyL"}`}>
              {aboutData.third_content}
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="faq-page">
        <div className="faq">
          <h1 className={` ${oversized ? "HeadlineXL" : "HeadlineL"}`}>
            Најчесто поставувани прашања
          </h1>
          <Accordion>
            <AccordionItem title="01 Lorem Ipsum?">
              <p>{defaultContent}</p>
            </AccordionItem>
            <AccordionItem title="02 Lorem Ipsum?">
              <p>{defaultContent}</p>
            </AccordionItem>
            <AccordionItem title="03 Lorem Ipsum?">
              <p>{defaultContent}</p>
            </AccordionItem>
            <AccordionItem title="04 Lorem Ipsum?">
              <p>{defaultContent}</p>
            </AccordionItem>
            <AccordionItem title="05 Lorem Ipsum?">
              <p>{defaultContent}</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default About;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/about");
  const aboutData: AboutProps = await res.json();

  return {
    props: {
      aboutData,
    },
  };
};
