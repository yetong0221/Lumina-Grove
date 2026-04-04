import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, Gift, X, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { EmptyState } from '@/components/EmptyState';
import { Search } from 'lucide-react';

const PRODUCTS: Product[] = [
// ... existing products ...
  {
    id: 101,
    name: '季度鲜果订阅包',
    subtitle: 'Quarterly Fresh Fruit Subscription',
    price: 399,
    desc: '每个季度为您精选当季最优质的茂名鲜果，顺丰冷链直达。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%AD%A3%E5%BA%A6%E9%B2%9C%E6%9E%9C%E8%AE%A2%E9%98%85%E5%8C%85.jpg',
    details: '订阅我们的鲜果包，您将按季度收到来自茂名的顶级馈赠。春季荔枝、夏季龙眼、秋季芒果、冬季特色柑橘。每一份都代表了那个季节土地最纯粹的味道。',
    category: 'subscription'
  },
  {
    id: 102,
    name: '季度果干订阅包',
    subtitle: 'Quarterly Dried Fruit Subscription',
    price: 299,
    desc: '精选古法烘干果干，锁住原果精华，四季皆可品尝的甜蜜。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%9C%E5%B9%B2%E5%90%88%E9%9B%86.jpg',
    details: '订阅我们的果干包，您将收到包括荔枝干、龙眼干、芒果干等在内的多种精选果干。采用传统工艺，无添加，是您健康生活的甜蜜伴侣。',
    category: 'subscription'
  },
  {
    id: 1,
    name: '茂名鲜荔枝礼盒（5斤）',
    subtitle: 'Maoming Fresh Lychee Box',
    price: 188,
    desc: '核心产区清晨采摘，冷链直达，保留枝头初熟的清甜。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8C%82%E5%90%8D%E9%B2%9C%E8%8D%94%E6%9E%9D%E7%A4%BC%E7%9B%92.png',
    details: '我们的荔枝产自茂名核心产区，每一颗都经过人工精挑细选。清晨带露采摘，通过专业的冷链物流，在最短时间内送达您的手中，确保您能品尝到如在枝头般的鲜甜。',
    category: 'product'
  },
  {
    id: 2,
    name: '优质龙眼礼盒（5斤）',
    subtitle: 'Premium Longan Box',
    price: 120,
    desc: '肉厚核小，汁水丰盈，每一颗都蕴含着南国阳光的温暖。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E9%BE%99%E7%9C%BC%E5%B9%B2.jpg',
    details: '精选优质石硖龙眼，果肉晶莹剔透，口感爽脆，甜度适中。富含多种营养成分，是滋补身体、馈赠亲友的佳品。',
    category: 'product'
  },
  {
    id: 3,
    name: '四季混合水果箱（荔枝+龙眼）',
    subtitle: 'Four Seasons Mixed Fruit Box',
    price: 136,
    desc: '荔枝与龙眼的完美邂逅，一次品尝两种岭南风味。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%9B%9B%E5%AD%A3%E6%B7%B7%E5%90%88%E6%B0%B4%E6%9E%9C%E7%AE%B1.png',
    details: '集合了当季最优质的荔枝与龙眼，让您一次性体验岭南两大名果的魅力。精美包装，适合全家共享或作为高端商务礼赠。',
    category: 'product'
  },
  {
    id: 4,
    name: '茂名&熊出没定制主题礼盒',
    subtitle: 'Maoming & Boonie Bears Custom Box',
    price: 130,
    desc: '联名限量包装，内含精选果品与定制周边，送礼收藏佳品。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8C%82%E5%90%8D%E7%86%8A%E5%87%BA%E6%B2%A1IP%E5%AE%9A%E5%88%B6%E7%A4%BC%E7%9B%92.png',
    details: '跨界联名，将传统农业与现代潮流文化结合。礼盒内除了顶级鲜果，还包含限量版定制周边，极具收藏价值。',
    category: 'product'
  },
  {
    id: 5,
    name: '茂名高州桂圆肉礼盒',
    subtitle: 'Maoming Gaozhou Dried Longan Box',
    price: 158,
    desc: '传统古法烘焙，锁住原果精华，四季皆可品尝的甜蜜。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%A1%82%E5%9C%86%E8%82%89.jpg',
    details: '采用传统古法烘干工艺，不添加任何防腐剂，完美保留了水果的天然风味和营养。口感柔韧，甜而不腻，是办公室零食或茶歇的最佳选择。',
    category: 'product'
  },
  {
    id: 6,
    name: '沉香+水果组合周边礼盒',
    subtitle: 'Agarwood + Fruit Combo Box',
    price: 119,
    desc: '茂名特产沉香与顶级鲜果的奢华碰撞，尊享非凡品味。',
    image: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%B2%89%E9%A6%99%2B%E6%B0%B4%E6%9E%9C%E7%A4%BC%E7%9B%92.png',
    details: '将茂名两大国宝级特产——沉香与荔枝完美结合。礼盒包含高等级沉香线香及顶级鲜果，为您带来视觉、嗅觉与味觉的三重盛宴。',
    category: 'product'
  }
];

interface GroveProps {
  onShowToast: (message: string) => void;
}

export function Grove({ onShowToast }: GroveProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'subscription' | 'product'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    onShowToast(`已添加到购物车: ${product.name}`);
  };

  return (
    <div className="pt-12 min-h-screen bg-lumina-cream/60 relative">
      {/* Header */}
      <div className="px-6 mt-12 mb-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl text-lumina-green mb-4">光林市集</h1>
          <span className="text-lumina-terracotta text-sm uppercase tracking-[0.2em] mb-6 block font-medium">Lumina Market – 时令鲜果直购</span>
          <p className="text-lumina-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            通过直接购买茂名新鲜水果与周边，即可自然激活认养权益 · 支持本地果农
          </p>
        </motion.div>
      </div>

      {/* Search and Category Filter */}
      <div className="sticky top-0 z-40 bg-lumina-cream/90 backdrop-blur-md border-b border-lumina-stone/20 mb-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              {[
                { id: 'all', label: '全部' },
                { id: 'subscription', label: '季度订阅包' },
                { id: 'product', label: '商品' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 relative pb-4 ${
                    activeCategory === cat.id 
                      ? 'text-lumina-terracotta font-bold' 
                      : 'text-lumina-green/60 hover:text-lumina-green'
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-lumina-terracotta"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-lumina-green/30" size={18} />
              <input 
                type="text"
                placeholder="搜索好物..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-lumina-stone/20 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-terracotta/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-8 gap-y-8 md:gap-y-16">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 border border-lumina-stone/20 cursor-pointer"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-2 md:p-4 rounded-full text-lumina-green">
                      <Info size={18} md:size={24} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-3 md:p-8 flex flex-col flex-grow">
                  <div className="mb-2 md:mb-4">
                    <h3 className="font-serif text-sm md:text-2xl text-lumina-green mb-0.5 md:mb-1 line-clamp-1 md:line-clamp-none">{product.name}</h3>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-lumina-charcoal/40 line-clamp-1 md:line-clamp-none">{product.subtitle}</p>
                  </div>
                  
                  <p className="text-[10px] md:text-sm text-lumina-charcoal/70 font-light leading-snug md:leading-relaxed mb-4 md:mb-8 flex-grow line-clamp-2 md:line-clamp-none">
                    {product.desc}
                  </p>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-auto pt-3 md:pt-6 border-t border-lumina-stone/30 gap-2 md:gap-0">
                    <span className="text-sm md:text-xl font-serif text-lumina-terracotta">¥{product.price}</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-full md:w-auto flex items-center justify-center gap-1 md:gap-2 bg-lumina-green text-white px-3 md:px-6 py-2 md:py-3 rounded-full hover:bg-lumina-terracotta transition-colors duration-300 text-[10px] md:text-xs tracking-widest uppercase font-medium"
                    >
                      <ShoppingBag size={12} md:size={14} />
                      <span className="hidden md:inline">加入购物车</span>
                      <span className="md:hidden">加入</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState message="搜索无结果，好物正在赶来的路上..." />
        )}
      </div>

      {/* External Market Entry Point */}
      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lumina-green rounded-xl md:rounded-2xl p-4 md:p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
          <div className="relative z-10">
            <h3 className="font-serif text-xl md:text-4xl text-white mb-4 md:mb-6">探索更多时令好物</h3>
            <p className="text-white/70 max-w-xl mx-auto mb-6 md:mb-10 font-light leading-relaxed text-xs md:text-base">
              前往我们的精品分站，发现更多来自茂名的地道风物与精选农副产品。
            </p>
            <a 
              href="https://pomona-9dd.pages.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-lumina-gold text-lumina-green px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all duration-300 text-[10px] md:text-sm tracking-widest uppercase font-bold shadow-xl"
            >
              进入精品分站
              <ArrowRight size={14} md:size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-lumina-charcoal/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-lumina-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-lumina-green hover:bg-lumina-terracotta hover:text-white transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="md:w-1/2 h-[40vh] md:h-auto relative bg-white">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 relative overflow-hidden flex flex-col">
                <div className="flex-grow overflow-y-auto p-10 md:p-16 lg:p-20 relative">
                  <div className="max-w-md mx-auto md:mx-0 relative z-10">
                    {/* Background Illustration - Scrolls with content */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.15] -z-10 overflow-hidden">
                      <img 
                        src="https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%86%BC%E5%A4%AB%E4%BA%BA.png" 
                        alt="" 
                        className="w-[120%] h-[120%] object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  <span className="text-lumina-terracotta text-sm uppercase tracking-[0.2em] mb-4 block font-medium">Lumina Selection</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-lumina-green mb-4 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.2em] text-lumina-charcoal/40 mb-10">
                    {selectedProduct.subtitle}
                  </p>
                  
                  <div className="text-3xl font-serif text-lumina-terracotta mb-12 flex items-baseline gap-2">
                    <span className="text-xl">¥</span>{selectedProduct.price}
                  </div>

                  <div className="space-y-10">
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-lumina-green mb-4 pb-2 border-b border-lumina-stone/30 inline-block">
                        产品故事
                      </h4>
                      <p className="text-lumina-charcoal/70 font-light leading-relaxed text-lg">
                        {selectedProduct.details || selectedProduct.desc}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-lumina-green mb-4 pb-2 border-b border-lumina-stone/30 inline-block">
                        规格参数
                      </h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm text-lumina-charcoal/60 font-light">
                        <div>
                          <span className="block text-[10px] uppercase tracking-widest text-lumina-charcoal/40 mb-1">产地</span>
                          广东茂名核心产区
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase tracking-widest text-lumina-charcoal/40 mb-1">包装</span>
                          环保精美礼盒
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase tracking-widest text-lumina-charcoal/40 mb-1">配送</span>
                          顺丰冷链直达
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase tracking-widest text-lumina-charcoal/40 mb-1">储存</span>
                          建议 0-4℃ 冷藏
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="mt-16 pt-10 border-t border-lumina-stone/20 flex flex-col gap-4">
                    <button 
                      onClick={(e) => handleAddToCart(e, selectedProduct)}
                      className="w-full flex items-center justify-center gap-4 bg-lumina-green text-white py-5 rounded-full hover:bg-lumina-terracotta transition-all duration-500 text-sm tracking-widest uppercase font-bold shadow-xl"
                    >
                      <ShoppingBag size={20} />
                      加入购物车
                    </button>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="w-full py-4 text-lumina-charcoal/40 hover:text-lumina-green transition-colors text-xs uppercase tracking-widest"
                    >
                      继续浏览市集
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

