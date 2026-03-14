import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';

export function Settings({ onBack, fontSize, setFontSize }: { onBack: () => void, fontSize: number, setFontSize: (size: number) => void }) {
  return (
    <div className="min-h-screen bg-[#FDFCF9] pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-[#2D463E] hover:bg-black/5 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-3xl font-serif text-[#2D463E]">设置</h2>
        </div>

        <div className="bg-white rounded-[32px] p-10 shadow-sm border border-black/5">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-medium text-[#2D463E]">字体大小</h3>
            <span className="text-lg font-bold text-[#2D463E]">{fontSize}px</span>
          </div>

          <div className="px-2 mb-12">
            <input 
              type="range" 
              min="12" 
              max="24" 
              step="1"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full h-1.5 bg-black/5 rounded-full appearance-none cursor-pointer accent-[#2D463E]"
            />
            <div className="flex justify-between mt-6 text-[10px] uppercase tracking-widest text-black/30 font-bold">
              <span>小 (12PX)</span>
              <span>大 (24PX)</span>
            </div>
          </div>

          <div className="bg-[#FDFCF9] rounded-2xl p-8 border border-black/5">
            <p 
              className="text-black/60 leading-relaxed transition-all duration-300"
              style={{ fontSize: `${fontSize}px` }}
            >
              预览文本：Pomona 高端水果买手店，为您挑选全球各地的时令鲜果。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
