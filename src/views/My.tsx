import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, TreePine, MapPin, Settings, Share2, ChevronRight, Bell, X, MessageCircle, Instagram, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface MyProps {
  onChangeView: (view: string) => void;
  userEmail: string;
}

export function My({ onChangeView, userEmail }: MyProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const stats = [
    { label: '订单', value: '0' },
    { label: '收藏', value: '0' },
    { label: '积分', value: '850' },
  ];

  const menuSections = [
    [
      { id: 'orders', label: '我的订单', icon: ShoppingBag },
      { id: 'trees', label: '我的果树', icon: TreePine },
      { id: 'address', label: '地址管理', icon: MapPin },
    ],
    [
      { id: 'settings', label: '设置', icon: Settings },
      { id: 'share', label: '分享 App', icon: Share2, action: () => setIsShareOpen(true) },
    ]
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]/60 pb-32 w-full">
      {/* Dark Green Header */}
      <div className="bg-[#2D463E] pt-12 pb-12 px-8 rounded-b-[40px] text-white w-full">
        <div className="w-full">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-1">Elena Fisher</h2>
              <p className="text-white/60 text-sm tracking-wide">Pomona 金牌会员</p>
            </div>
            <button 
              onClick={() => onChangeView('notifications')}
              className="ml-auto w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Bell size={20} />
            </button>
          </div>

          <div className="flex justify-between px-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-serif mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="w-full px-6 -mt-6">
        <div className="space-y-6">
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="bg-white rounded-[32px] shadow-sm border border-black/5 overflow-hidden">
              {section.map((item, iIdx) => (
                <button
                  key={item.id}
                  onClick={() => item.action ? item.action() : onChangeView(item.id)}
                  className={`w-full flex items-center justify-between p-6 hover:bg-black/[0.01] transition-colors ${iIdx !== section.length - 1 ? 'border-b border-black/5' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#2D463E]">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-medium text-[#2D463E]">{item.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-black/10" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Share Sheet */}
      <AnimatePresence>
        {isShareOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[40px] z-[101] p-10"
            >
              <div className="w-full">
                <div className="text-center mb-10">
                  <h3 className="text-sm font-medium text-black/40 uppercase tracking-widest">分享至</h3>
                </div>
                
                <div className="grid grid-cols-4 gap-8 mb-12">
                  {[
                    { label: '微信好友', icon: MessageCircle, color: 'bg-[#07C160]' },
                    { label: '朋友圈', icon: ImageIcon, color: 'bg-[#333333]' },
                    { label: '生成海报', icon: ImageIcon, color: 'bg-[#E66244]' },
                    { label: '复制链接', icon: LinkIcon, color: 'bg-[#777777]' },
                  ].map((platform, idx) => (
                    <button key={idx} className="flex flex-col items-center gap-3 group">
                      <div className={`w-14 h-14 ${platform.color} rounded-full flex items-center justify-center text-white shadow-lg group-active:scale-95 transition-transform`}>
                        <platform.icon size={24} />
                      </div>
                      <span className="text-[10px] text-black/40 font-medium">{platform.label}</span>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setIsShareOpen(false)}
                  className="w-full py-5 bg-black/[0.03] rounded-2xl font-bold text-black/60 hover:bg-black/[0.06] transition-colors"
                >
                  取消
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
