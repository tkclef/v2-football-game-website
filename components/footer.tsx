export function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#00FF88]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and tagline */}
          <div className="text-center mb-8">
            <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-black text-gradient-green mb-2">V2</h3>
            <p className="font-[family-name:var(--font-poppins)] text-sm text-white/60 italic">
              Powered by Passion. Inspired by Nigeria.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#00FF88]" />
            <div className="w-2 h-2 bg-[#00FF88] rounded-full" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#00FF88]" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-[family-name:var(--font-poppins)] text-sm text-white/50">
              ©2025 XDegree Studios | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
