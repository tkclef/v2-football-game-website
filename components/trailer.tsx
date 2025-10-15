"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrailerModal } from "./trailer-modal"

export function Trailer() {
  const [showTrailer, setShowTrailer] = useState(false)

  const clips = [
    { title: "Sprint Action", image: "/football-player-running-fast-action.jpg" },
    { title: "Goal Kick", image: "/football-goal-kick-celebration.jpg" },
    { title: "Special Move", image: "/football-special-skill-move.jpg" },
  ]

  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#008753]/10">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 text-white">
            See V2 in Action
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg text-center text-white/70 mb-16 max-w-2xl mx-auto">
            Experience the intensity, speed, and glory of Nigerian football
          </p>

          {/* Main trailer */}
          <div className="max-w-5xl mx-auto mb-12">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#00FF88]/30 hover:border-[#00FF88] transition-all duration-300 cursor-pointer group stadium-glow"
              onClick={() => setShowTrailer(true)}
            >
              <img src="/v2-football-game-cinematic-trailer-thumbnail-niger.jpg" alt="V2 Game Trailer" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="stadium-glow bg-[#008753] hover:bg-[#00FF88] text-white font-[family-name:var(--font-orbitron)] font-bold text-xl px-12 py-8 rounded-full transition-all duration-300 group-hover:scale-110"
                >
                  <Play className="mr-3 h-8 w-8 fill-current" />
                  Watch Trailer
                </Button>
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-[#FFD700] text-[#0A0A0A] font-[family-name:var(--font-orbitron)] font-bold text-sm rounded-full">
                2:30
              </div>
            </div>
          </div>

          {/* Gameplay clips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clips.map((clip, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden border border-[#00FF88]/20 hover:border-[#00FF88] transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={clip.image || "/placeholder.svg"}
                  alt={clip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-white">{clip.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#00FF88]/90 flex items-center justify-center">
                    <Play className="h-6 w-6 text-[#0A0A0A] fill-current ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrailerModal open={showTrailer} onOpenChange={setShowTrailer} />
    </>
  )
}
