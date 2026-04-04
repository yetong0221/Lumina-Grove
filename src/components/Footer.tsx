import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer({ onChangeView }: { onChangeView?: (view: string) => void }) {
  return (
    <footer className="bg-lumina-green/90 text-lumina-cream pt-8 md:pt-24 pb-6 md:pb-12 px-6 w-full">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-12 mb-8 md:mb-20">
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-xl md:text-3xl mb-2 md:mb-6">Lumina Grove</h2>
            <p className="text-white/60 font-light leading-relaxed mb-4 md:mb-8 text-xs md:text-base">
              连接您与茂名的古老果园。一段关于光、土地与传承的旅程。
            </p>
            <div className="flex gap-4">
              <Instagram className="text-white/60 hover:text-white transition-colors cursor-pointer" size={16} md:size={20} />
              <Twitter className="text-white/60 hover:text-white transition-colors cursor-pointer" size={16} md:size={20} />
              <Facebook className="text-white/60 hover:text-white transition-colors cursor-pointer" size={16} md:size={20} />
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-lumina-gold mb-3 md:mb-8">探索</h3>
            <ul className="space-y-1.5 md:space-y-4 font-light text-white/80 text-[10px] md:text-base">
              <li onClick={() => onChangeView?.('home')} className="hover:text-white cursor-pointer transition-colors">我们的果园</li>
              <li onClick={() => onChangeView?.('adopt')} className="hover:text-white cursor-pointer transition-colors">认养计划</li>
              <li onClick={() => onChangeView?.('explore')} className="hover:text-white cursor-pointer transition-colors">探索</li>
              <li onClick={() => onChangeView?.('company-about')} className="hover:text-white cursor-pointer transition-colors">关于我们</li>
              <li className="hover:text-white cursor-pointer transition-colors">可持续发展</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-lumina-gold mb-3 md:mb-8">支持</h3>
            <ul className="space-y-1.5 md:space-y-4 font-light text-white/80 text-[10px] md:text-base">
              <li className="hover:text-white cursor-pointer transition-colors">帮助中心</li>
              <li className="hover:text-white cursor-pointer transition-colors">联系我们</li>
              <li className="hover:text-white cursor-pointer transition-colors">隐私政策</li>
              <li className="hover:text-white cursor-pointer transition-colors">服务条款</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-lumina-gold mb-3 md:mb-8">订阅通讯</h3>
            <p className="text-white/60 font-light mb-3 md:mb-6 text-[10px] md:text-base">
              接收季节性更新和丰收通知。
            </p>
            <div className="flex border-b border-white/20 pb-1.5">
              <input 
                type="email" 
                placeholder="电子邮箱地址" 
                className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full text-[10px] md:text-base"
              />
              <button className="text-lumina-gold hover:text-white transition-colors">
                <ArrowUpRight size={16} md:size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-[9px] md:text-xs text-white/40 uppercase tracking-widest text-center md:text-left">
          <p>© 2024 Lumina Grove. 保留所有权利。</p>
          <div className="flex flex-col md:flex-row items-center gap-1.5">
            <span>茂名市农业农村局指导 华南农业大学茂名现代农业研究院指导</span>
            <span className="hidden md:block w-1 h-1 bg-lumina-gold rounded-full"></span>
            <span>中国广东</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
