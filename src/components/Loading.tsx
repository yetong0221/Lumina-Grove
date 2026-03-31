import { motion } from 'motion/react';

export function Loading() {
  const PINK_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%B2%89%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";
  
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-lumina-cream/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <motion.img
          src={PINK_LADY}
          alt="Loading Lady Xian"
          className="w-24 h-24 object-contain mb-4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          referrerPolicy="no-referrer"
        />
        <p className="text-lumina-green font-serif tracking-widest animate-pulse">正在为您加载好物...</p>
      </div>
    </div>
  );
}
