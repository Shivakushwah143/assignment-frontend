import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { missionStats, UNSPLASH_IMAGES } from '../data/homeData';

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-8 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-6">
              Business with Steve's AI Lab.
            </h2>
            <div className="space-y-4 text-[#5b534a]">
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
            <div className="relative h-[420px] rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(13,15,20,0.15)] border border-[#e7e1d8]">
              <img src={UNSPLASH_IMAGES.aboutLab} alt="AI Lab Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/85 via-[#0d0f14]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl text-white mb-4">
                  Our Mission Is To Accelerate The Development Of AI
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {missionStats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-4xl font-semibold text-white">{stat.value}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/70 mt-1">{stat.label}</div>
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

export default AboutSection;
