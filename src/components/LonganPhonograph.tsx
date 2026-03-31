import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic, Play, Pause, Heart, Share2, Trophy, Music, Disc, Volume2, ArrowLeft, ArrowRight } from 'lucide-react';

interface Recording {
  id: string;
  name: string;
  dialect: string;
  likes: number;
  duration: string;
  timestamp: number;
  isUser?: boolean;
}

const MOCK_RECORDINGS: Recording[] = [
  { id: '1', name: '阿强', dialect: '高州话', likes: 1284, duration: '0:05', timestamp: Date.now() - 3600000 },
  { id: '2', name: '荔枝姐姐', dialect: '白话', likes: 956, duration: '0:04', timestamp: Date.now() - 7200000 },
  { id: '3', name: '茂名老友', dialect: '雷州话', likes: 842, duration: '0:06', timestamp: Date.now() - 10800000 },
  { id: '4', name: '山里人家', dialect: '客家话', likes: 654, duration: '0:05', timestamp: Date.now() - 14400000 },
  { id: '5', name: '果园小李', dialect: '茂名白话', likes: 432, duration: '0:04', timestamp: Date.now() - 18000000 },
];

interface LonganPhonographProps {
  onClose: () => void;
  onUnlock: () => void;
  onConfirmUnlock: () => void;
}

export function LonganPhonograph({ onClose, onUnlock, onConfirmUnlock }: LonganPhonographProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [userRecording, setUserRecording] = useState<Recording | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load recordings and sort by likes
    const saved = localStorage.getItem('longan_recordings');
    if (saved) {
      setRecordings(JSON.parse(saved).sort((a: Recording, b: Recording) => b.likes - a.likes));
    } else {
      setRecordings(MOCK_RECORDINGS.sort((a, b) => b.likes - a.likes));
    }
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);
    
    if (recordingTime < 2) {
      alert('录音时间太短，请再试一次');
      return;
    }

    const newRecording: Recording = {
      id: 'user_' + Date.now(),
      name: '我',
      dialect: '我的方言',
      likes: 0,
      duration: `0:0${recordingTime}`,
      timestamp: Date.now(),
      isUser: true
    };

    const updated = [newRecording, ...recordings].sort((a, b) => b.likes - a.likes);
    setRecordings(updated);
    setUserRecording(newRecording);
    localStorage.setItem('longan_recordings', JSON.stringify(updated));
    
    // Unlock qualification
    onUnlock();
    setShowSuccess(true);
  };

  const handleLike = (id: string) => {
    const updated = recordings.map(r => {
      if (r.id === id) return { ...r, likes: r.likes + 1 };
      return r;
    }).sort((a, b) => b.likes - a.likes);
    setRecordings(updated);
    localStorage.setItem('longan_recordings', JSON.stringify(updated));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-[#2D463E] rounded-[48px] overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-8 flex justify-between items-center bg-gradient-to-b from-black/20 to-transparent">
          <button onClick={onClose} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-serif text-lumina-gold">龙眼留声机</h2>
            <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Longan Phonograph</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-12 custom-scrollbar">
          {showSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-lumina-gold rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <Trophy size={48} className="text-[#2D463E]" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">恭喜解锁！</h3>
              <p className="text-white/60 mb-12 max-w-sm">
                您的乡音已录入留声机，并成功获得“石峡龙眼树”认养资格。
              </p>
              
              <button
                onClick={onConfirmUnlock}
                className="w-full py-5 bg-lumina-gold text-[#2D463E] rounded-2xl font-bold text-lg shadow-xl hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <ArrowRight size={24} />
                立即开启
              </button>
            </motion.div>
          ) : (
            <>
              {/* Phonograph Visual */}
          <div className="relative py-12 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: isRecording || isPlaying ? 360 : 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64 rounded-full bg-black border-[12px] border-[#3D2B1F] shadow-2xl flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="w-20 h-20 rounded-full bg-[#D4B595] flex items-center justify-center border-4 border-black/20">
                <Disc size={40} className="text-[#2D463E]" />
              </div>
              {/* Grooves */}
              <div className="absolute inset-4 rounded-full border border-white/5" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
            </motion.div>

            {/* Needle */}
            <motion.div 
              animate={{ rotate: isRecording || isPlaying ? 25 : 0 }}
              className="absolute top-12 right-1/4 w-32 h-4 bg-[#8B4513] origin-top-right rounded-full shadow-lg z-10"
              style={{ transform: 'rotate(0deg)' }}
            />

            <div className="mt-12 text-center">
              <p className="text-lumina-gold/80 text-sm mb-2">请用方言录制：</p>
              <h3 className="text-3xl font-serif text-white mb-6">“石峡龙眼，甜过初恋”</h3>
              
              <div className="flex flex-col items-center gap-6">
                <div className="text-4xl font-mono text-white/90 tabular-nums">
                  {formatTime(recordingTime)}
                </div>
                
                <button
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onTouchStart={startRecording}
                  onTouchEnd={stopRecording}
                  className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-2xl ${
                    isRecording 
                      ? 'bg-red-500 scale-110 animate-pulse' 
                      : 'bg-lumina-gold hover:scale-105 active:scale-95'
                  }`}
                >
                  <Mic size={40} className={isRecording ? 'text-white' : 'text-[#2D463E]'} />
                </button>
                <p className="text-white/40 text-xs">长按录音，松开结束</p>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-serif text-white flex items-center gap-2">
                <Trophy size={20} className="text-lumina-gold" />
                乡音榜单
              </h4>
              <span className="text-white/40 text-xs">高赞录音优先展示</span>
            </div>

            <div className="space-y-4">
              {recordings.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 rounded-3xl flex items-center justify-between border transition-colors ${
                    rec.isUser 
                      ? 'bg-lumina-gold/10 border-lumina-gold/30' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lumina-gold font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{rec.name}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-white/60">
                          {rec.dialect}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button 
                          onClick={() => setIsPlaying(isPlaying === rec.id ? null : rec.id)}
                          className="text-lumina-gold hover:text-white transition-colors"
                        >
                          {isPlaying === rec.id ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            animate={isPlaying === rec.id ? { x: ['-100%', '0%'] } : { x: '-100%' }}
                            transition={isPlaying === rec.id ? { duration: 5, repeat: Infinity } : {}}
                            className="h-full bg-lumina-gold"
                          />
                        </div>
                        <span className="text-[10px] text-white/40">{rec.duration}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleLike(rec.id)}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <Heart 
                      size={20} 
                      className={`transition-colors ${rec.likes > 1000 ? 'text-red-500 fill-red-500' : 'text-white/40 group-hover:text-red-400'}`} 
                    />
                    <span className="text-[10px] text-white/40">{rec.likes}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
          </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
