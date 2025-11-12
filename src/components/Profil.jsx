/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */


const profilItems = [
  {
    label: 'Project done',
    number: 99
  },
  {
    label: 'Years of experience',
    number: 5
  }
];


const Profil = () => {
  return (
    <section
      id="profil"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Reza, a creative professional working with 
            <span className="font-semibold text-[#FFD93B]"> my team</span> to help individuals and businesses communicate more effectively through 
            <span className="font-semibold text-[#FFD93B]"> impactful design</span> and 
            <span className="font-semibold text-[#FFD93B]"> data solutions</span>. Combining visual creativity with technical precision, we transform your ideas into high-quality visuals and smart reports that are both beautiful and functional.
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              profilItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-[#FFD93B] font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

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
  )
}

export default Profil