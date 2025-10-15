"use client"

import { Button } from "@/components/ui/button"
import { Play, Users } from "lucide-react"
import { useState } from "react"
import { TrailerModal } from "./trailer-modal"

export function Hero() {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Stadium background with fog effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#008753]/20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008753] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF88] rounded-full blur-[120px]" />
          </div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#00FF88 1px, transparent 1px), linear-gradient(90deg, #00FF88 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Runner silhouette with neon trail */}
          <div className="mb-8 flex justify-center">
            <div className="relative float-animation">
              <h1 className="font-[family-name:var(--font-orbitron)] text-[10rem] md:text-[16rem] lg:text-[20rem] font-black leading-none neon-glow">
                <span className="text-gradient-green">V2</span>
              </h1>
              {/* Motion trails */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00FF88] to-transparent opacity-60 blur-sm" />
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm translate-y-4" />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient-green">Run. Score.</span>
            <br />
            <span className="text-white gold-outline">Conquer the Field.</span>
          </h2>

          {/* Subline */}
          <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Two Victors. One Goal.
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-base md:text-lg text-[#FFD700] mb-12 italic max-w-4xl mx-auto">
            Inspired by Icons of Strength and Unity, Forged in the Heartbeat of Football.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => setShowTrailer(true)}
              className="stadium-glow bg-[#008753] hover:bg-[#00FF88] text-white font-[family-name:var(--font-orbitron)] font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Play Trailer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-[#FFD700] text-[#008753] border-2 border-[#FFD700] font-[family-name:var(--font-orbitron)] font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Join the League
            </Button>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-[#00FF88]/30 rounded-full">
            <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-white">
              Mobile • Coming to Android & iOS
            </span>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </section>

      <TrailerModal open={showTrailer} onOpenChange={setShowTrailer} />
    </>
  )
}
