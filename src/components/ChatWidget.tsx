import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import useUIStore from '../store/uiStore';

function ChatWidget() {
  const isOpen = useUIStore((state) => state.isChatOpen);
  const toggleChat = useUIStore((state) => state.toggleChat);

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#0d0f14] text-[#f7f4ef] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-[#e7e1d8] overflow-hidden"
          >
            <div className="p-4 bg-[#0d0f14] text-white">
              <h4 className="font-semibold">Chat Now</h4>
              <p className="text-sm text-white/80">We typically reply within minutes</p>
            </div>

            <div className="h-80 p-4 overflow-y-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#f6d28b] text-[#0d0f14] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-[#efe9df] rounded-lg p-3 text-sm text-[#3a3430]">
                  Hi! How can we help you accelerate your AI development today?
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#e7e1d8]">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#e7e1d8] bg-[#fdfbf7] focus:outline-none focus:ring-2 focus:ring-[#3b6efa]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
