import { motion } from 'motion/react';
import { Sprout, Sun, CloudRain, Gift, Truck, Camera } from 'lucide-react';

export function Journey() {
  const steps = [
    {
      title: "选择与激活",
      desc: "选择您的果树或通过商店购买激活您的观察者身份。接收您的数字证书并访问果园仪表板。",
      icon: <Sprout size={24} />,
      image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E9%80%89%E6%8B%A9%E4%B8%8E%E6%BF%80%E6%B4%BB.png"
    },
    {
      title: "生长与监控",
      desc: "见证您的果树随季节繁茂。访问 24/7 实时摄像头，阅读每周果农日记，并追踪环境数据。",
      icon: <Camera size={24} />,
      image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%94%9F%E9%95%BF%E4%B8%8E%E7%9B%91%E6%8E%A7.png"
    },
    {
      title: "季节性好礼",
      desc: "对于培育者及以上等级，每季度接收包含手工艺品、果园蜂蜜 and 季节性美食的关怀礼包。",
      icon: <Gift size={24} />,
      image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AD%A3%E8%8A%82%E6%80%A7%E5%A5%BD%E7%A4%BC.png"
    },
    {
      title: "丰收时刻",
      desc: "当果实成熟时，丰收属于您。我们会精心手工采摘您的份额，并在24小时内通过冷链送达您家门口。",
      icon: <Truck size={24} />,
      image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E4%B8%B0%E6%94%B6%E6%97%B6%E5%88%BB.png"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-lumina-cream">
      <div className="px-6 mb-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">运作方式</span>
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-8">一季的旅程</h1>
          <p className="text-lumina-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            从第一颗花蕾到最后的丰收，像亲自漫步在果园行间一样体验您果树的生命周期。
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-32">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-lumina-green/20 -translate-x-1/2 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg relative group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-lumina-green/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Center Icon (Desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lumina-cream border border-lumina-green/20 flex items-center justify-center text-lumina-green z-10 hidden md:flex">
                {step.icon}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 text-left md:text-center">
                <div className={`md:px-8 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="flex items-center gap-3 mb-4 md:hidden text-lumina-green">
                    {step.icon}
                    <span className="text-xs uppercase tracking-widest font-bold">步骤 {i + 1}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-lumina-green mb-4">{step.title}</h3>
                  <p className="text-lumina-charcoal/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
