import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Play, Sprout, Sun, CloudRain, Microscope, TrendingUp, Award, ShieldCheck, Calendar, User } from 'lucide-react';

interface HomeProps {
  onChangeView: (view: string) => void;
}

export function Home({ onChangeView }: HomeProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-[-1]">
          <source src="https://assets.mixkit.co/videos/preview/754/754-small.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-[-1]"></div>
        
        {/* Content layer */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-lumina-charcoal px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.2em] uppercase mb-6 text-lumina-gold"
          >
            从茂名光林到你的生活
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            Lumina Grove
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-light text-lumina-charcoal/90 max-w-2xl mx-auto leading-relaxed"
          >
            与一棵树，结一季缘。<br/>
            Connect with the ancient lychee orchards of Guangdong.
          </motion.p>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-16 md:py-32 px-6 bg-lumina-cream/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-5xl text-lumina-green mb-4 md:mb-8 leading-tight">
                光与土的故事 <br/> <span className="italic text-lumina-terracotta">Light & Land</span>
              </h2>
              <p className="text-lumina-charcoal/80 leading-snug md:leading-relaxed mb-4 md:mb-6 font-light text-sm md:text-base">
                在茂名雾气缭绕的山丘中，时间的流逝似乎慢了下来。在这里，屹立百年的荔枝树饮着富含矿物质的泉水，沐浴在亚热带的阳光下。
              </p>
              <p className="text-lumina-charcoal/80 leading-snug md:leading-relaxed mb-6 md:mb-10 font-light text-sm md:text-base">
                Lumina Grove 不仅仅是一个农场，它是一份活着的遗产。我们邀请您成为这片土地的守护者，见证一棵树的生长、开花、结果，连接泥土与心灵的距离。
              </p>
              <div className="flex items-center gap-4 text-lumina-green/60">
                <img src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E5%A4%B4%E5%83%8F.png" alt="Farmer" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-sm font-medium text-lumina-green">林师傅</p>
                  <p className="text-xs uppercase tracking-wider">首席果农</p>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img 
                  src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8D%94%E6%9E%9D%E6%A0%91.jpg" 
                  alt="Lychee Tree" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-xl italic text-lumina-green mb-2">"每一颗果实都承载着雨水的记忆。"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise – Science & Legacy */}
      <section className="py-16 md:py-32 px-6 bg-white/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl md:text-5xl text-lumina-green mb-2 md:mb-4"
            >
              光林承诺 · 科学守护
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lumina-gold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-8"
            >
              Our Promise – Science & Legacy
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-lumina-charcoal/70 font-light leading-snug md:leading-relaxed text-sm md:text-lg"
            >
              用科学赋能传统，用承诺连接人心。
            </motion.p>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-24">
            {[
              {
                icon: <Microscope strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-lumina-terracotta" />,
                title: "科学守护",
                desc: "华南农业大学提供全程技术支持与品种优化研究，确保每一棵树健康生长。"
              },
              {
                icon: <TrendingUp strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-lumina-terracotta" />,
                title: "可持续丰产",
                desc: "超越传统方式，通过生态循环与精准农业，实现更高产量与更优品质，同时保护土壤与生物多样性。"
              },
              {
                icon: <Award strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-lumina-terracotta" />,
                title: "品质保障",
                desc: "严格有机标准与可追溯体系，让每一颗荔枝、龙眼都承载着雨水与阳光的纯粹记忆。"
              },
              {
                icon: <ShieldCheck strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 text-lumina-terracotta" />,
                title: "风险共担",
                desc: "自然灾害时我们共同面对，政府与大学共同提供技术与保障，让您的认养安心无忧。"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group p-6 md:p-10 bg-lumina-cream/30 border border-lumina-stone/20 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-sm flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0"
              >
                <div className="mb-0 md:mb-6 flex items-center gap-4 flex-shrink-0">
                  <div className="p-2 md:p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500 border border-lumina-gold/20">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-lg md:text-2xl text-lumina-green md:hidden">{card.title}</h3>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg md:text-2xl text-lumina-green hidden md:block md:mb-6">{card.title}</h3>
                  <p className="text-lumina-charcoal/60 font-light leading-snug md:leading-relaxed md:pl-16 md:border-l md:border-lumina-gold/20 text-xs md:text-base">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust & Endorsement Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="border-t border-lumina-gold/20 pt-12 flex flex-col items-center justify-center gap-8"
          >
            <p className="text-lumina-green/40 text-xs tracking-[0.2em] uppercase mb-4">与华南农业大学、茂名市政府共同打造</p>
            
            <div className="flex flex-col md:flex-row items-center gap-12 opacity-80 hover:opacity-100 transition-opacity duration-700">
              <a 
                href="http://www.maoming.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group text-center"
              >
                <span className="font-serif text-xl text-lumina-green font-bold tracking-wider group-hover:text-lumina-terracotta transition-colors">茂名市政府</span>
                <span className="text-[10px] text-lumina-gold uppercase tracking-widest">Maoming Municipal Government</span>
              </a>
              
              <div className="hidden md:block h-12 w-[1px] bg-lumina-gold/30" />
              
              <a 
                href="https://scau.edu.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center gap-6 group text-center md:text-left"
              >
                <img 
                  src="https://www.urongda.com/images/normal/medium/south-china-agricultural-university-logo-1024px.png" 
                  alt="SCAU Logo" 
                  className="h-16 w-auto object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl text-lumina-green font-bold tracking-wider group-hover:text-lumina-terracotta transition-colors">华南农业大学</span>
                  <span className="text-[10px] text-lumina-gold uppercase tracking-widest">South China Agricultural University</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Teaser */}
      <section className="py-16 md:py-32 bg-lumina-green/85 text-lumina-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-3xl rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <span className="text-lumina-gold text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4 block">真实的树木，真实的连接</span>
            <h2 className="font-serif text-2xl md:text-5xl text-white">耕耘你的传承</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Sprout className="w-6 h-6 md:w-8 md:h-8 text-lumina-gold" />,
                title: "数字孪生",
                desc: "通过实时传感器数据和生长日志，监控您的果树生长。"
              },
              {
                icon: <Sun className="w-6 h-6 md:w-8 md:h-8 text-lumina-gold" />,
                title: "时令好礼",
                desc: "不仅仅是收获，每季度还能收到来自果园的精选礼包。"
              },
              {
                icon: <CloudRain className="w-6 h-6 md:w-8 md:h-8 text-lumina-gold" />,
                title: "采摘权益",
                desc: "果实归您所有。选择直接配送或赠送给亲朋好友。"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white/5 p-5 md:p-10 border border-white/10 hover:bg-white/10 transition-colors duration-300 group flex flex-row md:flex-col items-center md:items-start gap-5 md:gap-0"
              >
                <div className="mb-0 md:mb-6 bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-4">{feature.title}</h3>
                  <p className="text-white/60 font-light leading-snug md:leading-relaxed text-xs md:text-base">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-lumina-stone/60 py-6 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-lumina-green/60 text-xs uppercase tracking-widest">
          <span>茂名市农业农村局指导 华南农业大学茂名现代农业研究院指导</span>
          <div className="flex items-center gap-8">
            <span>科学种植</span>
            <span>可持续耕作</span>
            <span>特色品种</span>
          </div>
          <div className="flex items-center gap-2 text-red-500 animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span>果园实况实拍</span>
          </div>
        </div>
      </div>
    </div>
  );
}
