import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-100 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Developer tools, reimagined
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We understand the challenges developers face. That's why we build
            products that streamline workflows, eliminate friction, and empower
            developers to focus on what they do best: making great products.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="md:w-1/3">
            <div className="invertase-card bg-gradient-to-br from-zinc-800 to-black h-72 flex items-center justify-center overflow-visible">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-4">
                  Build Better Software, Faster
                </h3>
                <div className="flex justify-center">
                  <ArrowRight size={24} className="text-zinc-400" />
                </div>
              </div>
              <Image
                src={"/img/Nawaaz_2.jpg"}
                width={360}
                height={438}
                alt="Nawaaz - web designer"
              />
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="invertase-card bg-gradient-to-br from-zinc-800 to-black h-72 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-4">
                  Build Better Software, Faster
                </h3>
                <div className="flex justify-center">
                  <ArrowRight size={24} className="text-zinc-400" />
                </div>
              </div>
              <Image
                src={"/img/Laurent.jpg"}
                width={360}
                height={438}
                alt="Nawaaz - web designer"
              />
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="invertase-card bg-gradient-to-br from-zinc-800 to-black h-72 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-4">
                  Build Better Software, Faster
                </h3>
                <div className="flex justify-center">
                  <ArrowRight size={24} className="text-zinc-400" />
                </div>
              </div>
              <Image
                src={"/img/Vanessa_0.jpg"}
                width={360}
                height={438}
                alt="Nawaaz - web designer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
