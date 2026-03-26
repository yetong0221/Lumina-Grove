import { motion } from 'motion/react';
import { ChevronLeft, Award, Globe, FlaskConical, Sprout, ShieldCheck } from 'lucide-react';

export function CompanyProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-lumina-cream pb-32">
      {/* Header */}
      <div className="pt-12 px-6 mb-12 max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-lumina-green hover:text-lumina-terracotta transition-colors mb-8 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest font-medium">返回</span>
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">企业品牌简介</span>
          <h1 className="font-serif text-4xl md:text-5xl text-lumina-green leading-tight">高州市燊荔农业科技有限公司</h1>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        
        {/* Basic Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-lumina-green">
            <Award className="text-lumina-terracotta mb-4" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-3">企业背景</h3>
            <p className="text-sm text-lumina-charcoal/70 leading-relaxed">
              广东省重点农业龙头企业 —— 高州市燊马生态农业发展有限公司的兄弟公司。
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-lumina-green">
            <Globe className="text-lumina-terracotta mb-4" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-3">地理位置</h3>
            <p className="text-sm text-lumina-charcoal/70 leading-relaxed">
              种植基地位于“中国金牌龙眼第一镇” —— 高州市沙田镇，自然条件得天独厚。
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-lumina-green">
            <FlaskConical className="text-lumina-terracotta mb-4" size={32} />
            <h3 className="font-serif text-xl text-lumina-green mb-3">企业性质</h3>
            <p className="text-sm text-lumina-charcoal/70 leading-relaxed">
              集科研、开发、生产、加工、文旅、培训于一体的现代化综合性农业科技企业。
            </p>
          </div>
        </section>

        {/* Images Section 1 */}
        <section>
          <img 
            src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E4%BC%81%E4%B8%9A%E5%93%81%E7%89%8C%E7%AE%80%E4%BB%8B1.png" 
            alt="企业展示" 
            className="w-full h-[500px] object-cover rounded-sm shadow-xl"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Production Scale */}
        <section className="bg-lumina-green text-white p-12 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-6">种植与生产规模</h2>
              <p className="opacity-80 leading-loose mb-8">
                公司拥有种植面积达 3100 多亩，其中“马头”牌荔枝龙眼等优质水果 2000 多亩，鱼塘 100 多亩。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l border-white/20 pl-4">
                  <div className="text-2xl font-serif">300+ 吨</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">桂味荔枝年产</div>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <div className="text-2xl font-serif">800+ 吨</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">龙眼鲜果年产</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm">
                <h4 className="font-serif text-lg mb-2">绿色食品认证</h4>
                <p className="text-sm opacity-70">其中荔枝鲜果 200 多吨、龙眼鲜果 360 多吨获“中国 A 级绿色食品”认定。</p>
              </div>
              <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm">
                <h4 className="font-serif text-lg mb-2">品牌进阶</h4>
                <p className="text-sm opacity-70">拥有“果到心”原创品牌，作为“马头”牌的升级版，实现从初加工到深加工的跨越。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl text-lumina-green mb-4">核心产品特色</h2>
            <div className="h-1 w-20 bg-lumina-terracotta mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Longan */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lumina-green text-white rounded-full flex items-center justify-center font-serif text-xl">龙</div>
                <h3 className="font-serif text-2xl text-lumina-green">金牌龙眼 · 储良/石硖</h3>
              </div>
              <ul className="space-y-4 text-lumina-charcoal/80 text-sm leading-relaxed">
                <li className="flex gap-3"><ShieldCheck className="text-lumina-terracotta shrink-0" size={18} /> <span><strong>品种优良：</strong>储良龙眼被誉为“金牌龙眼”，位列全省优稀品种之首。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-terracotta shrink-0" size={18} /> <span><strong>口感绝佳：</strong>肉厚无渣，甜度高达21-30度，脆甜可口，汁水汹涌。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-terracotta shrink-0" size={18} /> <span><strong>营养丰富：</strong>“北有人参，南有桂圆”，补血益气，温和不上火。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-terracotta shrink-0" size={18} /> <span><strong>品控严格：</strong>每日排查生长情况，果径达2.7cm方可采摘。</span></li>
              </ul>
            </div>

            {/* Lychee */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lumina-terracotta text-white rounded-full flex items-center justify-center font-serif text-xl">荔</div>
                <h3 className="font-serif text-2xl text-lumina-green">名优荔枝 · 桂味/白糖罂</h3>
              </div>
              <ul className="space-y-4 text-lumina-charcoal/80 text-sm leading-relaxed">
                <li className="flex gap-3"><ShieldCheck className="text-lumina-green shrink-0" size={18} /> <span><strong>品种多样：</strong>涵盖白糖罂、桂味、仙进奉等多个名优品种。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-green shrink-0" size={18} /> <span><strong>独特口感：</strong>桂味自带桂花香，核小肉厚；白糖罂爽脆多汁。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-green shrink-0" size={18} /> <span><strong>外观鲜美：</strong>果实饱满，色泽鲜艳，皮薄肉嫩，诱人至极。</span></li>
                <li className="flex gap-3"><ShieldCheck className="text-lumina-green shrink-0" size={18} /> <span><strong>能量补给：</strong>富含维生素C与蛋白质，增强免疫力，补充能量。</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Images Section 2 */}
        <section>
          <img 
            src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E4%BC%81%E4%B8%9A%E5%93%81%E7%89%8C%E7%AE%80%E4%BB%8B2.png" 
            alt="产品展示" 
            className="w-full h-[500px] object-cover rounded-sm shadow-xl"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Strategy & R&D */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl text-lumina-green mb-6 flex items-center gap-3">
              <Sprout className="text-lumina-terracotta" /> 发展战略
            </h3>
            <div className="space-y-6 text-sm text-lumina-charcoal/80 leading-loose">
              <p><strong>绿色发展：</strong>始终坚持科技兴农，致力于提供安全、健康、高品质的农产品。</p>
              <p><strong>市场拓展：</strong>紧抓 RCEP 机遇，拓展国际市场，专研保鲜冷链技术，解决长途运输痛点。</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl text-lumina-green mb-6 flex items-center gap-3">
              <FlaskConical className="text-lumina-terracotta" /> 科研合作
            </h3>
            <p className="text-sm text-lumina-charcoal/80 leading-loose">
              长期与<strong>华南农业大学</strong>、<strong>广东石油化工学院</strong>合作，共建“产学研基地”。充分发挥高校科研能力，将自主研发的新型设备投入生产一线，提升农业科技含量。
            </p>
          </div>
        </section>

        {/* Deep Processing */}
        <section className="text-center py-12 border-y border-lumina-green/10">
          <h3 className="font-serif text-2xl text-lumina-green mb-6">深加工产品系列</h3>
          <p className="text-sm text-lumina-charcoal/70 max-w-3xl mx-auto leading-loose">
            公司推出荔枝干、龙眼干、桂圆肉、龙眼酥、龙眼曲奇、龙眼果粉等系列产品。
            这些产品在保留水果天然营养的同时，赋予了独特的风味，并显著延长了保质期，让美味跨越时空。
          </p>
        </section>

      </div>
    </div>
  );
}
