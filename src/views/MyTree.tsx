import React, { useState, useEffect, useMemo } from 'react';
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
  Bug,
  Trees,
  CloudRain,
  Users,
  Ticket,
  Medal,
  Share2,
  Heart,
  Plus,
  ArrowRight,
  Gift
} from 'lucide-react';

type Variety = 'lychee' | 'longan' | 'mango' | 'huangpi';
type GrowthStage = 'seedling' | 'growth' | 'fruiting' | 'harvest';

interface FruitConfig {
  color: string;
  ripeColor: string;
  shape: 'round' | 'cluster' | 'oval' | 'heart';
  texture?: boolean;
  split?: boolean;
}

const VARIETY_CONFIG: Record<Variety, { label: string; fruit: FruitConfig; decorations: string[] }> = {
  lychee: {
    label: '茂名荔枝',
    fruit: { color: '#81C784', ripeColor: '#E53935', shape: 'round', texture: true, split: true },
    decorations: ['🎗️', '🏮'] // 红丝带, 小灯笼
  },
  longan: {
    label: '石硖龙眼',
    fruit: { color: '#A5D6A7', ripeColor: '#A1887F', shape: 'cluster' },
    decorations: ['🏷️', '🎐'] // 祈福牌, 风铃
  },
  mango: {
    label: '金煌芒果',
    fruit: { color: '#C5E1A5', ripeColor: '#FDD835', shape: 'oval' },
    decorations: ['👒', '🧺'] // 草帽, 果篮
  },
  huangpi: {
    label: '鸡心黄皮',
    fruit: { color: '#DCE775', ripeColor: '#FBC02D', shape: 'heart' },
    decorations: ['🧧', '🧶'] // 香囊, 彩绳
  }
};

interface Coupon {
  id: string;
  title: string;
  desc: string;
  cost: number;
  type: 'discount' | 'cash' | 'sample' | 'tour';
}

const COUPONS: Coupon[] = [
  { id: 'c1', title: '5元满减券', desc: '全场满50可用', cost: 500, type: 'discount' },
  { id: 'c2', title: '10元无门槛', desc: '全场通用', cost: 1200, type: 'cash' },
  { id: 'c3', title: '荔枝试吃装', desc: '顺丰包邮', cost: 2000, type: 'sample' },
  { id: 'c4', title: '线下参观名额', desc: '茂名果园一日游', cost: 5000, type: 'tour' },
];

interface Achievement {
  id: string;
  title: string;
  icon: React.ReactNode;
  unlocked: boolean;
  reward: string;
}

// --- Sub-components for Animations ---

const WaterEffect = () => (
  <motion.div 
    className="absolute inset-0 pointer-events-none z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1.5 }}
  >
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-blue-400"
        initial={{ y: -40, x: 100 + (Math.random() * 120 - 60), opacity: 0 }}
        animate={{ y: 250, opacity: [0, 1, 0] }}
        transition={{ 
          duration: 1 + Math.random() * 0.5, 
          delay: Math.random() * 0.3,
          repeat: 1
        }}
      >
        <Droplets size={20 + Math.random() * 10} fill="currentColor" />
      </motion.div>
    ))}
  </motion.div>
);

const FertilizeEffect = () => (
  <motion.div 
    className="absolute inset-0 pointer-events-none z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 2 }}
  >
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_12px_#fbbf24]"
        initial={{ 
          x: 120 + (Math.random() * 200 - 100), 
          y: 80 + (Math.random() * 120 - 60),
          scale: 0 
        }}
        animate={{ 
          y: [null, 200 + Math.random() * 80],
          opacity: [0, 1, 0],
          scale: [0, 2, 0],
          rotate: 360
        }}
        transition={{ 
          duration: 2 + Math.random(), 
          delay: Math.random() * 0.8 
        }}
      />
    ))}
  </motion.div>
);

const PestEffect = () => (
  <motion.div 
    className="absolute inset-0 pointer-events-none z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 1.2 }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className="bg-white/30 backdrop-blur-md p-12 rounded-full border border-white/50"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: [0, 1.3, 1], rotate: 0 }}
      >
        <Sparkles className="text-yellow-100 w-32 h-32 drop-shadow-lg" />
      </motion.div>
    </div>
  </motion.div>
);

// --- The 3D Style Tree Illustration ---

const TreeIllustration = ({ 
  variety, 
  growth, 
  isShaking,
  equippedAccs
}: { 
  variety: Variety; 
  growth: number; 
  isShaking: boolean;
  equippedAccs: string[];
}) => {
  const stage: GrowthStage = useMemo(() => {
    if (growth < 30) return 'seedling';
    if (growth < 60) return 'growth';
    if (growth < 90) return 'fruiting';
    return 'harvest';
  }, [growth]);

  const config = VARIETY_CONFIG[variety].fruit;

  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      animate={isShaking ? { 
        rotate: [-1.5, 1.5, -1.5, 1.5, 0], 
        x: [-3, 3, -3, 3, 0],
        scale: [1, 1.02, 1]
      } : {}}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-visible">
        <defs>
          <radialGradient id="trunkGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="100%" stopColor="#4E342E" />
          </radialGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
        </defs>

        {/* Trunk - 3D Look */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <path
            d="M110,230 Q120,180 115,140 T125,70"
            fill="none"
            stroke="url(#trunkGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#softShadow)"
          />
          {/* Bark Details */}
          <path d="M115,210 Q118,180 116,150" fill="none" stroke="#3E2723" strokeWidth="1.5" opacity="0.4" />
          <path d="M123,130 Q125,100 124,80" fill="none" stroke="#3E2723" strokeWidth="1.5" opacity="0.4" />
          
          {/* Branches */}
          <path d="M118,130 Q150,110 170,120" fill="none" stroke="#5D4037" strokeWidth="7" strokeLinecap="round" />
          <path d="M116,150 Q80,130 60,140" fill="none" stroke="#5D4037" strokeWidth="7" strokeLinecap="round" />
          <path d="M122,90 Q160,70 180,80" fill="none" stroke="#5D4037" strokeWidth="6" strokeLinecap="round" />
        </motion.g>

        {/* Canopy Layers - 3D Illustration Style */}
        <AnimatePresence>
          {growth > 20 && (
            <motion.g 
              initial={{ opacity: 0, scale: 0.8, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              filter="url(#softShadow)"
            >
              {/* Layered Foliage for Depth */}
              <circle cx="120" cy="90" r="55" fill="#1B5E20" opacity="0.9" />
              <circle cx="85" cy="120" r="45" fill="#2E7D32" opacity="0.85" />
              <circle cx="155" cy="110" r="50" fill="#388E3C" opacity="0.8" />
              
              {/* Highlight Clusters */}
              <motion.g animate={{ y: [0, -3, 0], x: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <circle cx="110" cy="70" r="30" fill="url(#leafGrad)" opacity="0.6" />
                <circle cx="145" cy="85" r="25" fill="#81C784" opacity="0.5" />
                <circle cx="95" cy="100" r="20" fill="#AED581" opacity="0.4" />
              </motion.g>

              {/* Tender New Shoots */}
              <motion.path 
                d="M125,50 Q135,25 150,35" 
                fill="none" 
                stroke="#C5E1A5" 
                strokeWidth="4" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
              />
              <circle cx="150" cy="35" r="5" fill="#C5E1A5" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Fruits - Detailed per Variety */}
        <AnimatePresence>
          {(stage === 'fruiting' || stage === 'harvest') && (
            <motion.g initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              {[
                { x: 85, y: 100, r: 9 }, { x: 145, y: 90, r: 10 }, 
                { x: 115, y: 135, r: 8 }, { x: 170, y: 120, r: 9 },
                { x: 135, y: 60, r: 8 }, { x: 75, y: 145, r: 7 }
              ].map((f, i) => (
                <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 }}>
                  {config.shape === 'round' && (
                    <circle 
                      cx={f.x} cy={f.y} r={f.r} 
                      fill={stage === 'harvest' ? config.ripeColor : config.color} 
                      stroke={stage === 'harvest' ? '#B71C1C' : '#43A047'}
                      strokeWidth="0.8"
                      filter="url(#softShadow)"
                    />
                  )}
                  {config.shape === 'cluster' && (
                    <g transform={`translate(${f.x}, ${f.y})`} filter="url(#softShadow)">
                      <circle cx="-4" cy="-4" r={f.r/1.4} fill={stage === 'harvest' ? config.ripeColor : config.color} />
                      <circle cx="4" cy="-3" r={f.r/1.4} fill={stage === 'harvest' ? config.ripeColor : config.color} />
                      <circle cx="0" cy="4" r={f.r/1.4} fill={stage === 'harvest' ? config.ripeColor : config.color} />
                    </g>
                  )}
                  {config.shape === 'oval' && (
                    <ellipse 
                      cx={f.x} cy={f.y} rx={f.r * 1.3} ry={f.r * 0.9} 
                      fill={stage === 'harvest' ? config.ripeColor : config.color} 
                      transform={`rotate(35, ${f.x}, ${f.y})`}
                      filter="url(#softShadow)"
                    />
                  )}
                  {config.shape === 'heart' && (
                    <path 
                      d={`M${f.x},${f.y+f.r} Q${f.x-f.r},${f.y-f.r/2} ${f.x},${f.y-f.r} Q${f.x+f.r},${f.y-f.r/2} ${f.x},${f.y+f.r}`}
                      fill={stage === 'harvest' ? config.ripeColor : config.color} 
                      filter="url(#softShadow)"
                    />
                  )}
                  
                  {/* Variety Specific Details */}
                  {variety === 'lychee' && stage === 'harvest' && (
                    <circle cx={f.x} cy={f.y} r={f.r - 2.5} fill="none" stroke="white" strokeWidth="0.6" opacity="0.35" strokeDasharray="1.5 2.5" />
                  )}
                  {variety === 'lychee' && stage === 'harvest' && i % 3 === 0 && (
                    <path d={`M${f.x-3},${f.y} Q${f.x},${f.y-3} ${f.x+3},${f.y}`} fill="white" opacity="0.85" />
                  )}
                </motion.g>
              ))}
            </motion.g>
          )}
          {stage === 'growth' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <circle cx="105" cy="110" r="4" fill="#81C784" filter="url(#softShadow)" />
              <circle cx="140" cy="95" r="4" fill="#81C784" filter="url(#softShadow)" />
              <circle cx="165" cy="130" r="4" fill="#81C784" filter="url(#softShadow)" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Decorations - Variety Specific */}
        <motion.g>
          {equippedAccs.map((acc, i) => (
            <foreignObject 
              key={i}
              x={i % 2 === 0 ? 40 : 160} 
              y={80 + (i % 3) * 40} 
              width="50" 
              height="50"
              className="overflow-visible"
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                className="text-5xl drop-shadow-[0_4px_8_rgba(0,0,0,0.3)]"
              >
                {acc}
              </motion.div>
            </foreignObject>
          ))}
        </motion.g>
      </svg>
    </motion.div>
  );
};

// --- Main Page Component ---

export function MyTree() {
  const [activeTab, setActiveTab] = useState<'tasks' | 'shop' | 'coupons' | 'achievements' | 'social'>('tasks');
  const [variety, setVariety] = useState<Variety>('lychee');
  const [treeName, setTreeName] = useState('我的荔枝树');
  const [isEditingName, setIsEditingName] = useState(false);
  const [points, setPoints] = useState(500);
  const [waterLevel, setWaterLevel] = useState(60);
  const [growth, setGrowth] = useState(15);
  const [activeBg, setActiveBg] = useState('https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8C%82%E5%90%8D%E4%B9%A1%E6%9D%91%E7%94%B0%E5%9B%AD.png');
  const [equippedAccs, setEquippedAccs] = useState<string[]>([]);
  const [checkedIn, setCheckedIn] = useState(false);
  const [coPlantProgress, setCoPlantProgress] = useState(35);
  
  // Achievements State
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 'a1', title: '勤劳园丁', icon: <Droplets size={20} />, unlocked: true, reward: '积分 +100' },
    { id: 'a2', title: '初次挂果', icon: <Gift size={20} />, unlocked: false, reward: '稀有饰品' },
    { id: 'a3', title: '社交达人', icon: <Users size={20} />, unlocked: false, reward: '5元优惠券' },
  ]);

  // Animation states
  const [effect, setEffect] = useState<'water' | 'fertilize' | 'pest' | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const triggerEffect = (type: 'water' | 'fertilize' | 'pest') => {
    setEffect(type);
    setIsShaking(true);
    setTimeout(() => {
      setEffect(null);
      setIsShaking(false);
    }, 2000);
  };

  const handleWater = () => {
    if (points >= 10) {
      setPoints(prev => prev - 10);
      setWaterLevel(prev => Math.min(100, prev + 15));
      setGrowth(prev => Math.min(100, prev + 2));
      triggerEffect('water');
    }
  };

  const handleFertilize = () => {
    if (points >= 30) {
      setPoints(prev => prev - 30);
      setGrowth(prev => Math.min(100, prev + 8));
      triggerEffect('fertilize');
    }
  };

  const handlePestControl = () => {
    if (points >= 20) {
      setPoints(prev => prev - 20);
      setGrowth(prev => Math.min(100, prev + 5));
      triggerEffect('pest');
    }
  };

  const handleCheckIn = () => {
    if (!checkedIn) {
      setPoints(prev => prev + 50);
      setCheckedIn(true);
    }
  };

  const buyDecoration = (acc: string, cost: number) => {
    if (points >= cost && !equippedAccs.includes(acc)) {
      setPoints(prev => prev - cost);
      setEquippedAccs(prev => [...prev, acc]);
    }
  };

  const redeemCoupon = (coupon: Coupon) => {
    if (points >= coupon.cost) {
      setPoints(prev => prev - coupon.cost);
      // Logic to add to user's wallet
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] pt-20 pb-32 px-4 md:px-6 font-sans selection:bg-orange-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Bar - Profile & Points */}
        <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur-xl p-4 rounded-[32px] shadow-sm border border-orange-100/50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-0.5 shadow-lg shadow-orange-200">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Avatar" 
                className="w-full h-full rounded-[14px] bg-white"
              />
            </div>
            <div>
              <h3 className="font-bold text-orange-950 text-lg">果园园主</h3>
              <div className="flex items-center gap-1.5 text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-full text-xs">
                <Coins size={14} />
                <span>{points} 积分</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md ${
                checkedIn 
                ? 'bg-orange-50 text-orange-300 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95 shadow-orange-200'
              }`}
            >
              {checkedIn ? '已签到' : '每日签到 +50'}
            </button>
            <button className="p-2.5 bg-white text-orange-600 rounded-2xl border border-orange-100 hover:bg-orange-50 transition-colors shadow-sm">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Main Orchard View - 3D Style */}
        <div className="relative aspect-[3/4] md:aspect-video rounded-[56px] overflow-hidden shadow-2xl border-[16px] border-white mb-10 group bg-orange-50">
          {/* Background Layer */}
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeBg}
              src={activeBg} 
              alt="Background" 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent" />

          {/* Floating Variety Selector */}
          <div className="absolute top-8 right-8 z-20">
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-3xl border border-white/50 shadow-xl flex flex-col gap-2">
              {Object.entries(VARIETY_CONFIG).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setVariety(key as Variety)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    variety === key ? 'bg-green-500 text-white shadow-lg scale-110' : 'bg-white text-green-800 hover:bg-green-50'
                  }`}
                  title={val.label}
                >
                  <Trees size={24} />
                </button>
              ))}
            </div>
          </div>

          {/* Name Tag */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
            <motion.div 
              className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl border border-orange-100"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {isEditingName ? (
                <input 
                  autoFocus
                  value={treeName}
                  onChange={(e) => setTreeName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                  className="bg-transparent border-none outline-none text-orange-950 font-bold text-xl w-44 text-center"
                />
              ) : (
                <h2 className="font-bold text-2xl text-orange-950 tracking-tight">{treeName}</h2>
              )}
              <button onClick={() => setIsEditingName(true)} className="text-orange-400 hover:text-orange-600 transition-colors">
                <Edit3 size={20} />
              </button>
            </motion.div>
          </div>

          {/* Tree Illustration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
              <TreeIllustration 
                variety={variety} 
                growth={growth} 
                isShaking={isShaking} 
                equippedAccs={equippedAccs}
              />
              
              {/* Effects Overlay */}
              {effect === 'water' && <WaterEffect />}
              {effect === 'fertilize' && <FertilizeEffect />}
              {effect === 'pest' && <PestEffect />}
            </div>
          </div>

          {/* Growth HUD & Actions */}
          <div className="absolute bottom-12 left-10 right-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            {/* Status Bars */}
            <div className="space-y-6 w-full md:w-72 bg-white/30 backdrop-blur-xl p-7 rounded-[40px] border border-white/40 shadow-inner">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white mb-2.5 drop-shadow-md">
                  <div className="flex items-center gap-2">
                    <Droplets size={14} className="text-blue-200" />
                    <span>水分含量</span>
                  </div>
                  <span>{waterLevel}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${waterLevel}%` }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white mb-2.5 drop-shadow-md">
                  <div className="flex items-center gap-2">
                    <Sprout size={14} className="text-green-200" />
                    <span>生长进度</span>
                  </div>
                  <span>{growth}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${growth}%` }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5">
              {[
                { icon: Droplets, color: 'bg-blue-500', label: '浇水', cost: 10, action: handleWater },
                { icon: Sparkles, color: 'bg-orange-500', label: '施肥', cost: 30, action: handleFertilize },
                { icon: Bug, color: 'bg-green-600', label: '除虫', cost: 20, action: handlePestControl },
              ].map((btn, i) => (
                <button 
                  key={i}
                  onClick={btn.action}
                  className="group relative w-20 h-20 bg-white text-orange-950 rounded-[32px] flex flex-col items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white"
                >
                  <div className={`w-12 h-12 ${btn.color} text-white rounded-2xl flex items-center justify-center mb-1 shadow-lg`}>
                    <btn.icon size={28} />
                  </div>
                  <span className="text-[10px] font-bold text-orange-900/60">{btn.label}</span>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-950 text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                    -{btn.cost} 积分
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Co-plant Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0">
             <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-3xl shadow-xl border border-orange-100 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} 
                      className="w-8 h-8 rounded-full border-2 border-white bg-orange-50"
                      alt="Friend"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white">
                    <Plus size={14} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-orange-900/40 uppercase tracking-widest">合种进度</p>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${coPlantProgress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-green-600">{coPlantProgress}%</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="bg-white rounded-[48px] p-8 md:p-12 shadow-sm border border-orange-50 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-orange-50 pb-6">
            {[
              { id: 'tasks', label: '任务', icon: Trophy },
              { id: 'shop', label: '装扮', icon: Palette },
              { id: 'coupons', label: '优惠券', icon: Ticket },
              { id: 'achievements', label: '成就', icon: Medal },
              { id: 'social', label: '社交', icon: Users },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                  activeTab === tab.id 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105' 
                  : 'bg-orange-50 text-orange-900/60 hover:bg-orange-100'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'tasks' && (
                <motion.div 
                  key="tasks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-orange-950 mb-6">每日任务</h4>
                    {[
                      { name: '每日签到', reward: 50, done: checkedIn },
                      { name: '累计浇水3次', reward: 30, done: false },
                      { name: '帮好友除虫', reward: 20, done: false },
                      { name: '分享果园动态', reward: 40, done: false },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-orange-50/30 rounded-3xl border border-orange-100/30">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${task.done ? 'bg-green-100 text-green-600' : 'bg-white text-orange-400 shadow-sm'}`}>
                            {task.done ? <Check size={24} /> : <Plus size={24} />}
                          </div>
                          <div>
                            <p className={`font-bold ${task.done ? 'text-green-800 line-through opacity-50' : 'text-orange-950'}`}>{task.name}</p>
                            <p className="text-xs font-bold text-orange-400">奖励: {task.reward} 积分</p>
                          </div>
                        </div>
                        {!task.done && <button className="text-xs font-bold text-orange-600 bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all">去完成</button>}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40px] p-8 text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <h4 className="text-2xl font-bold mb-4 relative z-10">果园动态</h4>
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-3 text-white/90">
                        <CloudSun size={20} />
                        <span className="font-bold">今日天气：晴朗 28°C</span>
                      </div>
                      <p className="text-orange-50 text-sm leading-relaxed opacity-90">
                        茂名果园阳光充足，非常适合{VARIETY_CONFIG[variety].label}的糖分积累。记得及时补充水分，果实会更甜哦！
                      </p>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">最近访客</p>
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map(i => (
                            <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} className="w-8 h-8 rounded-full border-2 border-orange-500 bg-white" alt="Visitor" />
                          ))}
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">+5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'shop' && (
                <motion.div 
                  key="shop"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                  {VARIETY_CONFIG[variety].decorations.map((acc, i) => (
                    <div key={i} className="group flex flex-col items-center p-6 bg-orange-50/30 rounded-[32px] border border-orange-100/30 hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-5xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        {acc}
                      </div>
                      <p className="font-bold text-orange-950 mb-3">专属饰品 {i+1}</p>
                      <button 
                        onClick={() => buyDecoration(acc, 150)}
                        disabled={equippedAccs.includes(acc)}
                        className={`w-full py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                          equippedAccs.includes(acc) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-100'
                        }`}
                      >
                        {equippedAccs.includes(acc) ? <Check size={14} /> : <Coins size={14} />}
                        {equippedAccs.includes(acc) ? '已装备' : '150 积分'}
                      </button>
                    </div>
                  ))}
                  {/* Backgrounds */}
                  {[
                    { name: '茂名乡村', img: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8C%82%E5%90%8D%E4%B9%A1%E6%9D%91%E7%94%B0%E5%9B%AD.png' },
                    { name: '海边', img: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%B5%B7%E8%BE%B9.png' },
                  ].map((bg, i) => (
                    <div key={i} className="group flex flex-col items-center p-6 bg-orange-50/30 rounded-[32px] border border-orange-100/30 hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <img src={bg.img} className="w-full h-full object-cover" alt={bg.name} />
                      </div>
                      <p className="font-bold text-orange-950 mb-3">{bg.name}</p>
                      <button 
                        onClick={() => setActiveBg(bg.img)}
                        className={`w-full py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                          activeBg === bg.img 
                          ? 'bg-green-500 text-white' 
                          : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-100'
                        }`}
                      >
                        {activeBg === bg.img ? '使用中' : '更换背景'}
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'coupons' && (
                <motion.div 
                  key="coupons"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {COUPONS.map(coupon => (
                    <div key={coupon.id} className="relative flex bg-white rounded-[32px] overflow-hidden border border-orange-100 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-32 bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center text-white p-4">
                        <Ticket size={32} className="mb-2 opacity-80" />
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60">兑换需</p>
                        <p className="text-xl font-bold">{coupon.cost}</p>
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h5 className="text-lg font-bold text-orange-950">{coupon.title}</h5>
                          <p className="text-sm text-orange-900/60">{coupon.desc}</p>
                        </div>
                        <button 
                          onClick={() => redeemCoupon(coupon)}
                          disabled={points < coupon.cost}
                          className={`mt-4 w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                            points >= coupon.cost 
                            ? 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white' 
                            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          立即兑换
                        </button>
                      </div>
                      {/* Perforated Edge Effect */}
                      <div className="absolute left-32 top-0 bottom-0 w-4 flex flex-col justify-around py-2 -translate-x-1/2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-[#FFFBF5] rounded-full" />
                        ))}
                      </div>
                    </div>
                  ))}
                  {growth >= 90 && (
                    <div className="col-span-full mt-6 p-8 bg-green-50 rounded-[40px] border-2 border-dashed border-green-200 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm">
                          {variety === 'lychee' ? '🍒' : variety === 'mango' ? '🥭' : '🍊'}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-green-900">果实已成熟！</h4>
                          <p className="text-green-800/60 text-sm">您的{VARIETY_CONFIG[variety].label}已进入丰收期，可直接购买正宗茂名原产地鲜果。</p>
                        </div>
                      </div>
                      <button className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-100">
                        前往购买 <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'achievements' && (
                <motion.div 
                  key="achievements"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                >
                  {achievements.map(ach => (
                    <div key={ach.id} className="flex flex-col items-center text-center">
                      <div className={`w-24 h-24 rounded-[32px] flex items-center justify-center mb-4 transition-all ${
                        ach.unlocked 
                        ? 'bg-gradient-to-br from-yellow-300 to-orange-500 text-white shadow-xl shadow-orange-100 scale-105' 
                        : 'bg-orange-50 text-orange-200 grayscale'
                      }`}>
                        <div className="relative">
                          {ach.icon}
                          {!ach.unlocked && <div className="absolute inset-0 flex items-center justify-center"><Medal size={32} className="opacity-20" /></div>}
                        </div>
                      </div>
                      <p className={`font-bold text-sm mb-1 ${ach.unlocked ? 'text-orange-950' : 'text-orange-900/30'}`}>{ach.title}</p>
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{ach.reward}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'social' && (
                <motion.div 
                  key="social"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-bold text-orange-950">好友列表</h4>
                    <button className="flex items-center gap-2 text-sm font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-xl hover:bg-orange-100 transition-all">
                      <Plus size={16} /> 邀请好友
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: '林小茂', level: 12, tree: '荔枝树', needsHelp: true },
                      { name: '张大果', level: 8, tree: '芒果树', needsHelp: false },
                      { name: '王小农', level: 15, tree: '龙眼树', needsHelp: true },
                      { name: '李阿婆', level: 20, tree: '黄皮树', needsHelp: false },
                    ].map((friend, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-white rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} className="w-14 h-14 rounded-2xl bg-orange-50" alt={friend.name} />
                          <div>
                            <p className="font-bold text-orange-950">{friend.name}</p>
                            <p className="text-xs text-orange-900/60">Lv.{friend.level} · {friend.tree}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {friend.needsHelp && (
                            <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors" title="帮他浇水">
                              <Droplets size={20} />
                            </button>
                          )}
                          <button className="p-2.5 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors">
                            <ArrowRight size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-orange-900/30 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2026 Lumina Grove · 茂名特色果树云养平台</p>
          <p className="mt-2">助力乡村振兴 · 品味正宗岭南</p>
        </div>
      </div>
    </div>
  );
}
