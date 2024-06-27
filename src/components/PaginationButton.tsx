import React from "react";

type IButton = {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
};

const PaginationButton: React.FC<IButton> = ({ onClick, isDisabled, text }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        (isDisabled ? "bg-primary/60 cursor-not-allowed" : "bg-primary") +
        " py-1 px-3 rounded text-white font-bold capitalize"
      }
    >
      {text}
    </button>
  );
};

export default PaginationButton;
