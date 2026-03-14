import { motion } from 'motion/react';
import { Sun, Cloud, CloudRain, TrendingUp, Info, Sprout, Leaf } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const data = [
  { year: 'Year 1', optimistic: 200, normal: 150, pessimistic: 100, label: 'Early Fruiting' },
  { year: 'Year 2', optimistic: 400, normal: 300, pessimistic: 200, label: 'Early Fruiting' },
  { year: 'Year 3', optimistic: 900, normal: 600, pessimistic: 360, label: 'Golden Years' },
  { year: 'Year 4', optimistic: 950, normal: 620, pessimistic: 380, label: 'Golden Years' },
  { year: 'Year 5', optimistic: 920, normal: 610, pessimistic: 370, label: 'Golden Years' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md p-4 border border-lumina-green/10 shadow-xl rounded-lg text-xs">
        <p className="font-serif text-lumina-green font-bold mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-emerald-600 font-medium flex justify-between gap-4">
            <span>乐观 (Optimistic):</span>
            <span>¥{payload[2].value}</span>
          </p>
          <p className="text-lumina-green font-medium flex justify-between gap-4">
            <span>正常 (Normal):</span>
            <span>¥{payload[1].value}</span>
          </p>
          <p className="text-amber-500 font-medium flex justify-between gap-4">
            <span>保守 (Pessimistic):</span>
            <span>¥{payload[0].value}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function HarvestYieldChart() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-lumina-green mb-2">你的茂名荔枝树 · 预计季产收益</h2>
          <p className="text-lumina-charcoal/60 font-light tracking-wide text-sm uppercase">Expected Harvest Value per Adopted Tree (One Season)</p>
        </div>

        <div className="relative bg-lumina-stone/10 rounded-3xl p-6 md:p-12 border border-lumina-green/5 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lumina-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Visual Tree Representation (4 cols) */}
            <div className="lg:col-span-4 relative h-[400px] lg:h-[500px] flex items-center justify-center">
               <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                  <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" 
                    alt="Mature Lychee Tree" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Sprout size={16} className="text-lumina-gold" />
                      <span className="text-xs font-bold uppercase tracking-widest">Mature Grafted Tree</span>
                    </div>
                    <p className="font-serif text-2xl">茂名古树</p>
                  </div>
               </div>
            </div>

            {/* Right: Chart & Data (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Chart Container */}
              <div className="h-[350px] w-full bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-lumina-green/5 shadow-sm">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0F3D2A" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0F3D2A" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPessimistic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      tickFormatter={(value) => `¥${value}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    
                    <Area 
                      type="monotone" 
                      dataKey="pessimistic" 
                      stackId="1" 
                      stroke="#F59E0B" 
                      fill="url(#colorPessimistic)" 
                      strokeWidth={2}
                      name="Pessimistic"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="normal" 
                      stackId="2" 
                      stroke="#0F3D2A" 
                      fill="url(#colorNormal)" 
                      strokeWidth={2}
                      name="Normal"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="optimistic" 
                      stackId="3" 
                      stroke="#10B981" 
                      fill="url(#colorOptimistic)" 
                      strokeWidth={2}
                      name="Optimistic"
                    />
                    
                    {/* Annotations */}
                    <ReferenceLine x="Year 3" stroke="#D4B78F" strokeDasharray="3 3">
                      <Label value="Golden Years Start" position="top" fill="#D4B78F" fontSize={10} />
                    </ReferenceLine>
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Legend / Scenarios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-emerald-600">
                    <Sun size={16} />
                    <span className="font-bold text-sm">乐观 (Optimistic)</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif text-lumina-green">¥900</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+180%</span>
                  </div>
                  <p className="text-[10px] text-lumina-charcoal/50">45斤/树 · 阳光充足</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-lumina-green/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-lumina-green">
                    <Leaf size={16} />
                    <span className="font-bold text-sm">正常 (Normal)</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif text-lumina-green">¥600</span>
                    <span className="text-xs font-bold text-lumina-green bg-lumina-green/5 px-1.5 py-0.5 rounded">+120%</span>
                  </div>
                  <p className="text-[10px] text-lumina-charcoal/50">30斤/树 · 标准气候</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-amber-500">
                    <CloudRain size={16} />
                    <span className="font-bold text-sm">保守 (Pessimistic)</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif text-lumina-green">¥360</span>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">72%</span>
                  </div>
                  <p className="text-[10px] text-lumina-charcoal/50">18斤/树 · 极端天气</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-lumina-green/5">
                 <div className="flex items-center gap-2 text-lumina-charcoal/40">
                    <Info size={12} />
                    <p className="text-[10px]">
                      基于2025-2026茂名农业局+市场数据。实际以实拍为准。
                    </p>
                 </div>
                 <div className="flex items-center gap-2 text-lumina-green bg-lumina-green/5 px-3 py-1.5 rounded-full">
                    <TrendingUp size={12} />
                    <span className="text-[10px] font-bold">第19年可获丰收奖金</span>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
