import React from "react";

type PropTypes = {
  text: string;
  onClick: () => void
};

export default function BigButton({ text, ...props }: PropTypes) {
  return (
    <button
      {...props}
      className="rounded-lg p-4 bg-darkslategrey w-full text-white font-ubuntuBold"
    >
      {text}
    </button>
  );
}
