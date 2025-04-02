import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black" id="partners">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empowering companies through dedication and skills
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            we believe that success is best when shared. That’s why we are proud
            to work alongside an incredible network of partners who bring
            expertise, innovation, and passion to every project we tackle
            together. Our partners are the cheese to our pizza — the essential
            ingredient that makes everything work seamlessly. From cutting-edge
            technology to exceptional service, their collaboration elevates our
            offerings and ensures we deliver only the best for our clients. With
            every partnership, we create solutions that not only meet but exceed
            expectations, making every endeavor a success story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* React Native Firebase Card */}
          <a
            href="https://www.renault.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 rounded-md flex items-center justify-center">
                  <Image
                    src="/img/renault.svg"
                    alt="renault"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold">Renault</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Add Firebase features to your React Native projects.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>

          {/* Notifee Card */}
          <a
            href="https://www.groupebcp.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 rounded-md flex items-center justify-center">
                  <Image
                    src="/img/logo-gbp.svg"
                    alt="Notifee"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold">BCP group</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Add engaging notifications to your React Native projects.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>

          {/* Melos Card */}
          <a
            href="https://www.lvmh.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/img/lvmh.svg"
                    alt="Melos"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Organise your Dart & Flutter projects with multiple packages.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>

          {/* Google Mobile Ads Card */}
          <a
            href="https://www.orange.fr/portail"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/img/logo-orange.png"
                    alt="React Native Google Mobile Ads"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold">Orange</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Monetize your React Native apps with Google Ads.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>

          <a
            href="https://www.ags-demenagement.com/devis-demenagement/?utm_source=google&utm_medium=cpc&utm_term=ags%20d%C3%A9m%C3%A9nagement&utm_content=318469274068&utm_campaign=755589582&_bt=318469274068&_bk=ags%20d%C3%A9m%C3%A9nagement&_bm=b&_bn=g&_bg=39861727676&utm_id&gad_source=1&gclid=CjwKCAjwwLO_BhB2EiwAx2e-33GvQndQwzVocXgb7CFZIbKB9P-octKF4GjhGBIP375Fs_1qTEWm8BoC0CIQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/img/logo-ags.png"
                    alt="React Native Google Mobile Ads"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold">AGS Déménagement</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Monetize your React Native apps with Google Ads.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>

          <a
            href="https://www.mckinsey.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 rounded-md flex items-center justify-center">
                  <Image
                    src="/img/McKinsey_&_Company-Logo.wine.svg"
                    alt="React Native Google Mobile Ads"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-bold">McKinsey & Company</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Monetize your React Native apps with Google Ads.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight
                  size={12}
                  className="mr-1 group-hover:translate-x-1 transition-transform"
                />
                <span>View</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
