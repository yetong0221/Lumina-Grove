import { motion } from 'motion/react';
import { X, Award, ShieldCheck, Calendar, MapPin, User } from 'lucide-react';

interface AdoptionCertificateProps {
  onClose: () => void;
  planName: string;
  treeType: string;
  userName?: string;
}

export function AdoptionCertificate({ onClose, planName, treeType, userName = "尊敬的守护者" }: AdoptionCertificateProps) {
  const PINK_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%B2%89%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";
  const BROWN_LADY = "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%A3%95%E8%89%B2%E5%86%BC%E5%A4%AB%E4%BA%BA.png";
  
  const date = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-full max-w-2xl bg-[#FDFCF9] rounded-[40px] p-8 md:p-16 shadow-2xl overflow-hidden border-[12px] border-[#2D463E]/5"
      >
        {/* Background Watermark - Lady Xian Silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src={BROWN_LADY} alt="Watermark" className="w-[120%] h-auto object-contain rotate-12" referrerPolicy="no-referrer" />
        </div>

        {/* Border Decoration */}
        <div className="absolute inset-4 border border-[#2D463E]/10 rounded-[32px] pointer-events-none" />
        <div className="absolute inset-6 border-2 border-[#D4B595]/20 rounded-[28px] pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D463E] hover:bg-black/5 transition-colors border border-black/5 shadow-sm z-10"
        >
          <X size={20} />
        </button>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-[#2D463E] text-white p-4 rounded-2xl shadow-xl">
              <Award size={40} />
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-4xl md:text-5xl text-[#2D463E] mb-4 tracking-tight"
          >
            电子认养证书
          </motion.h2>
          <p className="text-[#D48C6A] uppercase tracking-[0.3em] text-xs font-bold mb-12">Electronic Adoption Certificate</p>

          <div className="space-y-8 text-left max-w-md mx-auto mb-16">
            <div className="flex items-start gap-6">
              <User size={20} className="text-[#2D463E]/40 mt-1" />
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest mb-1">认养者 / Adopter</p>
                <p className="text-xl font-serif text-[#2D463E]">{userName}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <ShieldCheck size={20} className="text-[#2D463E]/40 mt-1" />
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest mb-1">认养计划 / Plan</p>
                <p className="text-xl font-serif text-[#2D463E]">{planName} · {treeType}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Calendar size={20} className="text-[#2D463E]/40 mt-1" />
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest mb-1">生效日期 / Date</p>
                <p className="text-xl font-serif text-[#2D463E]">{date}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <MapPin size={20} className="text-[#2D463E]/40 mt-1" />
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest mb-1">认养地点 / Location</p>
                <p className="text-xl font-serif text-[#2D463E]">中国 · 广东 · 茂名</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-20 border-t border-black/5 pt-12">
            <div className="text-left">
              <p className="text-[10px] text-black/30 uppercase tracking-widest mb-2">官方认证 / Official Seal</p>
              <div className="font-serif text-lg text-[#2D463E]">光林 Lumina Market</div>
            </div>

            {/* Lady Xian Wax Seal */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="relative w-24 h-24 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#D48C6A] rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-[#D48C6A] rounded-full border-4 border-[#D48C6A]/30" />
              <img 
                src={PINK_LADY} 
                alt="Lady Xian Seal" 
                className="w-16 h-16 object-contain relative z-10 drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-white/40 rounded-full border-dashed animate-spin-slow" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
