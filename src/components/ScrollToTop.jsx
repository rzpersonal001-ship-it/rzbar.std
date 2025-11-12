/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pastikan scroll di-reset setiap kali path berubah
    window.scrollTo({
      top: 0,
      behavior: "instant" // gunakan 'smooth' kalau tanpa Lenis
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
