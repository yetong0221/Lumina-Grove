import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { BottomNav } from '@/components/BottomNav';
import { Footer } from '@/components/Footer';
import { Home } from '@/views/Home';
import { Grove } from '@/views/Grove';
import { Adopt } from '@/views/Adopt';
import { Journey } from '@/views/Journey';
import { Journal } from '@/views/Journal';
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

export interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState('home');
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
      case 'adopt': return <Adopt />;
      case 'journey': return <Journey />;
      case 'journal': return <Journal />;
      case 'about': return <About />;
      case 'cart': return <Cart />;
      case 'orders': return <Orders onBack={() => setCurrentView('my')} />;
      case 'my': return <My onChangeView={setCurrentView} userEmail="yetong0221@gmail.com" />;
      case 'settings': return <Settings onBack={() => setCurrentView('my')} fontSize={globalFontSize} setFontSize={setGlobalFontSize} />;
      case 'address': return <AddressManagement onBack={() => setCurrentView('my')} onAdd={() => { setEditingAddress(null); setCurrentView('add-address'); }} onEdit={(addr) => { setEditingAddress(addr); setCurrentView('add-address'); }} addresses={addresses} setAddresses={setAddresses} />;
      case 'add-address': return <AddAddress onBack={() => setCurrentView('address')} addresses={addresses} setAddresses={setAddresses} editingAddress={editingAddress} />;
      case 'notifications':
        return (
          <div className="pt-48 px-6 text-center min-h-screen">
            <h2 className="text-3xl font-serif text-[#2D463E] mb-6">消息通知</h2>
            <div className="bg-white rounded-[32px] p-12 shadow-sm border border-black/5">
              <p className="text-black/40 text-lg">暂无新消息</p>
            </div>
            <button onClick={() => setCurrentView('my')} className="mt-12 text-[#2D463E] font-bold text-lg underline underline-offset-8">返回个人中心</button>
          </div>
        );
      case 'trees':
        return (
          <div className="pt-48 px-6 text-center min-h-screen">
            <h2 className="text-3xl font-serif text-[#2D463E] mb-6">我的果树</h2>
            <div className="bg-white rounded-[32px] p-12 shadow-sm border border-black/5">
              <p className="text-black/40 text-lg">您还没有认养果树</p>
            </div>
            <button onClick={() => setCurrentView('my')} className="mt-12 text-[#2D463E] font-bold text-lg underline underline-offset-8">返回个人中心</button>
          </div>
        );
      default: return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-lumina-cream text-lumina-charcoal font-sans selection:bg-lumina-terracotta selection:text-white">
        <Navigation currentView={currentView} onChangeView={setCurrentView} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        <Footer />
        <BottomNav currentView={currentView} onChangeView={setCurrentView} />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    </CartProvider>
  );
}
