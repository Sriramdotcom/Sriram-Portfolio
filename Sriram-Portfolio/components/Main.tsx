"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";

export default function Main() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 2500); // Show Hero after 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHero ? <Hero /> : <Loader onFinish={() => setShowHero(true)} />}
    </>
  );
}
