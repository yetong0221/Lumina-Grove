import { motion } from 'motion/react';

interface EmptyStateProps {
  message?: string;
  type?: 'pink' | 'brown';
}

export function EmptyState({ message = "好物正在赶来的路上...", type = 'pink' }: EmptyStateProps) {
  const PINK_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%B2%89%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";
  const BROWN_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%A3%95%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";
  
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <img
          src={type === 'pink' ? PINK_LADY : BROWN_LADY}
          alt="Empty Lady Xian"
          className="w-40 h-40 object-contain opacity-40 grayscale-[0.5] mb-8"
          referrerPolicy="no-referrer"
        />
        <motion.div
          className="absolute -top-4 -right-4 bg-lumina-terracotta text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Lumina
        </motion.div>
      </motion.div>
      <h3 className="font-serif text-2xl text-lumina-green mb-4">{message}</h3>
      <p className="text-lumina-green/40 max-w-xs mx-auto text-sm leading-relaxed">
        别担心，大地的馈赠需要一点时间，请耐心等待。
      </p>
    </div>
  );
}
