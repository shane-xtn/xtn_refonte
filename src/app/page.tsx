import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import OpenSource from "@/components/home/OpenSource";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OpenSource />
      <Products />
      <CTA />
    </>
  );
}
