"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const fullText =
    "Welcome to my portfolio! I am a passionate web developer from Nordrhein-Westfalen Oberhausen, specializing in modern JavaScript frameworks, Node.js, and Tailwind CSS. Explore my skills, projects, and get to know more about me.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-7 text-white">
      <h1
        className="text-5xl sm:text-6xl font-extrabold text-center
                   bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                   bg-clip-text text-transparent animate-gradient
                   mb-6"
      >
        Welcome to my portfolio Randy Born 👋
      </h1>

      <p className="max-w-xl text-center text-wi text-lg sm:text-xl leading-relaxed whitespace-pre-wrap">
        {displayedText}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
}
