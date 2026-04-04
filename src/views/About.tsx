import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-12 min-h-screen bg-lumina-cream/60">
      {/* Hero */}
      <div className="px-6 mb-0 w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">品牌故事与资质</span>
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-4">果到心 · 品牌守护</h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-none text-left"
        >
          <div className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:text-lumina-green prose-p:text-lumina-charcoal/80 prose-p:font-light prose-p:leading-loose mb-12">
            <p className="text-xl md:text-2xl leading-loose text-lumina-green font-serif italic mb-12 text-left mt-0">
              "连接城市餐桌与乡村果园，守护每一颗果实的初心。"
            </p>

            <p>
              Lumina Grove 诞生于一个简单的愿望：弥合城市餐桌与乡村果园之间日益扩大的鸿沟。在广东茂名——“荔枝之乡”的古老山丘上，果树种植已有两千多年的历史。我们照料的一些树木甚至是在唐朝时期种植的。
            </p>

            <p>
              现代市场往往低估了照料这些巨树所需的辛勤劳动。果农面临价格波动和使用工业方法以牺牲风味和土壤健康为代价来最大化产量的压力。
            </p>
          </div>

          <div className="my-16 space-y-12">
            <section>
              <h3 className="text-2xl font-serif text-lumina-green border-b border-lumina-green/20 pb-2 mb-6">一种新的农业模式</h3>
              <p className="mb-8 leading-loose text-lumina-charcoal/80 font-light">
                通过认养一棵树，您不仅仅是在购买水果；您是在投资一个可持续的未来。您的支持使我们的果农能够：
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="bg-white/50 p-3 md:p-6 rounded-sm border-l-2 border-lumina-terracotta leading-relaxed md:leading-loose text-xs md:text-base text-lumina-charcoal/80 font-light">实践有机、再生农业方法。</div>
                <div className="bg-white/50 p-3 md:p-6 rounded-sm border-l-2 border-lumina-terracotta leading-relaxed md:leading-loose text-xs md:text-base text-lumina-charcoal/80 font-light">保护稀有的传统品种。</div>
                <div className="bg-white/50 p-3 md:p-6 rounded-sm border-l-2 border-lumina-terracotta leading-relaxed md:leading-loose text-xs md:text-base text-lumina-charcoal/80 font-light">维护果园生态系统的生物多样性。</div>
                <div className="bg-white/50 p-3 md:p-6 rounded-sm border-l-2 border-lumina-terracotta leading-relaxed md:leading-loose text-xs md:text-base text-lumina-charcoal/80 font-light">获得体面、稳定的收入。</div>
              </div>
            </section>

            <section className="bg-lumina-green/90 text-white p-8 rounded-sm shadow-xl">
              <h3 className="text-2xl font-serif text-white mb-6">品牌资质与授权</h3>
              <div className="space-y-6 text-sm md:text-base opacity-90">
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">品牌名称</span>
                  <span>果到心 (商标注册号: 60309380)</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">合法持有者</span>
                  <span>高州市燊荔农业科技有限公司</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">授权分销商</span>
                  <span>华南农业大学茂名现代农业研究院</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">授权期限</span>
                  <span>2026年03月22日 至 2030年03月22日</span>
                </div>
                <p className="text-xs italic mt-4 leading-loose">
                  * 本品牌所售产品均为正品，受国家法律保护。
                </p>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-2 md:space-y-4">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-lumina-terracotta font-bold">代理授权书</p>
                <img 
                  src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%8E%88%E6%9D%83%E4%B9%A6.jpeg" 
                  alt="代理授权书" 
                  className="w-full rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2 md:space-y-4">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-lumina-terracotta font-bold">商标注册证</p>
                <img 
                  src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%95%86%E6%A0%87%E6%B3%A8%E5%86%8C%E8%AF%81.png" 
                  alt="商标注册证" 
                  className="w-full rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:text-lumina-green prose-p:text-lumina-charcoal/80 prose-p:font-light prose-p:leading-loose">
              <h3 className="text-left mt-20">茂名市农业农村局指导 华南农业大学茂名现代农业研究院指导</h3>
              <p className="text-left leading-loose">
                Lumina Grove 与当地政府倡议携手合作，振兴乡村社区。我们很自豪能成为“数字农业”的试点项目，利用技术为食品系统带来透明度和连接。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
