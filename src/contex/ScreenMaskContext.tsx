import React from "react";
import { useAccessibility } from "./AccessibilityContext";

interface ScreenMaskProps {
  children: React.ReactNode;
}

const ScreenMaskContext: React.FC<ScreenMaskProps> = ({ children }) => {
  const { isReadingMaskActive, maskPosition } = useAccessibility();

  const maskStyle: React.CSSProperties = {
    left: `${maskPosition.x}px`,
    top: `${maskPosition.y}px`,
    width: "100%",
    height: "300px",
    background: "transparent",
    position: "fixed",
    pointerEvents: "none",
    border: "10000px solid rgba(0, 0, 0, 0.7)",
    boxSizing: "content-box",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  };

  return (
    <div className="screenMask">
      {children}
      {isReadingMaskActive && <div className="mask" style={maskStyle} />}
    </div>
  );
};

export default ScreenMaskContext;
