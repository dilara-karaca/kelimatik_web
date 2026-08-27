import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { About } from "../components/sections/About";
import { Characters } from "../components/sections/Characters";
import { FinalCta } from "../components/sections/FinalCta";
import { GameModes } from "../components/sections/GameModes";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Progress } from "../components/sections/Progress";
import { WhatIs } from "../components/sections/WhatIs";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <GameModes />
        <Progress />
        <Characters />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
