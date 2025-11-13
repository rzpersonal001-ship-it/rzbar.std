/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaMedium,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const socialLinks = [
  { alt: "Facebook", href: "/coming-soon", icon: <FaFacebookF /> },
  { alt: "TikTok", href: "/coming-soon", icon: <FaTiktok /> },
  { alt: "Instagram", href: "/coming-soon", icon: <FaInstagram /> },
  { alt: "Behance", href: "/coming-soon", icon: <FaBehance /> },
  { alt: "Dribbble", href: "/coming-soon", icon: <FaDribbble /> },
  { alt: "Medium", href: "/coming-soon", icon: <FaMedium /> },
  { alt: "LinkedIn", href: "/coming-soon", icon: <FaLinkedinIn /> },
  { alt: "GitHub", href: "/coming-soon", icon: <FaGithub /> },
  { alt: "Twitter X", href: "/coming-soon", icon: <FaXTwitter /> },
];

export default function Contact() {
  const { t } = useTranslation();
  const contactContent = t("contact", { returnObjects: true });

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* LEFT SIDE */}
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            {contactContent.title}
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            {contactContent.description}
          </p>

          <p className="flex items-center gap-5 text-zinc-400 text-xs font-light mt-3 mb-8 max-w-[50ch] lg:max-w-[41ch] reveal-up">
            <MapPin className="w-10 h-10 text-zinc-500 shrink-0" />
            {contactContent.address}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-5 justify-start mt-auto">
            {socialLinks.map(({ alt, href, icon }, i) => {
              const isComingSoon = href === "/coming-soon";
              return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-[18px] transition-all duration-300 ${
                    isComingSoon
                      ? "bg-zinc-800 text-zinc-500 hover:text-zinc-400 hover:bg-zinc-700 cursor-not-allowed"
                      : "bg-zinc-800 text-white hover:text-sky-400 hover:bg-zinc-700"
                  }`}
                  style={{
                    opacity: isComingSoon ? 0.6 : 1,
                    pointerEvents: isComingSoon ? "none" : "auto", // nonaktifkan klik untuk yang belum aktif
                  }}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          action="https://getform.io/f/bwngmzya"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                {contactContent.form?.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder={contactContent.form?.namePlaceholder}
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                {contactContent.form?.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder={contactContent.form?.emailPlaceholder}
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              {contactContent.form?.messageLabel}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={contactContent.form?.messagePlaceholder}
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            {contactContent.submit}
          </button>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <p className="text-zinc-400 text-sm mb-3">
              {contactContent.quickResponse}
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-medium px-6 py-3 rounded-full shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              {contactContent.whatsapp}
            </a>

            {/* Payment */}
            <a
              href="https://lynk.id/rzbarstd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FFD93B] hover:bg-[#f2c522] text-zinc-900 font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <i className="fa-solid fa-credit-card text-lg"></i>
              {contactContent.payment}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
