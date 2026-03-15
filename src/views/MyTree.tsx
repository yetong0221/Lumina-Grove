import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Palette, 
  Sparkles, 
  CalendarCheck, 
  Trophy, 
  Edit3, 
  ChevronRight,
  CloudSun,
  Wind,
  Coins,
  Check,
  X,
  Sprout,
  Leaf,
  Apple
} from 'lucide-react';

// Hand-drawn Tree Component
const HandDrawnTree = ({ growth }: { growth: number }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        {/* Trunk - Always visible */}
        <motion.path
          d="M90,180 Q100,140 95,100 T105,40 M105,40 Q115,60 125,70 M105,60 Q90,75 80,80 M100,100 Q115,110 130,115"
          fill="none"
          stroke="#5D4037"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Stage 1: Sprouting (25%+) */}
        {growth > 25 && (
          <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
            <circle cx="105" cy="35" r="8" fill="#81C784" />
            <circle cx="125" cy="65" r="6" fill="#81C784" />
            <circle cx="80" cy="75" r="6" fill="#81C784" />
          </motion.g>
        )}

        {/* Stage 2: Leafy (50%+) */}
        {growth > 50 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <path d="M70,60 Q100,10 130,60 T100,110 T70,60" fill="#4CAF50" opacity="0.6" />
            <path d="M85,80 Q110,40 135,80 T110,120 T85,80" fill="#2E7D32" opacity="0.4" />
          </motion.g>
        )}

        {/* Stage 3: Full Canopy (75%+) */}
        {growth > 75 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <circle cx="100" cy="60" r="45" fill="#1B5E20" opacity="0.3" />
            <circle cx="80" cy="80" r="35" fill="#1B5E20" opacity="0.2" />
            <circle cx="120" cy="80" r="35" fill="#1B5E20" opacity="0.2" />
          </motion.g>
        )}

        {/* Stage 4: Fruiting (90%+) */}
        {growth >= 90 && (
          <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <circle cx="85" cy="65" r="5" fill="#E53935" />
            <circle cx="115" cy="55" r="5" fill="#E53935" />
            <circle cx="100" cy="90" r="5" fill="#E53935" />
            <circle cx="130" cy="85" r="5" fill="#E53935" />
            <circle cx="70" cy="95" r="5" fill="#E53935" />
          </motion.g>
        )}
      </svg>
    </div>
  );
};

interface Decoration {
  id: string;
  name: string;
  type: 'accessory' | 'background';
  cost: number;
  image: string;
}

const DECORATIONS: Decoration[] = [
  { id: 'bg1', name: '晨曦果园', type: 'background', cost: 100, image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=800&auto=format&fit=crop' },
  { id: 'bg2', name: '星空之夜', type: 'background', cost: 200, image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop' },
  { id: 'acc1', name: '红灯笼', type: 'accessory', cost: 50, image: '🏮' },
  { id: 'acc2', name: '祈福牌', type: 'accessory', cost: 80, image: '🏷️' },
  { id: 'acc3', name: '小风铃', type: 'accessory', cost: 120, image: '🎐' },
];

export function MyTree() {
  const [treeName, setTreeName] = useState('我的荔枝树');
  const [isEditingName, setIsEditingName] = useState(false);
  const [points, setPoints] = useState(150);
  const [waterLevel, setWaterLevel] = useState(60);
  const [growth, setGrowth] = useState(10); // Start bare
  const [activeBg, setActiveBg] = useState(DECORATIONS[0].image);
  const [equippedAccs, setEquippedAccs] = useState<string[]>([]);
  const [showShop, setShowShop] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleWater = () => {
    if (points >= 10) {
      setPoints(prev => prev - 10);
      setWaterLevel(prev => Math.min(100, prev + 15));
      setGrowth(prev => Math.min(100, prev + 2));
    }
  };

  const handleFertilize = () => {
    if (points >= 30) {
      setPoints(prev => prev - 30);
      setGrowth(prev => Math.min(100, prev + 8));
    }
  };

  const handleCheckIn = () => {
    if (!checkedIn) {
      setPoints(prev => prev + 20);
      setCheckedIn(true);
    }
  };

  const buyItem = (item: Decoration) => {
    if (points >= item.cost) {
      setPoints(prev => prev - item.cost);
      if (item.type === 'background') {
        setActiveBg(item.image);
      } else {
        if (!equippedAccs.includes(item.image)) {
          setEquippedAccs(prev => [...prev, item.image]);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-lumina-cream pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Stats */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8 bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-lumina-stone/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-lumina-gold/20 rounded-2xl flex items-center justify-center text-lumina-terracotta">
              <Coins size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-lumina-charcoal/40">我的积分</p>
              <p className="text-xl font-serif text-lumina-green">{points}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                checkedIn 
                ? 'bg-lumina-stone text-lumina-charcoal/40 cursor-not-allowed' 
                : 'bg-lumina-terracotta text-white hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              <CalendarCheck size={16} />
              {checkedIn ? '今日已打卡' : '每日打卡 +20'}
            </button>
          </div>
        </div>

        {/* Main Tree View */}
        <div className="relative aspect-[4/5] md:aspect-video rounded-[40px] overflow-hidden shadow-2xl border-4 border-white mb-8 group">
          {/* Background */}
          <img 
            src={activeBg} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Tree Name Overlay */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-lumina-stone/20">
            {isEditingName ? (
              <input 
                autoFocus
                value={treeName}
                onChange={(e) => setTreeName(e.target.value)}
                onBlur={() => setIsEditingName(false)}
                onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                className="bg-transparent border-none outline-none text-lumina-green font-serif text-lg w-32 text-center"
              />
            ) : (
              <h2 className="font-serif text-xl text-lumina-green">{treeName}</h2>
            )}
            <button onClick={() => setIsEditingName(true)} className="text-lumina-terracotta hover:scale-110 transition-transform">
              <Edit3 size={16} />
            </button>
          </div>

          {/* Tree Illustration - Hand Drawn SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.01, 1],
                rotate: [-0.5, 0.5, -0.5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <HandDrawnTree growth={growth} />
              
              {/* Equipped Accessories */}
              <div className="absolute inset-0">
                {equippedAccs.map((acc, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute text-4xl"
                    style={{ 
                      top: `${30 + i * 20}%`, 
                      left: i % 2 === 0 ? '15%' : '75%',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                    }}
                  >
                    {acc}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Growth HUD */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="space-y-4 w-48">
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white mb-1">
                  <span>水分</span>
                  <span>{waterLevel}%</span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${waterLevel}%` }}
                    className="h-full bg-blue-400"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white mb-1">
                  <span>生长进度</span>
                  <span>{growth}%</span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${growth}%` }}
                    className="h-full bg-lumina-gold"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleWater}
                className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                title="浇水 -10 积分"
              >
                <Droplets size={24} />
              </button>
              <button 
                onClick={handleFertilize}
                className="w-14 h-14 bg-amber-700 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                title="施肥 -30 积分"
              >
                <Sparkles size={24} />
              </button>
              <button 
                onClick={() => setShowShop(true)}
                className="w-14 h-14 bg-lumina-terracotta text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                title="装扮"
              >
                <Palette size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-lumina-stone/20">
            <h3 className="font-serif text-2xl text-lumina-green mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-lumina-gold" />
              每日任务
            </h3>
            <div className="space-y-4">
              {[
                { name: '每日浇水一次', reward: 5, done: waterLevel > 60 },
                { name: '查看果园日记', reward: 10, done: false },
                { name: '分享我的果树', reward: 15, done: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-lumina-cream/30 rounded-2xl border border-lumina-stone/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-lumina-green border-lumina-green text-white' : 'border-lumina-stone'}`}>
                      {task.done && <Check size={12} />}
                    </div>
                    <span className={`text-sm ${task.done ? 'text-lumina-charcoal/40 line-through' : 'text-lumina-charcoal'}`}>{task.name}</span>
                  </div>
                  <span className="text-xs font-bold text-lumina-terracotta">+{task.reward}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-lumina-green rounded-3xl p-8 shadow-sm text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="font-serif text-2xl mb-4 relative z-10">果园动态</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <CloudSun size={18} />
                <span>今日天气：晴朗 26°C</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <Wind size={18} />
                <span>风力：微风 2级</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mt-4">
                您的果树目前状态良好，充足的阳光正在加速养分的积累。记得保持水分充足哦！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Modal */}
      <AnimatePresence>
        {showShop && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowShop(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="relative w-full max-w-2xl bg-white rounded-t-[40px] md:rounded-[40px] p-8 md:p-10 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif text-lumina-green">果树装扮中心</h2>
                <button onClick={() => setShowShop(false)} className="p-2 hover:bg-lumina-cream rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pb-8">
                {DECORATIONS.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 bg-lumina-cream/30 rounded-3xl border border-lumina-stone/10 flex flex-col items-center text-center group"
                  >
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-white flex items-center justify-center text-4xl shadow-sm group-hover:scale-105 transition-transform">
                      {item.type === 'background' ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        item.image
                      )}
                    </div>
                    <p className="text-sm font-medium text-lumina-green mb-1">{item.name}</p>
                    <button 
                      onClick={() => buyItem(item)}
                      disabled={points < item.cost}
                      className={`mt-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                        points >= item.cost 
                        ? 'bg-lumina-terracotta text-white hover:bg-lumina-green' 
                        : 'bg-lumina-stone text-lumina-charcoal/40 cursor-not-allowed'
                      }`}
                    >
                      <Coins size={12} />
                      {item.cost}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
