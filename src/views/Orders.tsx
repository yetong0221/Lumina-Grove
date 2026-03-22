import { motion } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { ChevronLeft, Package, Clock, CreditCard } from 'lucide-react';

export function Orders({ onBack }: { onBack: () => void }) {
  const { orders } = useCart();

  return (
    <div className="pt-12 pb-20 px-6 max-w-2xl mx-auto min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-lumina-green hover:bg-black/5 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="font-serif text-4xl text-lumina-green">我的订单</h2>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 opacity-30">
          <Package size={64} strokeWidth={1} className="mb-4" />
          <p className="text-lg">暂无订单</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/20 font-bold mb-1">ORDER ID: {order.id}</p>
                </div>
                <span className="bg-emerald-50 text-emerald-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                  {order.status}
                </span>
              </div>

              <div className="space-y-6 mb-8">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-lumina-cream flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-lumina-green text-lg">{item.name}</h4>
                      <p className="text-xs text-black/30 mt-1">数量: {item.quantity}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="font-serif text-xl text-lumina-green">¥ {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                <div className="text-black/20 text-xs">
                  {order.date}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-black/40">实付</span>
                  <span className="font-serif text-3xl text-lumina-green">¥ {order.total.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
