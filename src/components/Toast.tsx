import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-12 left-1/2 z-[200] bg-lumina-charcoal/90 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 min-w-[240px] border border-white/10"
        >
          <div className="bg-lumina-terracotta/20 p-2 rounded-lg">
            <ShoppingBag className="text-lumina-terracotta" size={20} />
          </div>
          <span className="font-medium tracking-wide">已添加到购物车</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
