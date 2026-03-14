import { useState } from 'react';
import { motion } from 'motion/react';
import { Tree, MOCK_TREES } from '@/data/mock';
import { Sprout, User } from 'lucide-react';

interface OrchardMapProps {
  onSelectTree: (tree: Tree) => void;
}

export function OrchardMap({ onSelectTree }: OrchardMapProps) {
  const [hoveredTree, setHoveredTree] = useState<string | null>(null);

  // Generate a grid of "plots"
  // Some are empty, some have trees, some are taken
  const grid = Array.from({ length: 24 }, (_, i) => {
    const tree = MOCK_TREES[i % MOCK_TREES.length];
    // Randomize status for visual variety
    const isTaken = i % 3 === 0;
    const isAvailable = !isTaken;
    
    return {
      id: `plot-${i}`,
      tree: isAvailable ? tree : null,
      isTaken,
      row: Math.floor(i / 6),
      col: i % 6
    };
  });

  return (
    <div className="w-full overflow-x-auto pb-12">
      <div className="min-w-[800px] p-12 bg-earth-100 rounded-3xl relative">
        {/* Farm Decorations */}
        <div className="absolute top-4 left-4 text-earth-400 font-serif italic text-2xl">Sector A</div>
        <div className="absolute top-4 right-4 flex gap-4 text-xs font-medium uppercase tracking-wider text-earth-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-leaf-500"></div> Available
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-earth-300"></div> Adopted
          </div>
        </div>

        {/* River Decoration */}
        <div className="absolute top-0 bottom-0 left-1/3 w-24 bg-blue-200/30 skew-x-12 blur-xl pointer-events-none z-0" />
        
        {/* Isometric-ish Grid */}
        <div className="grid grid-cols-6 gap-4 mt-12 transform rotate-1 relative z-10">
          {grid.map((plot, i) => (
            <motion.div
              key={plot.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative group perspective-500"
              onMouseEnter={() => plot.tree && setHoveredTree(plot.id)}
              onMouseLeave={() => setHoveredTree(null)}
              onClick={() => plot.tree && onSelectTree(plot.tree)}
            >
              <div 
                className={`
                  aspect-square rounded-2xl transition-all duration-300 
                  ${plot.isTaken 
                    ? 'bg-earth-200 cursor-not-allowed' 
                    : 'bg-white cursor-pointer hover:bg-leaf-100 hover:shadow-lg hover:-translate-y-2 border-2 border-transparent hover:border-leaf-300'
                  }
                  flex items-center justify-center relative
                `}
              >
                {plot.isTaken ? (
                  <div className="text-earth-400 flex flex-col items-center">
                    <User size={20} />
                    <span className="text-[10px] mt-1 font-medium">ADOPTED</span>
                  </div>
                ) : (
                  <div className="text-leaf-600">
                    <Sprout size={24} />
                  </div>
                )}

                {/* Tooltip */}
                {plot.tree && !plot.isTaken && hoveredTree === plot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white p-3 rounded-xl shadow-xl z-20 pointer-events-none"
                  >
                    <div className="text-xs font-medium text-leaf-600 mb-1">{plot.tree.type}</div>
                    <div className="font-serif text-lg leading-none mb-1">{plot.tree.name}</div>
                    <div className="text-xs text-earth-500">${plot.tree.price}/year</div>
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                  </motion.div>
                )}
              </div>
              
              {/* Shadow for depth */}
              {!plot.isTaken && (
                <div className="absolute inset-0 rounded-2xl bg-leaf-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 translate-y-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
