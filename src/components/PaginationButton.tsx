import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type IButton = {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
  icon: any;
};

const PaginationButton: React.FC<IButton> = ({
  onClick,
  isDisabled,
  text,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        (isDisabled ? "bg-primary/60 cursor-not-allowed" : "bg-primary") +
        " py-1 px-3 rounded text-white font-bold capitalize flex justify-center items-center gap-2"
      }
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  );
};

export default PaginationButton;
