"use client";

import { useState } from "react";
import "react-datetime/css/react-datetime.css";

export default function Time() {
  const locale = "id";
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  });

  const day = new Date().toLocaleDateString(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-slate-800/20 backdrop-blur-sm select-none  w-1/2 px-20 lg:py-20 md:py-10 py-5 lg:h-96 md:h-72 h-52 rounded-3xl flex items-center justify-center flex-col gap-2 shadow-xl lg:ring-8 ring-4 ring-slate-200 ">
      <p className="font-light lg:text-2xl md:text-xl text-sm text-sky-500 lg:drop-shadow-lg md:drop-shadow-md drop-shadow-sm">
        {day}
      </p>
      <p className=" font-semibold lg:text-[12rem] md:text-[7rem] text-5xl leading-none text-slate-100 lg:drop-shadow-lg md:drop-shadow-md drop-shadow-sm">
        {/* 19:44 */}
        {date
          .toLocaleTimeString(locale, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
          .replaceAll(".", ":")}
      </p>
    </div>
  );
}
