/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { Code, PenTool, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    translationKey: "branding",
    icon: <PenTool size={32} strokeWidth={1.5} />,
    color: "lemonyellow", // #FFD93B
  },
  {
    translationKey: "web",
    icon: <Code size={32} strokeWidth={1.5} />,
    color: "coralred", // #FF4C4C
  },
  {
    translationKey: "data",
    icon: <Database size={32} strokeWidth={1.5} />,
    color: "skyblue", // #38BDF8
  },
];

const colorClasses = {
  lemonyellow: {
    icon: "text-[#FFD93B]",
    dot: "text-[#FFD93B]",
    hover: "hover:bg-[#e6b800]/10 hover:border-[#FFD93B]/40",
  },
  coralred: {
    icon: "text-[#FF4C4C]",
    dot: "text-[#FF4C4C]",
    hover: "hover:bg-[#FF4C4C]/10 hover:border-[#FF4C4C]/40",
  },
  skyblue: {
    icon: "text-[#38BDF8]",
    dot: "text-[#38BDF8]",
    hover: "hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/40",
  },
};

const Services = () => {
  const { t } = useTranslation();
  const servicesContent = t("services", { returnObjects: true });
  const cards = servicesContent.cards || {};

  return (
    <section id="services" className="section">
      <div className="container text-left">
        <h2 className="headline-2 reveal-up">{servicesContent.title}</h2>
        <p className="text-zinc-400 mt-3 mb-10 max-w-[60ch] reveal-up">
          {servicesContent.description}
        </p>

        <p className="text-zinc-400 mt-4 mb-10 max-w-[60ch] text-left reveal-up">
          {servicesContent.note}{" "}
          <a href="#contact" className="text-[#FFD93B] hover:underline">
            {servicesContent.cta}
          </a>
        </p>
      </div>

      <div className="container text-center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, color, translationKey }) => {
            const scheme = colorClasses[color];
            const card = cards[translationKey];
            if (!card) return null;
            return (
              <div
                key={translationKey}
                className={`p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700 transition-all duration-300 reveal-up group ${scheme.hover}`}
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-6 mx-auto ${scheme.icon}`}
                >
                  {icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>

                <ul className="text-zinc-400 text-sm space-y-2">
                  {card.items?.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2 group-hover:text-white transition-colors"
                    >
                      <span className={`text-base ${scheme.dot}`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
