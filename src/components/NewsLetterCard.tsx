import { useAccessibility } from "@/contex/AccessibilityContext";
import { NewsLetterProps } from "@/interface";
import Link from "next/link";

const NewsLetterCard: React.FC<NewsLetterProps & { isOdd: boolean }> = ({
  id,
  img,
  description,
  date,
  isOdd,
}) => {
  const { contrast, oversized } = useAccessibility();
  return (
    <div className={`card-inner ${isOdd ? "odd" : "even"}`}>
      <div className={`text ${isOdd ? "odd" : "even"}`}>
        <div className={`text-inner ${isOdd ? "odd" : "even"}`}>
          <h3 className={`${oversized ? "HeadlineXL " : "HeadlineL"}`}>
            {date}
          </h3>
          <div className="dot"></div>
          <h6 className={`${oversized ? "m-oversized-title  " : "HeadlineS"}`}>
            {description}
          </h6>
        </div>
      </div>
      <hr />
      <div className={`img ${isOdd ? "odd" : "even"}`}>
        <Link href="/singleNewsLetter">
          <img src={img} alt="news-image" />
        </Link>
      </div>
    </div>
  );
};
export default NewsLetterCard;
