import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Music2, Twitter } from "lucide-react"

const socials = [
  { icon: MessageCircle, label: "Discord", color: "hover:bg-[#5865F2]" },
  { icon: Instagram, label: "Instagram", color: "hover:bg-[#E4405F]" },
  { icon: Music2, label: "TikTok", color: "hover:bg-[#000000]" },
  { icon: Twitter, label: "X", color: "hover:bg-[#000000]" },
]

export function Community() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008753]/10 to-[#0A0A0A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF88] rounded-full blur-[200px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            Join the <span className="text-gradient-green">V2 League</span>
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
            Connect with fellow players, share your best runs, and stay updated on the latest V2 news
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socials.map((social, index) => {
              const Icon = social.icon
              return (
                <button
                  key={index}
                  className={`group relative p-6 bg-white/5 border-2 border-[#00FF88]/30 hover:border-[#00FF88] rounded-2xl transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 stadium-glow" />
                  <Icon className="h-8 w-8 text-white relative z-10" />
                  <span className="sr-only">{social.label}</span>
                </button>
              )
            })}
          </div>

          {/* Discord CTA */}
          <div className="mb-12">
            <Button
              size="lg"
              className="stadium-glow bg-[#008753] hover:bg-[#00FF88] text-white font-[family-name:var(--font-orbitron)] font-bold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Join Discord Community
            </Button>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-[#008753]/20 to-transparent border border-[#00FF88]/30 rounded-2xl backdrop-blur-sm">
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-sm text-white/70 mb-6">
              Get exclusive updates, tips, and early access to new features
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-[#00FF88]/30 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FF88] transition-colors font-[family-name:var(--font-poppins)] text-sm"
              />
              <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0A] font-[family-name:var(--font-orbitron)] font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
