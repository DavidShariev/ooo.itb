import React from "react";

const Notice = ({ text }) => {
  return (
    <div className="my-10 px-5 md:px-10 lg:px-20">
      <div className="float-left mr-5 flex  h-16 w-16 items-center justify-center rounded-lg bg-red-600 text-white dark:bg-red-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </div>
      <p className=" text-dark dark:text-white dark:opacity-60">{text}</p>
    </div>
  );
};

export default Notice;
