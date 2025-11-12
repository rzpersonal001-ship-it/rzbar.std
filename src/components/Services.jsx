/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { Code, PenTool, Database } from "lucide-react";

const services = [
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "Branding & Graphic Design",
    desc: "From logo creation to full visual identity systems, we craft authentic and memorable brand visuals that resonate with your audience.",
    sublist: [
      "Logo & Brand Identity",
      "Flyer & Brochure Design",
      "CV / Resume Design",
      "Packaging Design",
      "Poster & Banner Design",
      "Social Media Content",
    ],
    color: "lemonyellow", // #FFD93B
  },
  {
    icon: <Code size={32} strokeWidth={1.5} />,
    title: "Web & Landing Page Development",
    desc: "We design and build high-performing, responsive websites and landing pages optimized for both user experience and conversion.",
    sublist: [
      "Personal Portfolio",
      "Company Profile Website",
      "Landing Page Campaign",
      "WordPress Setup & Theme Customization",
      "Frontend (React JS, Tailwind CSS)",
    ],
    color: "coralred", // #FF4C4C
  },
  {
    icon: <Database size={32} strokeWidth={1.5} />,
    title: "Business Data & Accounting Solutions",
    desc: "Transform your raw data into meaningful financial and operational insights. We provide data automation, business reporting, and accounting consulting to help you make smarter and more accurate decisions.",
    sublist: [
      "Excel Dashboard & Reporting",
      "Financial Data Automation",
      "Accounting System Setup",
      "Business & Cost Analysis",
      "Financial Consulting",
    ],
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
  return (
    <section id="services" className="section">
      <div className="container text-left">
        <h2 className="headline-2 reveal-up">Our Services</h2>
        <p className="text-zinc-400 mt-3 mb-10 max-w-[60ch] reveal-up">
          We provide impactful, authentic, and data-driven creative services designed to help your business grow with purpose and precision.
        </p>

        <p className="text-zinc-400 mt-4 mb-10 max-w-[60ch] text-left reveal-up">
          Looking for a custom service or collaboration?{" "}
          <a href="#contact" className="text-[#FFD93B] hover:underline">
            Let’s discuss your project.
          </a>
        </p>
      </div>

      <div className="container text-center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, desc, sublist, color }, index) => {
            const scheme = colorClasses[color];
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700 transition-all duration-300 reveal-up group ${scheme.hover}`}
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-6 mx-auto ${scheme.icon}`}
                >
                  {icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {desc}
                </p>

                <ul className="text-zinc-400 text-sm space-y-2">
                  {sublist.map((item, subIndex) => (
                    <li
                      key={subIndex}
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
