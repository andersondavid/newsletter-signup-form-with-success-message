import React from "react";

export default function EmailTextInput() {
  return (
    <div>
      <label htmlFor="email-input" className="block font-ubuntu text-sm">
        Email address
      </label>
      <div className="border-2 solid border-grey rounded-lg p-4 mt-2">
        <input
          type="email"
          id="email-input"
          placeholder="email@company.com"
          className="w-full focus:outline-none"
        />
      </div>
    </div>
  );
}
