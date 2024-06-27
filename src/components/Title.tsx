import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="text-3xl text-primary capitalize text-center font-bold mb-4">
      {text}
    </h1>
  );
};

export default Title;
