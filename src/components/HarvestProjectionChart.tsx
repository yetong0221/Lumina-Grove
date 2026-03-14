import { Sun, Cloud, CloudRain, Info } from 'lucide-react';
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from 'recharts';

const data = [
  { name: '第1年', optimistic: 10, normal: 8, pessimistic: 5, phase: 'Early' },
  { name: '第2年', optimistic: 20, normal: 15, pessimistic: 10, phase: 'Early' },
  { name: '第3年', optimistic: 45, normal: 30, pessimistic: 18, phase: 'Golden' },
  { name: '第4年', optimistic: 48, normal: 32, pessimistic: 19, phase: 'Golden' },
  { name: '第5年', optimistic: 50, normal: 35, pessimistic: 20, phase: 'Golden' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-4 border border-stone-200 shadow-xl rounded-sm text-xs font-sans">
        <p className="font-bold text-stone-800 mb-2 border-b border-stone-100 pb-1">{label}</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-4 text-emerald-600">
            <span className="flex items-center gap-1"><Sun size={10} /> 乐观情景</span>
            <span className="font-mono font-bold">{payload.find((p: any) => p.dataKey === 'optimistic')?.value} 斤</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-green-800">
            <span className="flex items-center gap-1"><Cloud size={10} /> 正常情景</span>
            <span className="font-mono font-bold">{payload.find((p: any) => p.dataKey === 'normal')?.value} 斤</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-amber-600">
            <span className="flex items-center gap-1"><CloudRain size={10} /> 保守情景</span>
            <span className="font-mono font-bold">{payload.find((p: any) => p.dataKey === 'pessimistic')?.value} 斤</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function HarvestProjectionChart() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-2 tracking-tight">
            你的茂名荔枝树 · 预计季产趋势
          </h2>
          <p className="text-stone-500 font-light text-sm tracking-wide uppercase font-sans">
            One Tree · 5-Year Harvest Projection (Actual yield based on real-time photos)
          </p>
        </div>

        {/* Chart Container */}
        <div className="w-full h-[500px] bg-white border border-stone-100 rounded-sm p-4 md:p-8 relative">
          
          {/* Phase Labels (Absolute positioning for cleaner look over chart) */}
          <div className="absolute top-4 left-16 md:left-24 text-xs font-sans text-stone-400 uppercase tracking-widest">
            早期建立期 (Early Growth)
          </div>
          <div className="absolute top-4 right-16 md:right-32 text-xs font-sans text-stone-400 uppercase tracking-widest">
            成熟丰产期 (Golden Harvest)
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 40, right: 20, left: 0, bottom: 20 }}
            >
              <defs>
                <linearGradient id="gradOptimistic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="gradNormal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#166534" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#166534" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="gradPessimistic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
              
              <XAxis 
                dataKey="name" 
                axisLine={{ stroke: '#a8a29e' }} 
                tickLine={false}
                tick={{ fill: '#57534e', fontSize: 12, fontFamily: 'sans-serif' }}
                dy={10}
              />
              
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#a8a29e', fontSize: 11, fontFamily: 'sans-serif' }}
                domain={[0, 60]}
                unit=" 斤"
              />

              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

              {/* Golden Years Reference Line */}
              <ReferenceLine x="第3年" stroke="#d6d3d1" strokeDasharray="4 4" segment={[{x: '第3年', y: 0}, {x: '第3年', y: 60}]}>
                <Label 
                  value="Golden Years 开始 · 稳定高产期" 
                  position="top" 
                  offset={10}
                  fill="#78716c" 
                  fontSize={11}
                  fontWeight={500}
                />
              </ReferenceLine>

              {/* Areas (Confidence Bands) */}
              <Area type="monotone" dataKey="optimistic" stroke="none" fill="url(#gradOptimistic)" />
              <Area type="monotone" dataKey="normal" stroke="none" fill="url(#gradNormal)" />
              <Area type="monotone" dataKey="pessimistic" stroke="none" fill="url(#gradPessimistic)" />

              {/* Bars (Grouped) */}
              <Bar dataKey="pessimistic" name="保守情景" barSize={12} fill="#F59E0B" radius={[2, 2, 0, 0]} />
              <Bar dataKey="normal" name="正常情景" barSize={12} fill="#166534" radius={[2, 2, 0, 0]} />
              <Bar dataKey="optimistic" name="乐观情景" barSize={12} fill="#10B981" radius={[2, 2, 0, 0]} />

            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Legend & Footnote */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stone-100 pt-6">
          
          {/* Legend */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
                乐观情景 <Sun size={10} className="text-emerald-500" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-800"></span>
              <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
                正常情景 <Cloud size={10} className="text-green-800" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
                保守情景 <CloudRain size={10} className="text-amber-500" />
              </span>
            </div>
          </div>

          {/* Footnote */}
          <div className="flex items-center gap-2 text-stone-400">
            <Info size={12} />
            <p className="text-[10px] font-sans tracking-tight">
              基于2025-2026茂名农业局+市场真实数据 · 实际以树实拍为准 · 非收益承诺
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
