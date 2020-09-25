import React, { useRef, useEffect } from "react";
import Prism from "prismjs";
import "./PrismCode.scss";

const Code = ({ children, language, className = "" }) => {
  const codeRef = useRef(null);
  useEffect(() => {
    Prism.highlightElement(codeRef.current, false);
  });
  return (
    <pre className={className} style={{ display: "block", margin: "1.5rem 0" }}>
      <code ref={codeRef} className={`language-${language}`}>
        {children.trim()}
      </code>
    </pre>
  );
};

export { Code };
