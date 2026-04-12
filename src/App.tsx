













// App.tsx - Complete Final Version with Tech-Blue Palette
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue,} from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, ArrowRight, Trophy, Sparkles, Users, 
  Rocket, Globe, Calendar, Menu, X, MessageCircle, Target, Zap, 
  Shield, Phone, Mail
} from 'lucide-react';

// ============================================
// CUSTOM SVG ICONS (Lucide removed brand icons)
// ============================================
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="GitHub">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.394-4.042-1.435-4.042-1.435-.546-1.388-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.876.118 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.83.578 4.765-1.588 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="X / Twitter">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Facebook">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103v3.34c-.31-.022-.71-.035-1.069-.035-2.156 0-2.989 1.057-2.989 3.36v1.79h4.271l-.731 3.667h-3.54v7.98H9.1z" />
  </svg>
);

// ============================================
// UNSPLASH IMAGE URLS (Replace with your own)
// ============================================
const UNSPLASH_IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1639322537228-f740d1e06c16?w=1920&q=80&auto=format&fit=crop',
  heroFeature: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
  aboutLab: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80&auto=format&fit=crop',
  statsPattern: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80&auto=format&fit=crop',
  eventHackathon: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fit=crop',
  eventInnovation: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop',
  eventAI: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop',
  eventAcademy: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop',
  avatar1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop',
  avatar2: 'https://images.unsplash.com/photo-1494790108755-2616c510cbc3?w=100&q=80&auto=format&fit=crop',
  avatar3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop',
  ctaBg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop',
};

// ============================================
// TYPES
// ============================================
interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  avatarUrl: string;
}

interface Event {
  id: string;
  title: string;
  type: 'FREE' | 'PAID';
  format: 'VIRTUAL' | 'HYBRID' | 'IN-PERSON';
  date: string;
  status: 'open' | 'closed';
  imageUrl: string;
}

interface EngagementModel {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// ============================================
// MOCK DATA
// ============================================
const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Product Evangelism',
    description: 'Ignite customer excitement and drive product adoption through strategic evangelism programs.',
    icon: '📢',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: '2',
    title: 'Startup Pitches',
    description: 'Find the best startups in your industry to partner with and co-develop innovative solutions.',
    icon: '🚀',
    gradient: 'from-blue-700 to-indigo-600',
  },
  {
    id: '3',
    title: 'Student Challenges',
    description: 'Explore innovative ideas from student minds across global universities.',
    icon: '🎓',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    id: '4',
    title: 'Recruitment',
    description: 'Connect with students globally to identify the brightest young minds.',
    icon: '💼',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    id: '5',
    title: 'Internal Hackathon',
    description: 'Empower your workforce to drive change! Gather employee insights and innovation.',
    icon: '💡',
    gradient: 'from-sky-600 to-blue-500',
  },
];

const stats: Stat[] = [
  {
    id: '1',
    value: '90%',
    label: 'Cost Reduction',
    description: 'in ideation and deployment, transforming the innovation landscape.',
  },
  {
    id: '2',
    value: '73%',
    label: 'Boost in Adoption',
    description: 'in product adoption, propelling projects beyond launch to new heights.',
  },
  {
    id: '3',
    value: '65%',
    label: 'Brand Visibility',
    description: 'increase in brand visibility, spotlighting our partners on the global stage.',
  },
  {
    id: '4',
    value: '100%',
    label: 'Free Talent',
    description: 'talent acquisition, reshaping recruitment with unmatched efficiency.',
  },
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Shubham Vishwakarma',
    role: 'Founder/CEO',
    company: 'Innovator League',
    content: 'I got this email regarding support every time I have been in need. Any advice I had was shared with me. He is a great person and always available to help.',
    avatar: 'SV',
    avatarUrl: UNSPLASH_IMAGES.avatar1,
  },
  {
    id: '2',
    name: 'Nancy Wang',
    role: 'Head of Customer Partnerships',
    company: 'Google',
    content: 'We did it! We are proud to announce that we have launched our first product in the field of AI-powered personal assistants.',
    avatar: 'NW',
    avatarUrl: UNSPLASH_IMAGES.avatar2,
  },
  {
    id: '3',
    name: 'Preston Kumar',
    role: 'Director of Product Strategy',
    company: 'Microsoft',
    content: 'This is amazing! It reminds me of what we were talking about at the conference. Great job!',
    avatar: 'PK',
    avatarUrl: UNSPLASH_IMAGES.avatar3,
  },
];

const events: Event[] = [
  {
    id: '1',
    title: 'ABC Hackathon 2024',
    type: 'FREE',
    format: 'VIRTUAL',
    date: 'May 15-16, 2024',
    status: 'closed',
    imageUrl: UNSPLASH_IMAGES.eventHackathon,
  },
  {
    id: '2',
    title: 'Accenture Innovation Challenge',
    type: 'FREE',
    format: 'VIRTUAL',
    date: 'Jun 01-04, 2024',
    status: 'closed',
    imageUrl: UNSPLASH_IMAGES.eventInnovation,
  },
  {
    id: '3',
    title: 'Virtual: PromptWars',
    type: 'FREE',
    format: 'VIRTUAL',
    date: 'Jul 08-09, 2024',
    status: 'open',
    imageUrl: UNSPLASH_IMAGES.eventAI,
  },
  {
    id: '4',
    title: 'Gen AI Academy APAC Edition',
    type: 'FREE',
    format: 'HYBRID',
    date: 'Aug 15-16, 2024',
    status: 'open',
    imageUrl: UNSPLASH_IMAGES.eventAcademy,
  },
];

const partners = ['Samsung', 'Uber', 'Microsoft', 'Adobe', 'Google', 'IBM'];

const coreValues = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'User-Centric',
    description: 'We build solutions that focus on user needs and perform well on search engines/browsers.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Agile Methods',
    description: 'Iterative approaches and agile methods allow us to ensure faster time-to-market.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Committed to Excel',
    description: 'Our team thinks out of the box to bring desired value and exceed expectations.',
  },
];

const engagementModels: EngagementModel[] = [
  {
    id: '1',
    title: 'Project-Based Collaboration',
    description: 'Perfect for defined projects with clear deliverables and timelines.',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    id: '2',
    title: 'A Dedicated Team',
    description: 'Augment your existing resources with our specialized AI experts.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: '3',
    title: 'Consultative Partnership',
    description: 'Strategic guidance to navigate your AI transformation journey.',
    icon: <Globe className="w-8 h-8" />,
  },
];

const missionStats = [
  { value: '720+', label: 'Project Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '6+', label: 'Years of Experience' },
];

const services = [
  'Product Development', 'Consulting', 'Digital Transformation', 'Cybersecurity',
  'Application Development', 'Data & Analytics', 'AI & Machine Learning', 'Cloud Services',
  'IoT & Blockchain', 'XR & AR/VR', 'Business Intelligence', 'Enterprise Solutions'
];

// ============================================
// CUSTOM HOOKS
// ============================================
function useCarousel(maxIndex: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  return { currentIndex, next, prev };
}

// ============================================
// COMPONENTS
// ============================================

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a href="tel:+917314980182" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 73149 80182</span>
              </a>
              <a href="mailto:contact@stevesailab.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">
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
                    className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              STEVE'S AI LAB
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:block flex-shrink-0">
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 shadow-sm hover:shadow-md transition-all">
              Talk To Our Expert
            </button>
          </div>
          
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+917314980182" className="p-2 text-slate-600 hover:text-blue-600">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-slate-100">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <a href="tel:+917314980182" className="flex items-center gap-2 py-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 73149 80182</span>
                  </a>
                  <a href="mailto:contact@stevesailab.com" className="flex items-center gap-2 py-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>contact@stevesailab.com</span>
                  </a>
                </div>
                
                <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
                
                <button className="w-full mt-3 px-5 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
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

// Hero Section
function HeroSection() {
  return (
    <section className="relative px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={UNSPLASH_IMAGES.heroBg} alt="AI Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/70 to-blue-900/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-white">7M+ innovators ready</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              In innovation,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                one size does not fit all
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Innovate effortlessly. Our leading innovation management platform and 
              a network of 7 million innovators will help you find the perfect 
              solutions and bring them to market faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Start Innovating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:border-white/50 hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src={UNSPLASH_IMAGES.heroFeature} alt="AI Neural Network" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Steve's AI Lab</p>
                    <p className="text-sm text-white/70">Customize pre-trained LLMs for faster, top-notch results.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partner Logos
function PartnerLogos() {
  return (
    <section className="py-12 px-6 lg:px-8 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-wider text-slate-500 mb-8 uppercase">
          POWERED BY CREATIVE COMPARISON, STANDARDS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {partners.map((partner) => (
            <div key={partner} className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Innovation Challenges Carousel
function InnovationCarousel() {
  const { currentIndex, next, prev } = useCarousel(challenges.length - 3);
  const x = useMotionValue(0);
  const CARD_WIDTH = 340;
  const CARD_GAP = 24;
  
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };
  
  return (
    <section id="challenges" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Innovation Challenges
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Run corporate challenges & hackathons to develop innovative solutions 
              that will transform your business.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button onClick={prev} disabled={currentIndex === 0} className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} disabled={currentIndex >= challenges.length - 3} className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -(currentIndex * (CARD_WIDTH + CARD_GAP)), right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * (CARD_WIDTH + CARD_GAP)) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {challenges.map((challenge) => (
              <div key={challenge.id} className="flex-shrink-0 mr-6" style={{ width: CARD_WIDTH }}>
                <motion.div whileHover={{ y: -8 }} className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${challenge.gradient}`} />
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{challenge.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Business with Steve's AI Lab.
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                At Steve's AI Lab, we're on a mission to revolutionize industries through data-centric AI. 
                Our team is driven by the belief that everyone should have the power to solve their most 
                impactful problems using cutting-edge technology.
              </p>
              <p>
                By empowering Fortune 500 enterprises and government agencies, we accelerate AI application 
                development by 10-100x, transforming the way businesses operate.
              </p>
              <p>
                We're not just about technology; we're about building a culture of innovation and inclusivity.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src={UNSPLASH_IMAGES.aboutLab} alt="AI Lab Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission Is To Accelerate The Development Of AI
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {missionStats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Core Values Section
function CoreValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We build solutions that focus on user needs and perform well on search engines/browsers. 
            Iterative approaches and agile methods allow us to ensure faster time-to-market.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 text-center hover:border-blue-300 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={UNSPLASH_IMAGES.statsPattern} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            We deliver results,
            <span className="block text-blue-600">not presentations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our customizable platform empowers you with the flexibility to achieve 
            your unique innovation objectives.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">{stat.value}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</h3>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            79% of companies ranked innovation in their top 3 priorities, have you?
            <span className="block mt-1">— by BCG (Boston Consulting Group)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Flexible Engagement Section
function EngagementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Flexible Engagement, Tailored To Your Vision
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every venture is unique, and so should be the roadmap to its success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {model.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{model.title}</h3>
              <p className="text-slate-600 mb-4">{model.description}</p>
              <div className="flex items-center text-sm font-medium text-blue-600">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { currentIndex, next, prev } = useCarousel(testimonials.length - 1);
  
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Don't just take our word for it,
            <span className="block text-blue-600">take theirs</span>
          </h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                    <p className="text-lg md:text-xl text-slate-700 italic mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Events Grid
function EventsGrid() {
  return (
    <section id="events" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Flagship Innovation Challenges
            </h2>
            <p className="text-lg text-slate-600">
              Join our upcoming events and be part of the innovation ecosystem
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
            View all events <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">{event.type}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">{event.format}</span>
                </div>
                
                <h3 className="font-semibold text-slate-900 mb-2">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                
                <button
                  disabled={event.status === 'closed'}
                  className={`w-full py-2.5 rounded-lg font-medium transition-all ${
                    event.status === 'open'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {event.status === 'open' ? 'Register Now' : 'Registration Closed'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="absolute inset-0">
        <img src={UNSPLASH_IMAGES.ctaBg} alt="Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to transform your innovation journey?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of companies already innovating with Steve's AI Lab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg hover:shadow-2xl transition-all hover:scale-105">
              Book your Demo
            </button>
            <button className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-medium text-lg hover:border-white/70 hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const socialLinks = [
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: XIcon, href: 'https://twitter.com', label: 'X/Twitter' },
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  ];
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Steve's AI Lab</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Customize pre-trained LLMs for faster, top-notch results.
            </p>
            <p className="text-sm text-slate-600 mb-4">
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
                    className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Services</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, i) => (
                <li key={i} className="text-sm text-slate-600 list-none hover:text-blue-600 cursor-pointer transition-colors">{service}</li>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">GitHub</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">contact@stevesailab.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          © 2024 Steve's AI Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Chat Widget
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <h4 className="font-semibold">Chat Now</h4>
              <p className="text-sm text-white/80">We typically reply within minutes</p>
            </div>
            
            <div className="h-80 p-4 overflow-y-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-100 rounded-lg p-3 text-sm">
                  👋 Hi! How can we help you accelerate your AI development today?
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-200">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================
// MAIN APP
// ============================================
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PartnerLogos />
        <InnovationCarousel />
        <AboutSection />
        <CoreValuesSection />
        <StatsSection />
        <EngagementSection />
        <TestimonialsSection />
        <EventsGrid />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;