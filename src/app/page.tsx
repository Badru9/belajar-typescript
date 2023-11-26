"use client";

import Time from "./components/time";
import { Poppins } from "next/font/google";
import Image from "next/image";
import bgImage from "@/app/components/assets/image/moon.jpg";
import Weather from "./components/weather";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} bg-bg-image w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden`}
    >
      <Image
        src={bgImage}
        alt="bg-image"
        width={1920}
        height={1080}
        priority
        className="absolute -z-10 object-cover w-full h-full"
      />
      <Time />
      <Weather />
    </main>
  );
}
