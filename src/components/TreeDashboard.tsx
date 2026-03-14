import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tree, Season } from "@/data/mock";
import { Wind, Droplets, Thermometer, Leaf, Calendar, Award, Camera, Download } from "lucide-react";

interface TreeDashboardProps {
  tree: Tree;
  season: Season;
  onClose: () => void;
  onAdopt: () => void;
}

type Tab = 'monitor' | 'timeline' | 'certificate';

export function TreeDashboard({ tree, season, onClose, onAdopt }: TreeDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('monitor');

  const seasonConfig = {
    spring: { color: "bg-pink-100", text: "text-pink-900", accent: "bg-pink-500" },
    summer: { color: "bg-green-100", text: "text-green-900", accent: "bg-green-500" },
    autumn: { color: "bg-orange-100", text: "text-orange-900", accent: "bg-orange-500" },
    winter: { color: "bg-slate-100", text: "text-slate-900", accent: "bg-slate-500" },
  };

  const config = seasonConfig[season];

  const timelineEvents = [
    { date: 'Mar 15', title: 'Pruning Complete', status: 'completed' },
    { date: 'Apr 02', title: 'First Bloom', status: 'completed' },
    { date: 'May 10', title: 'Fruit Set', status: 'upcoming' },
    { date: 'Jun 20', title: 'Thinning', status: 'upcoming' },
    { date: 'Sep 15', title: 'Harvest Begins', status: 'upcoming' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-earth-50 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Side */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden bg-black">
          <motion.img
            key={tree.image || tree.imageUrl}
            src={tree.image || tree.imageUrl}
            alt={tree.name}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className={`absolute inset-0 mix-blend-overlay opacity-40 ${config.color}`} />
          
          {/* Live Cam Indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            LIVE CAM 01
          </div>

          {/* Season Overlay Effects */}
          <AnimatePresence mode="wait">
             {season === 'spring' && (
               <div className="absolute inset-0 pointer-events-none">
                 {[...Array(20)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="absolute w-2 h-2 bg-pink-200 rounded-full opacity-80"
                     initial={{ y: -20, x: Math.random() * 100 + "%" }}
                     animate={{ 
                       y: "100vh", 
                       x: `calc(${Math.random() * 100}% + ${Math.random() * 100 - 50}px)`,
                       rotate: 360 
                     }}
                     transition={{ 
                       duration: 5 + Math.random() * 5, 
                       repeat: Infinity, 
                       ease: "linear",
                       delay: Math.random() * 5
                     }}
                   />
                 ))}
               </div>
             )}
             {season === 'autumn' && (
               <div className="absolute inset-0 pointer-events-none">
                 {[...Array(15)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="absolute w-3 h-3 bg-orange-400 rounded-tl-none rounded-br-none rounded-xl opacity-80"
                     initial={{ y: -20, x: Math.random() * 100 + "%" }}
                     animate={{ 
                       y: "100vh", 
                       x: `calc(${Math.random() * 100}% + ${Math.random() * 100 - 50}px)`,
                       rotate: 360 
                     }}
                     transition={{ 
                       duration: 6 + Math.random() * 4, 
                       repeat: Infinity, 
                       ease: "linear",
                       delay: Math.random() * 5
                     }}
                   />
                 ))}
               </div>
             )}
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h2 className="text-3xl font-serif italic">{tree.name}</h2>
            <p className="text-sm opacity-90">{tree.location}</p>
          </div>
        </div>

        {/* Data Side */}
        <div className="w-full md:w-7/12 flex flex-col bg-earth-50">
          {/* Header */}
          <div className="p-6 border-b border-earth-200 flex justify-between items-center">
            <div className="flex gap-1 bg-earth-200/50 p-1 rounded-full">
              {(['monitor', 'timeline', 'certificate'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-white shadow-sm text-earth-900' 
                      : 'text-earth-600 hover:text-earth-900'
                  }`}
                >
                  {tab === 'monitor' && 'Live Monitor'}
                  {tab === 'timeline' && 'Season Timeline'}
                  {tab === 'certificate' && 'Certificate'}
                </button>
              ))}
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-earth-200 rounded-full transition-colors text-earth-500"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'monitor' && (
                <motion.div
                  key="monitor"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${config.color} ${config.text}`}>
                      Current Status: {tree.seasonData?.[season]?.status || 'Growing'}
                    </span>
                    <span className="text-xs text-earth-500 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Sensors Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-white rounded-2xl border border-earth-200 shadow-sm">
                      <div className="flex items-center gap-2 text-earth-500 mb-1">
                        <Thermometer className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Temp</span>
                      </div>
                      <p className="text-3xl font-serif">
                        {season === 'winter' ? '8°C' : season === 'summer' ? '28°C' : '18°C'}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-earth-200 shadow-sm">
                      <div className="flex items-center gap-2 text-earth-500 mb-1">
                        <Droplets className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Humidity</span>
                      </div>
                      <p className="text-3xl font-serif">
                        {season === 'summer' ? '45%' : '65%'}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-earth-200 shadow-sm">
                      <div className="flex items-center gap-2 text-earth-500 mb-1">
                        <Wind className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Wind</span>
                      </div>
                      <p className="text-3xl font-serif">12 <span className="text-base text-earth-400">km/h</span></p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-earth-200 shadow-sm">
                      <div className="flex items-center gap-2 text-earth-500 mb-1">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">CO2 Offset</span>
                      </div>
                      <p className="text-3xl font-serif">{tree.co2Offset} <span className="text-base text-earth-400">kg</span></p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-earth-500" />
                      Farmer's Note
                    </h4>
                    <div className="bg-white p-6 rounded-2xl border border-earth-200 italic text-earth-600 leading-relaxed relative">
                      <span className="absolute top-4 left-4 text-4xl text-earth-200 font-serif">"</span>
                      <p className="relative z-10 pl-4">
                        {tree.seasonData?.[season]?.description || 'The tree is doing well this season.'} We are checking the soil moisture daily to ensure optimal growth.
                      </p>
                      <div className="mt-4 flex items-center gap-3 pl-4">
                        <div className="w-8 h-8 rounded-full bg-earth-300 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${tree.farmerName || tree.farmer}`} alt={tree.farmerName || tree.farmer || ''} />
                        </div>
                        <span className="text-sm font-medium text-earth-900">{tree.farmerName || tree.farmer}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-2xl mb-6">Season Journey</h3>
                  <div className="relative pl-8 border-l border-earth-200 space-y-8">
                    {timelineEvents.map((event, i) => (
                      <div key={i} className="relative">
                        <div className={`absolute -left-[37px] w-4 h-4 rounded-full border-2 border-white ${
                          event.status === 'completed' ? 'bg-leaf-600' : 'bg-earth-300'
                        }`} />
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-medium text-earth-500 uppercase tracking-wider">{event.date}</span>
                            <h4 className={`text-lg font-medium ${event.status === 'completed' ? 'text-earth-900' : 'text-earth-400'}`}>
                              {event.title}
                            </h4>
                          </div>
                          {event.status === 'completed' && (
                            <span className="px-2 py-1 bg-leaf-100 text-leaf-800 text-xs rounded-md">Done</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'certificate' && (
                <motion.div
                  key="certificate"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white p-8 rounded-none shadow-lg border-8 border-double border-earth-200 max-w-sm w-full mb-6 relative">
                    <div className="absolute top-4 right-4 text-leaf-600 opacity-20">
                      <Award size={64} />
                    </div>
                    <h3 className="font-serif text-3xl text-earth-900 mb-2">Certificate of Adoption</h3>
                    <div className="w-16 h-px bg-earth-300 mx-auto mb-6" />
                    <p className="text-earth-600 text-sm mb-4">This certifies that</p>
                    <p className="font-serif text-xl text-earth-900 mb-4 italic">You</p>
                    <p className="text-earth-600 text-sm mb-4">are the proud guardian of</p>
                    <p className="font-serif text-2xl text-leaf-700 mb-6">{tree.name}</p>
                    <div className="text-xs text-earth-400 uppercase tracking-widest">CloudOrchard Official</div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-earth-900 text-white rounded-full hover:bg-earth-800 transition-colors">
                    <Download size={16} /> Download PDF
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-earth-200 bg-earth-50/50 backdrop-blur">
            <div className="flex justify-between items-center mb-4">
              <span className="text-earth-600">Annual Yield</span>
              <span className="font-serif text-xl">{tree.yield} kg</span>
            </div>
            <button 
              onClick={onAdopt}
              className="w-full py-4 bg-leaf-700 text-white rounded-xl hover:bg-leaf-800 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Adopt for ${tree.price}/year
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
