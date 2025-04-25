import { Component } from "@/components/Carousel";
import Summary from "@/components/Summary";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Activities from "@/components/Activities-CTA";
import News from "@/components/News";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-0 md:px-4 py-0 sm:py-8">
        <Component />
      </div>
      <div className="container mx-auto">
        <Summary />
        <About />
        <Founder />
      </div>
      <Activities />
      <div className="container mx-auto">
        <News />
      </div>
    </div>
  );
}
