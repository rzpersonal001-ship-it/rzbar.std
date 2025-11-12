/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does rzbar.std provide?",
    answer:
      "We offer creative and data-driven services such as branding, graphic design, web & landing page development, and data analytics reporting.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! Our team collaborates with clients globally through online communication and project management tools.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project duration depends on complexity — typically between 1 to 4 weeks. We always set clear timelines during consultation.",
  },
  {
    question: "Can I request custom solutions?",
    answer:
      "Absolutely. Every project is tailored to your business goals, from visuals to data reporting integrations.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl mx-auto">
        <h2 className="headline-2 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
