import { motion } from 'motion/react';
import { ChevronLeft, Calendar, User } from 'lucide-react';

interface ArticleDetailViewProps {
  onBack: () => void;
}

export function ArticleDetailView({ onBack }: ArticleDetailViewProps) {
  return (
    <div className="min-h-screen bg-lumina-cream pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85.png" 
          alt="Featured" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-20"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="absolute bottom-12 left-8 right-8 text-white z-10">
          <div className="inline-block bg-lumina-gold/80 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest mb-4">
            编辑精选
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            荔枝嫁接的古老艺术
          </h1>
          <p className="text-white/80 text-lg font-light mb-6">
            茂名林师傅的五代传承，只为那一口极致的甜
          </p>
          
          <div className="flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>2024年4月2日</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>编辑团队</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-8 py-12 space-y-8">
        <div className="prose prose-lg prose-lumina">
          <p className="text-xl leading-relaxed text-lumina-charcoal/90 font-light italic border-l-4 border-lumina-gold pl-6 mb-12">
            茂名高州根子镇，柏桥村的荔枝林里，林师傅弯着腰，手起刀落间，一棵百年老树的基因正被小心翼翼地嫁接进新的生命。这一刀，已经在他的家族中传了五代。
          </p>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">柏桥村的清晨，一把嫁接刀划开百年前史</h2>
          <p className="font-light leading-relaxed mb-8">
            四月清晨五点，茂名高州根子镇的薄雾还未散去，柏桥村的荔枝林里已经有人影晃动。
          </p>
          <p className="font-light leading-relaxed mb-8">
            林师傅蹲在一棵荔枝树前，从工具包里摸出一把磨得发亮的嫁接刀。刀身很薄，刀口斜斜的，像一片柳叶。这把刀是他爷爷的爷爷传下来的，刀柄换过几回，刀刃还是当年的钢火。
          </p>
          <p className="font-light leading-relaxed mb-8">
            “我太公那辈就在根子镇做嫁接，传到我这里，一百多年了。”林师傅今年五十三岁，手掌粗糙得像荔枝树皮，但握刀的手却稳得出奇。他说，这片土地种荔枝的历史有一千多年，他家做嫁接的历史，也快两百年了。
          </p>

          <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85.png" 
              alt="林师傅" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-sm text-gray-400 py-4 bg-white">林师傅在查看古荔枝树</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">“白糖罂”的祖宗树，就在我们村</h2>
          <p className="font-light leading-relaxed mb-8">
            茂名是中国荔枝之乡，高州根子镇更是荔枝名镇。这里的“白糖罂”“妃子笑”“桂味”，个个有名有姓，有来有去。
          </p>
          <p className="font-light leading-relaxed mb-8">
            “你们吃的‘白糖罂’，最正宗的祖宗树就在我们村。”林师傅指着不远处的古荔枝林，语气里带着点骄傲。他说，一棵好荔枝树的诞生，不是靠种子，而是靠嫁接。把最甜品种的枝条，接到根系发达的砧木上，才能保住好味道。
          </p>
          <p className="font-light leading-relaxed mb-8">
            “实生苗长出来的荔枝，十棵十个味，酸的涩的小的都有。嫁接苗，一棵树结出来的果，个个都一样甜。”林师傅说，这就是他们家五代人一直在做的事——为最甜美的果实，打下最坚实的根基。
          </p>

          <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AB%81%E6%8E%A5%E4%B8%AD.png" 
              alt="嫁接中" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-sm text-gray-400 py-4 bg-white">精细的嫁接过程</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">嫁接不是绑绑就行，要讲火候讲时辰</h2>
          <p className="font-light leading-relaxed mb-8">
            很多人以为嫁接就是把两根树枝绑在一起。林师傅听了直摇头：“哪有那么简单。”
          </p>
          <p className="font-light leading-relaxed mb-8">
            选砧木要看根系壮不壮，选接穗要挑去年生的向阳枝。削的时候要一刀成，切面要平得像镜子，形成层要对得严丝合缝，绑的时候松紧要像系鞋带——太松不活，太紧勒死。
          </p>
          <p className="font-light leading-relaxed mb-8">
            “嫁接还要看时辰。”林师傅说，根子镇的老辈人传下来，嫁接最好在清晨太阳出来前，或者傍晚太阳落山后。那时候树液流动慢，伤口不容易流胶，成活率高。
          </p>
          <p className="font-light leading-relaxed mb-8">
            他说，现在的年轻人不懂这些，拿着刀就削，削完就绑，不管时辰不管天气，活不活全靠运气。“我们那时候学嫁接，跟着太公在荔枝林里蹲了三年，才让碰刀。”
          </p>

          <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AB%81%E6%8E%A5%E5%90%8E.png" 
              alt="嫁接后" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-sm text-gray-400 py-4 bg-white">嫁接完成后的新芽</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">一千多年的荔枝古树，还在结果</h2>
          <p className="font-light leading-relaxed mb-8">
            茂名高州根子镇，有一片古荔枝林，最老的树龄超过一千五百年，至今还在结果。
          </p>
          <p className="font-light leading-relaxed mb-8">
            林师傅每年都要去那片古林看看。“那些老祖宗留下来的树，是我们的活教材。”他说，有些古树结的果已经不大了，但它们的根系还在，基因还在。把古树的枝条嫁接出去，就等于把千年前的甜，延续到今天。
          </p>
          <p className="font-light leading-relaxed mb-8">
            这些年，林师傅嫁接过的荔枝树，多得他自己都数不清。但他记得最清楚的，是几棵濒临死亡的老树。“有一棵三百多年的‘黑叶’，主干都空了，只剩半边皮活着。我用它的枝条嫁接了二十多棵小苗，现在都挂果了。”林师傅说这话时，眼睛里有光。
          </p>

          <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E6%9C%9B%E6%9E%9C%E6%A0%91.png" 
              alt="林师傅望果树" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-sm text-gray-400 py-4 bg-white">林师傅守护着古树的传承</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">村里的年轻人，愿意学的越来越少了</h2>
          <p className="font-light leading-relaxed mb-8">
            根子镇家家户户种荔枝，但愿意学嫁接的年轻人，越来越少。
          </p>
          <p className="font-light leading-relaxed mb-8">
            “嫁接要弯腰，一弯就是一天，腰酸背痛。要晒太阳，晒得比荔枝皮还黑。要磨性子，一刀下去不对，就废了。”林师傅说，他儿子在城里打工，一个月挣五六千，不愿意回来。“我也不强求，这活确实苦。”
          </p>
          <p className="font-light leading-relaxed mb-8">
            去年，有个从东莞回来的年轻人找上门，说想学嫁接，回家种荔枝。林师傅教了三个月，年轻人学得不错。“他有文化，学得快，就是坐不住，老想用手机查资料，看视频。”林师傅说，嫁接这东西，视频上看一百遍，不如自己削一刀。
          </p>
          <p className="font-light leading-relaxed mb-8">
            他不知道那个年轻人现在还在不在种荔枝，但他说，只要有人愿意学，他就愿意教。
          </p>

          <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%97%E5%B8%88%E5%82%85%E4%B8%8E%E5%B9%B4%E8%BD%BB%E4%BA%BA.png" 
              alt="林师傅与年轻人" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-sm text-gray-400 py-4 bg-white">林师傅在传授嫁接技艺</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-lumina-green mt-12 mb-6">柏桥村的荔枝，今年的花很好</h2>
          <p className="font-light leading-relaxed mb-8">
            四月的柏桥村，荔枝树已经挂满了小小的果胎。林师傅站在自家果园的山坡上，看着漫山遍野的荔枝林，说了一句：“今年的花很好。”
          </p>
          <p className="font-light leading-relaxed mb-8">
            他说的“花很好”，意味着今年的荔枝会大年，会丰收，会很甜。
          </p>
          <p className="font-light leading-relaxed mb-8">
            这些甜，有一部分是他的功劳。那些他嫁接过的树，正在把最好的基因，输送给夏天的果实。
          </p>
          <p className="text-xl font-serif text-lumina-green italic text-center py-12">
            “你们六月份来，我请你们吃荔枝。”林师傅笑着说。
          </p>
        </div>
      </div>
    </div>
  );
}
