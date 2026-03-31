import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Calendar, Trophy, Share2, RefreshCw, ArrowLeft, ArrowRight, BookOpen, UserPlus } from 'lucide-react';

interface Fortune {
  type: '上上签' | '大吉' | '中吉' | '小吉' | '中平';
  title: string;
  description: string;
  scenery: string;
  isUnlock?: boolean;
}

const FORTUNES: Fortune[] = [
  {
    type: '上上签',
    title: '黄皮成林',
    description: '鸡心黄皮，岁岁平安。此签预示您与土地的缘分已至，果园之门为您敞开。',
    scenery: '中国荔枝博览馆',
    isUnlock: true
  },
  {
    type: '大吉',
    title: '黄皮满枝',
    description: '金果压枝头，喜气盈门庭。茂名的阳光正温暖着每一颗果实。',
    scenery: '高州沙田果园',
  },
  {
    type: '中吉',
    title: '硕果累累',
    description: '辛勤耕耘，终有收获。果园里的每一分努力都在静静发芽。',
    scenery: '露天矿生态公园',
  },
  {
    type: '小吉',
    title: '清香满园',
    description: '微风拂过，黄皮清香。生活正如这果园，平淡中自有芬芳。',
    scenery: '茂名根子镇',
  },
  {
    type: '中平',
    title: '静待果熟',
    description: '时机未到，需耐心守候。好果子总是值得等待的。',
    scenery: '高州水库',
  }
];

interface LotteryGameProps {
  onClose: () => void;
  onUnlock: () => void;
  onConfirmUnlock: () => void;
  onChangeView: (view: string) => void;
}

export function LotteryGame({ onClose, onUnlock, onConfirmUnlock, onChangeView }: LotteryGameProps) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState<Fortune | null>(null);
  const [drawsLeft, setDrawsLeft] = useState(0);
  const [totalDraws, setTotalDraws] = useState(1);
  const [pityCount, setPityCount] = useState(0);
  const [hasReadJournal, setHasReadJournal] = useState(false);
  const [hasShared, setHasShared] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    
    const readStatus = localStorage.getItem(`read_explore_${today}`) === 'true';
    const shareStatus = localStorage.getItem(`shared_${today}`) === 'true';
    
    setHasReadJournal(readStatus);
    setHasShared(shareStatus);

    // Base draws is always 1 per day
    let total = 1;
    if (readStatus) total += 1;
    if (shareStatus) total += 1;
    setTotalDraws(total);

    // Subtract already used draws today
    const usedDrawsToday = parseInt(localStorage.getItem('used_draws_today') || '0');
    const lastDrawDate = localStorage.getItem('last_draw_date');
    
    if (lastDrawDate !== today) {
      // New day, reset used draws
      localStorage.setItem('used_draws_today', '0');
      setDrawsLeft(total);
    } else {
      setDrawsLeft(Math.max(0, total - usedDrawsToday));
    }

    const savedPity = localStorage.getItem('lottery_pity_count');
    if (savedPity) {
      setPityCount(parseInt(savedPity));
    }
  }, []);

  const handleDraw = () => {
    if (drawsLeft <= 0) return;
    
    setIsDrawing(true);
    
    // Simulate drawing animation
    setTimeout(() => {
      let drawnFortune: Fortune;
      const newPityCount = pityCount + 1;
      
      if (newPityCount >= 3) {
        // Guaranteed win on 3rd draw
        drawnFortune = FORTUNES[0];
        localStorage.setItem('lottery_pity_count', '0');
        setPityCount(0);
      } else {
        // Random draw (excluding the unlock one for now, or low chance)
        const randomIndex = Math.floor(Math.random() * (FORTUNES.length - 1)) + 1;
        drawnFortune = FORTUNES[randomIndex];
        
        // Small chance to win naturally
        if (Math.random() < 0.1) {
          drawnFortune = FORTUNES[0];
          localStorage.setItem('lottery_pity_count', '0');
          setPityCount(0);
        } else {
          localStorage.setItem('lottery_pity_count', newPityCount.toString());
          setPityCount(newPityCount);
        }
      }

      setResult(drawnFortune);
      setIsDrawing(false);
      
      const newUsedDraws = parseInt(localStorage.getItem('used_draws_today') || '0') + 1;
      localStorage.setItem('used_draws_today', newUsedDraws.toString());
      localStorage.setItem('last_draw_date', new Date().toDateString());
      setDrawsLeft(prev => prev - 1);

      if (drawnFortune.isUnlock) {
        onUnlock();
      }
    }, 2000);
  };

  const handleGoRead = () => {
    const today = new Date().toDateString();
    localStorage.setItem(`read_explore_${today}`, 'true');
    localStorage.setItem('resume_lottery', 'true');
    setHasReadJournal(true);
    setDrawsLeft(prev => prev + 1);
    onClose();
    onChangeView('explore');
  };

  const handleGoShare = () => {
    const today = new Date().toDateString();
    localStorage.setItem(`shared_${today}`, 'true');
    setHasShared(true);
    setDrawsLeft(prev => prev + 1);
    // In a real app, this would trigger a native share or social API
    alert('分享成功！获得额外抽签机会');
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-lumina-cream rounded-[40px] overflow-hidden shadow-2xl border border-white/20"
      >
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lumina-green hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 pt-20 text-center">
          {!result ? (
            <>
              <motion.div
                animate={isDrawing ? { 
                  rotate: [0, -5, 5, -5, 5, 0],
                  y: [0, -10, 0, -10, 0]
                } : {}}
                transition={{ duration: 0.5, repeat: isDrawing ? Infinity : 0 }}
                className="w-48 h-64 mx-auto mb-8 relative"
              >
                {/* Lottery Bucket Illustration */}
                <div className="absolute inset-0 bg-[#D48C6A] rounded-t-full rounded-b-2xl border-4 border-[#8B4513] shadow-inner flex flex-col items-center justify-center">
                  <div className="w-4 h-32 bg-[#FDFCF9] rounded-full absolute -top-12 rotate-12 shadow-sm" />
                  <div className="w-4 h-32 bg-[#FDFCF9] rounded-full absolute -top-12 -rotate-12 shadow-sm" />
                  <div className="w-4 h-32 bg-[#FDFCF9] rounded-full absolute -top-16 rotate-3 shadow-sm" />
                  <div className="mt-12 text-white font-serif text-2xl tracking-widest [writing-mode:vertical-rl]">
                    抽签桶
                  </div>
                </div>
              </motion.div>

              <h2 className="text-2xl font-serif text-lumina-green mb-4">鸡心黄皮认养资格抽签</h2>
              <div className="text-lumina-charcoal/60 text-sm mb-8 space-y-2 leading-relaxed">
                <p>抽中“上上签”即可解锁认养资格</p>
                <p>每天可免费抽签1次</p>
                <p className="text-xs opacity-80">三次抽签必中上上签</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={handleGoRead}
                  disabled={hasReadJournal}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    hasReadJournal ? 'bg-gray-100 text-gray-400' : 'bg-white text-lumina-green border border-lumina-green/10 shadow-sm hover:bg-lumina-green/5'
                  }`}
                >
                  <BookOpen size={14} />
                  {hasReadJournal ? '已阅读探索' : '去阅读探索 +1'}
                </button>
                <button
                  onClick={handleGoShare}
                  disabled={hasShared}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    hasShared ? 'bg-gray-100 text-gray-400' : 'bg-white text-lumina-green border border-lumina-green/10 shadow-sm hover:bg-lumina-green/5'
                  }`}
                >
                  <Share2 size={14} />
                  {hasShared ? '已分享好友' : '去分享好友 +1'}
                </button>
              </div>

              <button
                onClick={handleDraw}
                disabled={isDrawing || drawsLeft <= 0}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-[0.98] ${
                  drawsLeft > 0 
                    ? 'bg-[#2D463E] text-white hover:bg-[#243831]' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isDrawing ? '正在摇晃签筒...' : drawsLeft > 0 ? (drawsLeft < totalDraws ? `再抽一次 (余${drawsLeft}次)` : `开始抽签 (余${drawsLeft}次)`) : '次数已用完'}
              </button>
              
              {drawsLeft <= 0 && (
                <p className="mt-4 text-xs text-lumina-terracotta font-medium">明天再来试试手气吧！</p>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4"
            >
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-lumina-terracotta/20 relative overflow-hidden">
                {/* Fortune Stick UI */}
                <div className="absolute top-0 left-0 w-full h-2 bg-lumina-terracotta" />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-widest text-lumina-terracotta font-bold block mb-1">运程签</span>
                    <h3 className="text-3xl font-serif text-lumina-green">{result.type}</h3>
                  </div>
                  <div className="bg-lumina-cream px-3 py-1 rounded-full text-[10px] font-bold text-lumina-green/60 uppercase tracking-tighter">
                    {result.scenery}
                  </div>
                </div>

                <div className="text-center py-8 border-y border-black/5 mb-8">
                  <h4 className="text-2xl font-serif text-lumina-green mb-4">【 {result.title} 】</h4>
                  <p className="text-lumina-charcoal/70 leading-relaxed italic">
                    “{result.description}”
                  </p>
                </div>

                {result.isUnlock ? (
                  <div className="bg-emerald-50 rounded-2xl p-6 mb-8 border border-emerald-100">
                    <div className="flex items-center gap-3 text-emerald-700 font-bold mb-2">
                      <Trophy size={20} />
                      <span>恭喜解锁！</span>
                    </div>
                    <p className="text-xs text-emerald-600 leading-relaxed">
                      您已获得“鸡心黄皮树”认养资格，快去开启您的守护之旅吧！
                    </p>
                  </div>
                ) : (
                  <div className="bg-lumina-cream rounded-2xl p-6 mb-8 border border-black/5">
                    <p className="text-xs text-lumina-charcoal/50 leading-relaxed">
                      虽然这次没有解锁资格，但好运正在积攒中。坚持抽签，惊喜总会降临。
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (result.isUnlock) {
                        onConfirmUnlock();
                      } else {
                        setResult(null);
                      }
                    }}
                    className="flex-1 py-4 bg-lumina-cream text-lumina-green rounded-xl font-bold text-sm hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
                  >
                    {result.isUnlock ? <ArrowRight size={16} /> : <RefreshCw size={16} />}
                    {result.isUnlock ? '立即开启' : ((!result.isUnlock && drawsLeft > 0) ? '再抽一次' : '返回')}
                  </button>
                  <button
                    className="flex-1 py-4 bg-[#2D463E] text-white rounded-xl font-bold text-sm hover:bg-[#243831] transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 size={16} />
                    分享好运
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

