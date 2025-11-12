/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useEffect } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext"; // ✅ Import context

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Ambil state bahasa dari context (bukan lokal lagi)
  const { lang, toggleLanguage } = useLanguage();

  // ✅ Deteksi scroll untuk efek background header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-40 transition-all duration-300 
      ${
        isScrolled
          ? "bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800/60 shadow-md"
          : "bg-gradient-to-b from-zinc-900 to-zinc-900/0"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        {/* === LOGO === */}
        <h1 className="flex items-center gap-2">
          <a href="/" className="logo flex items-center gap-2">
            <img
              src="/images/logo.svg"
              width={36}
              height={36}
              alt="rzbar.std"
            />
            {/* 🔹 Mobile */}
            <span className="text-white text-lg font-semibold tracking-wide md:hidden">
              rzbar.<span className="text-[#FFD93B]">std</span>
            </span>
            {/* 🔹 Desktop */}
            <span className="hidden md:inline text-xl font-bold tracking-tight">
              rzbar.<span className="text-[#FFD93B]">std</span>
            </span>
          </a>
        </h1>

        {/* === NAVBAR === */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* === LANGUAGE + CONTACT === */}
        <div className="flex items-center gap-3 md:justify-self-end">

          {/* 🔘 Language Toggle */}
          <div className="flex bg-zinc-800/60 rounded-full p-1">
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#e6b800] text-zinc-900 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage("id")}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                lang === "id"
                  ? "bg-[#e6b800] text-zinc-900 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              ID
            </button>
          </div>

          {/* 🔘 Contact/Pay */}
          <a
            href="#contact"
            className="btn btn-secondary max-md:hidden"
          >
            {lang === "en" ? "Contact / Pay" : "Kontak / Bayar"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
