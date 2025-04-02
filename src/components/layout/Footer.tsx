import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row mb-10">
          <div className="mb-8 lg:mb-0 lg:mr-16">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/img/logo_extension.svg"
                alt="Invertase"
                width={120}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <div className="flex space-x-3">
              <a
                href="https://x.com/invertaseio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X.com (Twitter)"
              >
                <Image
                  src="https://ext.same-assets.com/3267014945/643233225.svg"
                  alt="X.com (Twitter)"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://invertase.link/discord"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <Image
                  src="https://ext.same-assets.com/3267014945/1538298153.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.youtube.com/invertase"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Image
                  src="https://ext.same-assets.com/3267014945/4096530758.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://github.com/invertase"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image
                  src="https://ext.same-assets.com/3267014945/2228266501.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/invertase"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="https://ext.same-assets.com/3267014945/1894331550.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1">
            <div>
              <h3 className="text-sm font-medium mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sdk"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    SDK development & maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cross-platform"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Cross-platform development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://globe.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Globe.dev
                  </a>
                </li>
                <li>
                  <a
                    href="https://zapp.run"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Zapp.run
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Docs.page
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/open-source"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Open source
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-zinc-800 text-xs text-zinc-400">
          <div className="mb-4 md:mb-0">
            <p>© Extension Interactive 2025</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/legal/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/cookie-policy"
              className="hover:text-white transition"
            >
              Cookie Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="hover:text-white transition"
            >
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
