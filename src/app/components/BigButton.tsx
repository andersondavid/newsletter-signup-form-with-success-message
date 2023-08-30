import React from "react";

type PropTypes = {
  text: string;
  active?: boolean;
  onClick: () => void;
};

export default function BigButton({ text, active, onClick }: PropTypes) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "hover:bg-gradient-to-r hover:shadow-tomato" : ""
      } transition-all  from-pink to-orange shadow-2xl bg-darkslategrey rounded-lg p-4 w-full text-white font-ubuntuBold`}
    >
      {text}
    </button>
  );
}
