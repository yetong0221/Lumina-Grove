import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Star, Crown, Heart, Sprout, Truck, Gift, ShoppingBag, X, ArrowRight, Calendar, MapPin, Shield, Users } from 'lucide-react';
import { HarvestProjectionChart } from '@/components/HarvestProjectionChart';
import { RepurchaseInfographic } from '@/components/RepurchaseInfographic';
import { LotteryGame } from '@/components/LotteryGame';
import { LonganPhonograph } from '@/components/LonganPhonograph';

export function Adopt({ onChangeView }: { onChangeView: (view: string) => void }) {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [showLottery, setShowLottery] = useState(false);
  const [showPhonograph, setShowPhonograph] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLonganUnlocked, setIsLonganUnlocked] = useState(false);

  const tiers = [
    {
      name: "观察者",
      subtitle: "鸡心黄皮树",
      price: "AI 测运\n签文解锁",
      description: "通过“抽签桶”小游戏获得鸡心黄皮树的认养资格。每天一次机会，好运降临，开启您的守护之旅。",
      icon: <Sprout size={24} />,
      features: [
        "鸡心黄皮树认养资格",
        "数字果园访问权",
        "当季果实优先权",
        "专属电子运程签"
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
      subtitle: "石峡龙眼树",
      price: "声音认养\n方言挑战解锁",
      description: "通过收录方言解锁石峡龙眼树的认养资格。用乡音传递温情，守护百年古树。",
      icon: <Heart size={24} />,
      features: [
        "石峡龙眼树认养资格",
        "数字果园访问权",
        "当季果实优先权",
        "方言留声机互动权",
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
          { title: "认养资格", desc: "获得石峡龙眼树的专属认养权，见证百年古树的四季更迭。" },
          { title: "数字果园", desc: "24小时访问数字果园，通过实时传感器数据监控果树生长状态。" },
          { title: "优先权", desc: "享有当季果实的优先采摘与购买权，锁定第一口鲜甜。" },
          { title: "留声机互动", desc: "获得方言留声机互动权，用乡音传递温情，守护文化根脉。" },
          { title: "商店优惠", desc: "全店商品享有 9 折优惠，成为我们的首席品鉴官。" }
        ]
      }
    },
    {
      name: "守护者",
      subtitle: "茂名荔枝树",
      price: "购买任意商品解锁",
      description: "通过购买商城任意商品，即可解锁茂名荔枝树的认养资格。开启您的甜蜜守护之旅。",
      icon: <Star size={24} />,
      features: [
        "茂名荔枝树认养资格",
        "数字果园访问权",
        "商店 9 折优惠",
        "赠送“季度订阅包”一张半价券"
      ],
      color: "bg-lumina-terracotta",
      textColor: "text-white",
      highlight: true,
      details: {
        concept: "拥有一棵荔枝树的完整生命周期",
        article: {
          title: "守护者：成为荔枝林的契约伙伴",
          intro: "守护者计划是一份庄严的承诺。当您认养一棵荔枝树，您便与这片古老的果园建立了一种神圣的契约关系。",
          sections: [
            {
              title: "您的专属古荔枝树",
              content: "我们将为您挑选一棵树龄超过50年的古荔枝树。树干上将挂起刻有您名字或家族寄语的木质牌匾，它将代您在茂名的阳光下静静伫立。",
              image: "https://images.unsplash.com/photo-1591206369811-4eeb2f04bc95?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "透明的守护",
              content: "通过24小时不间断的高清直播，您可以随时观察您的荔枝树。无论是深夜的细雨还是清晨的微光，您与您的树始终在一起。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-green-leaves-4007-large.mp4"
            },
            {
              title: "丰收的喜悦",
              content: "整棵树的收成（保底30公斤）都属于您。我们会根据您的要求，分批次采摘并冷链直达，让您与亲友共享这份最纯粹的鲜甜。",
              image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop"
            }
          ],
          footer: "守护一棵荔枝树，就是守护一份自然的传承。"
        },
        fullPlan: [
          { title: "认养资格", desc: "获得茂名荔枝树的专属认养权，开启您的甜蜜守护之旅。" },
          { title: "数字果园", desc: "24小时访问数字果园，实时监控果树生长，见证每一刻的成长。" },
          { title: "商店优惠", desc: "全店商品享有 9 折优惠，尊享会员专属礼遇。" },
          { title: "订阅包优惠", desc: "赠送“季度订阅包”一张半价券，分享丰收的喜悦。" }
        ]
      }
    },
    {
      name: "传承者",
      subtitle: "金煌芒果树",
      price: "购买满188元解锁",
      description: "在商城消费满188元，即可解锁金煌芒果树的认养资格。让这份金色的甜蜜成为您的专属遗产。",
      icon: <Crown size={24} />,
      features: [
        "金煌芒果树认养资格",
        "数字果园访问权",
        "商店 85 折优惠",
        "赠送当前”季度果干订阅包“（包邮到家）"
      ],
      color: "bg-lumina-charcoal",
      textColor: "text-white",
      details: {
        concept: "家族荣耀与金色遗产",
        article: {
          title: "传承者：书写金色的家族篇章",
          intro: "传承者计划是为那些追求卓越、关注长远价值的家庭和企业量身定制的。这不仅是认养，更是一份可以跨越时间的金色遗产。",
          sections: [
            {
              title: "私属芒果林领地",
              content: "您将拥有一片独立的芒果林区域。在这里，我们将为您设立永久性的纪念标识，记录您对生态保护和乡村振兴的卓越贡献。",
              image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "定制化的丰收盛宴",
              content: "作为传承者，您享有在芒果园举办私人丰收节的权利。无论是家庭聚会还是企业团建，我们都将为您提供管家式的定制服务。",
              video: "https://assets.mixkit.co/videos/preview/mixkit-friends-having-a-picnic-in-a-park-4009-large.mp4"
            },
            {
              title: "社会责任的见证",
              content: "我们将为您出具年度可持续发展影响力报告，详细记录您的参与如何改善了当地果农的生活，以及对生物多样性保护的贡献。",
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=1000&auto=format&fit=crop"
            }
          ],
          footer: "让金色成为家族最珍贵的传承。"
        },
        fullPlan: [
          { title: "认养资格", desc: "获得金煌芒果树的专属认养权，让这份金色的甜蜜成为您的专属遗产。" },
          { title: "数字果园", desc: "24小时访问数字果园，深度参与果园管理与生态保护。" },
          { title: "商店优惠", desc: "全店商品享有 85 折优惠，尊享最高等级会员礼遇。" },
          { title: "订阅包赠送", desc: "赠送当前“季度果干订阅包”（包邮到家），品味大自然的馈赠。" }
        ]
      }
    }
  ];

  return (
    <div className="pt-12 min-h-screen bg-lumina-cream/60">
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
              
              <div className="text-3xl font-serif mb-6 whitespace-pre-line">{tier.price}</div>
              
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
                onClick={() => {
                  if (tier.name === "观察者") {
                    setShowLottery(true);
                  } else if (tier.name === "培育者") {
                    setShowPhonograph(true);
                  } else {
                    setSelectedPlan(tier);
                  }
                }}
                className="w-full py-4 rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-300 bg-white text-lumina-green hover:bg-lumina-gold"
              >
                {tier.name === "观察者" ? "开始抽签" : tier.name === "培育者" ? "查看计划" : "查看计划"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lottery Game Modal */}
      <AnimatePresence>
        {showLottery && (
          <LotteryGame 
            onClose={() => setShowLottery(false)} 
            onUnlock={() => {
              setIsUnlocked(true);
              // You could add a toast or redirect here
            }} 
            onChangeView={onChangeView}
          />
        )}
      </AnimatePresence>

      {/* Longan Phonograph Modal */}
      <AnimatePresence>
        {showPhonograph && (
          <LonganPhonograph 
            onClose={() => setShowPhonograph(false)} 
            onUnlock={() => {
              setIsLonganUnlocked(true);
            }} 
          />
        )}
      </AnimatePresence>

      {/* Lumina Lifestyle Section */}
      <section className="py-32 bg-lumina-cream/60 relative overflow-hidden">
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
