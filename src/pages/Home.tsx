import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Testimony } from "../components/Testimony";
import { Cta } from "../components/Cta";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimony />
      <Cta />
      <Footer />
    </div>
  );
};
