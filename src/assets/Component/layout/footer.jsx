import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* Collapsible section for mobile — expands on tap */
function FooterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 sm:border-0">
      {/* Tappable header on mobile, static on desktop */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 sm:cursor-default sm:py-0"
      >
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
          {title}
        </h3>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-300 sm:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content: hidden by default on mobile, always visible on sm+ */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:mt-5 sm:max-h-none sm:opacity-100 ${
          open ? "mt-2 max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0 sm:pb-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Movies", path: "/movies" },
    { name: "Cinemas", path: "/cinemas" },
    { name: "Showtimes", path: "/showtimes" },
    { name: "Promotions", path: "/promotions" },
  ];

  const infoLinks = [
    { name: "About Us", path: "/about" },
    { name: "Food & Drinks", path: "/food" },
    { name: "Terms & Conditions", path: "#" },
    { name: "Privacy Policy", path: "#" },
  ];

  const contactItems = [
    { Icon: MapPin, text: "Phnom Penh, Cambodia" },
    { Icon: Phone, text: "+855 81550749" },
    { Icon: Mail, text: "chhormsokna46@gmail.com" },
  ];

  const socialLinks = [
    { Icon: Facebook, label: "Chhorm Sokhana" },
    { Icon: Instagram, label: "@Sokna1234566" },
    { Icon: Youtube, label: "Sokhana" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="container-cinema py-10 sm:py-16">

        {/* ── Brand section (always visible) ── */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cinema-600 text-lg font-black">
                K
              </div>
              <div>
                <h2 className="text-lg font-extrabold tracking-wide">
                  KON KHMER
                </h2>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
                  Legend
                </p>
              </div>
            </Link>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Experience movies like never before with premium cinema
              entertainment and world-class comfort.
            </p>
          </div>

          {/* Social buttons */}
          <div className="mt-6 flex justify-center gap-2 sm:justify-start">
            {socialLinks.map(({ Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all duration-200 active:scale-95 hover:border-cinema-600/50 hover:bg-cinema-600/10 hover:text-white"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mb-2 border-t border-white/5 sm:mb-0 sm:border-0" />

        {/* ── Link columns (collapsible on mobile) ── */}
        <div className="grid gap-0 sm:grid-cols-3 sm:gap-12">

          <FooterSection title="Quick Links">
            <div className="flex flex-col gap-0.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition-all duration-200 active:bg-white/10 hover:bg-white/5 hover:text-white sm:py-2"
                >
                  <span className="h-4 w-0.5 rounded-full bg-cinema-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  {link.name}
                </Link>
              ))}
            </div>
          </FooterSection>

          <FooterSection title="Information">
            <div className="flex flex-col gap-0.5">
              {infoLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition-all duration-200 active:bg-white/10 hover:bg-white/5 hover:text-white sm:py-2"
                >
                  <span className="h-4 w-0.5 rounded-full bg-cinema-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  {link.name}
                </Link>
              ))}
            </div>
          </FooterSection>

          <FooterSection title="Contact Us">
            <div className="space-y-3">
              {contactItems.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cinema-400">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </FooterSection>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/5 pt-6 sm:mt-12 sm:flex-row sm:pt-8">
          <p className="text-center text-xs text-gray-500">
            © 2026 Legend Cinema. Demo project for educational purposes.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition-all duration-200 active:scale-95 hover:border-white/20 hover:bg-white/5 hover:text-white sm:py-1.5"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;