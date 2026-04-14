import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { coreValues } from '../data/homeData';

function CoreValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-[#0d0f14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
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
              className="p-8 rounded-3xl bg-[#141821] border border-[#232936] text-center hover:border-[#3b6efa] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f6d28b] text-[#0d0f14] flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValuesSection;
