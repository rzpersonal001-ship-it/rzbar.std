import { useTranslation } from "react-i18next";

const ComingSoon = () => {
  const { t } = useTranslation();
  const content = t("comingSoon", { returnObjects: true });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-zinc-900 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD93B] mb-4">{content.title}</h1>
      <p className="text-lg sm:text-xl max-w-xl">{content.description}</p>
    </section>
  );
};

export default ComingSoon;
