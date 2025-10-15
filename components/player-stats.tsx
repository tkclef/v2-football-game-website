"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const players = [
  {
    name: "Victor Boniface",
    position: "Forward",
    jersey: "9",
    stats: {
      strength: 92,
      speed: 88,
      goals: 95,
      skill: 90,
    },
    image: "/victor-boniface-football-player-silhouette.jpg",
  },
  {
    name: "Victor Osimhen",
    position: "Striker",
    jersey: "11",
    stats: {
      strength: 90,
      speed: 94,
      goals: 98,
      skill: 92,
    },
    image: "/victor-osimhen-football-player-silhouette.jpg",
  },
]

export function PlayerStats() {
  const [hoveredPlayer, setHoveredPlayer] = useState<number | null>(null)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008753]/10 to-[#0A0A0A]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 text-gradient-green">
          Player Stats
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-lg text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Inspired by Nigeria's finest strikers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {players.map((player, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-gradient-to-br from-[#0A0A0A] to-[#008753]/20 border-2 border-[#FFD700]/30 hover:border-[#FFD700] backdrop-blur-sm cursor-pointer transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredPlayer(index)}
              onMouseLeave={() => setHoveredPlayer(null)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Player image */}
                <div className="mb-6 relative h-48 flex items-center justify-center">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {hoveredPlayer === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-24 h-24 border-4 border-[#FFD700] rounded-full animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
                    </div>
                  )}
                </div>

                {/* Player info */}
                <div className="text-center mb-6">
                  <h3 className="font-[family-name:var(--font-orbitron)] text-2xl md:text-3xl font-black text-white mb-2 gold-outline">
                    {player.name}
                  </h3>
                  <div className="flex items-center justify-center gap-4 text-[#00FF88]">
                    <span className="font-[family-name:var(--font-poppins)] font-semibold">{player.position}</span>
                    <span className="text-[#FFD700]">•</span>
                    <span className="font-[family-name:var(--font-orbitron)] font-bold text-xl">#{player.jersey}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  {Object.entries(player.stats).map(([stat, value]) => (
                    <div key={stat}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-white/80 uppercase tracking-wide">
                          {stat}
                        </span>
                        <span className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-[#FFD700]">
                          {value}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#008753] via-[#00FF88] to-[#FFD700] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: hoveredPlayer === index ? `${value}%` : "0%",
                            boxShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
