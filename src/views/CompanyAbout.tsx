import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Building2, Sprout, Target, Award, CheckCircle2 } from 'lucide-react';

interface CompanyAboutProps {
  onBack: () => void;
}

export function CompanyAbout({ onBack }: CompanyAboutProps) {
  return (
    <div className="min-h-screen bg-lumina-cream/60 pt-12 pb-24">
      {/* Header */}
      <div className="px-6 mb-12 w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-lumina-green hover:text-lumina-terracotta transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif italic">返回</span>
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">企业品牌简介</span>
          <h1 className="font-serif text-4xl md:text-6xl text-lumina-green mb-6 leading-tight">
            高州市燊荔农业科技有限公司
          </h1>
          <p className="text-lumina-charcoal/60 text-lg w-full font-light leading-relaxed">
            集科研、开发、生产、加工、文旅、培训于一体的现代化农业科技企业，致力于为消费者提供安全、健康、高品质的农产品。
          </p>
        </motion.div>
      </div>

      {/* Hero Images */}
      <div className="px-6 mb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E4%BC%81%E4%B8%9A%E5%93%81%E7%89%8C%E7%AE%80%E4%BB%8B1.png" 
              alt="企业简介图1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E4%BC%81%E4%B8%9A%E5%93%81%E7%89%8C%E7%AE%80%E4%BB%8B2.png" 
              alt="企业简介图2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Basic Info Cards */}
      <div className="px-6 mb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm border border-black/5 shadow-sm">
            <Building2 className="text-lumina-terracotta mb-6" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-4">基本信息</h3>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70 leading-relaxed">
              <li><span className="font-bold text-lumina-green">兄弟公司：</span>广东省重点农业龙头企业高州市燊马生态农业发展有限公司。</li>
              <li><span className="font-bold text-lumina-green">地理位置：</span>种植基地位于中国金牌龙眼第一镇 —— 高州市沙田镇。</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-sm border border-black/5 shadow-sm">
            <Sprout className="text-lumina-terracotta mb-6" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-4">种植规模</h3>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70 leading-relaxed">
              <li>种植面积达 <span className="text-lumina-terracotta font-bold">3100 多亩</span>。</li>
              <li>“马头”牌荔枝龙眼等优质水果 <span className="text-lumina-terracotta font-bold">2000 多亩</span>。</li>
              <li>鱼塘 <span className="text-lumina-terracotta font-bold">100 多亩</span>。</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-sm border border-black/5 shadow-sm">
            <Target className="text-lumina-terracotta mb-6" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-4">发展战略</h3>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70 leading-relaxed">
              <li><span className="font-bold text-lumina-green">绿色发展：</span>坚持科技兴农，提供安全、健康、高品质农产品。</li>
              <li><span className="font-bold text-lumina-green">市场拓展：</span>抓住 RCEP 机遇，拓展国外市场，专研保鲜冷链技术。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="px-6 w-full space-y-24">
        {/* Production Capacity */}
        <section>
          <h2 className="font-serif text-3xl text-lumina-green mb-8 flex items-center gap-3">
            <Award className="text-lumina-terracotta" />
            产品产量与品牌
          </h2>
          <div className="prose prose-lg max-w-none prose-p:text-lumina-charcoal/80 prose-p:leading-loose">
            <p>
              公司年产桂味荔枝鲜果 300 多吨，龙眼鲜果 800 多吨。其中获得“中国 A 级绿色食品”认定的荔枝鲜果达 200 多吨，龙眼鲜果 360 多吨。
            </p>
            <p>
              我们拥有<strong>“果到心”</strong>原创品牌，作为“马头”牌的升级版本，实现了从初加工到深加工的进阶，涵盖鲜果及其衍生深加工制品。
            </p>
            <p>
              科研方面，我们长期与华南农业大学、广东石油化工学院合作，共建“产学研基地”，将自主研发的新型设备投入生产使用。
            </p>
          </div>
        </section>

        {/* Longan Features */}
        <section className="bg-lumina-green/90 text-white p-12 rounded-sm shadow-xl">
          <h2 className="font-serif text-3xl mb-8">金牌龙眼 · 储良之珍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-lumina-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">品种优良</h4>
                  <p className="text-sm opacity-80">以储良龙眼为主，享有“金牌龙眼”美誉，位列全省优稀品种之首。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-lumina-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">口感绝佳</h4>
                  <p className="text-sm opacity-80">果肉爽脆、肉厚无渣，甜度可达 21-30 度，脆甜可口，汁水汹涌。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-lumina-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">品控严格</h4>
                  <p className="text-sm opacity-80">每日排查生长情况，确保果径达到 2.7cm 才允许采摘发货。</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm leading-loose opacity-90">
                产自“中国金牌龙眼之乡”广东高州，这里雨量充沛、气候温润、阳光充足，远离工业污染，为龙眼生长提供了得天独厚的自然条件。
              </p>
              <p className="text-sm leading-loose opacity-90 italic">
                “北有人参，南有桂圆” —— 具有补血益气、安神助眠等功效，是温和型水果，多吃也不易上火。
              </p>
            </div>
          </div>
        </section>

        {/* Lychee Features */}
        <section>
          <h2 className="font-serif text-3xl text-lumina-green mb-8">岭南佳果 · 荔枝之韵</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-lumina-terracotta pl-6 py-2">
              <h4 className="font-serif text-xl text-lumina-green mb-2">白糖罂</h4>
              <p className="text-sm text-lumina-charcoal/70">甜度极高，果肉爽脆多汁，是早熟品种中的佼佼者。</p>
            </div>
            <div className="border-l-2 border-lumina-terracotta pl-6 py-2">
              <h4 className="font-serif text-xl text-lumina-green mb-2">桂味</h4>
              <p className="text-sm text-lumina-charcoal/70">带有浓郁桂花香，肉质清甜，核小肉厚，口感独特。</p>
            </div>
            <div className="border-l-2 border-lumina-terracotta pl-6 py-2">
              <h4 className="font-serif text-xl text-lumina-green mb-2">仙进奉</h4>
              <p className="text-sm text-lumina-charcoal/70">果实硕大，口感嫩滑，甜度适宜，是高端荔枝的代表。</p>
            </div>
          </div>
        </section>

        {/* Deep Processing */}
        <section className="border-t border-black/10 pt-16">
          <h2 className="font-serif text-3xl text-lumina-green mb-8">深加工产品系列</h2>
          <p className="text-lumina-charcoal/80 leading-loose mb-8">
            为了延长美味的陪伴，我们推出了丰富的深加工产品，保留了水果的营养成分，更添独特风味：
          </p>
          <div className="flex flex-wrap gap-3">
            {['荔枝干', '龙眼干', '桂圆肉', '龙眼酥', '龙眼曲奇', '龙眼果粉'].map(item => (
              <span key={item} className="px-4 py-2 bg-lumina-terracotta/10 text-lumina-terracotta rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
