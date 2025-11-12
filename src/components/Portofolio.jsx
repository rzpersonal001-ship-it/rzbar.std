/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const portofolios = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
    category: "web",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
    category: "web",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
    category: "web",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real estate website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/rzbar.std-org/wealthome",
    category: "uiux",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/rzbar.std/anon-ecommerce-website",
    category: "web",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/rzbar.std/vcard-personal-portfolio",
    category: "uiux",
  },
];

const categories = [
  { slug: "all", label: "All" },
  { slug: "web", label: "Web Development" },
  { slug: "uiux", label: "UI/UX Design" },
];

const Portofolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // tampilkan 4 project per halaman

  // Filter berdasarkan kategori
  const filteredPortofolios =
    activeCategory === "all"
      ? portofolios
      : portofolios.filter((item) => item.category === activeCategory);

  // Hitung total halaman
  const totalPages = Math.ceil(filteredPortofolios.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPortofolios = filteredPortofolios.slice(startIndex, endIndex);

  // Scroll halus ke section "portofolio" setiap ganti halaman
  const changePage = (page) => {
    setCurrentPage(page);
    const section = document.querySelector("#portofolio");
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Reset ke halaman 1 saat ganti kategori
  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section id="portofolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        {/* Tabs kategori */}
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

        {/* Grid project */}
        <div className="grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))]">
          {paginatedPortofolios.map(({ imgSrc, title, tags, projectLink }) => (
            <ProjectCard
              key={title}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes=""
            />
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

export default Portofolio;
