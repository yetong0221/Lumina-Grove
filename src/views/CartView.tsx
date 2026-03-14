import { motion } from 'motion/react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartView() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-lumina-cream pt-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-3xl text-lumina-green mb-2 w-full text-left absolute top-10 left-6">购物袋</h1>
        <p className="text-gray-400 mb-20 w-full text-left absolute top-20 left-6">0 件商品</p>
        
        <div className="flex flex-col items-center gap-4 opacity-30">
          <ShoppingBag size={80} strokeWidth={1} />
          <p className="text-lg">您的购物袋是空的</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lumina-cream pt-20 pb-32 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-3xl text-lumina-green mb-2">购物袋</h1>
        <p className="text-gray-400 mb-8">{cart.length} 件商品</p>

        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 flex gap-4 relative shadow-sm"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col justify-between flex-grow py-1">
                <div>
                  <h3 className="text-lumina-green font-medium">{item.name}</h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 gap-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-lumina-green transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-lumina-green transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <span className="text-lumina-terracotta font-serif font-bold">
                    ¥ {item.price}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Summary */}
        <div className="fixed bottom-[72px] left-0 right-0 bg-white border-t border-gray-100 p-6 z-40 md:hidden">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">总计</span>
              <span className="text-2xl font-serif font-bold text-lumina-green">
                ¥ {subtotal.toFixed(2)}
              </span>
            </div>
            
            <button className="w-full bg-lumina-green text-white py-4 rounded-xl font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98]">
              去结算
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
