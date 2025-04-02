"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo_extension.svg"
              alt="Extension interactive logo"
              width={164}
              height={200}
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="relative group px-3 py-2">
            <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border hidden group-hover:block">
              <Link href="/sdk" className="block px-4 py-2 text-sm hover:bg-secondary">
                SDK development & maintenance
              </Link>
              <Link href="/cross-platform" className="block px-4 py-2 text-sm hover:bg-secondary">
                Cross-platform development
              </Link>
            </div>
          </div>
          <Link href="/open-source" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Open source
          </Link>
          <div className="relative group px-3 py-2">
            <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              Products <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border hidden group-hover:block">
              <a href="https://globe.dev" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-secondary">
                Globe.dev
              </a>
              <a href="https://zapp.run" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-secondary">
                Zapp.run
              </a>
              <a href="https://docs.page" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-secondary">
                Docs.page
              </a>
            </div>
          </div>
          <Link href="/blog" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <div className="relative group px-3 py-2">
            <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              Company <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border hidden group-hover:block">
              <Link href="/about-us" className="block px-4 py-2 text-sm hover:bg-secondary">
                About us
              </Link>
              <Link href="/careers" className="block px-4 py-2 text-sm hover:bg-secondary">
                Careers
              </Link>
            </div>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center">
          <a
            href="https://github.com/invertase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-4 text-sm text-muted-foreground hover:text-foreground"
          >
            <span className="mr-1">Star us on GitHub</span>
            <span className="bg-secondary rounded-full px-2 py-0.5 text-xs">32.8k</span>
          </a>
          <Link href="/contact" className="px-4 py-2 text-sm bg-white text-black rounded-md hover:bg-gray-200 transition">
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium text-sm">Services</div>
              <Link
                href="/sdk"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                SDK development & maintenance
              </Link>
              <Link
                href="/cross-platform"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                Cross-platform development
              </Link>
            </div>

            <Link
              href="/open-source"
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Open source
            </Link>

            <div className="space-y-2">
              <div className="font-medium text-sm">Products</div>
              <a
                href="https://globe.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                Globe.dev
              </a>
              <a
                href="https://zapp.run"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                Zapp.run
              </a>
              <a
                href="https://docs.page"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                Docs.page
              </a>
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
            >
              Blog
            </Link>

            <div className="space-y-2">
              <div className="font-medium text-sm">Company</div>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                About us
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={toggleMenu}
              >
                Careers
              </Link>
            </div>

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://github.com/invertase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground"
              >
                <span className="mr-1">Star us on GitHub</span>
                <span className="bg-secondary rounded-full px-2 py-0.5 text-xs">32.8k</span>
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm bg-white text-black rounded-md hover:bg-gray-200 transition text-center"
                onClick={toggleMenu}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
