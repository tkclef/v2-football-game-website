import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { PlayerStats } from "@/components/player-stats"
import { Trailer } from "@/components/trailer"
import { Download } from "@/components/download"
import { Dedication } from "@/components/dedication"
import { Team } from "@/components/team"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Features />
      <PlayerStats />
      <Trailer />
      <Download />
      <Dedication />
      <Team />
      <Community />
      <Footer />
    </main>
  )
}
