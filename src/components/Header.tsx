import { LinkedInIcon, GitHubIcon, XIcon, FacebookIcon } from './BrandIcons';
import { Phone, Mail, Menu, X, Sparkles } from 'lucide-react';
import useUIStore from '../store/uiStore';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const isMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);
  const closeMobileMenu = useUIStore((state) => state.closeMobileMenu);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: XIcon, href: 'https://twitter.com', label: 'X/Twitter' },
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ef]/90 backdrop-blur border-b border-[#e7e1d8]">
      <div className="hidden lg:block bg-[#0d0f14] border-b border-[#1b1f28]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a href="tel:+917314980182" className="flex items-center gap-2 text-sm text-[#cfc7bb] hover:text-[#f6d28b] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 73149 80182</span>
              </a>
              <a href="mailto:contact@stevesailab.com" className="flex items-center gap-2 text-sm text-[#cfc7bb] hover:text-[#f6d28b] transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@stevesailab.com</span>
              </a>
            </div>

            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 text-[#9f978c] hover:text-[#f6d28b] hover:bg-white/10 rounded-full transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d0f14] to-[#3b6efa] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-[0.95rem] font-semibold tracking-[0.35em] text-[#0d0f14] uppercase">
              STEVE'S AI LAB
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#3a3430] hover:text-[#3b6efa] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <button className="px-5 py-2.5 bg-[#0d0f14] text-[#f7f4ef] rounded-full text-sm font-medium hover:bg-[#1a1d24] shadow-[0_12px_30px_rgba(13,15,20,0.25)] hover:-translate-y-0.5 transition-all">
              Talk To Our Expert
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+917314980182" className="p-2 text-[#3a3430] hover:text-[#3b6efa]">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={toggleMobileMenu} className="p-2 rounded-lg hover:bg-[#efe9df]">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#e7e1d8] bg-[#fdfbf7]"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-sm font-medium text-[#3a3430] hover:text-[#3b6efa]"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-3 border-t border-[#e7e1d8] space-y-2">
                  <a href="tel:+917314980182" className="flex items-center gap-2 py-2 text-sm text-[#5b534a]">
                    <Phone className="w-4 h-4" />
                    <span>+91 73149 80182</span>
                  </a>
                  <a href="mailto:contact@stevesailab.com" className="flex items-center gap-2 py-2 text-sm text-[#5b534a]">
                    <Mail className="w-4 h-4" />
                    <span>contact@stevesailab.com</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#e7e1d8]">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[#8a8175] hover:text-[#3b6efa] hover:bg-[#efe9df] rounded-full"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                <button className="w-full mt-3 px-5 py-3 bg-[#0d0f14] text-[#f7f4ef] rounded-full text-sm font-medium hover:bg-[#1a1d24]">
                  Talk To Our Expert
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
