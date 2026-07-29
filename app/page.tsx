import Hero from "./components/Hero";
import Clients from "./components/Clients";
import PointOfView from "./components/PointOfView";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Clients />
      <PointOfView />
      <Services />
      <Work />
      <Testimonials />
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
