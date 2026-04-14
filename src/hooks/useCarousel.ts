import { useState } from 'react';

function useCarousel(maxIndex: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  return { currentIndex, next, prev };
}

export default useCarousel;
