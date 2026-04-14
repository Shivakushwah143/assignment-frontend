import { motion, useMotionValue } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useCarousel from '../hooks/useCarousel';
import { challenges } from '../data/homeData';

function InnovationCarousel() {
  const { currentIndex, next, prev } = useCarousel(challenges.length - 3);
  const x = useMotionValue(0);
  const CARD_WIDTH = 340;
  const CARD_GAP = 24;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  return (
    <section id="challenges" className="py-24 px-6 lg:px-8 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-4">
              Innovation Challenges
            </h2>
            <p className="text-lg text-[#5b534a] max-w-2xl">
              Run corporate challenges & hackathons to develop innovative solutions
              that will transform your business.
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button onClick={prev} disabled={currentIndex === 0} className="p-3 rounded-full bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_12px_30px_rgba(13,15,20,0.08)] hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} disabled={currentIndex >= challenges.length - 3} className="p-3 rounded-full bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_12px_30px_rgba(13,15,20,0.08)] hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
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
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {challenges.map((challenge) => (
              <div key={challenge.id} className="flex-shrink-0 mr-6" style={{ width: CARD_WIDTH }}>
                <motion.div whileHover={{ y: -8 }} className="group relative p-6 rounded-3xl bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_16px_35px_rgba(13,15,20,0.08)] hover:shadow-[0_25px_60px_rgba(13,15,20,0.12)] transition-all h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${challenge.gradient}`} />
                  <div className="w-12 h-12 rounded-2xl bg-[#0d0f14] text-[#f7f4ef] flex items-center justify-center mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0d0f14] mb-3">{challenge.title}</h3>
                  <p className="text-[#5b534a] text-sm leading-relaxed">{challenge.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-[#3b6efa] opacity-0 group-hover:opacity-100 transition-opacity">
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

export default InnovationCarousel;
