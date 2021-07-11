import { useEffect, useRef } from "react";

const ScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

export default ScrollToBottom;
