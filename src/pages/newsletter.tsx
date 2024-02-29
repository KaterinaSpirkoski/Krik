import NewsLetterCard from "@/components/NewsLetterCard";
import { NewsLetterProps } from "@/interface";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  data: NewsLetterProps[];
}

const Newsletter: NextPage<Props> = ({ data }) => {
  return (
    <div className="newsLetter" id="saturation-content">
      <div className="title">
        <h1>Месечен </h1>
        <h2 className="custom-title">билтен</h2>
      </div>
      <main>
        <div className="newsletter-inner">
          {data.map((news, index) => {
            return (
              <NewsLetterCard key={news.id} {...news} isOdd={index % 2 !== 0} />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Newsletter;

export const getServerSideProps: GetServerSideProps = async () => {
  let res = await fetch("http://localhost:5001/newsLetter");
  const data: NewsLetterProps[] = await res.json();

  return {
    props: {
      data,
    },
  };
};
