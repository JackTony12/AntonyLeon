import { useEffect, useRef } from "react";
import "./doorStyles.css";
 
const DoorTransition = ({ state }) => {
  const overlayRef = useRef(null);
 
  const isVisible = state !== "idle";
 
  return (
    <div
      ref={overlayRef}
      className={`door-overlay ${isVisible ? "visible" : ""} ${state}`}
      aria-hidden="true"
    >
      {/* LEFT DOOR */}
      <div className={`door door--left door--${state}`}>
        <div className="door__panel">
          <div className="door__inset door__inset--top">
            <div className="door__inset-inner" />
          </div>
          <div className="door__ornament">
            <div className="door__ornament-line" />
            <div className="door__ornament-diamond" />
            <div className="door__ornament-line" />
          </div>
          <div className="door__inset door__inset--bottom">
            <div className="door__inset-inner" />
          </div>
        </div>
        <div className="door__edge door__edge--right" />
      </div>
 
      {/* RIGHT DOOR */}
      <div className={`door door--right door--${state}`}>
        <div className="door__edge door__edge--left" />
        <div className="door__panel">
          <div className="door__inset door__inset--top">
            <div className="door__inset-inner" />
          </div>
          <div className="door__ornament">
            <div className="door__ornament-line" />
            <div className="door__ornament-diamond" />
            <div className="door__ornament-line" />
          </div>
          <div className="door__inset door__inset--bottom">
            <div className="door__inset-inner" />
          </div>
        </div>
      </div>
 
      {/* CENTER SEAM */}
      <div className={`door-seam door-seam--${state}`}>
        <div className="door-seam__glow" />
      </div>
    </div>
  );
};
 
export default DoorTransition;