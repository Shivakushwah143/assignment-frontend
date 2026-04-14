import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useCarousel from '../hooks/useCarousel';
import { testimonials } from '../data/homeData';

function TestimonialsSection() {
  const { currentIndex, next, prev } = useCarousel(testimonials.length - 1);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-4">
            Don't just take our word for it,
            <span className="block text-[#3b6efa]">take theirs</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#e7e1d8] shadow-[0_18px_40px_rgba(13,15,20,0.08)]">
                    <p className="text-lg md:text-xl text-[#3a3430] italic mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0d0f14]">{testimonial.name}</h4>
                        <p className="text-sm text-[#5b534a]">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_12px_30px_rgba(13,15,20,0.08)] hover:-translate-y-0.5 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#fdfbf7] border border-[#e7e1d8] shadow-[0_12px_30px_rgba(13,15,20,0.08)] hover:-translate-y-0.5 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
