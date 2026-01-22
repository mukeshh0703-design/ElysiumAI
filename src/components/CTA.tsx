import { ArrowRight, Phone } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';
const PHONE_NUMBER = 'tel:+917075033013';

export default function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wide">
              READY TO TRANSFORM YOUR BUSINESS?
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Turn WhatsApp Into Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Best Sales Machine
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stop losing leads and start automating. Get a free consultation and discover how AI automation can 10x your business growth.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* PRIMARY CTA — CALENDLY */}
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                         rounded-xl font-bold text-lg
                         shadow-[0_0_40px_rgba(59,130,246,0.6)]
                         hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]
                         transition-all duration-300 hover:scale-105
                         flex items-center gap-3"
            >
              Get Your Free Automation Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* SECONDARY CTA — CALL */}
            <a
              href={PHONE_NUMBER}
              className="group relative px-10 py-5 bg-white/5 backdrop-blur-md text-white
                         rounded-xl font-bold text-lg
                         border-2 border-white/20
                         hover:bg-white/10 hover:border-blue-400/50
                         transition-all duration-300 hover:scale-105
                         flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Talk to an Automation Expert
            </a>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                10+
              </div>
              <div className="text-gray-400">Automations Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                98%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
