"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TrailerModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TrailerModal({ open, onOpenChange }: TrailerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl bg-[#0A0A0A] border-[#00FF88]">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white">
            V2 Official Trailer
          </DialogTitle>
          <DialogDescription className="font-[family-name:var(--font-poppins)] text-white/70">
            Experience the thrill of Nigerian football
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video bg-[#0A0A0A] rounded-lg overflow-hidden">
          {/* Placeholder for video - replace with actual video embed */}
          <div className="w-full h-full flex items-center justify-center">
            <img src="/v2-football-game-trailer-video-player.jpg" alt="V2 Trailer" className="w-full h-full object-cover" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
