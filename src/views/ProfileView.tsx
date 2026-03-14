import { motion } from 'motion/react';
import { ChevronRight, ClipboardList, TreeDeciduous, MapPin, Settings, Share2 } from 'lucide-react';

export function ProfileView() {
  const stats = [
    { label: '订单', value: '0', icon: <ClipboardList size={20} /> },
    { label: '收藏', value: '0', icon: <TreeDeciduous size={20} /> },
    { label: '积分', value: '850', icon: null },
  ];

  const menuItems = [
    { label: '我的订单', icon: <ClipboardList size={22} className="text-lumina-green" /> },
    { label: '我的果树', icon: <TreeDeciduous size={22} className="text-lumina-green" /> },
    { label: '地址管理', icon: <MapPin size={22} className="text-lumina-green" /> },
  ];

  const secondaryMenu = [
    { label: '设置', icon: <Settings size={22} className="text-lumina-green" /> },
    { label: '分享 App', icon: <Share2 size={22} className="text-lumina-green" /> },
  ];

  return (
    <div className="min-h-screen bg-lumina-cream pb-32">
      {/* Header Profile Section */}
      <div className="bg-lumina-green text-white pt-20 pb-12 px-8 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 flex items-center gap-6 mb-12">
          <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold">Elena Fisher</h2>
            <p className="text-white/60 text-sm">Pomona 金牌会员</p>
          </div>
        </div>

        <div className="relative z-10 flex justify-between px-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-serif font-bold">{stat.value}</span>
              <span className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 -mt-6 relative z-20 space-y-6">
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-50">
          {menuItems.map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                i !== menuItems.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-lumina-charcoal font-medium">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-50">
          {secondaryMenu.map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                i !== secondaryMenu.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-lumina-charcoal font-medium">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
