import { motion } from 'motion/react';
import { Compass, Store, Sparkles, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BottomNavProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export function BottomNav({ currentView, onChangeView }: BottomNavProps) {
  const { totalItems } = useCart();

  const tabs = [
    { id: 'home', label: '发现', icon: Compass },
    { id: 'grove', label: '集市', icon: Store },
    { id: 'journey', label: '文创', icon: Sparkles },
    { id: 'cart', label: '购物袋', icon: ShoppingBag, badge: true },
    { id: 'my', label: '我的', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-black/5 px-2 pb-safe z-50">
      <div className="flex items-center justify-around py-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChangeView(tab.id)}
            className={`flex flex-col items-center gap-1 relative transition-all duration-300 ${
              currentView === tab.id ? 'text-[#2D463E]' : 'text-black/20'
            }`}
          >
            <div className="relative">
              <tab.icon size={24} strokeWidth={currentView === tab.id ? 2.5 : 1.5} />
              {tab.badge && totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-lumina-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </div>
            <span className={`text-[10px] font-medium ${currentView === tab.id ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
            
            {currentView === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 w-1 h-1 bg-[#2D463E] rounded-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
