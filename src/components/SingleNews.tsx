import { NewsProps } from "@/interface";
import Link from "next/link";

const SingleNews: React.FC<Partial<NewsProps>> = ({
  date,
  id,
  image,
  description,
  title,
  moreInfo,
  isTopRated,
}) => {
  return (
    <div className="news-card">
      <Link href={`/singleNewsLetter/${id}`}>
        {isTopRated && image && (
          <div className="img">
            <img src={image} alt="single-news-img" />
          </div>
        )}

        <p className="date">{date}</p>
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        <button className="btn-more">{moreInfo}</button>
      </Link>
    </div>
  );
};

export default SingleNews;
