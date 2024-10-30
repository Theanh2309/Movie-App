// import classNames from "classnames";
import React, { useState, useEffect } from "react";
// https://preline.co/docs/progress.html
const CircularProgressBar = ({
  percent = percent,
  size = 2,
  strokeWidth = 0.25,
  strokeColor,
}) => {
  const [sizePx, setSizePx] = useState((size * window.innerWidth) / 100);
  const handleResize = () => {
    setSizePx((size * window.innerWidth) / 100);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const r = sizePx / 2 - (strokeWidth * window.innerWidth) / 100;
  const strokeDasharray = 2 * r * Math.PI;
  // console.log(percent);
  // const strokeClass = classNames({
  //   "text-green-600 dark:text-green-500": strokeColor === "green",
  //   "text-orange-600 dark:text-orange-500": strokeColor === "orange",
  //   "text-red-600 dark:text-red-500": strokeColor === "red",
  // });
  // const strokeClass = classNames(
  //   "stroke-current text-red-600 dark:text-red-500",
  //   navColor,
  // );
  return (
    <>
      {/* <!-- Circular Progress --> */}
      <div className="relative size-[4vw]">
        <svg
          className="size-full -rotate-90"
          viewBox={`0 0 ${sizePx} ${sizePx}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Background Circle --> */}
          <circle
            cx={`${sizePx / 2}`}
            cy={`${sizePx / 2}`}
            r={`${r}`}
            fill="none"
            // className={`stroke-current text-gray-200 dark:text-neutral-700`}

            className={`stroke-current text-${percent == 0 ? "red" : "white"}-700 dark:text-neutral-700`}
            // className={`stroke-current text-red-700 dark:text-neutral-700`}
            strokeWidth={`${(strokeWidth * window.innerWidth) / 100}`}
          ></circle>
          {/* <!-- Progress Circle --> */}
          <circle
            cx={`${sizePx / 2}`}
            cy={`${sizePx / 2}`}
            r={`${r}`}
            fill="none"
            className={`stroke-current text-${strokeColor}-600 dark:text-${strokeColor}-500`}
            // className={`stroke-current text-red-600 dark:text-red-500`}
            // className={`stroke-current ${strokeClass}`}
            strokeWidth={`${(strokeWidth * window.innerWidth) / 100}`}
            strokeDasharray={`${strokeDasharray}`}
            strokeDashoffset={`${strokeDasharray - (percent / 100) * strokeDasharray}`}
            strokeLinecap="round"
          ></circle>
        </svg>

        {/* <!-- Percentage Text --> */}
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="dark:text-white-500 text-center text-[1.2vw] font-bold text-white">
            {percent}
          </span>
        </div>
      </div>
    </>
  );
};

export default CircularProgressBar;
