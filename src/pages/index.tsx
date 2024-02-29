import Head from "next/head";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import SoonSection from "@/components/SoonSection";
import JoinUs from "@/components/JoinUs";
import { GetStaticProps, NextPage } from "next";
import {
  NewsProps,
  OurServicesProps,
  PartnersProps,
  UpcomingProps,
} from "@/interface";
import Partners from "@/components/Partners";
import LatestNews from "@/components/LatestNews";
import { useAccessibility } from "@/contex/AccessibilityContext";
import Success from "@/components/Success";
import OurServices from "@/components/OurServices";
import Link from "next/link";
import { useScrollHandler } from "@/services/hooks";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  partnersData: PartnersProps[];
  latestNews: NewsProps[];
  newsUpcoming: UpcomingProps[];
  servicesData: OurServicesProps[];
}

const Home: NextPage<Props> = ({
  partnersData,
  latestNews,
  newsUpcoming,
  servicesData,
}) => {
  const { contrast, oversized } = useAccessibility();
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cardsWrapperRef,
    scrollbarRef,
    handleScrollbarMouseDown,
  } = useScrollHandler();
  return (
    <>
      <Head>
        <title>Крик</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="saturation-content">
        <HeroSection />
        <div className="upcomig-news">
          {newsUpcoming.map((news) => {
            return <SoonSection key={news.id} {...news} />;
          })}
        </div>
        <div
          className={` success ${
            contrast ? "contrastOrangeText " : "defaultOrangeText "
          }`}
        >
          <Success />
        </div>

        <div className="join-us-container">
          <JoinUs />
        </div>

        <div className="Latest-news">
          <h1 className={` ${oversized ? "xl-oversized" : "HeadlineXL"}`}>
            Најнови вести
          </h1>
          <div
            className="latest-scroll-container"
            ref={cardsWrapperRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className={`latest-card ${contrast ? "contrast-img " : ""}`}>
              {latestNews.map((data) => {
                return <LatestNews key={data.id} {...data} />;
              })}
            </div>
          </div>
          <div className=" additionalDiv"></div>
          <div
            className="customScrollbar"
            ref={scrollbarRef}
            onMouseDown={handleScrollbarMouseDown}
          ></div>
          <div className="flex">
            <div className="show-more">
              <Link href="/newsletter">
                <button
                  className={` ${
                    contrast ? "contrastPurpleBg " : "defaultPurpleBg"
                  }`}
                >
                  Види за цел месец
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="services">
          <h1 className={` ${oversized ? "xl-oversized" : "HeadlineXL"}`}>
            Нашите Услуги
          </h1>
          <div className="our-services">
            <div className="img">
              <img src="./images/homepage_services.jpg" alt="" />
            </div>
            <div className="text">
              {servicesData.map((el) => {
                return <OurServices key={el.id} {...el} />;
              })}
            </div>
          </div>
        </div>

        <div className="partners">
          <h1 className={` ${oversized ? "xl-oversized" : "HeadlineXL"}`}>
            Партнери
          </h1>
          <div className="our-partners">
            <div className="wrapper">
              {partnersData.map((data) => {
                return <Partners key={data.id} {...data} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/partners");
  const partnersData: PartnersProps[] = await res.json();
  const resUpcoming = await fetch("http://localhost:5001/upcomingEvents");

  const newsUpcoming = await resUpcoming.json();
  const resNews = await fetch("http://localhost:5001/news");
  const newsData = await resNews.json();
  const sortedNews = newsData.sort((a: any, b: any) => {
    const dateA = new Date(a.date.split(".").reverse().join("-")) as any;
    const dateB = new Date(b.date.split(".").reverse().join("-")) as any;
    return dateB - dateA;
  });
  const latestNews = sortedNews.slice(0, 10);

  const resServices = await fetch("http://localhost:5001/ourServices");
  const servicesData = await resServices.json();
  return {
    props: {
      partnersData,
      latestNews,
      newsUpcoming,
      servicesData,
    },
  };
};