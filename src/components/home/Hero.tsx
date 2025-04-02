import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="invertase-gradient relative overflow-hidden">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 md:pr-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Digital Business Accelerator
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
            Marketing | Design | Technologie
          </p>

          <div className="mb-8">
            <p className="text-sm text-zinc-500 mb-3">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Image
                src="/img/peugeot-logo-alt.avif"
                alt="Peageot"
                width={80}
                height={28}
                className="h-7 w-auto"
              />
              <Image
                src="/img/lvmh.svg"
                alt="LVMH"
                width={80}
                height={28}
                className="h-5 w-auto"
              />
              <Image
                src="/img/logo-orange.png"
                alt="logo orange  "
                width={80}
                height={28}
                className="h-5 w-auto"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white text-black rounded-md hover:bg-gray-200 transition flex items-center font-medium"
            >
              Book a consultation
            </Link>
            <Link
              href="/#services"
              className="px-5 py-2.5 border border-zinc-700 rounded-md hover:bg-zinc-800 transition flex items-center"
            >
              Explore our services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-80 md:h-[450px]">
            {/* Hero image or animation */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src={"/img/bandeau_agencySelfPromo.jpg"}
                alt="banner image"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </div>
  );
};

export default Hero;
