import { useAccessibility } from "@/contex/AccessibilityContext";

const ScreenMask = ({ children }: any) => {
  const { maskPosition, isReadingMaskActive } = useAccessibility();
  return (
    <div className="screenMask">
      {children}
      {isReadingMaskActive && (
        <div
          className="mask"
          style={{ left: maskPosition.x + "px", top: maskPosition.y + "px" }}
        ></div>
      )}
    </div>
  );
};
export default ScreenMask;
