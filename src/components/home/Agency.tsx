import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Agency = () => {
  return (
    <section
      id="agency"
      className="py-16 md:py-24 bg-zinc-100 dark:bg-zinc-900/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Our Agency
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* SDK Development Card */}
          <div className="invertase-card border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-3">Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
              Directeur artistique / Concepteur-rédacteur / UI designer / Motion
              designer / Graphistes
            </p>
            <Link
              href="/sdk#sdk-development"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Learn more about web Design{" "}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* SDK Maintenance Card */}
          <div className="invertase-card border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-3">Marketing</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
              Consultant Marketing / UX designer / Social Media manager / Search
              engine consultant
            </p>
            <Link
              href="/sdk#sdk-maintenance"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Learn more about Marketing
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Cross-Platform Development Card */}
          <div className="invertase-card border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-3">Technique</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
              Consultant technique / IT Architect / Développeurs Front /
              Développeurs Back / Développeur Mobiles
            </p>
            <Link
              href="/cross-platform"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Learn more about E-Marketing{" "}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
