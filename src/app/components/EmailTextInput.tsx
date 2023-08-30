import React, { Dispatch } from "react";
import { ZodIssue } from "zod";

type PropTypes = {
  email: string;
  setEmail: Dispatch<string>;
  issue: ZodIssue | null | undefined;
};

export default function EmailTextInput({ email, setEmail, issue }: PropTypes) {
  return (
    <div>
      <label htmlFor="email-input" className="block font-ubuntuBold text-sm">
        <span>Email address</span>
        {issue && (
          <span className="text-tomato float-right">Valid email required</span>
        )}
      </label>
      <div
        className={`${
          issue ? "border-tomato bg-tomato" : "border-grey"
        } border-[1px] solid rounded-lg p-4 mt-2 bg-opacity-20`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email-input"
          placeholder="email@company.com"
          className={`${
            issue ? "text-tomato" : "text-darkslategrey"
          } w-full focus:outline-none font-ubuntu bg-transparent`}
        />
      </div>
    </div>
  );
}
