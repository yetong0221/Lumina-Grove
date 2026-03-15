import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-lumina-green text-lumina-cream pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-3xl mb-6">Lumina Grove</h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              连接您与茂名的古老果园。一段关于光、土地与传承的旅程。
            </p>
            <div className="flex gap-4">
              <Instagram className="text-white/60 hover:text-white transition-colors cursor-pointer" size={20} />
              <Twitter className="text-white/60 hover:text-white transition-colors cursor-pointer" size={20} />
              <Facebook className="text-white/60 hover:text-white transition-colors cursor-pointer" size={20} />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-lumina-gold mb-8">探索</h3>
            <ul className="space-y-4 font-light text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">我们的果园</li>
              <li className="hover:text-white cursor-pointer transition-colors">认养计划</li>
              <li className="hover:text-white cursor-pointer transition-colors">果园日记</li>
              <li className="hover:text-white cursor-pointer transition-colors">可持续发展</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-lumina-gold mb-8">支持</h3>
            <ul className="space-y-4 font-light text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">帮助中心</li>
              <li className="hover:text-white cursor-pointer transition-colors">联系我们</li>
              <li className="hover:text-white cursor-pointer transition-colors">隐私政策</li>
              <li className="hover:text-white cursor-pointer transition-colors">服务条款</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-lumina-gold mb-8">订阅通讯</h3>
            <p className="text-white/60 font-light mb-6">
              接收季节性更新和丰收通知。
            </p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="电子邮箱地址" 
                className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full"
              />
              <button className="text-lumina-gold hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2024 Lumina Grove. 保留所有权利。</p>
          <div className="flex items-center gap-2">
            <span>茂名市农业农村局指导 华南农业大学茂名现代农业研究院指导</span>
            <span className="w-1 h-1 bg-lumina-gold rounded-full"></span>
            <span>中国广东</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
