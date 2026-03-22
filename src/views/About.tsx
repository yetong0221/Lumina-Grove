import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-12 min-h-screen bg-lumina-cream">
      {/* Hero */}
      <div className="px-6 mb-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">我们的故事</span>
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-8">果园的守护者</h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-headings:font-serif prose-headings:text-lumina-green prose-p:text-lumina-charcoal/80 prose-p:font-light prose-p:leading-relaxed mx-auto"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-lumina-green font-serif italic mb-12 text-center">
            "我们不是从祖先那里继承了地球，而是从子孙那里借来的。"
          </p>

          <p>
            Lumina Grove 诞生于一个简单的愿望：弥合城市餐桌与乡村果园之间日益扩大的鸿沟。在广东茂名——“荔枝之乡”的古老山丘上，果树种植已有两千多年的历史。我们照料的一些树木甚至是在唐朝时期种植的。
          </p>

          <p>
            然而，现代市场往往低估了照料这些巨树所需的辛勤劳动。果农面临价格波动和使用工业方法以牺牲风味和土壤健康为代价来最大化产量的压力。
          </p>

          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Maoming Landscape" 
            className="w-full h-96 object-cover rounded-sm my-12"
          />

          <h3>一种新的农业模式</h3>
          <p>
            通过认养一棵树，您不仅仅是在购买水果；您是在投资一个可持续的未来。您的支持使我们的果农能够：
          </p>
          <ul>
            <li>实践有机、再生农业方法。</li>
            <li>保护因不适合大规模运输而稀有的传统品种。</li>
            <li>维护果园生态系统的生物多样性。</li>
            <li>获得尊重其专业知识的体面、稳定的收入。</li>
          </ul>

          <h3>茂名市农业局支持</h3>
          <p>
            Lumina Grove 与当地政府倡议携手合作，振兴乡村社区。我们很自豪能成为“数字农业”的试点项目，利用技术为食品系统带来透明度和连接。
          </p>
        </motion.div>

        {/* Team */}
        <div className="mt-24">
          <h3 className="font-serif text-3xl text-lumina-green text-center mb-12">辛勤耕耘的双手</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "林师傅", role: "首席果农", img: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E5%A4%B4%E5%83%8F.png" },
              { name: "许沁", role: "可持续发展总监", img: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%8F%AF%E6%8C%81%E7%BB%AD%E5%8F%91%E5%B1%95%E6%80%BB%E7%9B%91.png" },
              { name: "王博士", role: "农学家", img: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%8E%8B%E5%8D%9A%E5%A3%AB%E5%A4%B4%E5%83%8F.png" }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-serif text-xl text-lumina-green">{member.name}</h4>
                <p className="text-xs uppercase tracking-widest text-lumina-terracotta">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
