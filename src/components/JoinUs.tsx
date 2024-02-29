import { useAccessibility } from "@/contex/AccessibilityContext";
import Link from "next/link";

const JoinUs = () => {
  const { oversized } = useAccessibility();
  return (
    <div className="join-us-inner">
      <div className="video">
        <img src="/images/video-join.png" alt="video" className="video-img" />
        <img src="/images/Play Button.png" alt="play-svg" className="play" />
      </div>
      <div className="join">
        <div className="text-inner">
          <h4 className={`${oversized ? "m-oversized-title" : "HeadlineS"}`}>
            Стани <br />
            Волонтер
          </h4>
          <p>Сакаш Да Работиш Со млади Лица? Оваа Можност е Токму За Тебе.</p>
          <button
            className={` ${oversized ? "button-oversized-L" : "buttonL"}`}
          >
            <Link href="/aplication">Придружи ни Се</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
