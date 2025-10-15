import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export function Download() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008753]/10 via-[#0A0A0A] to-[#0A0A0A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00FF88] rounded-full blur-[150px] animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#FFD700] rounded-full blur-[150px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            Ready to <span className="text-gradient-green">Run?</span>
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
            Download V2 and experience the thrill of Nigerian football on your mobile device
          </p>

          {/* Coming Soon with email capture */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700]/20 border border-[#FFD700] rounded-full mb-8">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
              <span className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-[#FFD700]">
                COMING SOON
              </span>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <p className="font-[family-name:var(--font-poppins)] text-white/70 mb-4">
                Be the first to know when V2 launches
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-[#00FF88]/30 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FF88] transition-colors font-[family-name:var(--font-poppins)]"
                />
                <Button className="stadium-glow bg-[#008753] hover:bg-[#00FF88] text-white font-[family-name:var(--font-orbitron)] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Notify Me
                </Button>
              </div>
            </div>
          </div>

          {/* Store buttons (disabled state) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-50">
            <Button
              size="lg"
              disabled
              className="bg-[#0A0A0A] border-2 border-white/20 text-white font-[family-name:var(--font-poppins)] font-semibold px-8 py-6 rounded-2xl cursor-not-allowed"
            >
              <Apple className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </Button>
            <Button
              size="lg"
              disabled
              className="bg-[#0A0A0A] border-2 border-white/20 text-white font-[family-name:var(--font-poppins)] font-semibold px-8 py-6 rounded-2xl cursor-not-allowed"
            >
              <Play className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">GET IT ON</div>
                <div className="text-lg">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
