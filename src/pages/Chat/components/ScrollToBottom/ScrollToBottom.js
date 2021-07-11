import { useEffect, useRef } from "react";

const ScrollToBottom = ({ changes }) => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView(), [changes]);
  return <div ref={elementRef} />;
};

export default ScrollToBottom;
