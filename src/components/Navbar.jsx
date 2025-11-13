/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const location = useLocation();

  const initActiveBox = () => {
    const link = lastActiveLink.current;
    const box = activeBox.current;
    if (!link || !box) return;

    const rect = link.getBoundingClientRect();
    const parentRect = link.parentElement.getBoundingClientRect();

    // posisi relatif ke parent
    box.style.top = rect.top - parentRect.top + "px";
    box.style.left = rect.left - parentRect.left + "px";
    box.style.width = rect.width + "px";
    box.style.height = rect.height + "px";
  };

  const handleResize = () => {
    clearTimeout(window.navbarResizeTimer);
    window.navbarResizeTimer = setTimeout(() => initActiveBox(), 150);
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // sinkronisasi posisi aktif setiap navigasi berubah
    setTimeout(initActiveBox, 100);
  }, [location]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  const { t } = useTranslation();

  const navItems = [
    { key: "home", link: "#home", className: "nav-link active", ref: lastActiveLink },
    { key: "profil", link: "#profil", className: "nav-link" },
    { key: "services", link: "#services", className: "nav-link" },
    { key: "portfolio", link: "#portofolio", className: "nav-link" },
    { key: "blog", href: "/blog", className: "nav-link" },
    { key: "faq", link: "#faq", className: "nav-link" },
    { key: "contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav
      className={`navbar transition-all duration-300 ${
        navOpen ? "active" : ""
      }`}
      // 👇 posisi khusus mobile: dekat tombol bahasa (kanan atas)
      style={{
        right: "1rem",
        top: "1rem",
      }}
    >
      {navItems.map(({ key: labelKey, link, href, className, ref }, key) => {
        if (href) {
          return (
            <Link
              key={key}
              to={href}
              ref={ref}
              className={className}
              onClick={activeCurrentLink}
            >
              {t(`nav.${labelKey}`)}
            </Link>
          );
        }

        const absoluteLink =
          location.pathname === "/" ? link : `/${link}`;

        return (
          <a
            key={key}
            href={absoluteLink}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {t(`nav.${labelKey}`)}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
