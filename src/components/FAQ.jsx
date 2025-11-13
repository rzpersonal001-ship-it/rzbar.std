/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const faqContent = t("faq", { returnObjects: true });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl mx-auto">
        <h2 className="headline-2 mb-8">{faqContent.title}</h2>
        <div className="space-y-4">
          {faqContent.items?.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-700/50 rounded-xl p-4 hover:bg-zinc-800/50 transition"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#FFD93B] transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <p className="text-zinc-400 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
