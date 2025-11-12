/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ✅ Context */
import { LanguageProvider } from "./context/LanguageContext";

/* ✅ Components */
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profil from "./components/Profil";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Portofolio from "./components/Portofolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";

/* ✅ Blog & Admin */
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import Blog from "./pages/Blog";

/* ✅ GSAP setup */
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <LanguageProvider>
      <ReactLenis root>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* 🏠 Halaman utama */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main>
                    <Hero />
                    <Profil />
                    <Services />
                    <Skill />
                    <Portofolio />
                    {/* <Review /> */}
                    {/* <Blog /> */}
                    <FAQ />
                    <Contact />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* 📰 Halaman Blog */}
            <Route
              path="/blog"
              element={
                <>
                  <Header />
                  <main>
                    <Blog />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* 🔐 Halaman Admin */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPanel />} />

            {/* 🕒 Coming Soon */}
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>

          {/* ✅ Floating WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 z-50"
            aria-label="Chat on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-3xl"></i>
          </a>
        </Router>
      </ReactLenis>
    </LanguageProvider>
  );
}

export default App;
