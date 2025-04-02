import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Transform your agency - Trancend your application - Evolve your website
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
          Drive leads and accelerate product growth with Extension interactive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition"
          >
            Book a consultation
          </Link>
          <Link
            href="/#services"
            className="px-6 py-3 border border-zinc-700 rounded-md hover:bg-zinc-800 transition flex items-center justify-center"
          >
            Explore our services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
