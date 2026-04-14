import { partners } from '../data/homeData';

function PartnerMarquee() {
  return (
    <section className="py-12 px-6 lg:px-8 border-y border-[#e7e1d8] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#8a8175] mb-8 uppercase">
          Trusted By Teams Scaling Innovation
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fdfbf7] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fdfbf7] to-transparent" />
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="marquee-item text-2xl font-semibold text-[#b3aba0] hover:text-[#3b6efa] transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerMarquee;
