/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useState } from "react";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

const skillItem = [
  { imgSrc: "/images/figma.svg", key: "figma", category: "graphic" },
  { imgSrc: "/images/psd.svg", key: "photoshop", category: "graphic" },
  { imgSrc: "/images/Ill.svg", key: "illustrator", category: "graphic" },
  { imgSrc: "/images/wp.svg", key: "wordpress", category: "web" },
  { imgSrc: "/images/reactjs.svg", key: "react", category: "web" },
  { imgSrc: "/images/Excel.svg", key: "excel", category: "data" },
  { imgSrc: "/images/light.svg", key: "lightroom", category: "graphic" },
  { imgSrc: "/images/canva.svg", key: "canva", category: "graphic" },
  { imgSrc: "/images/Ind.svg", key: "indesign", category: "graphic" },
  { imgSrc: "/images/vscode.svg", key: "vscode", category: "web" },
  { imgSrc: "/images/tailwind.svg", key: "tailwind", category: "web" },
  { imgSrc: "/images/Word.svg", key: "word", category: "data" },
  { imgSrc: "/images/Point.svg", key: "powerpoint", category: "data" },
  { imgSrc: "/images/accurate.svg", key: "accurate", category: "finance" },
];

// kategori
const categories = [
  { slug: "all" },
  { slug: "graphic" },
  { slug: "web" },
  { slug: "data" },
  { slug: "finance" },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const skillsContent = t("skills", { returnObjects: true });

  const itemsPerPage = 6; // tampilkan 6 per halaman

  const filteredItems =
    activeCategory === "all"
      ? skillItem
      : skillItem.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // hitung index tools yang mau ditampilkan
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);

    // Scroll hanya ke section tools
    const section = document.querySelector("#skills"); // pastikan id ada di <section>
    if (section) {
      const offsetTop = section.offsetTop - 80; // geser dikit biar pas (header)
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // reset halaman ke 1 saat kategori diganti
  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">{skillsContent.title}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {skillsContent.description}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(({ slug }) => (
            <button
              key={slug}
              onClick={() => handleCategory(slug)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
                activeCategory === slug
                  ? "bg-white text-black border-white"
                  : "border-zinc-600 text-zinc-400 hover:text-white hover:border-white/60"
              }`}
            >
              {skillsContent.categories?.[slug]}
            </button>
          ))}
        </div>

        {/* Grid tools */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {paginatedItems.map(({ imgSrc, key }, index) => {
            const tool = skillsContent.tools?.[key];
            if (!tool) return null;
            return (
              <SkillCard
                key={`${key}-${index}`}
                imgSrc={imgSrc}
                label={tool.label}
                desc={tool.description}
                classes=""
              />
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => changePage(i + 1)}
                className={`w-8 h-8 rounded-full border text-sm transition-colors duration-300 ${
                  currentPage === i + 1
                    ? "bg-white text-black border-white"
                    : "border-zinc-600 text-zinc-400 hover:text-white hover:border-white/60"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
