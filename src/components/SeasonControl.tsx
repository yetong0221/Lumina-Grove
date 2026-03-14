import React from 'react';
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sprout, Sun, CloudRain, Snowflake } from "lucide-react";
import { Season } from "@/data/mock";

interface SeasonControlProps {
  currentSeason: Season;
  setSeason: (season: Season) => void;
}

export function SeasonControl({ currentSeason, setSeason }: SeasonControlProps) {
  const seasons: { id: Season; label: string; icon: React.ElementType }[] = [
    { id: 'spring', label: 'Spring', icon: Sprout },
    { id: 'summer', label: 'Summer', icon: Sun },
    { id: 'autumn', label: 'Autumn', icon: CloudRain },
    { id: 'winter', label: 'Winter', icon: Snowflake },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel rounded-full p-2 flex items-center gap-2 shadow-xl">
        {seasons.map((season) => {
          const Icon = season.icon;
          const isActive = currentSeason === season.id;
          return (
            <button
              key={season.id}
              onClick={() => setSeason(season.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                isActive 
                  ? "bg-leaf-600 text-white shadow-lg" 
                  : "hover:bg-earth-200 text-earth-800"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className={cn("text-sm font-medium", isActive ? "block" : "hidden sm:block")}>
                {season.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeSeason"
                  className="absolute inset-0 rounded-full bg-leaf-600 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
