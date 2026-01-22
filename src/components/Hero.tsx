import { ArrowRight, Play } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20 overflow-hidden"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              AI-POWERED AUTOMATION AGENCY
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            Automate Your Business.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Scale Without Limits.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Elysium AI builds intelligent WhatsApp automations and workflows that turn conversations into conversions.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* PRIMARY CTA — CALENDLY */}
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                         rounded-xl font-semibold text-lg
                         shadow-[0_0_30px_rgba(59,130,246,0.5)]
                         hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]
                         transition-all duration-300 hover:scale-105
                         flex items-center gap-3"
            >
              Book a Free Automation Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href="https://www.instagram.com/elysium.ai_?igsh=c3A4Ymp5emZ2ZjFk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-md text-white
                         rounded-xl font-semibold text-lg
                         border border-white/10 hover:bg-white/10
                         transition-all duration-300 hover:scale-105
                         flex items-center gap-3"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </a>
          </div>

          <div className="pt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>100% Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Fast Setup & Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>WhatsApp API Experts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
