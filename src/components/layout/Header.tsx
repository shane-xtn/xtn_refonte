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
          <Link
            href="#about"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#agency"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Agency
          </Link>
          <Link
            href="#partners"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Partners
          </Link>{" "}
          <Link
            href="#services"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
        </nav>

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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
