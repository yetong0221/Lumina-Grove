import { User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface NavigationProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export function Navigation({ currentView, onChangeView }: NavigationProps) {
  const { totalItems } = useCart();

  const navLinks = [
    { id: 'home', label: '首页' },
    { id: 'grove', label: '光林市集' },
    { id: 'adopt', label: '认养' },
    { id: 'journey', label: '旅程' },
    { id: 'journal', label: '日记' },
    { id: 'trees', label: '我的果树' },
    { id: 'about', label: '关于' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lumina-cream/90 backdrop-blur-lg border-b border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer z-50"
          onClick={() => onChangeView('home')}
        >
          <h1 className="font-serif text-2xl tracking-tighter font-semibold text-lumina-green">
            Lumina Grove
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onChangeView(link.id)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                currentView === link.id 
                  ? 'text-lumina-terracotta font-medium' 
                  : 'text-lumina-green/70 hover:text-lumina-terracotta'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => onChangeView('my')}
            className={`transition-colors duration-300 ${currentView === 'my' ? 'text-lumina-terracotta' : 'text-lumina-green hover:text-lumina-terracotta'}`}
          >
            <User size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => onChangeView('cart')}
            className={`transition-colors duration-300 relative ${currentView === 'cart' ? 'text-lumina-terracotta' : 'text-lumina-green hover:text-lumina-terracotta'}`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-lumina-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
