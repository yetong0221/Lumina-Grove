import { motion } from 'motion/react';
import { Home, Store, Leaf, Compass, TreeDeciduous, Info, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BottomNavProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export function BottomNav({ currentView, onChangeView }: BottomNavProps) {
  const { totalItems } = useCart();

  const LADY_XIAN = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%86%BC%E5%A4%AB%E4%BA%BA.png";

  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'grove', label: '光林市集', icon: Store },
    { id: 'adopt', label: '认养', icon: Leaf },
    { id: 'explore', label: '探索', icon: Compass },
    { id: 'trees', label: '我的果树', icon: TreeDeciduous },
    { id: 'cart', label: '购物车', icon: ShoppingCart },
    { id: 'my', label: '我的', icon: User },
    { id: 'about', label: '关于', icon: Info },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-black/5 px-1 pb-safe z-50">
      <div className="flex items-center justify-between py-3 w-full px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChangeView(tab.id)}
            className={`flex flex-col items-center gap-1 relative transition-all duration-300 flex-1 ${
              currentView === tab.id ? 'text-[#2D463E]' : 'text-black/20'
            }`}
          >
            <div className="relative flex items-center justify-center h-6 w-6">
              {currentView === tab.id ? (
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={LADY_XIAN} 
                  alt={tab.label}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <tab.icon size={20} strokeWidth={1.5} />
              )}
              
              {tab.id === 'cart' && totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-lumina-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </div>
            <span className={`text-[9px] font-medium whitespace-nowrap ${currentView === tab.id ? 'opacity-100' : 'opacity-60'}`}>
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
