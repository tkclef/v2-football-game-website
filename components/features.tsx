"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Cloud, Zap, ShoppingBag, Shirt, Sparkles, Trophy } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Dynamic Stadiums",
    description: "Experience varying weather conditions and difficulty levels across stunning stadium environments.",
    color: "from-[#00CFFF] to-[#008753]",
  },
  {
    icon: Zap,
    title: "Realistic Football Physics",
    description: "Feel every sprint, slide, and goal with authentic football movement and ball physics.",
    color: "from-[#00FF88] to-[#008753]",
  },
  {
    icon: ShoppingBag,
    title: "Skill Upgrades & Shop",
    description: "Enhance your abilities and unlock new moves to dominate the field.",
    color: "from-[#FFD700] to-[#008753]",
  },
  {
    icon: Shirt,
    title: "Unlockable Jerseys & Shoes",
    description: "Collect iconic Nigerian jerseys and premium footwear to customize your runner.",
    color: "from-[#00FF88] to-[#00CFFF]",
  },
  {
    icon: Sparkles,
    title: "Power-ups & Combo System",
    description: "Chain moves together for massive combos and activate game-changing power-ups.",
    color: "from-[#FFD700] to-[#00FF88]",
  },
  {
    icon: Trophy,
    title: "Global Leaderboards",
    description: "Compete with players worldwide and prove you're the ultimate Nigerian runner.",
    color: "from-[#00CFFF] to-[#FFD700]",
  },
]

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#008753]/10">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 text-white">
          Gameplay Features
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-lg text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Every feature designed to bring the thrill of Nigerian football to your fingertips
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group relative p-6 bg-[#0A0A0A]/80 border-[#00FF88]/20 hover:border-[#00FF88] backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
                onMouseEnter={() => setSelectedFeature(index)}
                onMouseLeave={() => setSelectedFeature(null)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Pulse effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-[#00FF88]/5 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-[#008753] to-[#00FF88] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-3 group-hover:text-[#00FF88] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-[family-name:var(--font-poppins)] text-sm text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
