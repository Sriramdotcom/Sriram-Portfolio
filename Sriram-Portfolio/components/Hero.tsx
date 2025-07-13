import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import heroBg from "public/extraImages/heroImage2.jpg";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Sriram — I break up with bad data 💔📊",
      "My SQL queries are spicier than biryani 🌶️🧑‍💻",
      "Power BI and I are in a committed relationship 💍📈",
      "I turn boring spreadsheets into Netflix-worthy plots ",
      "I debug life decisions using Python sometimes 🐍🧠",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-start justify-center text-center">
      {/* ✅ Background Image */}
      <Image
        src={heroBg}
        alt="Hero background"
        layout="fill"
        style={{ objectFit: "cover" }}
        quality={100}
        priority
        className="absolute z-0"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✅ Content */}
      <div className="z-20 flex flex-col items-center space-y-6 px-6 pt-[60vh] backdrop-blur-sm">
        <h2 className="text-xs md:text-sm text-gray-300 uppercase tracking-[8px] md:tracking-[15px] font-medium font-outfit">
          Aspiring Data Analyst | Python • SQL • Power BI
        </h2>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white font-outfit">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FFFFFF" />
        </h1>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-outfit">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="https://drive.google.com/file/d/1dSU3IwJBBdTwD5_9LvgRW9bFe3F3-YDZ/view?usp=sharing" target="_blank">
            <button className="heroButton bg-white/20 text-white border-white/20 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/60 hover:scale-105 transition-all">
              Resume
            </button>
          </Link>
        </div>

        {/* Optional Scroll Cue */}
        <div className="mt-8 animate-bounce text-white/60 text-2xl">
          ↓
        </div>
      </div>
    </div>
  );
}
