import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empowering developers through open source
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Our open-source software improves the developer experience for developers in 175
            countries, empowering them to build better applications.
          </p>
          <Link
            href="/open-source"
            className="inline-flex items-center mt-4 text-sm font-medium hover:underline"
          >
            Explore open-source resources <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* React Native Firebase Card */}
          <a
            href="https://github.com/invertase/react-native-firebase"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center space-x-2">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full">
                <Star size={16} className="text-yellow-500" />
              </div>
              <span className="text-sm font-medium">11.8k</span>
            </div>
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center">
                  <Image
                    src="https://ext.same-assets.com/3267014945/1998606599.svg"
                    alt="React Native Firebase"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-bold">React Native Firebase</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Add Firebase features to your React Native projects.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight size={12} className="mr-1 group-hover:translate-x-1 transition-transform" />
                <span>View on GitHub</span>
              </div>
            </div>
          </a>

          {/* Notifee Card */}
          <a
            href="https://github.com/invertase/notifee"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center space-x-2">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full">
                <Star size={16} className="text-yellow-500" />
              </div>
              <span className="text-sm font-medium">1.9k</span>
            </div>
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-md flex items-center justify-center">
                  <Image
                    src="https://ext.same-assets.com/3267014945/1367661487.svg"
                    alt="Notifee"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-bold">Notifee</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Add engaging notifications to your React Native projects.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight size={12} className="mr-1 group-hover:translate-x-1 transition-transform" />
                <span>View on GitHub</span>
              </div>
            </div>
          </a>

          {/* Melos Card */}
          <a
            href="https://github.com/invertase/melos"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center space-x-2">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full">
                <Star size={16} className="text-yellow-500" />
              </div>
              <span className="text-sm font-medium">1.3k</span>
            </div>
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-md flex items-center justify-center">
                  <Image
                    src="https://ext.same-assets.com/3267014945/2838098675.svg"
                    alt="Melos"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-bold">Melos</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Organise your Dart & Flutter projects with multiple packages.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight size={12} className="mr-1 group-hover:translate-x-1 transition-transform" />
                <span>View on GitHub</span>
              </div>
            </div>
          </a>

          {/* Google Mobile Ads Card */}
          <a
            href="https://github.com/invertase/react-native-google-mobile-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="invertase-card group"
          >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center space-x-2">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full">
                <Star size={16} className="text-yellow-500" />
              </div>
              <span className="text-sm font-medium">765</span>
            </div>
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center">
                  <Image
                    src="https://ext.same-assets.com/3267014945/2018733539.svg"
                    alt="React Native Google Mobile Ads"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-bold">Google Mobile Ads</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Monetize your React Native apps with Google Ads.
              </p>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center">
                <ArrowRight size={12} className="mr-1 group-hover:translate-x-1 transition-transform" />
                <span>View on GitHub</span>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="font-bold text-2xl md:text-3xl mb-1">90 million</div>
            <div className="text-sm text-zinc-500">Monthly downloads</div>
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl md:text-3xl mb-1">32.8k</div>
            <div className="text-sm text-zinc-500">GitHub stars</div>
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl md:text-3xl mb-1">4.7k</div>
            <div className="text-sm text-zinc-500">Discord members</div>
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl md:text-3xl mb-1">2.5k</div>
            <div className="text-sm text-zinc-500">Code contributors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
