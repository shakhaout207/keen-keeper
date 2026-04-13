import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const socials = [
  { name: 'Instagram', icon: instagram, href: '#' },
  { name: 'Facebook', icon: facebook, href: '#' },
  { name: 'Twitter', icon: twitter, href: '#' },
];

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookies'];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#225c49] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            KeenKeeper
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <p className="mt-8 text-lg font-medium">Social Links</p>

          <div className="mt-4 flex items-center gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}