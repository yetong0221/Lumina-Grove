import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, Star, Sparkles } from 'lucide-react';

interface LuckySpinGameProps {
  onClose: () => void;
  onFinish: (reward: { type: 'points' | 'coupon' | 'decoration'; value: any; label: string }) => void;
}

const REWARDS = [
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 1
  { type: 'points' as const, value: 200, label: '200 积分', color: 'bg-orange-200' }, // 2
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 3
  { type: 'decoration' as const, value: '💎', label: '隐藏款装扮', color: 'bg-yellow-200' }, // 4
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 5
  { type: 'points' as const, value: 200, label: '200 积分', color: 'bg-orange-200' }, // 6
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 7
  { type: 'coupon' as const, value: 'c2', label: '10元优惠券', color: 'bg-orange-300' }, // 8
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 9
  { type: 'points' as const, value: 200, label: '200 积分', color: 'bg-orange-200' }, // 10
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 11
  { type: 'points' as const, value: 200, label: '200 积分', color: 'bg-orange-200' }, // 12
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 13
  { type: 'decoration' as const, value: '💎', label: '隐藏款装扮', color: 'bg-yellow-200' }, // 14
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 15
  { type: 'points' as const, value: 200, label: '200 积分', color: 'bg-orange-200' }, // 16
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 17
  { type: 'coupon' as const, value: 'c2', label: '10元优惠券', color: 'bg-orange-300' }, // 18
  { type: 'points' as const, value: 100, label: '100 积分', color: 'bg-orange-100' }, // 19
  { type: 'coupon' as const, value: 'sample', label: '荔枝试吃装', color: 'bg-yellow-400' }, // 20
];

export const LuckySpinGame: React.FC<LuckySpinGameProps> = ({ onClose, onFinish }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<typeof REWARDS[0] | null>(null);

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    
    const extraSpins = 5 + Math.floor(Math.random() * 5);
    const stopIndex = Math.floor(Math.random() * REWARDS.length);
    // Calculate final rotation to land on the center of the slice
    // The wheel rotates clockwise, so we subtract the slice angle
    const sliceAngle = 360 / REWARDS.length;
    const newRotation = rotation + (extraSpins * 360) + (stopIndex * sliceAngle);
    
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      // The pointer is at the top (0 degrees). 
      // When the wheel rotates by `rotation`, the slice at index `i` is at `i * sliceAngle + rotation`.
      // We want the slice at the top to be the result.
      // (i * sliceAngle + rotation) % 360 = 0
      // i * sliceAngle = -rotation % 360
      const actualRotation = newRotation % 360;
      const indexAtTop = (REWARDS.length - Math.round(actualRotation / sliceAngle)) % REWARDS.length;
      setResult(REWARDS[(indexAtTop + REWARDS.length) % REWARDS.length]);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md bg-white rounded-[48px] p-8 shadow-2xl border-8 border-orange-50"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-orange-50 text-orange-400 rounded-xl transition-colors z-10">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-orange-200">
            <Sparkles size={32} />
          </div>
          <h3 className="text-2xl font-bold text-orange-950">果园大转盘</h3>
          <p className="text-orange-900/40 text-sm font-bold uppercase tracking-widest mt-1">试试你的手气</p>
        </div>

        {/* Wheel Container */}
        <div className="relative aspect-square max-w-[300px] mx-auto mb-10">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
            <div className="w-8 h-10 bg-red-500 rounded-b-full shadow-lg flex items-center justify-center text-white">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          {/* The Wheel */}
          <motion.div 
            className="w-full h-full rounded-full border-8 border-orange-100 relative overflow-hidden shadow-2xl"
            animate={{ rotate: rotation }}
            transition={{ duration: 4, ease: [0.45, 0.05, 0.55, 0.95] }}
          >
            {REWARDS.map((reward, i) => (
              <div 
                key={i}
                className={`absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-end pr-2 ${reward.color} border-l border-white/20`}
                style={{ 
                  transform: `rotate(${i * (360 / REWARDS.length)}deg)`,
                  clipPath: `polygon(0 0, 100% 0, 100% ${100/REWARDS.length * 2}%, 0 0)` // Approximate wedge shape
                }}
              >
                <div 
                  className="text-[8px] font-black text-orange-900/60 whitespace-nowrap"
                  style={{ 
                    transform: `rotate(${90 + 360/REWARDS.length/2}deg) translate(-10px, 0)`,
                    transformOrigin: 'center'
                  }}
                >
                  {reward.label}
                </div>
              </div>
            ))}
            {/* Center Cap */}
            <div className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full shadow-inner border-4 border-orange-50 flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-orange-500 rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <p className="text-orange-900/40 font-bold uppercase tracking-widest text-xs mb-2">恭喜获得</p>
                <div className="text-4xl font-black text-orange-600 mb-6">{result.label}</div>
                <button 
                  onClick={() => onFinish(result)}
                  className="w-full py-4 bg-orange-600 text-white rounded-2xl font-bold shadow-xl shadow-orange-100 hover:scale-105 transition-all"
                >
                  领取奖励
                </button>
              </motion.div>
            ) : (
              <motion.div key="spin-btn">
                <button 
                  onClick={spin}
                  disabled={isSpinning}
                  className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all ${
                    isSpinning 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-100 hover:scale-105'
                  }`}
                >
                  {isSpinning ? '正在转动...' : '立即抽奖'}
                </button>
                <p className="mt-4 text-[10px] font-bold text-orange-900/30 uppercase tracking-widest">
                  每天一次免费机会
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
