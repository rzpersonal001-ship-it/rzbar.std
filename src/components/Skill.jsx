/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useState } from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design tool", category: "graphic" },
  { imgSrc: "/images/psd.svg", label: "Photoshop", desc: "Photo Editing", category: "graphic" },
  { imgSrc: "/images/Ill.svg", label: "Illustrator", desc: "Vector & Branding", category: "graphic" },
  { imgSrc: "/images/wp.svg", label: "WordPress", desc: "Site & Blog Setup", category: "web" },
  { imgSrc: "/images/reactjs.svg", label: "React JS", desc: "Frontend Framework", category: "web" },
  { imgSrc: "/images/Excel.svg", label: "Excel (Advanced Level)", desc: "Data & Reporting", category: "data" },
  { imgSrc: "/images/light.svg", label: "Lightroom", desc: "Color Grading", category: "graphic" },
  { imgSrc: "/images/canva.svg", label: "Canva", desc: "Content Design", category: "graphic" },
  { imgSrc: "/images/Ind.svg", label: "InDesign", desc: "Layout & Publishing", category: "graphic" },
  { imgSrc: "/images/vscode.svg", label: "Visual Code", desc: "Code Editing Tool", category: "web" },
  { imgSrc: "/images/tailwind.svg", label: "Tailwind CSS", desc: "Utility CSS Styling", category: "web" },
  { imgSrc: "/images/Word.svg", label: "Word", desc: "Document Design", category: "data" },
  { imgSrc: "/images/Point.svg", label: "Power Point", desc: "Slide Presentation", category: "data" },
  { imgSrc: "/images/accurate.svg", label: "Accurate", desc: "Accounting & Finance", category: "finance" },
];

// kategori
const categories = [
  { slug: "all", label: "All" },
  { slug: "graphic", label: "Graphic Design" },
  { slug: "web", label: "Web & Landing Page" },
  { slug: "data", label: "Data & Document Service" },
  { slug: "finance", label: "Accounting & Finance" },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

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
        <h2 className="headline-2 reveal-up">Tools That Power Our Work</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the creative tools and technologies our team relies on to craft impactful, modern, and visually compelling projects.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(({ slug, label }) => (
            <button
              key={slug}
              onClick={() => handleCategory(slug)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
                activeCategory === slug
                  ? "bg-white text-black border-white"
                  : "border-zinc-600 text-zinc-400 hover:text-white hover:border-white/60"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid tools */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {paginatedItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="" />
          ))}
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
