import React from "react";

type PropTypes = {
  text: string
}

export default function BigButton({ text }: PropTypes) {
  return (
    <button className="rounded-lg p-4 bg-darkslategrey w-full text-white font-ubuntuBold">
      {text}
    </button>
  );
}
