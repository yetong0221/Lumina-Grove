import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { BottomNav } from '@/components/BottomNav';
import { Footer } from '@/components/Footer';
import { Home } from '@/views/Home';
import { Grove } from '@/views/Grove';
import { Adopt } from '@/views/Adopt';
import { Explore } from '@/views/Explore';
import { About } from '@/views/About';
import { Cart } from '@/views/Cart';
import { Orders } from '@/views/Orders';
import { My } from '@/views/My';
import { Settings } from '@/views/Settings';
import { AddressManagement } from '@/views/AddressManagement';
import { AddAddress } from '@/views/AddAddress';
import { AnimatePresence, motion } from 'motion/react';
import { CartProvider } from '@/context/CartContext';
import { Toast } from '@/components/Toast';
import { Loading } from '@/components/Loading';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

import { MyTree } from '@/views/MyTree';
import { CompanyAbout } from '@/views/CompanyAbout';

export interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [globalFontSize, setGlobalFontSize] = useState(16);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'Elena Fisher',
      phone: '13800138000',
      address: '上海市浦东新区陆家嘴环路 1000 号',
      isDefault: true
    }
  ]);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  // Global Scroll-to-Top Fix
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Simulate loading on view change
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [currentView]);

  // Global Font Size Fix
  useEffect(() => {
    document.documentElement.style.fontSize = `${globalFontSize}px`;
  }, [globalFontSize]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home onChangeView={setCurrentView} />;
      case 'grove': return <Grove onShowToast={showToast} />;
      case 'adopt': return <Adopt onChangeView={setCurrentView} />;
      case 'explore': return <Explore />;
      case 'about': return <About />;
      case 'company-about': return <CompanyAbout onBack={() => setCurrentView('home')} />;
      case 'cart': return <Cart />;
      case 'orders': return <Orders onBack={() => setCurrentView('my')} />;
      case 'my': return <My onChangeView={setCurrentView} userEmail="yetong0221@gmail.com" />;
      case 'settings': return <Settings onBack={() => setCurrentView('my')} fontSize={globalFontSize} setFontSize={setGlobalFontSize} />;
      case 'address': return <AddressManagement onBack={() => setCurrentView('my')} onAdd={() => { setEditingAddress(null); setCurrentView('add-address'); }} onEdit={(addr) => { setEditingAddress(addr); setCurrentView('add-address'); }} addresses={addresses} setAddresses={setAddresses} />;
      case 'add-address': return <AddAddress onBack={() => setCurrentView('address')} addresses={addresses} setAddresses={setAddresses} editingAddress={editingAddress} />;
      case 'notifications':
        return (
          <div className="pt-12 px-6 text-center min-h-screen">
            <h2 className="text-3xl font-serif text-[#2D463E] mb-6">消息通知</h2>
            <div className="bg-white rounded-[32px] p-12 shadow-sm border border-black/5">
              <p className="text-black/40 text-lg">暂无新消息</p>
            </div>
            <button onClick={() => setCurrentView('my')} className="mt-12 text-[#2D463E] font-bold text-lg underline underline-offset-8">返回个人中心</button>
          </div>
        );
      case 'trees':
        return <MyTree onChangeView={setCurrentView} />;
      default: return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-lumina-cream text-lumina-charcoal font-sans selection:bg-lumina-terracotta selection:text-white relative">
        
        {/* Exquisite Background Texture/Gradient */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          {/* Subtle paper-like texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          {/* Noise texture for more refinement */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
          
          {/* Decorative Organic Curves/Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <motion.path
              animate={{
                d: [
                  "M0,160 C320,300 420,0 720,160 C1020,320 1120,0 1440,160 L1440,800 L0,800 Z",
                  "M0,160 C320,100 420,250 720,160 C1020,70 1120,250 1440,160 L1440,800 L0,800 Z",
                  "M0,160 C320,300 420,0 720,160 C1020,320 1120,0 1440,160 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              fill="url(#grad1)"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D463E" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C18C5D" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <motion.path
              animate={{
                d: [
                  "M0,400 C480,300 960,500 1440,400 L1440,800 L0,800 Z",
                  "M0,400 C480,500 960,300 1440,400 L1440,800 L0,800 Z",
                  "M0,400 C480,300 960,500 1440,400 L1440,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              fill="#2D463E"
            />
          </svg>

          {/* Soft atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-lumina-gold/10 via-transparent to-lumina-terracotta/10" />
          <div className="absolute inset-0 bg-gradient-to-bl from-lumina-green/5 via-transparent to-transparent" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        <Footer onChangeView={setCurrentView} />
        <BottomNav currentView={currentView} onChangeView={setCurrentView} />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        <AnimatePresence>
          {isLoading && <Loading />}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}
