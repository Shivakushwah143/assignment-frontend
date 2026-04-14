import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { UNSPLASH_IMAGES } from '../data/homeData';

function HeroSection() {
  return (
    <section className="relative px-6 lg:px-8 pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-[#3b6efa]/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#f6d28b]/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,110,250,0.12),transparent_40%),radial-gradient(circle_at_75%_25%,rgba(13,15,20,0.08),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0f14] text-[#f7f4ef] text-xs uppercase tracking-[0.3em] mb-8">
            Innovation Studio
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[#0d0f14] mb-6">
            Design the future of
            <span className="block text-[#3b6efa]">industry-scale AI</span>
          </h1>

          <p className="text-lg md:text-xl text-[#4b4440] mb-8 max-w-xl">
            Steve's AI Lab helps visionary teams build products, platforms, and innovation programs with a precision
            mindset, a global talent network, and a delivery system built for momentum.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-7 py-3.5 bg-[#0d0f14] text-[#f7f4ef] rounded-full font-medium text-base shadow-[0_18px_40px_rgba(13,15,20,0.25)] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-7 py-3.5 border border-[#0d0f14]/20 text-[#0d0f14] rounded-full font-medium text-base hover:bg-[#efe9df] transition-colors">
              View Our Work
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="text-2xl font-semibold text-[#0d0f14]">7M+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#8a8175]">Innovators</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0d0f14]">200+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#8a8175]">Partners</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0d0f14]">10x</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#8a8175]">Speed</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative block"
        >
          <div className="absolute -top-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur border border-[#e7e1d8] rounded-2xl px-5 py-4 shadow-[0_20px_45px_rgba(13,15,20,0.1)] z-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8a8175]">Studio Note</p>
            <p className="text-sm text-[#0d0f14] mt-1">Built for ambitious, design-led teams.</p>
          </div>

          <div className="relative h-[430px] w-full rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(13,15,20,0.25)] border border-[#e7e1d8]">
            <img src={UNSPLASH_IMAGES.heroFeature} alt="AI Neural Network" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-11 h-11 rounded-full bg-[#f6d28b] text-[#0d0f14] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80">Signal</p>
                  <p className="font-medium">Custom AI systems that scale with you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 right-4 bg-[#0d0f14] text-[#f7f4ef] rounded-2xl px-5 py-4 shadow-[0_25px_60px_rgba(13,15,20,0.25)]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#f6d28b]">Launch Cadence</p>
            <p className="text-sm mt-1">Prototype to deployment in weeks, not quarters.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
