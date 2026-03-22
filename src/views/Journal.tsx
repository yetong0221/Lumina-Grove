import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOURNAL_ENTRIES } from '@/data/mock';
import { Calendar, User, X, ArrowLeft } from 'lucide-react';

export function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<any | null>(null);

  const featuredEntry = {
    title: "荔枝嫁接的古老艺术",
    date: "2024年4月2日",
    author: "茂名林师傅的五代传承，只为那一口极致的甜",
    image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85.png",
    excerpt: "茂名高州根子镇，柏桥村的荔枝林里，林师傅弯着腰，手起刀落间，一棵百年老树的基因正被小心翼翼地嫁接进新的生命。这一刀，已经在他的家族中传了五代。",
    content: [
      { type: 'text', value: '茂名高州根子镇，柏桥村的荔枝林里，林师傅弯着腰，手起刀落间，一棵百年老树的基因正被小心翼翼地嫁接进新的生命。这一刀，已经在他的家族中传了五代。' },
      { type: 'heading', value: '柏桥村的清晨，一把嫁接刀划开百年前史' },
      { type: 'text', value: '四月清晨五点，茂名高州根子镇的薄雾还未散去，柏桥村的荔枝林里已经有人影晃动。' },
      { type: 'text', value: '林师傅蹲在一棵荔枝树前，从工具包里摸出一把磨得发亮的嫁接刀。刀身很薄，刀口斜斜的，像一片柳叶。这把刀是他爷爷的爷爷传下来的，刀柄换过几回，刀刃还是当年的钢火。' },
      { type: 'text', value: '“我太公那辈就在根子镇做嫁接，传到我这里，一百多年了。”林师傅今年五十三岁，手掌粗糙得像荔枝树皮，但握刀的手却稳得出奇。他说，这片土地种荔枝的历史有一千多年，他家做嫁接的历史，也快两百年了。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85.png' },
      { type: 'heading', value: '“白糖罂”的祖宗树，就在我们村' },
      { type: 'text', value: '茂名是中国荔枝之乡，高州根子镇更是荔枝名镇。这里的“白糖罂”“妃子笑”“桂味”，个个有名有姓，有来有去。' },
      { type: 'text', value: '“你们吃的‘白糖罂’，最正宗的祖宗树就在我们村。”林师傅指着不远处的古荔枝林，语气里带着点骄傲。他说，一棵好荔枝树的诞生，不是靠种子，而是靠嫁接。把最甜品种的枝条，接到根系发达的砧木上，才能保住好味道。' },
      { type: 'text', value: '“实生苗长出来的荔枝，十棵十个味，酸的涩的小的都有。嫁接苗，一棵树结出来的果，个个都一样甜。”林师傅说，这就是他们家五代人一直在做的事——为最甜美的果实，打下最坚实的根基。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AB%81%E6%8E%A5%E4%B8%AD.png' },
      { type: 'heading', value: '嫁接不是绑绑就行，要讲火候讲时辰' },
      { type: 'text', value: '很多人以为嫁接就是把两根树枝绑在一起。林师傅听了直摇头：“哪有那么简单。”' },
      { type: 'text', value: '选砧木要看根系壮不壮，选接穗要挑去年生的向阳枝。削的时候要一刀成，切面要平得像镜子，形成层要对得严丝合缝，绑的时候松紧要像系鞋带——太松不活，太紧勒死。' },
      { type: 'text', value: '“嫁接还要看时辰。”林师傅说，根子镇的老辈人传下来，嫁接最好在清晨太阳出来前，或者傍晚太阳落山后。那时候树液流动慢，伤口不容易流胶，成活率高。' },
      { type: 'text', value: '他说，现在的年轻人不懂这些，拿着刀就削，削完就绑，不管时辰不管天气，活不活全靠运气。“我们那时候学嫁接，跟着太公在荔枝林里蹲了三年，才让碰刀。”' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AB%81%E6%8E%A5%E5%90%8E.png' },
      { type: 'heading', value: '一千多年的荔枝古树，还在结果' },
      { type: 'text', value: '茂名高州根子镇，有一片古荔枝林，最老的树龄超过一千五百年，至今还在结果。' },
      { type: 'text', value: '林师傅每年都要去那片古林看看。“那些老祖宗留下来的树，是我们的活教材。”他说，有些古树结的果已经不大了，但它们的根系还在，基因还在。把古树的枝条嫁接出去，就等于把千年前的甜，延续到今天。' },
      { type: 'text', value: '这些年，林师傅嫁接过的荔枝树，多得他自己都数不清。但他记得最清楚的，是几棵濒临死亡的老树。“有一棵三百多年的‘黑叶’，主干都空了，只剩半边皮活着。我用它的枝条嫁接了二十多棵小苗，现在都挂果了。”林师傅说这话时，眼睛里有光。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E6%9C%9B%E6%9E%9C%E6%A0%91.png' },
      { type: 'heading', value: '村里的年轻人，愿意学的越来越少了' },
      { type: 'text', value: '根子镇家家户户种荔枝，但愿意学嫁接的年轻人，越来越少。' },
      { type: 'text', value: '“嫁接要弯腰，一弯就是一天，腰酸背痛。要晒太阳，晒得比荔枝皮还黑。要磨性子，一刀下去不对，就废了。”林师傅说，他儿子在城里打工，一个月挣五六千，不愿意回来。“我也不强求，这活确实苦。”' },
      { type: 'text', value: '去年，有个从东莞回来的年轻人找上门，说想学嫁接，回家种荔枝。林师傅教了三个月，年轻人学得不错。“他有文化，学得快，就是坐不住，老想用手机查资料，看视频。”林师傅说，嫁接这东西，视频上看一百遍，不如自己削一刀。' },
      { type: 'text', value: '他不知道那个年轻人现在还在不在种荔枝，但他说，只要有人愿意学，他就愿意教。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E4%B8%8E%E5%B9%B4%E8%BD%BB%E4%BA%BA.png' },
      { type: 'heading', value: '柏桥村的荔枝，今年的花很好' },
      { type: 'text', value: '四月的柏桥村，荔枝树已经挂满了小小的果胎。林师傅站在自家果园的山坡上，看着漫山遍野的荔枝林，说了一句：“今年的花很好。”' },
      { type: 'text', value: '他说的“花很好”，意味着今年的荔枝会大年，会丰收，会很甜。' },
      { type: 'text', value: '这些甜，有一部分是他的功劳。那些他嫁接过的树，正在把最好的基因，输送给夏天的果实。' },
      { type: 'text', value: '“你们六月份来，我请你们吃荔枝。”林师傅笑着说。' }
    ]
  };

  return (
    <div className="pt-12 min-h-screen bg-lumina-cream">
      <div className="px-6 mb-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">果园日记</span>
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-8">泥土的故事</h1>
          <p className="text-lumina-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            关于生长、季节以及耕耘这片土地的人们的记录。
          </p>
        </motion.div>
      </div>

      {/* Featured Entry */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div 
          onClick={() => setSelectedEntry(featuredEntry)}
          className="relative aspect-[21/9] overflow-hidden rounded-sm group cursor-pointer"
        >
          <img 
            src={featuredEntry.image} 
            alt="Featured" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-3xl">
            <span className="bg-lumina-gold text-lumina-green text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 inline-block">编辑精选</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">{featuredEntry.title}</h2>
            <p className="text-white/80 font-light text-lg mb-6 line-clamp-2">
              {featuredEntry.excerpt}
            </p>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
              <span className="flex items-center gap-2"><Calendar size={14} /> {featuredEntry.date}</span>
              <span className="flex items-center gap-2"><User size={14} /> {featuredEntry.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {JOURNAL_ENTRIES.map((entry) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedEntry(entry)}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-lumina-charcoal/40 mb-3">
                <span>{entry.date}</span>
                <span className="w-1 h-1 bg-lumina-terracotta rounded-full" />
                <span>{entry.author}</span>
              </div>

              <h3 className="font-serif text-2xl text-lumina-green mb-3 group-hover:text-lumina-terracotta transition-colors leading-tight">
                {entry.title}
              </h3>
              
              <p className="text-sm text-lumina-charcoal/70 font-light leading-relaxed line-clamp-3">
                {entry.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Overlay */}
      <AnimatePresence>
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-lumina-cream overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto px-6 py-20 relative">
              <button 
                onClick={() => setSelectedEntry(null)}
                className="fixed top-8 left-8 md:left-[calc(50%-24rem)] z-10 p-3 bg-white rounded-full text-lumina-green shadow-lg hover:bg-lumina-terracotta hover:text-white transition-all group"
              >
                <ArrowLeft size={24} />
              </button>

              <div className="mb-12 text-center">
                <span className="text-lumina-terracotta text-xs uppercase tracking-widest mb-4 block">果园日记</span>
                <h1 className="font-serif text-4xl md:text-6xl text-lumina-green mb-6 leading-tight">
                  {selectedEntry.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-widest text-lumina-charcoal/40">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {selectedEntry.date}</span>
                  <span className="flex items-center gap-2"><User size={14} /> {selectedEntry.author}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedEntry.content?.map((block: any, idx: number) => (
                  <div key={idx} className="mb-10">
                    {block.type === 'text' && (
                      <p className="text-lumina-charcoal/80 text-lg leading-loose font-light">
                        {block.value}
                      </p>
                    )}
                    {block.type === 'heading' && (
                      <h2 className="font-serif text-2xl md:text-3xl text-lumina-green mt-12 mb-6">
                        {block.value}
                      </h2>
                    )}
                    {block.type === 'image' && (
                      <div className="my-12">
                        <img 
                          src={block.value} 
                          alt="Article content" 
                          className="w-full rounded-sm shadow-xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-20 pt-12 border-t border-lumina-stone/30 text-center">
                <p className="text-lumina-charcoal/50 text-sm italic mb-8">
                  感谢您关注光林果园的成长点滴。
                </p>
                <button 
                  onClick={() => setSelectedEntry(null)}
                  className="px-8 py-3 bg-lumina-green text-white rounded-full text-sm uppercase tracking-widest font-bold hover:bg-lumina-terracotta transition-colors"
                >
                  返回日记列表
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
