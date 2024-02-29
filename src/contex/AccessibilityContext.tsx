import React, { ReactNode, createContext, useContext, useState } from "react";

interface AccessibilityContextProps {
  contrast: boolean;
  setContrast: (value: boolean) => void;
  toggleContrastColors: () => void;
  oversized: boolean;
  setOversized: (value: boolean) => void;
  textClass: string;
  bgClass: string;
  toggleFontSize: () => void;
  fontSize: string;
  fontSizeBody: string;
  toggleCursorSize: () => void;
  cursorSize: boolean;
  cursorSizeLarge: string;
  saturation: number;
  setSaturation: (value: number) => void;
  toggleSaturation: () => void;
  isAnimationPaused: boolean;
  setAnimationPaused: (value: boolean) => void;
  togglePauseAnimation: () => void;
  isReadingMaskActive: boolean;
  toggleReadingMask: () => void;
  maskPosition: { x: number; y: number };
  setMaskPosition: (position: { x: number; y: number }) => void;
}
interface Props {
  children: ReactNode;
}
const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

export const AccessibilityProvider = ({ children }: Props) => {
  const [contrast, setContrast] = useState<boolean>(false);
  const [oversized, setOversized] = useState<boolean>(false);
  const [cursorSize, setCursorSize] = useState<boolean>(false);
  const [saturation, setSaturation] = useState<number>(100);
  const [isAnimationPaused, setAnimationPaused] = useState<boolean>(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const [isReadingMaskActive, setReadingMaskActive] = useState(false);
  const toggleReadingMask = () => {
    setReadingMaskActive((prevReadingMask) => !prevReadingMask);
  };
  const togglePauseAnimation = () => {
    setAnimationPaused((prevPaused) => !prevPaused);
  };

  const toggleContrastColors = () => {
    setContrast((prevContrast) => !prevContrast);
  };
  const textClass = contrast ? "contrastOrangeText" : "defaultOrangeText";
  const bgClass = contrast ? "contrastOrangeBg" : "defaultOrangeBg";

  const toggleFontSize = () => {
    setOversized((prevSize) => !prevSize);
  };

  const fontSize = oversized ? "xl-heading" : "normalHeading";
  const fontSizeBody = oversized ? "xl-body" : "normalSize-body";

  const toggleCursorSize = () => {
    setCursorSize((prevSize) => !prevSize);
  };
  const cursorSizeLarge = cursorSize ? "body.custom-cursore-active" : "";

  const toggleSaturation = () => {
    setSaturation((prevSaturation) => (prevSaturation === 100 ? 200 : 100));
  };

  return (
    <AccessibilityContext.Provider
      value={{
        contrast,
        setContrast,
        toggleContrastColors,
        oversized,
        setOversized,
        textClass,
        bgClass,
        toggleFontSize,
        fontSize,
        fontSizeBody,
        toggleCursorSize,
        cursorSize,
        cursorSizeLarge,
        toggleSaturation,
        saturation,
        setSaturation,
        isAnimationPaused,
        togglePauseAnimation,
        setAnimationPaused,
        maskPosition,
        setMaskPosition,
        isReadingMaskActive,
        toggleReadingMask,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};
