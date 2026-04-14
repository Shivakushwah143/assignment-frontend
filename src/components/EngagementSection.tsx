import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { engagementModels } from '../data/homeData';
import { ArrowRight } from 'lucide-react';

function EngagementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-4">
            Flexible Engagement, Tailored To Your Vision
          </h2>
          <p className="text-lg text-[#5b534a] max-w-3xl mx-auto">
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
              className="group p-8 rounded-3xl bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_16px_35px_rgba(13,15,20,0.08)] hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0d0f14] text-[#f7f4ef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {model.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0d0f14] mb-3">{model.title}</h3>
              <p className="text-[#5b534a] mb-4">{model.description}</p>
              <div className="flex items-center text-sm font-medium text-[#3b6efa]">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementSection;
