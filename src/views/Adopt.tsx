import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Star, Crown, Heart, Sprout, Truck, Gift, ShoppingBag, X, ArrowRight, Calendar, MapPin, Shield, Users } from 'lucide-react';
import { HarvestProjectionChart } from '@/components/HarvestProjectionChart';
import { RepurchaseInfographic } from '@/components/RepurchaseInfographic';

export function Adopt() {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const tiers = [
    {
      name: "观察者",
      subtitle: "通过商店购买激活",
      price: "随购赠送",
      description: "从品尝果实开始您的旅程。凡在我们的商店购买产品，即可获得当季数字果园的访问权限。",
      icon: <Sprout size={24} />,
      features: [
        "数字果园访问权",
        "季节性通讯",
        "丰收季优先购买权",
        "数字徽章"
      ],
      color: "bg-lumina-stone",
      textColor: "text-lumina-green",
      details: {
        concept: "数字连接与初步体验",
        article: {
          title: "观察者：开启您的数字果园之旅",
          intro: "观察者计划是您进入光林世界的起点。我们相信，每一份对土地的关注都值得被记录。通过这个计划，您将从一名消费者转变为一名土地的观察者。",
          sections: [
            {
              title: "数字果园的窗口",
              content: "通过我们的实时传感器网络，您可以随时查看果园的土壤湿度、光照强度和空气质量。这不仅是数据，更是大地的呼吸。",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "连接土地的纽带",
              content: "每月的季节性通讯将带您深入了解茂名的农耕文化。从古老的嫁接技术到现代的生态防治，我们为您呈现最真实的果园生活。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-growing-plants-in-a-greenhouse-4008-large.mp4"
            }
          ],
          footer: "即使是最小的关注，也是对可持续农业的支持。"
        },
        fullPlan: [
          { title: "数字果园", desc: "通过光林小程序实时查看果园全景，感受茂名红土地的呼吸。" },
          { title: "季节通讯", desc: "每月一份电子刊物，由果农亲笔记录，讲述果园里的节气故事与农事动态。" },
          { title: "优先权", desc: "在荔枝、龙眼正式上市前，享有全网最低价的预购权，锁定第一口鲜甜。" },
          { title: "勋章系统", desc: "专属数字身份标识，记录您的每一次支持，累积成长值解锁更多隐藏权益。" }
        ]
      }
    },
    {
      name: "培育者",
      subtitle: "季度体验",
      price: "¥ 388 / 季度",
      description: "感受四季更迭。每季度收到一份精选礼盒，包含当季农产品和手工艺品。",
      icon: <Heart size={24} />,
      features: [
        "包含所有观察者权益",
        "季度礼盒 (4次/年)",
        "果树生长日记",
        "商店 9 折优惠"
      ],
      color: "bg-lumina-green",
      textColor: "text-white",
      details: {
        concept: "深度参与四季轮回",
        article: {
          title: "培育者：与大地共同呼吸",
          intro: "培育者计划旨在让城市生活与乡村节奏产生共鸣。通过四季的礼赠，您将亲身体验到时间的重量和土地的馈赠。",
          sections: [
            {
              title: "四季的信物",
              content: "我们不仅仅寄送水果。春天的荔枝花蜜、夏天的鲜甜荔枝、秋天的桂圆干、冬天的沉香香薰——每一份礼盒都是大自然在不同季节写给您的情书。",
              image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "见证生命的成长",
              content: "您的专属果树生长日记将记录下从萌芽到挂果的每一个关键节点。通过影像和文字，您将参与到一个生命的完整轮回中。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-through-a-field-of-wheat-4006-large.mp4"
            }
          ],
          footer: "培育一份耐心，收获一份自然的宁静。"
        },
        fullPlan: [
          { title: "四季礼盒", desc: "春季花蜜、夏季鲜果、秋季果干、冬季沉香周边，将茂名的四季装进盒子寄给您。" },
          { title: "生长日记", desc: "专属您的果树成长档案，通过影像记录从开花、授粉到挂果的每一个生命瞬间。" },
          { title: "专属优惠", desc: "全店商品终身9折，并享有会员专属新品试吃机会，成为我们的首席品鉴官。" },
          { title: "线下活动", desc: "受邀参加果园开放日，亲身感受泥土的芬芳，体验亲手采摘的乐趣。" }
        ]
      }
    },
    {
      name: "守护者",
      subtitle: "年度果树卫士",
      price: "¥ 1,280 / 年",
      description: "认养一棵专属果树一整年。整树的收成归您所有，新鲜直达您的餐桌。",
      icon: <Star size={24} />,
      features: [
        "整树认养 (保底 30kg+)",
        "个性化树牌",
        "24/7 实时监控权限",
        "果园探访券 (1日通票)",
        "定制礼品包装"
      ],
      color: "bg-lumina-terracotta",
      textColor: "text-white",
      highlight: true,
      details: {
        concept: "拥有一棵树的完整生命周期",
        article: {
          title: "守护者：成为土地的契约伙伴",
          intro: "守护者计划是一份庄严的承诺。当您认养一棵树，您便与这片古老的果园建立了一种神圣的契约关系。",
          sections: [
            {
              title: "您的专属古树",
              content: "我们将为您挑选一棵树龄超过50年的古荔枝树。树干上将挂起刻有您名字或家族寄语的木质牌匾，它将代您在茂名的阳光下静静伫立。",
              image: "https://images.unsplash.com/photo-1591206369811-4eeb2f04bc95?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "透明的守护",
              content: "通过24小时不间断的高清直播，您可以随时观察您的果树。无论是深夜的细雨还是清晨的微光，您与您的树始终在一起。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-green-leaves-4007-large.mp4"
            },
            {
              title: "丰收的喜悦",
              content: "整棵树的收成（保底30公斤）都属于您。我们会根据您的要求，分批次采摘并冷链直达，让您与亲友共享这份最纯粹的喜悦。",
              image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop"
            }
          ],
          footer: "守护一棵树，就是守护一份自然的传承。"
        },
        fullPlan: [
          { title: "整树认养", desc: "为您标记一棵专属古荔枝树，保底收成30kg，多出部分全部赠送，让您实现“荔枝自由”。" },
          { title: "实时监控", desc: "24小时高清摄像头权限，随时随地在手机端“看护”您的树，见证它的每一次成长。" },
          { title: "探访权益", desc: "包含茂名果园双人一日通票，含专业导览、古树讲解及现场采摘体验。" },
          { title: "定制礼遇", desc: "果实采摘后，使用印有您名字或家族寄语的专属礼盒包装，顺丰冷链直达。" }
        ]
      }
    },
    {
      name: "传承者",
      subtitle: "家族传承",
      price: "¥ 5,000 / 年",
      description: "适合家庭和企业。守护一片包含5棵树的果林，在茂名留下一份长久的绿色遗产。",
      icon: <Crown size={24} />,
      features: [
        "5棵树认养 (150kg+ 收成)",
        "私人丰收活动举办权",
        "企业/家族现场品牌展示",
        "VIP 管家服务",
        "可持续发展影响力报告"
      ],
      color: "bg-lumina-charcoal",
      textColor: "text-white",
      details: {
        concept: "家族荣耀与绿色遗产",
        article: {
          title: "传承者：书写绿色的家族篇章",
          intro: "传承者计划是为那些追求卓越、关注长远价值的家庭和企业量身定制的。这不仅是认养，更是一份可以跨越时间的绿色遗产。",
          sections: [
            {
              title: "私属果林领地",
              content: "您将拥有一片独立的果林区域。在这里，我们将为您设立永久性的纪念标识，记录您对生态保护和乡村振兴的卓越贡献。",
              image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "定制化的丰收盛宴",
              content: "作为传承者，您享有在果园举办私人丰收节的权利。无论是家庭聚会还是企业团建，我们都将为您提供管家式的定制服务。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-friends-having-a-picnic-in-a-park-4009-large.mp4"
            },
            {
              title: "社会责任的见证",
              content: "我们将为您出具年度可持续发展影响力报告，详细记录您的参与如何改善了当地果农的生活，以及对生物多样性保护的贡献。",
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=1000&auto=format&fit=crop"
            }
          ],
          footer: "让绿色成为家族最珍贵的传承。"
        },
        fullPlan: [
          { title: "专属果林", desc: "认养一片包含5棵古树的独立区域，设立家族/企业纪念碑，成为这片土地的永久守护者。" },
          { title: "私人盛宴", desc: "每年丰收季，为您举办一场定制的果园私宴或团建活动，在树荫下品味最纯正的岭南风情。" },
          { title: "VIP管家", desc: "专属客服团队，为您处理所有物流、分装赠礼及个性化定制需求，省心尊享。" },
          { title: "影响力报告", desc: "年度碳中和贡献证书及可持续农业支持报告，记录您为生态保护做出的卓越贡献。" }
        ]
      }
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-lumina-cream">
      {/* Hero */}
      <div className="px-6 mb-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">认养页面 · 会员计划</span>
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-8">选择您的果树故事</h1>
          <p className="text-lumina-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            无论您是想品尝当季鲜果，还是传承一份绿色遗产，这里都有一条连接您与土地的路径。
          </p>
        </motion.div>
      </div>

      {/* Yield Chart */}
      <HarvestProjectionChart />

      {/* Tiers */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative p-8 rounded-xl flex flex-col ${tier.color} ${tier.textColor} ${tier.highlight ? 'ring-2 ring-lumina-gold shadow-2xl scale-105 z-10' : ''}`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lumina-gold text-lumina-green text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  最受欢迎
                </div>
              )}
              
              <div className="mb-6 opacity-80">{tier.icon}</div>
              <h3 className="font-serif text-2xl mb-1">{tier.name}</h3>
              <p className="text-xs uppercase tracking-wider opacity-60 mb-6">{tier.subtitle}</p>
              
              <div className="text-3xl font-serif mb-6">{tier.price}</div>
              
              <p className="text-sm leading-relaxed opacity-80 mb-8 flex-grow">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 opacity-60 flex-shrink-0" />
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedPlan(tier)}
                className="w-full py-4 rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-300 bg-white text-lumina-green hover:bg-lumina-gold"
              >
                查看计划
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lumina Lifestyle Section */}
      <section className="py-32 bg-lumina-cream relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-lumina-green mb-6"
            >
              光林生活方式<br/>
              <span className="text-2xl md:text-3xl font-light mt-4 block">Lumina Lifestyle – 认养不止一棵树</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lumina-charcoal/70 text-lg font-light max-w-2xl mx-auto"
            >
              从科学守护到社区共创，我们邀请您成为这片土地真正的一部分。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "科学守护",
                subtitle: "Scientific Guardianship",
                text: "华南农业大学全程技术支持与实时传感器监测，确保每一棵树健康生长，见证科学与自然的完美结合。",
                image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%A7%91%E5%AD%A6%E5%AE%88%E6%8A%A4.png?v=2"
              },
              {
                title: "连接果农",
                subtitle: "Connect with Farmers",
                text: "成为扩展社区的一份子，与茂名果农实时互动、分享故事，一起守护这片百年果园。",
                image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%BF%9E%E6%8E%A5%E6%9E%9C%E5%86%9C.png?v=2"
              },
              {
                title: "实时见证",
                subtitle: "Witness in Real Time",
                text: "通过高清直播、每日实拍与成长日记，亲身参与一棵树的完整生命旅程，从开花到结果。",
                image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AE%9E%E6%97%B6%E8%A7%81%E8%AF%81.png?v=2"
              },
              {
                title: "共创未来",
                subtitle: "Be Part of the Change",
                text: "您的认养直接支持本地果农与可持续农业，还可选择优雅回购机制，让每一颗果实都成为正向改变的一部分。",
                image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%85%B1%E5%88%9B%E6%9C%AA%E6%9D%A5.png?v=2"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  style={{ transformOrigin: 'center' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                  <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="font-serif text-2xl text-white mb-1">{card.title}</h3>
                    <p className="text-lumina-gold text-xs uppercase tracking-widest mb-4">{card.subtitle}</p>
                    <p className="text-white/90 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repurchase Infographic */}
      <RepurchaseInfographic />

      {/* Plan Detail Overlay (Modal Style) */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#FDFCF9] rounded-[32px] p-10 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D463E] hover:bg-black/5 transition-colors border border-black/5 shadow-sm z-10"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-6 mb-12">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedPlan.color} ${selectedPlan.textColor}`}>
                  {selectedPlan.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-serif text-[#2D463E] mb-2">{selectedPlan.name}计划</h2>
                  <p className="text-[#D48C6A] text-sm">{selectedPlan.details.concept}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {selectedPlan.details.fullPlan.map((item: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#2D463E]/5 flex items-center justify-center text-[#2D463E] font-serif text-sm">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-serif text-[#2D463E]">{item.title}</h3>
                    </div>
                    <p className="text-black/40 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A3329] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-white text-xl font-serif mb-2">准备好开启您的旅程了吗？</h3>
                  <p className="text-white/60 text-sm">加入光林，与我们一同守护这片土地。</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="text-white text-3xl font-serif">{selectedPlan.price}</div>
                  <button className="bg-[#D4B595] text-[#1A3329] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#C4A585] transition-colors">
                    立即开启
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
