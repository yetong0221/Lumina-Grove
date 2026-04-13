import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function RepurchaseInfographic() {
  const [repurchaseRatio, setRepurchaseRatio] = useState(50);
  
  const totalYield = 30;
  const repurchasedAmount = Math.round((totalYield * repurchaseRatio) / 100);
  const keptAmount = totalYield - repurchasedAmount;
  const extraProfit = repurchasedAmount * 4; // 15kg -> 60 yuan
  const totalValue = 300 + extraProfit;

  return (
    <section className="py-8 md:py-32 px-4 md:px-6 bg-lumina-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-xl md:text-5xl text-lumina-green mb-1 md:mb-4"
          >
            回购你的丰收 · 灵活变现三重礼
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lumina-gold text-[10px] md:text-sm tracking-[0.2em] uppercase"
          >
            已认养用户专属 · 随时调整比例
          </motion.p>
        </div>

        {/* Main Interactive Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl md:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-4 md:p-12 lg:p-16 border border-lumina-stone/30 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-lumina-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Slider Area */}
          <div className="mb-6 md:mb-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-3 md:mb-8 gap-1 md:gap-4">
              <div>
                <h3 className="text-base md:text-2xl font-serif text-lumina-green mb-0.5 md:mb-2">回购比例（拖动调整）</h3>
              </div>
              <div className="text-2xl md:text-5xl font-serif text-lumina-terracotta tracking-tighter">
                {repurchaseRatio}<span className="text-lg md:text-3xl text-lumina-terracotta/70">%</span>
              </div>
            </div>
            
            <div className="relative py-2 md:py-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="10"
                value={repurchaseRatio}
                onChange={(e) => setRepurchaseRatio(Number(e.target.value))}
                className="w-full h-1.5 md:h-2 bg-lumina-stone/50 rounded-lg appearance-none cursor-pointer relative z-20 focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 md:[&::-webkit-slider-thumb]:w-6 md:[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-lumina-terracotta [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                style={{
                  background: `linear-gradient(to right, #C86B5E ${repurchaseRatio}%, #E4E3E0 ${repurchaseRatio}%)`
                }}
              />
            </div>
            
            {/* 3-part progress bar breakdown */}
            <div className="mt-8 md:mt-12 grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
              {/* Keep */}
              <div className="p-2 md:p-6 bg-orange-50/50 rounded-lg md:rounded-2xl border border-orange-100/50 transition-all hover:shadow-md hover:bg-white">
                <div className="flex items-center gap-1 md:gap-2 text-orange-600/80 text-[8px] md:text-xs font-medium uppercase tracking-widest mb-2 md:mb-4">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400" />
                  1. 保留水果
                </div>
                <div className="text-[10px] md:text-xl font-serif text-lumina-charcoal mb-1 md:mb-2 leading-tight">自留新鲜果篮 + 直邮礼盒</div>
                <div className="text-[8px] md:text-sm text-lumina-charcoal/60 font-light">示例：保留一半</div>
              </div>
              {/* Cash */}
              <div className="p-2 md:p-6 bg-emerald-50/50 rounded-lg md:rounded-2xl border border-emerald-100/50 transition-all hover:shadow-md hover:bg-white">
                <div className="flex items-center gap-1 md:gap-2 text-emerald-600/80 text-[8px] md:text-xs font-medium uppercase tracking-widest mb-2 md:mb-4">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400" />
                  2. 现金到账
                </div>
                <div className="text-[10px] md:text-xl font-serif text-lumina-charcoal mb-1 md:mb-2 leading-tight">约12元/斤 即时转账</div>
                <div className="text-[8px] md:text-sm text-lumina-charcoal/60 font-light">比批发更高</div>
              </div>
              {/* Bonus */}
              <div className="p-2 md:p-6 bg-purple-50/50 rounded-lg md:rounded-2xl border border-purple-100/50 transition-all hover:shadow-md hover:bg-white">
                <div className="flex items-center gap-1 md:gap-2 text-purple-600/80 text-[8px] md:text-xs font-medium uppercase tracking-widest mb-2 md:mb-4">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400" />
                  3. 额外惊喜
                </div>
                <div className="text-[10px] md:text-lg font-serif text-lumina-charcoal mb-1 md:mb-2 leading-tight">积分兑换IP礼盒<br/>周边7折</div>
                <div className="text-[8px] md:text-sm text-lumina-charcoal/60 font-light">额外礼遇</div>
              </div>
            </div>
          </div>

          {/* Comparison Area */}
          <div className="bg-lumina-cream/50 rounded-lg md:rounded-2xl p-3 md:p-10 border border-lumina-stone/30 mb-6 md:mb-12 relative z-10">
            <h4 className="text-center text-[8px] md:text-xs tracking-[0.2em] uppercase text-lumina-charcoal/50 mb-4 md:mb-10 font-medium">
              收益参考（以中级用户回购{repurchasedAmount}斤为例）
            </h4>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-16">
              {/* Before */}
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="text-[10px] md:text-sm text-lumina-charcoal/50 mb-1 md:mb-4 font-light">回购前</div>
                <div className="w-full h-8 md:h-16 bg-white border border-lumina-stone/40 rounded-md md:rounded-xl flex items-center justify-center mb-1 md:mb-4 shadow-sm">
                  <span className="text-[10px] md:text-base font-medium text-lumina-charcoal/70 tracking-wide">一篮完整水果</span>
                </div>
                <div className="text-[8px] md:text-xs text-lumina-charcoal/40 bg-white/50 px-1.5 md:px-3 py-0.5 md:py-1 rounded-full">价值参考</div>
              </div>
              
              <div className="text-lumina-stone/60 hidden md:block">
                <ArrowRight size={24} strokeWidth={1.5} />
              </div>
              
              {/* After */}
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="text-[10px] md:text-sm text-lumina-terracotta font-medium mb-1 md:mb-4">回购后</div>
                <div className="w-full h-8 md:h-16 flex rounded-md md:rounded-xl overflow-hidden mb-1 md:mb-4 shadow-sm border border-lumina-stone/20">
                  <div 
                    className="bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center transition-all duration-500 ease-out"
                    style={{ width: `${100 - repurchaseRatio}%` }}
                  >
                    {keptAmount > 0 && <span className="text-[8px] md:text-xs font-medium text-orange-900 truncate px-1 md:px-2">{keptAmount}斤果</span>}
                  </div>
                  <div 
                    className="bg-gradient-to-r from-emerald-300 to-emerald-400 flex items-center justify-center transition-all duration-500 ease-out border-l border-white/20"
                    style={{ width: `${repurchaseRatio * 0.6}%` }}
                  >
                    {repurchasedAmount > 0 && <span className="text-[8px] md:text-xs font-medium text-emerald-900 truncate px-1 md:px-2">现金</span>}
                  </div>
                  <div 
                    className="bg-gradient-to-r from-purple-300 to-purple-400 flex items-center justify-center transition-all duration-500 ease-out border-l border-white/20"
                    style={{ width: `${repurchaseRatio * 0.4}%` }}
                  >
                    {repurchasedAmount > 0 && <span className="text-[8px] md:text-xs font-medium text-purple-900 truncate px-1 md:px-2">权益</span>}
                  </div>
                </div>
                <div className="text-[10px] md:text-sm text-lumina-charcoal/80 font-medium flex items-center gap-1.5">
                  总价值约 ¥{totalValue} 
                  {extraProfit > 0 && <span className="text-lumina-terracotta bg-lumina-terracotta/10 px-1 py-0.5 rounded text-[8px] md:text-xs">多赚约{extraProfit}元</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions & Trust */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 pt-4 border-t border-lumina-stone/20">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-lumina-charcoal/60 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-lumina-green/70" strokeWidth={1.5} />
                <span>华南农业大学茂名现代农业研究院助农项目背书</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-lumina-green/70" strokeWidth={1.5} />
                <span>实时实拍透明可见</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-lumina-green/70" strokeWidth={1.5} />
                <span>已帮助 2,300+ 树主灵活变现</span>
              </div>
            </div>
            
            <a 
              href="https://pomona-9dd.pages.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lumina-green text-white px-8 py-4 rounded-full hover:bg-lumina-terracotta hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group whitespace-nowrap"
            >
              <span className="text-sm tracking-widest font-medium">一键回购 · 当季变现 · 轻松灵活</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
