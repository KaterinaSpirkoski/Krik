import SingleNews from "@/components/SingleNews";
import { NewsProps } from "@/interface";
import { GetServerSideProps, NextPage } from "next";
import { Pagination } from "react-bootstrap";
import { useState } from "react";

interface Props {
  topRatedNews: NewsProps[];
  restOfNews: NewsProps[];
}

const SingleNewsLetter: NextPage<Props> = ({ topRatedNews, restOfNews }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = restOfNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPageCount = Math.ceil(restOfNews.length / itemsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="single-news" id="saturation-content">
      <div className="title-inner">
        <h1>Топ Новости</h1>
      </div>

      <div className="news-inner">
        {topRatedNews &&
          topRatedNews.map((news) => (
            <SingleNews key={news.id} {...news} isTopRated={true} />
          ))}
      </div>
      <hr />
      <div className="title-inner">
        <h3>Останати Новости</h3>
        <div className="rest-news">
          {currentNews.map((news) => (
            <SingleNews key={news.id} {...news} isTopRated={false} />
          ))}
        </div>
      </div>
      <hr />
      <Pagination>
        {Array.from({ length: totalPageCount }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePagination(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default SingleNewsLetter;

export const getServerSideProps: GetServerSideProps = async () => {
  let resNews = await fetch("http://localhost:5001/news");
  const data: NewsProps[] = await resNews.json();

  const topRatedNews = data.filter((news) => news.rating && news.rating > "4");
  const restOfNews = data.filter((news) => !topRatedNews.includes(news));

  return {
    props: {
      topRatedNews,
      restOfNews,
    },
  };
};
