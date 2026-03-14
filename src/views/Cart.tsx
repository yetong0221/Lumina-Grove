import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Order } from '@/types';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart, addOrder } = useCart();
  const [isPaying, setIsPaying] = useState(false);
  const [payStatus, setPayStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsPaying(true);
    setPayStatus('processing');

    // Simulate payment process
    setTimeout(() => {
      setPayStatus('success');
      
      // Create order
      const newOrder: Order = {
        id: Math.random().toString(36).substring(2, 10).toUpperCase(),
        items: [...cart],
        total: totalPrice,
        date: new Date().toLocaleString(),
        status: 'PAID'
      };
      
      addOrder(newOrder);
      
      setTimeout(() => {
        clearCart();
        setIsPaying(false);
        setPayStatus('idle');
      }, 2000);
    }, 3000);
  };

  if (cart.length === 0 && !isPaying) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-2xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-lumina-green/30" />
        </div>
        <h2 className="font-serif text-3xl text-lumina-green mb-2">购物袋</h2>
        <p className="text-lumina-green/50 mb-8">0 件商品</p>
        <div className="w-full h-px bg-black/5 mb-20" />
        <div className="flex flex-col items-center opacity-40">
           <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
           <p className="text-lg">您的购物袋是空的</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6 max-w-2xl mx-auto min-h-screen">
      <div className="mb-10">
        <h2 className="font-serif text-4xl text-lumina-green mb-2">购物袋</h2>
        <p className="text-lumina-green/60">{totalItems} 件商品</p>
      </div>

      <div className="space-y-4 mb-20">
        {cart.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-5 flex gap-5 relative shadow-sm border border-black/5"
          >
            <button 
              onClick={() => removeFromCart(item.id)}
              className="absolute top-5 right-5 text-black/10 hover:text-lumina-terracotta transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-lumina-cream flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col justify-between flex-grow py-1">
              <div>
                <h3 className="font-medium text-lumina-green text-lg leading-tight pr-8">{item.name}</h3>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-center bg-black/[0.03] rounded-full px-2 py-1">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1.5 text-black/40 hover:text-lumina-terracotta transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-lumina-green">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1.5 text-black/40 hover:text-lumina-terracotta transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="font-serif text-2xl text-lumina-terracotta">¥ {item.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-black/5 p-8 z-40">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-lumina-green">总计</span>
            <span className="font-serif text-3xl text-lumina-green">¥ {totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isPaying}
            className="w-full bg-[#2D463E] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-black/10 hover:bg-[#243831] transition-all active:scale-[0.98] disabled:opacity-50"
          >
            去结算
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {isPaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl"
            >
              {payStatus === 'processing' ? (
                <>
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 size={32} className="text-emerald-500 animate-spin" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">微信支付中</h3>
                  <p className="text-gray-500 text-sm">正在为您跳转支付环境，请稍候...</p>
                  
                  <div className="mt-8 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">支付成功</h3>
                  <p className="text-gray-500 text-sm">您的订单已完成支付</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
