import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnerMarquee from './components/PartnerMarquee';
import InnovationCarousel from './components/InnovationCarousel';
import AboutSection from './components/AboutSection';
import CoreValuesSection from './components/CoreValuesSection';
import StatsSection from './components/StatsSection';
import EngagementSection from './components/EngagementSection';
import TestimonialsSection from './components/TestimonialsSection';
import EventsGrid from './components/EventsGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#0d0f14] selection:bg-[#0d0f14] selection:text-[#f7f4ef]">
      <Header />
      <main>
        <HeroSection />
        <PartnerMarquee />
        <InnovationCarousel />
        <AboutSection />
        <CoreValuesSection />
        <StatsSection />
        <EngagementSection />
        <TestimonialsSection />
        <EventsGrid />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
