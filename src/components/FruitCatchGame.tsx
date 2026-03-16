import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, Timer, Star } from 'lucide-react';

interface FruitCatchGameProps {
  onClose: () => void;
  onFinish: (score: number) => void;
}

interface GameObject {
  id: number;
  x: number;
  y: number;
  type: 'fruit' | 'bomb';
  emoji: string;
  speed: number;
}

export const FruitCatchGame: React.FC<FruitCatchGameProps> = ({ onClose, onFinish }) => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [basketX, setBasketX] = useState(50); // percentage
  const basketXRef = useRef(50);
  const [objects, setObjects] = useState<GameObject[]>([]);
  const objectsRef = useRef<GameObject[]>([]);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const lastSpawnTime = useRef<number>(0);

  const FRUITS = ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒'];
  const BOMB = '💣';

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    scoreRef.current = 0;
    setTimeLeft(30);
    setObjects([]);
    objectsRef.current = [];
  };

  const spawnObject = (timestamp: number) => {
    if (timestamp - lastSpawnTime.current > 800) {
      const isBomb = Math.random() > 0.85;
      const newObj: GameObject = {
        id: Date.now() + Math.random(),
        x: Math.random() * 90 + 5,
        y: -10,
        type: isBomb ? 'bomb' : 'fruit',
        emoji: isBomb ? BOMB : FRUITS[Math.floor(Math.random() * FRUITS.length)],
        speed: Math.random() * 1.5 + 2,
      };
      objectsRef.current.push(newObj);
      setObjects([...objectsRef.current]);
      lastSpawnTime.current = timestamp;
    }
  };

  const updateGame = (timestamp: number) => {
    if (gameState !== 'playing') return;

    spawnObject(timestamp);

    // Update positions
    objectsRef.current = objectsRef.current
      .map(obj => ({ ...obj, y: obj.y + obj.speed }))
      .filter(obj => obj.y < 110);

    // Collision detection
    const caught: GameObject[] = [];
    objectsRef.current = objectsRef.current.filter(obj => {
      const isCaught = obj.y > 85 && obj.y < 95 && Math.abs(obj.x - basketXRef.current) < 10;
      if (isCaught) {
        caught.push(obj);
        return false;
      }
      return true;
    });

    if (caught.length > 0) {
      let scoreChange = 0;
      caught.forEach(obj => {
        if (obj.type === 'bomb') {
          scoreChange -= 50;
        } else {
          scoreChange += 5;
        }
      });
      scoreRef.current = Math.max(0, scoreRef.current + scoreChange);
      setScore(scoreRef.current);
    }

    setObjects([...objectsRef.current]);
    requestRef.current = requestAnimationFrame(updateGame);
  };

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(updateGame);
      const timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            setGameState('finished');
            clearInterval(timer);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        clearInterval(timer);
      };
    }
  }, [gameState]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (gameState !== 'playing' || !gameContainerRef.current) return;
    const rect = gameContainerRef.current.getBoundingClientRect();
    let clientX;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const x = ((clientX - rect.left) / rect.width) * 100;
    const newX = Math.max(5, Math.min(95, x));
    setBasketX(newX);
    basketXRef.current = newX;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-lg bg-gradient-to-b from-green-50 to-white rounded-[48px] overflow-hidden shadow-2xl border-8 border-white"
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-green-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="font-bold text-green-900">接果实大作战</h3>
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Score: {score}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl text-orange-600 font-bold">
              <Timer size={18} />
              <span>{timeLeft}s</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-red-50 text-red-400 rounded-xl transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Game Area */}
        <div 
          ref={gameContainerRef}
          className="relative h-[500px] bg-gradient-to-b from-blue-50/50 to-green-50/50 overflow-hidden touch-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {gameState === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/40 backdrop-blur-md z-20">
              <div className="w-24 h-24 bg-green-500 rounded-[32px] flex items-center justify-center text-white text-5xl mb-6 shadow-2xl animate-bounce">
                🧺
              </div>
              <h4 className="text-3xl font-bold text-green-950 mb-4">准备好了吗？</h4>
              <p className="text-green-800/60 mb-8 max-w-xs">
                左右移动篮子接住掉落的果实。
                <br />
                🍎 +5 积分 | 💣 -50 积分
              </p>
              <button 
                onClick={startGame}
                className="px-12 py-4 bg-green-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-green-200 hover:scale-105 active:scale-95 transition-all"
              >
                开始挑战
              </button>
            </div>
          )}

          {gameState === 'playing' && (
            <>
              {/* Objects */}
              {objects.map(obj => (
                <motion.div
                  key={obj.id}
                  className="absolute text-4xl pointer-events-none select-none"
                  style={{ left: `${obj.x}%`, top: `${obj.y}%`, transform: 'translateX(-50%)' }}
                >
                  {obj.emoji}
                </motion.div>
              ))}

              {/* Basket */}
              <motion.div 
                className="absolute bottom-10 w-24 h-16 flex flex-col items-center justify-center pointer-events-none"
                style={{ left: `${basketX}%`, transform: 'translateX(-50%)' }}
              >
                <div className="text-6xl drop-shadow-xl">🧺</div>
                <div className="w-16 h-2 bg-black/10 rounded-full mt-2 blur-sm" />
              </motion.div>
            </>
          )}

          {gameState === 'finished' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/80 backdrop-blur-md z-20">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-white text-6xl mb-6 shadow-2xl"
              >
                <Star size={64} fill="currentColor" />
              </motion.div>
              <h4 className="text-4xl font-bold text-orange-950 mb-2">挑战结束！</h4>
              <p className="text-orange-900/40 font-bold uppercase tracking-widest mb-8">最终得分</p>
              <div className="text-7xl font-black text-orange-600 mb-10 drop-shadow-lg">{score}</div>
              <div className="flex gap-4">
                <button 
                  onClick={startGame}
                  className="px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-bold hover:bg-orange-200 transition-all"
                >
                  再玩一次
                </button>
                <button 
                  onClick={() => onFinish(score)}
                  className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-xl shadow-green-100 hover:scale-105 transition-all"
                >
                  领取奖励
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions Footer */}
        <div className="p-4 bg-white/50 text-center text-[10px] font-bold text-green-900/40 uppercase tracking-[0.2em]">
          左右滑动或移动鼠标控制篮子
        </div>
      </motion.div>
    </div>
  );
};
