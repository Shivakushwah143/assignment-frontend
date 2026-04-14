import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { events } from '../data/homeData';

function EventsGrid() {
  return (
    <section id="events" className="py-24 px-6 lg:px-8 bg-[#f7f4ef]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0d0f14] mb-4">
              Flagship Innovation Challenges
            </h2>
            <p className="text-lg text-[#5b534a]">
              Join our upcoming events and be part of the innovation ecosystem
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#3b6efa] font-medium hover:gap-3 transition-all">
            View all events <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -6 }}
              className="group relative bg-[#fdfbf7] rounded-2xl border border-[#e7e1d8] overflow-hidden shadow-[0_14px_35px_rgba(13,15,20,0.08)] hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-video">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/60 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-[#e7f5ef] text-[#1f6f5b] rounded-full">{event.type}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#e8efff] text-[#3b6efa] rounded-full">{event.format}</span>
                </div>

                <h3 className="font-semibold text-[#0d0f14] mb-2">{event.title}</h3>

                <div className="flex items-center gap-2 text-sm text-[#8a8175] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>

                <button
                  disabled={event.status === 'closed'}
                  className={`w-full py-2.5 rounded-lg font-medium transition-all ${
                    event.status === 'open'
                      ? 'bg-[#0d0f14] text-[#f7f4ef] hover:bg-[#1a1d24]'
                      : 'bg-[#efe9df] text-[#8a8175] cursor-not-allowed'
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

export default EventsGrid;
