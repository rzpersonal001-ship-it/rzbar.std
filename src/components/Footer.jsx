/**
 * @copyright 2025 rzbar.std
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Profil',
    href: '#profil'
  },
  {
    label: 'Portofolio',
    href: '#portofolio'
  },
  // {
  //   label: 'Reviews',
  //   href: '#reviews'
  // },
  {
    label: 'Contact/Pay',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/rzbar.std-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rzbar.std'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/rzbar.std_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rzbar.std'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/rzbar.std'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let's build your next project together!
            </h2>

            <ButtonPrimary
              href="mailto:404rezaakbar@gmail.com?subject=Project%20Inquiry%20from%20rzbar.std%20Website&body=Hi%20Reza%2C%0A%0AI%27m%20interested%20in%20starting%20a%20project%20with%20you.%0AHere%20are%20some%20details%20about%20what%20I%27m%20looking%20for%3A%0A%0A-%20Project%20type%3A%0A-%20Deadline%3A%0A-%20Budget%20range%3A%0A%0AThank%20you%21"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />

          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">rzbar.std — Design & Data Services. Crafted with ❤️ from Kalimantan.</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer