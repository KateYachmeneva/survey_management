import React from "react";
import stylesSVG from "./stylesSVG.module.scss"; // Подключение стилей

interface SVGButtonProps {
  onClick: () => void;
  svgPath: string;
  buttonText: string;
}

const SVGButton: React.FC<SVGButtonProps> = ({
  onClick,
  svgPath,
  buttonText,
}) => {
  return (
    <button className={stylesSVG.svg_button} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path d={svgPath} fill="#1F50BA" />
      </svg>
      <span className={stylesSVG.button_text}>{buttonText}</span>
    </button>
  );
};

export default SVGButton;
