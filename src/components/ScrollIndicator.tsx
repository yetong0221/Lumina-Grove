import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);
  const BROWN_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%A3%95%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-4">
      <div className="h-48 w-1 bg-black/5 rounded-full relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-lumina-terracotta origin-top"
          style={{ scaleY }}
        />
      </div>
      <motion.div
        style={{ 
          y: useSpring(scrollYProgress.get() * 192 - 96, { stiffness: 100, damping: 30 }) 
        }}
        className="w-10 h-10 -mt-48 pointer-events-none"
      >
        <img 
          src={BROWN_LADY} 
          alt="Scroll Indicator" 
          className="w-full h-full object-contain drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
