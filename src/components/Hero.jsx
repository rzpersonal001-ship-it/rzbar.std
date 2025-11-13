/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
import { Palette, Laptop, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const heroContent = t("hero", { returnObjects: true });

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        {/* === Kiri: Teks === */}
        <div>
          {/* === Status Online === */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="rzbar.std portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {heroContent.status}
            </div>
          </div>

          {/* === Headline === */}
          <div className="mt-5 mb-8 lg:mb-10">
            <h1 className="text-[#FFD93B] text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              {heroContent.titleLines?.map((line, index) => (
                <span key={`${line}-${index}`} className={`typing-line typing-line-${index + 1} block`}>
                  {line}
                </span>
              ))}
            </h1>




            {/* <p className="text-3xl sm:text-2.5xl leading-snug font-bold">
              <span style={{ color: '#ffffff' }}>Design.</span>{' '}
              <span style={{ color: '#ffffff' }}>Data.</span>{' '}
              <span style={{ color: '#ffffff' }}>Impact.</span>
            </p> */}


            <p className="hero-subtitle text-zinc-300 text-lg sm:text-xl leading-relaxed mt-4 max-w-[48ch]">
              {heroContent.subtitle}
            </p>

            {/* Extra Highlights */}
            
            <ul className="mt-6 space-y-3 text-base sm:text-lg font-medium text-zinc-300">
              {[Palette, Laptop, BarChart3].map((Icon, index) => {
                const highlight = heroContent.highlights?.[index];
                if (!highlight) return null;
                return (
                  <li key={highlight.title} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#FFD93B]" />
                    <span>
                      <b className="text-[#FFD93B]">{highlight.title}</b> → {highlight.description}{" "}
                      <span className="text-sky-400 font-semibold">{highlight.highlight}</span>
                    </span>
                  </li>
                );
              })}
            </ul>



          </div>

          {/* === CTA Buttons === */}
          <div className="flex items-center gap-4">
            <ButtonPrimary mr-10
              label={heroContent.ctaPrimary}
              icon="email"
              href="#contact"
            />

            <ButtonOutline
              href="#services"
              label={heroContent.ctaSecondary}
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* === Kanan: Banner === */}
        <div className="block lg:block mt-10 sm:mt-0">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-[#FFD93B] via-25% via-[#FFD93B]/40 to-65% rounded-[60px] overflow-hidden">

            <img
              src="/images/hero-banner2.png"
              width={656}
              height={800}
              alt="rzbar.std"
              className="w-full"
            />
          </figure>
        </div>

      </div>
    </section>
  );
};

export default Hero;
