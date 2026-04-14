import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats, UNSPLASH_IMAGES } from '../data/homeData';

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 bg-[#fdfbf7] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={UNSPLASH_IMAGES.statsPattern} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-4">
            We deliver results,
            <span className="block text-[#3b6efa]">not presentations</span>
          </h2>
          <p className="text-xl text-[#5b534a] max-w-3xl mx-auto">
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
              className="group p-8 rounded-3xl bg-white border border-[#e7e1d8] shadow-[0_12px_30px_rgba(13,15,20,0.06)] hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl font-semibold text-[#0d0f14] mb-4">{stat.value}</div>
              <h3 className="text-lg font-semibold text-[#0d0f14] mb-2">{stat.label}</h3>
              <p className="text-[#5b534a] text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#8a8175]">
            79% of companies ranked innovation in their top 3 priorities, have you?
            <span className="block mt-1">- by BCG (Boston Consulting Group)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
