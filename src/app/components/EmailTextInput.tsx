import React, { Dispatch } from "react";

type PropTypes = {
  email: string;
  setEmail: Dispatch<string>;
};

export default function EmailTextInput({ email, setEmail }: PropTypes) {
  return (
    <div>
      <label htmlFor="email-input" className="block font-ubuntu text-sm">
        Email address
      </label>
      <div className="border-[1px] solid border-grey rounded-lg p-4 mt-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id="email-input"
          placeholder="email@company.com"
          className="w-full focus:outline-none font-ubuntu"
        />
      </div>
    </div>
  );
}
