import React from "react";

const TextField = ({ type = "text", ...props }) => {
  return (
    <input
      type={type}
      autoComplete="new-input"
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
      {...props}
    />
  );
};

export default TextField;
