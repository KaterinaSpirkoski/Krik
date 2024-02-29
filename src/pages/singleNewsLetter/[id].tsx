import { useRouter } from "next/router";
import { NewsProps } from "@/interface";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import ImageCarousel from "@/components/ImageCarousel";

interface Props {
  data: NewsProps | null;
}

const SingleNewsDetailPage: NextPage<Props> = ({ data }) => {
  const carouselImages = [
    "./../images/news/single-news.png",
    "./../images/news/single-news.png",
    "./../images/news/single-news.png",
  ];
  if (!data) {
    return <div>News not found...</div>;
  }

  return (
    <>
      <div className="detail-container" id="saturation-content">
        <img src=".././images/krik-detail.png" alt="" />
        <div className="text-desc">
          <p className="date">{data.date}</p>
          <h2>{data.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            fugiat ut dolores, nemo laudantium delectus omnis quia quas fugit.
            Qui, officiis ipsa. Eveniet dicta cupiditate vitae mollitia impedit
            iste esse sequi nobis possimus nemo, quisquam aperiam aliquid, atque
            sed quam neque? Voluptas magni nobis facere natus recusandae est
            voluptate.
          </p>
        </div>
      </div>
      <div className="news-detail">
        <div className="inner">
          <div className="news-text">
            <p>{data.description}</p>
          </div>
          <img src={data.image} alt={data.image} />
        </div>
      </div>
      <div className="gallery">
        <h2>Галерија со Активности :</h2>
        <ImageCarousel images={carouselImages} />
      </div>
    </>
  );
};

export default SingleNewsDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(" http://localhost:5001/news");
  const data: NewsProps[] = await res.json();

  const paths = data.map((news) => {
    return {
      params: {
        id: news.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: NewsProps | null = null;

  if (params?.id) {
    const res = await fetch(` http://localhost:5001/news/${params.id}`);
    data = await res.json();
  }

  return {
    props: {
      data,
    },
  };
};
