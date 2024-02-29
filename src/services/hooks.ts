import { useEffect, useRef, useState } from "react";

export const useScrollHandler = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false);
  const [startScrollbarX, setStartScrollbarX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (cardsWrapperRef.current) {
      setStartX(e.pageX - cardsWrapperRef.current.offsetLeft);
      setScrollLeft(cardsWrapperRef.current.scrollLeft);
    }
  };

  const handleScrollbarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingScrollbar(true);
    setStartScrollbarX(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !cardsWrapperRef.current || !scrollbarRef.current)
      return;
    e.preventDefault();

    const x = e.pageX - cardsWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    cardsWrapperRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleScrollbarMouseMove = (e: MouseEvent) => {
    if (
      !isDraggingScrollbar ||
      !cardsWrapperRef.current ||
      !scrollbarRef.current
    )
      return;

    const deltaX = e.clientX - startScrollbarX;
    const scrollbarWidth = scrollbarRef.current.offsetWidth;
    const wrapperWidth = cardsWrapperRef.current.offsetWidth;
    const scrollableWidth = cardsWrapperRef.current.scrollWidth - wrapperWidth;

    const scrollX = (deltaX / scrollbarWidth) * scrollableWidth;
    cardsWrapperRef.current.scrollLeft += scrollX;

    setStartScrollbarX(e.clientX);
  };

  const handleScrollbarMouseUp = () => {
    setIsDraggingScrollbar(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (cardsWrapperRef.current && scrollbarRef.current) {
      const wrapperWidth = cardsWrapperRef.current.offsetWidth;
      const scrollbarWidth = scrollbarRef.current.offsetWidth;
      const maxScroll = wrapperWidth - scrollbarWidth;
      const scrollPercentage =
        (cardsWrapperRef.current.scrollLeft /
          (cardsWrapperRef.current.scrollWidth - wrapperWidth)) *
        100;

      const limitedScrollPercentage = Math.min(
        Math.max(scrollPercentage, -100),
        100
      );
      const limitedScrollLeft =
        (limitedScrollPercentage / 100) * (maxScroll - 400) + 200;
      scrollbarRef.current.style.left = `${limitedScrollLeft}px`;
    }
  };

  useEffect(() => {
    const scrollHandler = () => handleScroll();
    document.addEventListener("mousemove", handleScrollbarMouseMove);
    document.addEventListener("mouseup", handleScrollbarMouseUp);

    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (cardsWrapperRef.current) {
        cardsWrapperRef.current.removeEventListener("scroll", scrollHandler);
      }
      document.removeEventListener("mousemove", handleScrollbarMouseMove);
      document.removeEventListener("mouseup", handleScrollbarMouseUp);
    };
  }, [handleScrollbarMouseMove, handleScrollbarMouseUp]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cardsWrapperRef,
    scrollbarRef,
    handleScrollbarMouseDown,
  };
};
