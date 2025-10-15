import { Card } from "@/components/ui/card"

const team = [
  {
    name: "Tkclef Theonel",
    role: "Lead Developer, Programmer, 3D Artist & Modeler, Animator, Level Designer",
    image: "/game-developer-portrait.png",
  },
  {
    name: "Pius Biney",
    role: "UI/UX Designer, 2D Assets Designer, Level Designer",
    image: "/ui-designer-portrait.jpg",
  },
]

export function Team() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#008753]/10">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 text-white">
          The Team
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-lg text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Powered by passion, creativity, and cutting-edge game design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-gradient-to-br from-[#0A0A0A] to-[#008753]/10 border border-[#00FF88]/20 hover:border-[#00FF88] backdrop-blur-sm transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 text-center">
                <div className="mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-[#00FF88]/30 group-hover:border-[#00FF88] transition-colors duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-sm text-[#00FF88] leading-relaxed">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* xDegree Studio Logo */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#008753] to-[#00FF88] rounded-2xl mb-4">
                <span className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-white">XD</span>
              </div>
            </div>

            {/* Ziine Studio Logo */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl mb-4">
                <span className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-white">ZN</span>
              </div>
            </div>
          </div>

          <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-4">
            xDegree & Ziine Studios
          </h3>
          <p className="font-[family-name:var(--font-poppins)] text-white/70 leading-relaxed">
            At the intersection of AI, robotics, and creative game design, xDegree & Ziine Studios craft immersive
            experiences that push the boundaries of mobile gaming.
          </p>
        </div>
      </div>
    </section>
  )
}
