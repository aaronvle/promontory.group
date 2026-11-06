import CtaBand from "./components/CtaBand";
import LogoStrip from "./components/LogoStrip";
import Hero from "./components/home/Hero";
import Problem from "./components/home/Problem";
import WaysToWork from "./components/home/WaysToWork";
import WhatWeBuild from "./components/home/WhatWeBuild";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Problem />
      <WhatWeBuild />
      <WaysToWork />
      <CtaBand />
    </>
  );
}
