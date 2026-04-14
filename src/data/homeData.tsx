import type React from 'react';
import { Target, Zap, Shield, Rocket, Users, Globe, Megaphone, GraduationCap, Briefcase, Lightbulb } from 'lucide-react';

export const UNSPLASH_IMAGES = {
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

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  avatarUrl: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'FREE' | 'PAID';
  format: 'VIRTUAL' | 'HYBRID' | 'IN-PERSON';
  date: string;
  status: 'open' | 'closed';
  imageUrl: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Product Evangelism',
    description: 'Ignite customer excitement and drive product adoption through strategic evangelism programs.',
    icon: <Megaphone className="w-6 h-6" />,
    gradient: 'from-[#3B6EFA] to-[#7AA2FF]',
  },
  {
    id: '2',
    title: 'Startup Pitches',
    description: 'Find the best startups in your industry to partner with and co-develop innovative solutions.',
    icon: <Rocket className="w-6 h-6" />,
    gradient: 'from-[#0D0F14] to-[#3B6EFA]',
  },
  {
    id: '3',
    title: 'Student Challenges',
    description: 'Explore innovative ideas from student minds across global universities.',
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: 'from-[#1F6F5B] to-[#4FB99F]',
  },
  {
    id: '4',
    title: 'Recruitment',
    description: 'Connect with students globally to identify the brightest young minds.',
    icon: <Briefcase className="w-6 h-6" />,
    gradient: 'from-[#C47F2A] to-[#E0A857]',
  },
  {
    id: '5',
    title: 'Internal Hackathon',
    description: 'Empower your workforce to drive change! Gather employee insights and innovation.',
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: 'from-[#7B4DFF] to-[#B49BFF]',
  },
];

export const stats: Stat[] = [
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

export const testimonials: Testimonial[] = [
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

export const events: Event[] = [
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

export const partners = ['Samsung', 'Uber', 'Microsoft', 'Adobe', 'Google', 'IBM'];

export const coreValues = [
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

export const engagementModels: EngagementModel[] = [
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

export const missionStats = [
  { value: '720+', label: 'Project Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '6+', label: 'Years of Experience' },
];

export const services = [
  'Product Development', 'Consulting', 'Digital Transformation', 'Cybersecurity',
  'Application Development', 'Data & Analytics', 'AI & Machine Learning', 'Cloud Services',
  'IoT & Blockchain', 'XR & AR/VR', 'Business Intelligence', 'Enterprise Solutions'
];
