/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */

import { useTranslation } from "react-i18next";

const Profil = () => {
  const { t } = useTranslation();
  const profilContent = t("profil", { returnObjects: true });

  return (
    <section id="profil" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            {profilContent.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {profilContent.stats?.map(({ label, number }) => (
              <div key={label}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-[#FFD93B] font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
