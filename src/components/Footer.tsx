import { Sparkles } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, XIcon, FacebookIcon } from './BrandIcons';
import { services } from '../data/homeData';

function Footer() {
  const socialLinks = [
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: XIcon, href: 'https://twitter.com', label: 'X/Twitter' },
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#0d0f14] border-t border-[#1b1f28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#f6d28b] flex items-center justify-center text-[#0d0f14]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Steve's AI Lab</h3>
            </div>
            <p className="text-sm text-[#cfc7bb] mb-4">
              Customize pre-trained LLMs for faster, top-notch results.
            </p>
            <p className="text-sm text-[#cfc7bb] mb-4">
              Phone: +91 73149 80182
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#9f978c] hover:text-[#f6d28b] hover:bg-white/10 rounded-full transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#cfc7bb]">
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">Services</li>
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, i) => (
                <li key={i} className="text-sm text-[#cfc7bb] list-none hover:text-[#f6d28b] cursor-pointer transition-colors">{service}</li>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-[#cfc7bb]">
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">GitHub</li>
              <li className="hover:text-[#f6d28b] cursor-pointer transition-colors">contact@stevesailab.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1b1f28] text-center text-sm text-[#9f978c]">
          (c) 2024 Steve's AI Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
