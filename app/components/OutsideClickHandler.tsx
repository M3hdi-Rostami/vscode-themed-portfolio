import React, { useEffect, useRef } from "react";

function OutsideClickHandler({ onOutsideClick, children }: { onOutsideClick: () => void, children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onOutsideClick]);

  return <div ref={ref}>{children}</div>;
}
export default OutsideClickHandler
