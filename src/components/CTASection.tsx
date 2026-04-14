import { motion } from 'framer-motion';
import { UNSPLASH_IMAGES } from '../data/homeData';

function CTASection() {
  return (
    <section className="relative py-28 px-6 lg:px-8">
      <div className="absolute inset-0">
        <img src={UNSPLASH_IMAGES.ctaBg} alt="Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14]/95 via-[#111827]/85 to-[#0d0f14]/95" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Ready to transform your innovation journey?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of companies already innovating with Steve's AI Lab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#f6d28b] text-[#0d0f14] rounded-full font-medium text-lg hover:shadow-2xl transition-all hover:-translate-y-0.5">
              Book your Demo
            </button>
            <button className="px-8 py-4 border border-white/40 text-white rounded-full font-medium text-lg hover:border-white/70 hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
