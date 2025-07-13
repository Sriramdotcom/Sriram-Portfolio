"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import Hero from "./Hero";

export default function Main() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowHero(true);
    }, 5300); // Approximate loader duration (greetings + transition)

    return () => clearTimeout(delay);
  }, []);

  return <>{showHero ? <Hero /> : <Loader />}</>;
}
