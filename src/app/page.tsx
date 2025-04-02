import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import Agency from "@/components/home/Agency";
import OpenSource from "@/components/home/OpenSource";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Agency />
      <OpenSource/>
      <Services />
      <CTA />
    </>
  );
}
