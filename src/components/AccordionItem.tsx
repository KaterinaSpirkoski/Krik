import { useAccessibility } from "@/contex/AccessibilityContext";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { oversized } = useAccessibility();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={handleToggle}>
        <h3 className={`${oversized ? "l-oversized " : "HeadlineM"}`}>
          {title}
        </h3>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 50 51"
            fill="none"
          >
            <path
              d="M25 50.1992C18.3696 50.1992 12.0107 47.5653 7.32233 42.8769C2.63392 38.1885 0 31.8296 0 25.1992C0 18.5688 2.63392 12.21 7.32233 7.52155C12.0107 2.83314 18.3696 0.199219 25 0.199219C31.6304 0.199219 37.9893 2.83314 42.6777 7.52155C47.3661 12.21 50 18.5688 50 25.1992C50 31.8296 47.3661 38.1885 42.6777 42.8769C37.9893 47.5653 31.6304 50.1992 25 50.1992ZM37.5 22.6992H12.5V27.6992H37.5V22.6992Z"
              fill="#191919"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 50 51"
            fill="none"
          >
            <path
              d="M25 0.800781C11.2154 0.800781 0 12.0162 0 25.8008C0 39.5854 11.2154 50.8008 25 50.8008C38.7846 50.8008 50 39.5854 50 25.8008C50 12.0162 38.7846 0.800781 25 0.800781ZM25 4.64693C36.7058 4.64693 46.1538 14.095 46.1538 25.8008C46.1538 37.5065 36.7058 46.9546 25 46.9546C13.2942 46.9546 3.84615 37.5065 3.84615 25.8008C3.84615 14.095 13.2942 4.64693 25 4.64693ZM23.0769 14.2623V23.8777H13.4615V27.7239H23.0769V37.3392H26.9231V27.7239H36.5385V23.8777H26.9231V14.2623H23.0769Z"
              fill="#191919"
            />
          </svg>
        )}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionItem;
