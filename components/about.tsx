"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gradient-green">
            About the Game
          </h2>

          <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-white/80 leading-relaxed mb-12">
            <span className="text-[#00FF88] font-semibold">V2</span> is where arcade intensity meets football passion.
            An endless runner that captures the heart of Nigerian football, honoring the legendary skills of{" "}
            <span className="text-[#FFD700] font-semibold">Victor Boniface</span> and{" "}
            <span className="text-[#FFD700] font-semibold">Victor Osimhen</span>. Sprint through dynamic stadiums, dodge
            obstacles, and score spectacular goals as you chase glory on the pitch.
          </p>

          {/* Mini timeline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex-1 max-w-xs">
              <div className="relative p-6 bg-gradient-to-br from-[#008753]/20 to-transparent border border-[#00FF88]/30 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl mb-2">🏃</div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-2">Street</h3>
                <p className="font-[family-name:var(--font-poppins)] text-sm text-white/70">Start your journey</p>
              </div>
            </div>

            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#00FF88] to-[#FFD700]" />
            <div className="md:hidden h-12 w-1 bg-gradient-to-b from-[#00FF88] to-[#FFD700]" />

            <div className="flex-1 max-w-xs">
              <div className="relative p-6 bg-gradient-to-br from-[#008753]/30 to-transparent border border-[#00FF88]/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl mb-2">🏟️</div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-2">Stadium</h3>
                <p className="font-[family-name:var(--font-poppins)] text-sm text-white/70">Rise to fame</p>
              </div>
            </div>

            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#00CFFF]" />
            <div className="md:hidden h-12 w-1 bg-gradient-to-b from-[#FFD700] to-[#00CFFF]" />

            <div className="flex-1 max-w-xs">
              <div className="relative p-6 bg-gradient-to-br from-[#FFD700]/20 to-transparent border border-[#FFD700]/50 rounded-2xl backdrop-blur-sm stadium-glow">
                <div className="text-4xl mb-2">⚽</div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#FFD700] mb-2">
                  Final Goal
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-sm text-white/70">Become a legend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
