export function Dedication() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#FFD700]/5 to-[#0A0A0A]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-black text-center mb-16 text-gradient-gold">
            A Tribute to Excellence
          </h2>

          {/* Player tributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-500">
                <img
                  src="/victor-boniface-portrait-silhouette-dramatic-light.jpg"
                  alt="Victor Boniface"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-white mb-2 gold-outline">
                    Victor Boniface
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[#FFD700] font-semibold">The Powerhouse</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-500">
                <img
                  src="/victor-osimhen-portrait-silhouette-dramatic-lighti.jpg"
                  alt="Victor Osimhen"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-white mb-2 gold-outline">
                    Victor Osimhen
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[#FFD700] font-semibold">The Speedster</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dedication text */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl text-white/90 leading-relaxed italic">
              "Dedicated to the Nigerian stars who inspire every goal and every run."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FFD700]" />
              <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FFD700]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
